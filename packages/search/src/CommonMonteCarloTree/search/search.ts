import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { Random } from "../Random.js";

import { TreeNode } from "../TreeNode.js";

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
      // This condition happens when a selected child has no valid move.
      return null;
    }

    currentNode = bestChild;
  }

  return currentNode;
};

const simulateMatch = <
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
  random,
  state,
}: {
  random: Random;
  state: GenericState;
}): GenericScore => {
  const game = state.getGame();

  // Copy the state and play random actions, with alternate players, until the game is over.
  let stateThatIsCurrentlyBeingSimulated = state;
  for (;;) {
    const score = stateThatIsCurrentlyBeingSimulated.getScore();
    const isFinal = game.isFinal({
      state: stateThatIsCurrentlyBeingSimulated,
    });
    if (isFinal) {
      return score;
    }

    const selectedIndexOfMove = random.pickIndexOfRandomValidMove({
      state: stateThatIsCurrentlyBeingSimulated,
    });
    stateThatIsCurrentlyBeingSimulated = game.play({
      indexOfMove: selectedIndexOfMove,
      state: stateThatIsCurrentlyBeingSimulated,
    });
  }
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
  random,
  state,
}: {
  explorationCoefficient: ExplorationCoefficient;
  quantityOfExpansions: Integer;
  random: Random;
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
      // This condition happens when there is no node to expand, so the search has to end.
      break;
    }

    const currentState = currentNode.getState();
    const isFinal = game.isFinal({ state: currentState });

    if (isFinal) {
      const score = currentState.getScore();
      currentNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    } else {
      const indexOfChild = random.pickIndexOfRandomNotExpandedChildNode({
        treeNode: currentNode,
      });
      const childNode = currentNode.expand({ indexOfMove: indexOfChild });

      const score = simulateMatch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >({
        random,
        state: childNode.getState(),
      });
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
    rootNode,
  });
};

export type { ExplorationCoefficient, QualityOfMove };
export { calculateQualityOfMoves, expandTree, predictQualityOfMoves };
