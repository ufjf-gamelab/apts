import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import { TreeNode } from "./TreeNode.js";

const MINIMUM_QUALITY_OF_MOVE = 0;

type ExplorationCoefficient = number;
type QualityOfMove = number;

const pickNotFullyExpandedNode = <
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
  rootNode,
}: {
  explorationCoefficient: ExplorationCoefficient;
  rootNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}) => {
  let currentNode = rootNode;

  // Goes all the way down to a node that is not fully expanded at the bottom of the tree.
  while (currentNode.isFullyExpanded()) {
    const bestChild = currentNode.selectBestChildNode({
      explorationCoefficient,
    });
    if (bestChild === null) {
      // This condition happens when a selected child has not any valid move.
      return null;
    }

    currentNode = bestChild;
  }

  return currentNode;
};

const expandTree = <
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
  state,
}: {
  explorationCoefficient: ExplorationCoefficient;
  quantityOfExpansions: Integer;
  state: GenericState;
}): TreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => {
  const game = state.getGame();

  const rootNode = TreeNode.create<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({ indexOfPlayedMove: null, state });

  for (
    let currentSearchIndex = 0;
    currentSearchIndex < quantityOfExpansions;
    currentSearchIndex += INCREMENT_ONE
  ) {
    const currentNode = pickNotFullyExpandedNode({
      explorationCoefficient,
      rootNode,
    });
    if (currentNode === null) {
      // This condition happens when there is not any node to expand, so the search has to end.
      break;
    }

    const currentState = currentNode.getState();
    const isFinal = game.isFinal({ state: currentState });

    if (isFinal) {
      const score = currentState.getScore();
      currentNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    } else {
      const indexOfChild = currentNode.pickIndexOfRandomNotExpandedChildNode();
      const childNode = currentNode.expand({ indexOfMove: indexOfChild });
      const score = childNode.simulateMatch();
      childNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    }
  }

  return rootNode;
};

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
  rootNode,
}: {
  rootNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): QualityOfMove[] => {
  const game = rootNode.getState().getGame();
  let qualityOfMoves = new Array<QualityOfMove>(game.getQuantityOfMoves()).fill(
    MINIMUM_QUALITY_OF_MOVE,
  );

  rootNode
    .getChildrenNodes()
    .entries()
    .forEach(([indexOfMove, child]) => {
      if (child !== null) {
        qualityOfMoves[indexOfMove] = child.getQuantityOfVisits();
      }
    });

  const sumOfQualityOfMoves = qualityOfMoves.reduce<QualityOfMove>(
    (accumulator, qualityOfMove) => qualityOfMove + accumulator,
    MINIMUM_QUALITY_OF_MOVE,
  );

  qualityOfMoves = qualityOfMoves.map((value) => value / sumOfQualityOfMoves);

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
  state,
}: {
  explorationCoefficient: ExplorationCoefficient;
  quantityOfExpansions: Integer;
  state: GenericState;
}) => {
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
    state,
  });

  return calculateQualityOfMoves({
    rootNode,
  });
};

const BASE_FOR_SUM_OF_EXPONENTIATED_QUALITIES_OF_MOVES = 0;
const TEMPERATURE = 0.25;

const pickIndexOfValidMoveConsideringTheirQuality = ({
  indexesOfValidMoves,
  qualityOfMoves,
}: {
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
  qualityOfMoves: QualityOfMove[];
}): IndexOfMove => {
  const mapOfQualityOfValidMoves = new Map(
    indexesOfValidMoves.values().map((indexOfValidMove) => {
      const qualityOfMove = qualityOfMoves[indexOfValidMove];
      if (typeof qualityOfMove === "undefined") {
        throw new Error("Could not retrieve any quality from this index.");
      }
      return [indexOfValidMove, qualityOfMove];
    }),
  );

  // Softmax to convert qualities to probabilities
  let sumOfExponentiatedQualities =
    BASE_FOR_SUM_OF_EXPONENTIATED_QUALITIES_OF_MOVES;
  const exponentiatedQualities = new Map(
    mapOfQualityOfValidMoves
      .entries()
      .map(([indexOfValidMove, qualityOfMove]) => {
        const exponentiatedQualityOfMove = Math.exp(
          qualityOfMove / TEMPERATURE,
        );
        sumOfExponentiatedQualities += exponentiatedQualityOfMove;
        return [indexOfValidMove, exponentiatedQualityOfMove];
      }),
  );

  const probabilities = exponentiatedQualities
    .entries()
    .map(
      ([indexesOfValidMove, exponentiatedQuality]) =>
        [
          indexesOfValidMove,
          exponentiatedQuality / sumOfExponentiatedQualities,
        ] as const,
    )
    .toArray()
    .sort(
      ([, firstProbability], [, secondProbability]) =>
        secondProbability - firstProbability,
    );

  // Select index based on probability distribution
  const randomNumber = Math.random();
  let accumulator = 0;
  for (const [indexOfValidMove, probability] of probabilities) {
    accumulator += probability;
    if (randomNumber <= accumulator) {
      return indexOfValidMove;
    }
  }

  throw new Error(
    "Could not retrieve any index of a move considering the informed qualities.",
  );
};

export type { ExplorationCoefficient, QualityOfMove };
export {
  calculateQualityOfMoves,
  expandTree,
  pickIndexOfValidMoveConsideringTheirQuality,
  predictQualityOfMoves,
};
