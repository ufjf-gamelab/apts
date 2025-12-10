import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";

import type { Search } from "./MonteCarloTree/Search.js";
import type { TreeNode } from "./MonteCarloTree/TreeNode.js";

const MINIMUM_QUALITY_OF_MOVE = Number.NEGATIVE_INFINITY;

type QualityOfMove = number;

const calculateQualityOfMoves = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  treeNode,
}: {
  treeNode: GenericTreeNode;
}): QualityOfMove[] => {
  const game = treeNode.getState().getGame();
  const qualityOfMoves = new Array<QualityOfMove>(
    game.getQuantityOfMoves(),
  ).fill(MINIMUM_QUALITY_OF_MOVE);

  treeNode
    .getChildrenNodes()
    .entries()
    .forEach(([indexOfMove, child]) => {
      if (child !== null) {
        qualityOfMoves[indexOfMove] = child.getQuality();
      }
    });

  return qualityOfMoves;
};

const predictQualityOfMoves = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSearch extends Search<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  search,
  state,
}: Pick<Parameters<GenericSearch["expandTree"]>[0], "state"> & {
  search: GenericSearch;
}) => {
  const rootNode = search.expandTree({
    state,
  });

  return calculateQualityOfMoves({
    treeNode: rootNode,
  });
};

const DEFAULT_FOR_EXPONENTIATION = 1;
const MINIMUM_PROBABILITY_OF_PLAYING_MOVE = 0;

type SofteningCoefficient = number;

const calculateProbabilityOfPlayingEachMove = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  indexesOfValidMoves,
  qualitiesOfMoves,
  softeningCoefficient,
}: {
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
  qualitiesOfMoves: QualityOfMove[];
  softeningCoefficient: SofteningCoefficient;
}): ReadonlyMap<IndexOfMove, number> => {
  let maximumQualityOfMove = -Infinity;

  const qualityOfEachValidMove = qualitiesOfMoves.reduce<
    [IndexOfMove, QualityOfMove][]
  >((accumulator, qualityOfMove, indexOfMove) => {
    if (indexesOfValidMoves.has(indexOfMove)) {
      maximumQualityOfMove = Math.max(maximumQualityOfMove, qualityOfMove);
      accumulator.push([indexOfMove, qualityOfMove]);
    }
    return accumulator;
  }, []);

  let sumOfExponentiatedQualities = 0;
  const exponentiatedQualities = qualityOfEachValidMove.map(
    ([indexOfValidMove, qualityOfMove]) => {
      const notPositiveQualityOfMove = assertNumberIsFinite(
        qualityOfMove - maximumQualityOfMove,
      );
      const exponent = assertNumberIsFinite(
        notPositiveQualityOfMove / softeningCoefficient,
      );
      const exponentiatedQualityOfMove = assertNumberIsFinite(
        Math.exp(exponent),
        DEFAULT_FOR_EXPONENTIATION,
      );
      sumOfExponentiatedQualities += exponentiatedQualityOfMove;
      return [indexOfValidMove, exponentiatedQualityOfMove] as const;
    },
  );

  const probabilities = new Map(
    exponentiatedQualities.map(([indexOfValidMove, exponentiatedQuality]) => {
      const probability = assertNumberIsFinite(
        exponentiatedQuality / sumOfExponentiatedQualities,
      );
      return [indexOfValidMove, probability] as const;
    }),
  );

  return probabilities;
};

export type { QualityOfMove, SofteningCoefficient };
export {
  calculateProbabilityOfPlayingEachMove,
  calculateQualityOfMoves,
  MINIMUM_PROBABILITY_OF_PLAYING_MOVE,
  predictQualityOfMoves,
};
