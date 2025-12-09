import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import { Search } from "../MonteCarloTree/Search.js";
import { ExpandAllTreeNode } from "./ExpandAllTreeNode.js";

class ExpandAllSearch<
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
> extends Search<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState,
  ExpandAllTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
> {
  public override expandTree({
    state,
  }: {
    state: GenericState;
  }): ExpandAllTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    const game = state.getGame();
    const rootNode = ExpandAllTreeNode.create<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({ informationAboutPlayedMove: null, state });

    for (
      let indexOfCurrentExpansion = 0;
      indexOfCurrentExpansion < this.quantityOfExpansions;
      indexOfCurrentExpansion += INCREMENT_ONE
    ) {
      // 1. Selection: Start from root and traverse down to a non-expanded node using UCB.
      const selectedNode = this.selectNextNode({
        rootNode,
      });
      if (selectedNode === null) {
        // If there is no node to select, the search has ended.
        break;
      }

      const currentState = selectedNode.getState();
      const isFinal = game.isFinal({ state: currentState });

      if (!isFinal) {
        // 2. Expansion: Add a new child node for every valid move.
        const childrenNodes = selectedNode.expand();

        childrenNodes.forEach((childNode) => {
          // 3. Simulation: Rollout from the new child to a terminal state.
          const score = this.simulateMatch({
            state: childNode.getState(),
          });

          // 4. Backpropagation: Update all nodes on the path from child to root.
          childNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
        });
      }
    }

    return rootNode;
  }

  public override selectNextNode({
    rootNode,
  }: {
    rootNode: ExpandAllTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
  }): ExpandAllTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > | null {
    // Traverse down the tree using UCB selection until we find a node that is not fully expanded
    let currentNode = rootNode;
    while (currentNode.isFullyExpanded()) {
      const bestChild = currentNode.selectBestChildNode({
        explorationCoefficient: this.explorationCoefficient,
      });
      if (bestChild === null) {
        // This happens when a node is terminal (no valid moves)
        return null;
      }
      currentNode = bestChild;
    }

    return currentNode;
  }

  public override simulateMatch({
    state,
  }: {
    state: GenericState;
  }): GenericScore {
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

      const selectedIndexOfMove = this.random.pickIndexOfRandomValidMove({
        state: stateThatIsCurrentlyBeingSimulated,
      });
      stateThatIsCurrentlyBeingSimulated = game.play({
        indexOfMove: selectedIndexOfMove,
        state: stateThatIsCurrentlyBeingSimulated,
      });
    }
  }
}

export { ExpandAllSearch };
