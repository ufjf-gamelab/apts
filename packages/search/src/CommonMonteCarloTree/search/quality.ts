import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";

import type { TreeNode } from "../TreeNode.js";

import { expandTree } from "./search.js";

const MINIMUM_QUALITY_OF_MOVE = 0;

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
>({
  treeNode,
}: {
  treeNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
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
        qualityOfMoves[indexOfMove] = child.getQualityOfMatch();
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
  explorationCoefficient,
  quantityOfExpansions,
  random,
  state,
}: Pick<
  Parameters<
    typeof expandTree<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  "explorationCoefficient" | "quantityOfExpansions" | "random" | "state"
>) => {
  const rootNode = expandTree<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({
    explorationCoefficient,
    quantityOfExpansions,
    random,
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
  let sumOfQualityOfMoves = 0;
  let minimumQualityOfMove = Infinity;
  const qualityOfEachValidMove = qualitiesOfMoves.reduce<
    [IndexOfMove, QualityOfMove][]
  >((accumulator, qualityOfMove, indexOfMove) => {
    if (indexesOfValidMoves.has(indexOfMove)) {
      minimumQualityOfMove = Math.min(minimumQualityOfMove, qualityOfMove);
      accumulator.push([indexOfMove, qualityOfMove]);
    }
    return accumulator;
  }, []);

  const positiveQualityOfMoves = qualityOfEachValidMove.map(
    ([indexOfValidMove, qualityOfMove]) => {
      const positiveQualityOfMove =
        qualityOfMove +
        Math.abs(minimumQualityOfMove) +
        DEFAULT_FOR_EXPONENTIATION;
      sumOfQualityOfMoves += positiveQualityOfMove;
      return [indexOfValidMove, positiveQualityOfMove] as const;
    },
  );

  let sumOfExponentiatedQualities = 0;
  const exponentiatedQualities = positiveQualityOfMoves.map(
    ([indexOfValidMove, qualityOfMove]) => {
      const normalizedQualityOfMove = assertNumberIsFinite(
        qualityOfMove / sumOfQualityOfMoves,
      );
      const exponent = assertNumberIsFinite(
        normalizedQualityOfMove / softeningCoefficient,
      );
      const exponentiatedQualityOfMove = assertNumberIsFinite(
        Math.exp(exponent),
        DEFAULT_FOR_EXPONENTIATION,
      );
      sumOfExponentiatedQualities += exponentiatedQualityOfMove;
      return [indexOfValidMove, exponentiatedQualityOfMove] as const;
    },
  );

  const probabilities = exponentiatedQualities.map(
    ([indexOfValidMove, exponentiatedQuality]) => {
      const probability = assertNumberIsFinite(
        exponentiatedQuality / sumOfExponentiatedQualities,
      );
      return [indexOfValidMove, probability] as const;
    },
  );

  return new Map(probabilities);
};

export type { QualityOfMove, SofteningCoefficient };
export {
  calculateProbabilityOfPlayingEachMove,
  calculateQualityOfMoves,
  MINIMUM_PROBABILITY_OF_PLAYING_MOVE,
  predictQualityOfMoves,
};
