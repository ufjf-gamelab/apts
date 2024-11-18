import { INCREMENT_ONE, Integer } from "src/types";
import Game, { Player } from "../Game/Game";
import Move from "../Game/Move";
import State, { Points } from "../Game/State";
import { Node } from "./Node";

const MINIMUM_PROBABILITY = 0;
const MINIMUM_POINTS = 0;

interface SearchParams<G extends Game<M>, M extends Move> {
  game: G;
  explorationConstant: number;
  quantityOfSearches: Integer;
}

export default class Search<G extends Game<M>, M extends Move> {
  private game: SearchParams<G, M>["game"];
  private explorationConstant: SearchParams<G, M>["explorationConstant"];
  private quantityOfSearches: SearchParams<G, M>["quantityOfSearches"];

  constructor({
    game,
    explorationConstant,
    quantityOfSearches,
  }: SearchParams<G, M>) {
    this.game = game;
    this.explorationConstant = explorationConstant;
    this.quantityOfSearches = quantityOfSearches;
  }

  /* Methods */

  /// Search for the best action to take.
  // eslint-disable-next-line max-statements, max-lines-per-function
  public search(state: State<G, M>): number[] {
    const root = new Node({
      explorationConstant: this.explorationConstant,
      parent: null,
      state,
    });

    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.quantityOfSearches;
      currentSearchIndex += INCREMENT_ONE
    ) {
      let currentNode = root;

      // Select a node which is not fully expanded
      while (currentNode.isFullyExpanded()) {
        // TODO: Fix
        currentNode = currentNode.selectBestChild();
      }

      const turnOutcome = state.getTurnOutcome();
      const { gameHasEnded } = turnOutcome;
      let { points } = turnOutcome;

      const totalPoints = new Map<Player, Points>(
        Array.from(points.keys()).map(player => {
          const playerPoints = points.get(player);
          return [player, playerPoints ? playerPoints : MINIMUM_POINTS];
        }),
      );

      if (!gameHasEnded) {
        // Expansion phase
        currentNode = currentNode.expand();

        // Simulation phase
        points = currentNode.simulate();

        points.forEach((playerPoints, player) => {
          const currentPoints = totalPoints.get(player);
          totalPoints.set(
            player,
            currentPoints ? currentPoints + playerPoints : playerPoints,
          );
        });
      }

      const lastPlayer = currentNode.getState().getLastPlayer();
      if (lastPlayer === null) continue;

      // Backpropagation phase
      currentNode.backpropagate(totalPoints);
    }

    /// Get the action probabilities from the root node.
    let probabilityOfPlayingEachMove = new Array<number>(
      this.game.getQuantityOfMoves(),
    ).fill(MINIMUM_PROBABILITY);

    for (const child of root.getChildren()) {
      const lastTakenMove = child.getState().getLastTakenMove();
      if (lastTakenMove === null) continue;

      probabilityOfPlayingEachMove[lastTakenMove.key] =
        child.getQuantityOfVisits();
    }

    const sum = probabilityOfPlayingEachMove.reduce(
      (currentSum, value) => currentSum + value,
      MINIMUM_PROBABILITY,
    );

    probabilityOfPlayingEachMove = probabilityOfPlayingEachMove.map(
      value => value / sum,
    );
    return probabilityOfPlayingEachMove;
  }
}
