import { INCREMENT_ONE, Integer } from "src/types";
import Game from "../Game/Game";
import Move from "../Game/Move";
import Player from "../Game/Player";
import State from "../Game/State";
import { Node } from "./Node";

const MINIMUM_PROBABILITY = 0;

interface SearchParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  game: G;
  explorationConstant: number;
  quantityOfSearches: Integer;
}

export default class Search<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private game: SearchParams<P, M, S, G>["game"];
  private explorationConstant: SearchParams<P, M, S, G>["explorationConstant"];
  private quantityOfSearches: SearchParams<P, M, S, G>["quantityOfSearches"];

  constructor({
    game,
    explorationConstant,
    quantityOfSearches,
  }: SearchParams<P, M, S, G>) {
    this.game = game;
    this.explorationConstant = explorationConstant;
    this.quantityOfSearches = quantityOfSearches;
  }

  /* Methods */

  private buildTree(root: Node<P, M, S, G>): void {
    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.quantityOfSearches;
      currentSearchIndex += INCREMENT_ONE
    ) {
      let currentNode = root;

      // Goes all the way down to a node that is not fully expanded at the bottom of the tree.
      while (currentNode.isFullyExpanded())
        currentNode = currentNode.selectBestChild();

      const state = currentNode.getState();
      let scoreboard = state.getScoreboard();
      const isFinal = state.isFinal();

      if (!isFinal) {
        currentNode = currentNode.expand();
        scoreboard = currentNode.simulate();
      }

      currentNode.backpropagate(scoreboard);
    }
  }

  public getProbabilities(state: S): number[] {
    const root = new Node<P, M, S, G>({
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
