import { INCREMENT_ONE, Integer } from "src/types";
import Game, { Player } from "../Game/Game";
import Move from "../Game/Move";
import State from "../Game/State";
import { Node } from "./Node";

const MINIMUM_PROBABILITY = 0;

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

  private buildTree(root: Node<G, M>): void {
    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.quantityOfSearches;
      currentSearchIndex += INCREMENT_ONE
    ) {
      let currentNode = root;
      let lastPlayer: Player | null = null;

      // Goes all the way down to a node that is not fully expanded at the bottom of the tree.
      while (currentNode.isFullyExpanded())
        currentNode = currentNode.selectBestChild();

      const turnOutcome = root.getState().getTurnOutcome();
      const { gameHasEnded } = turnOutcome;
      let { scoreboard } = turnOutcome;

      if (!gameHasEnded) {
        currentNode = currentNode.expand();
        lastPlayer = currentNode.getState().getPlayer();
        scoreboard = currentNode.simulate();
      }

      if (lastPlayer === null) continue;

      currentNode.backpropagate(scoreboard);
    }
  }

  public getProbabilities(state: State<G, M>): number[] {
    const root = new Node({
      explorationConstant: this.explorationConstant,
      keyOfTheTakenMove: null,
      parent: null,
      state,
    });

    this.buildTree(root);

    let probabilityOfPlayingEachMove = new Array<number>(
      this.game.getQuantityOfMoves(),
    ).fill(MINIMUM_PROBABILITY);

    for (const child of root.getChildren()) {
      const keyOfTheTakenMove = child.getKeyOfTheTakenMove();
      if (keyOfTheTakenMove === null) continue;

      probabilityOfPlayingEachMove[keyOfTheTakenMove] =
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
