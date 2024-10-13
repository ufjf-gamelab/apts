import * as tf from "@tensorflow/tfjs";
import Game from "src/Game/Game";
import State from "src/Game/State";
import { predictPolicyAndValueAndProbabilitiesAndActionFromState } from "src/ResNet/predict";
import ResNet from "src/ResNet/ResNet";
import { MINIMUM_PROBABILITY, Node } from "./Node";

export default class Search {
  private game: Game;
  private resNet: ResNet;
  private numSearches: number;
  private explorationConstant: number;

  constructor({
    game,
    resNet,
    numSearches,
    explorationConstant,
  }: {
    game: Game;
    resNet: ResNet;
    numSearches: number;
    explorationConstant: number;
  }) {
    this.game = game;
    this.resNet = resNet;
    this.numSearches = numSearches;
    this.explorationConstant = explorationConstant;
  }

  /* Methods */

  private getProbabilityDistribution(validActions: boolean[]): number[] {
    let sum = MINIMUM_PROBABILITY;
    const actionProbabilities = new Array(this.game.getActionSize()).fill(
      MINIMUM_PROBABILITY,
    );

    for (
      let currentAction = 0;
      currentAction < validActions.length;
      currentAction++
    ) {
      if (validActions[currentAction]) {
        actionProbabilities[currentAction] = 1;
        sum++;
      }
    }
    return actionProbabilities.map(probability => probability / sum);
  }

  private getProbabilitiesFromNode(node: Node): number[] {
    const actionProbabilities = new Array<number>(
      this.game.getActionSize(),
    ).fill(MINIMUM_PROBABILITY);

    for (const child of node.getChildren()) {
      const action = child.getActionTaken();
      if (action === null) throw new Error("Action is null!");
      actionProbabilities[action] = child.getVisitCount();
    }

    const sum = actionProbabilities.reduce(
      (currentSum, value) => currentSum + value,
      MINIMUM_PROBABILITY,
    );
    return actionProbabilities.map(value => value / sum);
  }

  // Search for the best action to take
  public search(state: State): number[] {
    // If no deep search is performed, return a distribution based on the valid actions.
    const ONLY_ONE_SEARCH = 1;
    if (this.numSearches <= ONLY_ONE_SEARCH) {
      return this.getProbabilityDistribution(state.getValidActions());
    }

    // Perform the Monte Carlo Tree Search
    const neutralState = state.clone();
    const root = new Node({
      explorationConstant: this.explorationConstant,
      game: this.game,
      numSearches: this.numSearches,
      state: neutralState,
    });

    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.numSearches;
      currentSearchIndex++
    ) {
      let node = root;

      // Selection phase
      while (node.isFullyExpanded()) node = node.selectBestChild();

      const actionOutcome = Game.getActionOutcome(
        node.getState(),
        node.getActionTaken(),
      );
      // Flip the value, as the action was taken by the opponent
      let valueToBackpropagate = this.game.getOpponentValue(
        actionOutcome.value,
      );

      if (!actionOutcome.isTerminal) {
        // Calculate the policy and value from the neural network
        const { value, probabilities } =
          predictPolicyAndValueAndProbabilitiesAndActionFromState(
            node.getState(),
            this.resNet,
          );

        valueToBackpropagate = value.arraySync();
        tf.dispose(value);

        // Expansion phase
        node.expand(probabilities.arraySync());
        tf.dispose(probabilities);
      }

      // Backpropagation phase
      node.backpropagate(valueToBackpropagate);
    }

    return this.getProbabilitiesFromNode(root);
  }
}
