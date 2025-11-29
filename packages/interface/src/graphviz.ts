import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  attribute as graphvizAttribute,
  Digraph as GraphvizDigraph,
  Edge as GraphvizEdge,
  type EdgeAttributesObject as GraphvizEdgeAttributesObject,
  type GraphAttributesObject as GraphvizGraphAttributesObject,
  Node as GraphvizNode,
  type NodeAttributesObject as GraphvizNodeAttributesObject,
} from "ts-graphviz";

interface TupleWithTreeNodeAndItsParentGraphvizNode<
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
> {
  node: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  parentGraphvizNode: GraphvizNode;
}

const ID_OF_FIRST_CHILD = 1;
const ID_OF_ROOT = 0;

const GRAPH_ATTRIBUTES = {
  fontname: "Monospace",
  fontsize: 30,
  labelloc: "t",
  nodesep: 0.5,
  rankdir: "TB",
  ranksep: 3,
  splines: "true",
} as const satisfies GraphvizGraphAttributesObject;

const NODE_ATTRIBUTES = {
  fontname: GRAPH_ATTRIBUTES.fontname,
  labelloc: "t",
  shape: "box",
} as const satisfies GraphvizNodeAttributesObject;

const EDGE_ATTRIBUTES = {
  fontname: GRAPH_ATTRIBUTES.fontname,
} as const satisfies GraphvizEdgeAttributesObject;

const constructGraphvizNode = <
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
>({
  id,
  treeNode,
}: {
  id: Integer;
  treeNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}) => {
  const state = treeNode.getState();
  const qualityOfMatch = treeNode.getQualityOfMatch();
  const quantityOfVisits = treeNode.getQuantityOfVisits();
  const game = state.getGame();
  const indexOfPlayer = state.getIndexOfPlayer();
  const player = game.getPlayer({ indexOfPlayer });
  if (player === null) {
    throw new Error(
      `There is no player in this game with the index ${indexOfPlayer}.`,
    );
  }

  const label = `id: ${id}, visits: ${quantityOfVisits}, quality: ${
    qualityOfMatch
  },\nplayer: { id: ${indexOfPlayer}, symbol: ${player.getSymbol()} }\n${
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    state.toString()
  }`;

  return new GraphvizNode(id.toString(), {
    ...NODE_ATTRIBUTES,
    [graphvizAttribute.label]: label,
  });
};

const insertNodeIntoGraph = <
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
>({
  currentNode,
  graph,
  idOfCurrentNode,
  tuplesOfTreeNodesAndTheirParentNodesFromGraphviz,
}: {
  currentNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  graph: GraphvizDigraph;
  idOfCurrentNode: Integer;
  tuplesOfTreeNodesAndTheirParentNodesFromGraphviz: TupleWithTreeNodeAndItsParentGraphvizNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >[];
}): GraphvizNode => {
  const currentGraphvizNode = constructGraphvizNode({
    id: idOfCurrentNode,
    treeNode: currentNode,
  });
  graph.addNode(currentGraphvizNode);

  currentNode.getChildren().forEach((childNode) => {
    if (childNode !== null) {
      tuplesOfTreeNodesAndTheirParentNodesFromGraphviz.push({
        node: childNode,
        parentGraphvizNode: currentGraphvizNode,
      });
    }
  });

  return currentGraphvizNode;
};

const insertEdgeIntoGraph = <
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
>({
  childNode,
  game,
  graph,
  indexOfPlayedMove,
  parentNode,
}: {
  childNode: GraphvizNode;
  game: GenericGame;
  graph: GraphvizDigraph;
  indexOfPlayedMove: IndexOfMove;
  parentNode: GraphvizNode;
}): void => {
  const playedMove = game.getMove({ indexOfMove: indexOfPlayedMove });
  if (playedMove !== null) {
    const graphvizEdge = new GraphvizEdge([parentNode, childNode], {
      ...EDGE_ATTRIBUTES,
      [graphvizAttribute.label]: `${indexOfPlayedMove}: ${playedMove.getTitle()}\n${playedMove.getDescription()}`,
    });
    graph.addEdge(graphvizEdge);
  }
};

export const constructGraphvizGraph = <
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
>({
  rootNode,
}: {
  rootNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): GraphvizDigraph => {
  const game = rootNode.getState().getGame();
  const graph = new GraphvizDigraph("G", GRAPH_ATTRIBUTES);
  const tuplesOfTreeNodesAndTheirParentNodesFromGraphviz: TupleWithTreeNodeAndItsParentGraphvizNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >[] = [];

  insertNodeIntoGraph({
    currentNode: rootNode,
    graph,
    idOfCurrentNode: ID_OF_ROOT,
    tuplesOfTreeNodesAndTheirParentNodesFromGraphviz,
  });

  // Include every node in the tree in the graph.
  for (
    let idOfCurrentNode = ID_OF_FIRST_CHILD;
    idOfCurrentNode < tuplesOfTreeNodesAndTheirParentNodesFromGraphviz.length;
    idOfCurrentNode += INCREMENT_ONE
  ) {
    const nodeTuple =
      tuplesOfTreeNodesAndTheirParentNodesFromGraphviz[idOfCurrentNode];
    if (typeof nodeTuple === "undefined") {
      break;
    }
    const { node: currentNode, parentGraphvizNode } = nodeTuple;

    const currentGraphvizNode = insertNodeIntoGraph({
      currentNode,
      graph,
      idOfCurrentNode,
      tuplesOfTreeNodesAndTheirParentNodesFromGraphviz,
    });

    const indexOfPlayedMove = currentNode.getIndexOfPlayedMove();
    if (indexOfPlayedMove === null) {
      continue;
    }

    insertEdgeIntoGraph({
      childNode: currentGraphvizNode,
      game,
      graph,
      indexOfPlayedMove,
      parentNode: parentGraphvizNode,
    });
  }

  return graph;
};
