import { INCREMENT_ONE, Integer } from "src/types";
import Game from "../Game/Game";
import State from "../Game/State";
import { Node } from "./Node";

const MINIMUM_PROBABILITY = 0;

interface SearchParams<G extends Game> {
  game: G;
  explorationConstant: number;
  quantityOfSearches: Integer;
}

export default class Search<G extends Game> {
  private game: SearchParams<G>["game"];
  private explorationConstant: SearchParams<G>["explorationConstant"];
  private quantityOfSearches: SearchParams<G>["quantityOfSearches"];

  constructor({
    game,
    explorationConstant,
    quantityOfSearches,
  }: SearchParams<G>) {
    this.game = game;
    this.explorationConstant = explorationConstant;
    this.quantityOfSearches = quantityOfSearches;
  }

  /* Methods */

  /// Search for the best action to take.
  // eslint-disable-next-line max-statements
  public search(state: State<G>): number[] {
    const root = new Node({
      explorationConstant: this.explorationConstant,
      parent: null,
      state,
      takenMove: null,
    });
    const currentPlayerOnTheGivenState = state.getCurrentPlayer();

    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.quantityOfSearches;
      currentSearchIndex += INCREMENT_ONE
    ) {
      let currentNode = root;

      // Select a node which is not fully expanded
      while (currentNode.isFullyExpanded())
        currentNode = currentNode.selectBestChild();

      const turnOutcome = state.getTurnOutcome();
      const { gameHasEnded } = turnOutcome;
      let { points } = turnOutcome;

      if (!gameHasEnded) {
        // Expansion phase
        currentNode = currentNode.expand();

        // Simulation phase
        points = currentNode.simulate();
      }

      const lastPlayer = currentNode.getState().getLastPlayer();
      if (lastPlayer === null) continue;

      // Backpropagation phase
      currentNode.backpropagate(outcomeValue);
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
