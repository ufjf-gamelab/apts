import Game from "../Game/Game";
import State from "../Game/State";
import { MonteCarloTreeSearchParams, Node } from "./Node";

const MINIMUM_PROBABILITY = 0;

export default class MonteCarloTreeSearch<G extends Game> {
  private game: G;
  private params: MonteCarloTreeSearchParams;

  constructor({
    game,
    params,
  }: {
    game: G;
    params: MonteCarloTreeSearchParams;
  }) {
    this.game = game;
    this.params = params;
  }

  /* Methods */

  /// Search for the best action to take.
  public search(state: State<G>): number[] {
    const root = new Node({ game: this.game, params: this.params, state });

    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.params.searches;
      currentSearchIndex += INCREMENT_ONE
    ) {
      let node = root;

      // Selection phase
      while (node.isFullyExpanded()) node = node.selectBestChild();

      const actionOutcome = Game.getActionOutcome(
        node.getState(),
        node.getTakenAction(),
      );
      // Flip the value, as the action was taken by the opponent
      let outcomeValue = this.game.getOpponentValue(actionOutcome.value);

      if (!actionOutcome.isTerminal) {
        // Expansion phase
        node = node.expand();

        // Simulation phase
        outcomeValue = node.simulate();
      }

      // Backpropagation phase
      node.backpropagate(outcomeValue);
    }

    /// Get the action probabilities from the root node.
    let actionProbabilities = new Array<number>(this.game.getActionSize()).fill(
      MINIMUM_PROBABILITY,
    );

    for (const child of root.getChildren()) {
      const takenAction = child.getTakenAction();
      if (takenAction === null) {
        continue;
      }
      actionProbabilities[takenAction] = child.getVisitCount();
    }

    const sum = actionProbabilities.reduce(
      (currentSum, value) => currentSum + value,
      MINIMUM_PROBABILITY,
    );

    actionProbabilities = actionProbabilities.map(value => value / sum);
    return actionProbabilities;
  }
}
