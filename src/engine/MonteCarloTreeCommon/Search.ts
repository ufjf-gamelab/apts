import { INCREMENT_ONE, Integer } from "src/types";
import {
  attribute as _,
  GraphAttributesObject,
  Digraph as GraphvizDigraph,
  Edge as GraphvizEdge,
  Node as GraphvizNode,
  toDot,
} from "ts-graphviz";
import Game from "../Game/Game";
import Move from "../Game/Move";
import Player from "../Game/Player";
import State from "../Game/State";
import { exportToFile } from "../util";
import { Node } from "./Node";

const FIRST_CHILD_ID = 1;
const ROOT_ID = 0;

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

  public async getProbabilities(
    state: S,
    exportTreeImage = false,
  ): Promise<number[]> {
    const root = new Node<P, M, S, G>({
      explorationConstant: this.explorationConstant,
      keyOfTheTakenMove: null,
      parent: null,
      state,
    });

    this.buildTree(root);
    if (exportTreeImage) await this.exportTreeImage(root);

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

  private exportTreeAsDotString(root: Node<P, M, S, G>): string {
    console.log("Exporting tree image...");
    const attributes: GraphAttributesObject = {
      fontsize: 30,
      labelloc: "t",
      nodesep: 0.5,
      rankdir: "LR",
      ranksep: 3,
      splines: "true",
    };

    const nodes: { node: Node<P, M, S, G>; dotParent: GraphvizNode }[] = [];

    const dotGraph = new GraphvizDigraph("G", attributes);

    const dotRootNode: GraphvizNode = root.toDot(ROOT_ID);
    dotGraph.addNode(dotRootNode);
    root.getChildren().forEach(child => {
      nodes.push({ dotParent: dotRootNode, node: child });
    });

    for (
      let currentNodeId = FIRST_CHILD_ID;
      currentNodeId < nodes.length;
      currentNodeId += INCREMENT_ONE
    ) {
      const item = nodes[currentNodeId];
      if (typeof item === "undefined") break;
      const { node, dotParent } = item;

      const dotNode = node.toDot(currentNodeId);
      dotGraph.addNode(dotNode);

      node.getChildren().forEach(child => {
        nodes.push({ dotParent: dotNode, node: child });
      });

      const keyOfTheTakenMove = node.getKeyOfTheTakenMove();
      if (keyOfTheTakenMove === null) continue;
      const takenMove = this.game.getMove(keyOfTheTakenMove);
      const dotEdge: GraphvizEdge = new GraphvizEdge([dotParent, dotNode], {
        [_.label]: `${keyOfTheTakenMove}. ${takenMove.getTitle()}`,
      });
      dotGraph.addEdge(dotEdge);
    }

    return toDot(dotGraph);
  }

  private async exportTreeImage(root: Node<P, M, S, G>): Promise<void> {
    const dotString = this.exportTreeAsDotString(root);
    const fileName = `.images/mcts-common-tree`;
    await exportToFile(dotString, fileName, "svg");
  }
}
