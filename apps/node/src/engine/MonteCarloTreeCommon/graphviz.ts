import * as Graphviz from "ts-graphviz";
import { INCREMENT_ONE, Integer } from "../../types";
import Game from "../Game/Game";
import Move from "../Game/Move";
import Player from "../Game/Player";
import State from "../Game/State";
import { Node } from "./Node";

const FIRST_CHILD_ID = 1;
const ROOT_ID = 0;

const GRAPH_ATTRIBUTES: Graphviz.GraphAttributesObject = {
  fontname: "Monospace",
  fontsize: 30,
  labelloc: "t",
  nodesep: 0.5,
  rankdir: "TB",
  ranksep: 3,
  splines: "true",
};

interface NodeTuple<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  node: Node<P, M, S, G>;
  graphvizParentNode: Graphviz.Node;
}

const insertGraphvizNodeIntoGraph = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>({
  graphvizGraph,
  currentNode,
  nodeTuples,
  currentNodeId,
}: {
  graphvizGraph: Graphviz.Digraph;
  nodeTuples: NodeTuple<P, M, S, G>[];
  currentNodeId: Integer;
  currentNode: Node<P, M, S, G>;
}): Graphviz.Node => {
  const graphvizCurrentNode = currentNode.toGraphvizNode(currentNodeId);
  graphvizGraph.addNode(graphvizCurrentNode);

  currentNode.getChildren().forEach(child => {
    nodeTuples.push({
      graphvizParentNode: graphvizCurrentNode,
      node: child,
    });
  });

  return graphvizCurrentNode;
};

const insertGraphvizEdgeIntoGraph = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>({
  game,
  graph,
  parent,
  child,
  keyOfTheTakenMove,
}: {
  game: G;
  graph: Graphviz.Digraph;
  parent: Graphviz.Node;
  child: Graphviz.Node;
  keyOfTheTakenMove: number;
}): void => {
  const takenMove = game.getMove(keyOfTheTakenMove);

  const graphvizEdge = new Graphviz.Edge([parent, child], {
    [Graphviz.attribute.label]:
      `${keyOfTheTakenMove}: ${takenMove.getTitle()}\n${takenMove.getDescription()}`,
    fontname: "Monospace",
  });

  graph.addEdge(graphvizEdge);
};

export const generateGraphvizDotStringFromTree = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  game: G,
  root: Node<P, M, S, G>,
): string => {
  const graphvizGraph = new Graphviz.Digraph("G", GRAPH_ATTRIBUTES);
  const nodeTuples: NodeTuple<P, M, S, G>[] = [];

  const graphvizRootNode = root.toGraphvizNode(ROOT_ID);
  graphvizGraph.addNode(graphvizRootNode);

  root.getChildren().forEach(child => {
    nodeTuples.push({ graphvizParentNode: graphvizRootNode, node: child });
  });

  // Include every node in the tree in the graph.
  for (
    let currentNodeId = FIRST_CHILD_ID;
    currentNodeId < nodeTuples.length;
    currentNodeId += INCREMENT_ONE
  ) {
    const nodeTuple = nodeTuples[currentNodeId];
    if (typeof nodeTuple === "undefined") {
      break;
    }
    const { node: currentNode, graphvizParentNode } = nodeTuple;

    const graphvizCurrentNode = insertGraphvizNodeIntoGraph({
      currentNode,
      currentNodeId,
      graphvizGraph,
      nodeTuples,
    });

    const keyOfTheTakenMove = currentNode.getKeyOfTheTakenMove();
    if (keyOfTheTakenMove === null) {
      continue;
    }

    insertGraphvizEdgeIntoGraph({
      child: graphvizCurrentNode,
      game,
      graph: graphvizGraph,
      keyOfTheTakenMove,
      parent: graphvizParentNode,
    });
  }

  return Graphviz.toDot(graphvizGraph);
};
