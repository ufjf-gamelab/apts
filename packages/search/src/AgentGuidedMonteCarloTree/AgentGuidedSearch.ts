import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { PredictionModel } from "../ResidualNeuralNetwork/PredictionModel.js";

import { type ParamsOfSearch, Search } from "../MonteCarloTree/Search.js";
import { AgentGuidedTreeNode } from "./AgentGuidedTreeNode.js";

interface ParamsOfAgentGuidedSearch<
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
> extends ParamsOfSearch {
  predictionModel: PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}

class AgentGuidedSearch<
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
  AgentGuidedTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
> {
  private readonly predictionModel: ParamsOfAgentGuidedSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["predictionModel"];

  public constructor({
    explorationCoefficient,
    predictionModel,
    quantityOfExpansions,
    random,
  }: ParamsOfAgentGuidedSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    super({ explorationCoefficient, quantityOfExpansions, random });
    this.predictionModel = predictionModel;
  }

  public override expandTree({
    state,
  }: {
    state: GenericState;
  }): AgentGuidedTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    const rootNode = AgentGuidedTreeNode.create<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({ state });

    for (
      let indexOfCurrentExpansion = 0;
      indexOfCurrentExpansion < this.quantityOfExpansions;
      indexOfCurrentExpansion += INCREMENT_ONE
    ) {
      // 1. Selection: Start from root and traverse down to a non-expanded node using UCT.
      const selectedNode = this.selectNextNode({
        rootNode,
      });
      if (selectedNode === null) {
        // If there is no node to select, the search has ended.
        break;
      }

      const currentState = selectedNode.getState();
      const isFinal = currentState.isFinal();

      if (isFinal) {
        const score = currentState.getScore();
        const qualityOfMatch = selectedNode.getQualityOfMatchFromScore({
          score,
        });

        selectedNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({
          qualityOfMatch,
        });
      } else {
        const { qualitiesOfMoves, qualityOfMatch } =
          this.predictionModel.predict({
            state: currentState,
          });

        selectedNode.expand({
          qualitiesOfMoveAttributedByModel: qualitiesOfMoves,
        });

        selectedNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({
          qualityOfMatch,
        });
      }
    }

    return rootNode;
  }

  public getPredictionModel() {
    return this.predictionModel;
  }

  public override selectNextNode({
    rootNode,
  }: {
    rootNode: AgentGuidedTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
  }): AgentGuidedTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > | null {
    // Traverse down the tree using UCT selection until we find a node that is not fully expanded
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
      const isFinal = stateThatIsCurrentlyBeingSimulated.isFinal();
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

export type { ParamsOfAgentGuidedSearch };
export { AgentGuidedSearch };
