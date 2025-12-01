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

type ExplorationCoefficient = number;

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
}): null | TreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => {
  // Traverse down the tree using UCB selection until we find a node that is not fully expanded
  let currentNode = rootNode;
  while (currentNode.isFullyExpanded()) {
    const bestChild = currentNode.selectBestChildNode({
      explorationCoefficient,
    });
    if (bestChild === null) {
      // This happens when a node is terminal (no valid moves)
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
  >({ informationAboutPlayedMove: null, state });

  for (
    let indexOfCurrentExpansion = 0;
    indexOfCurrentExpansion < quantityOfExpansions;
    indexOfCurrentExpansion += INCREMENT_ONE
  ) {
    // 1. Selection: Start from root and traverse down to a non-fully-expanded node using UCB
    const selectedNode = pickNotFullyExpandedNode({
      explorationCoefficient,
      rootNode,
    });
    if (selectedNode === null) {
      // If there is no node to select, the search has ended
      break;
    }

    const currentState = selectedNode.getState();
    const isFinal = game.isFinal({ state: currentState });

    if (isFinal) {
      // Terminal node: just backpropagate its score
      const score = currentState.getScore();
      selectedNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    } else {
      // 2. Expansion: Add one new child node
      const indexOfChild = random.pickIndexOfRandomNotExpandedChildNode({
        treeNode: selectedNode,
      });
      const childNode = selectedNode.expand({ indexOfMove: indexOfChild });

      // 3. Simulation: Rollout from the new child to a terminal state
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

      // 4. Backpropagation: Update all nodes on the path from child to root
      childNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    }
  }

  return rootNode;
};

export type { ExplorationCoefficient };
export { expandTree };
