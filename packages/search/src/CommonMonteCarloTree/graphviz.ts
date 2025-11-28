import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  attribute as attributeFromGraphviz,
  Digraph as DigraphFromGraphviz,
  Edge as EdgeFromGraphviz,
  type GraphAttributesObject as GraphAttributesObjectFromGraphviz,
  Node as NodeFromGraphviz,
  toDot as toDotFromGraphviz,
} from "ts-graphviz";

import type { TreeNode } from "./TreeNode.js";

interface TupleWithTreeNodeAndItsParentNodeFromGraphviz<
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
  parentNodeFromGraphviz: NodeFromGraphviz;
}

const ID_OF_FIRST_CHILD = 1;
const ID_OF_ROOT = 0;

const GRAPH_ATTRIBUTES: GraphAttributesObjectFromGraphviz = {
  fontname: "Monospace",
  fontsize: 30,
  labelloc: "t",
  nodesep: 0.5,
  rankdir: "TB",
  ranksep: 3,
  splines: "true",
};

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

  const label = `${id}: S.${quantityOfVisits} Q.${
    qualityOfMatch
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
  }\nP.${indexOfPlayer} ${player.getSymbol()} ${player.getName()}\n${state.toString()}`;

  return new NodeFromGraphviz(id.toString(), {
    [attributeFromGraphviz.label]: label,
    fontname: "Monospace",
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
  graph: DigraphFromGraphviz;
  idOfCurrentNode: Integer;
  tuplesOfTreeNodesAndTheirParentNodesFromGraphviz: TupleWithTreeNodeAndItsParentNodeFromGraphviz<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >[];
}): NodeFromGraphviz => {
  const currentNodeFromGraphviz = constructGraphvizNode({
    id: idOfCurrentNode,
    treeNode: currentNode,
  });
  graph.addNode(currentNodeFromGraphviz);

  currentNode.getChildren().forEach((childNode) => {
    if (childNode !== null) {
      tuplesOfTreeNodesAndTheirParentNodesFromGraphviz.push({
        node: childNode,
        parentNodeFromGraphviz: currentNodeFromGraphviz,
      });
    }
  });

  return currentNodeFromGraphviz;
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
  childNode: NodeFromGraphviz;
  game: GenericGame;
  graph: DigraphFromGraphviz;
  indexOfPlayedMove: IndexOfMove;
  parentNode: NodeFromGraphviz;
}): void => {
  const playedMove = game.getMove({ indexOfMove: indexOfPlayedMove });
  if (playedMove !== null) {
    const edgeFromGraphviz = new EdgeFromGraphviz([parentNode, childNode], {
      [attributeFromGraphviz.label]: `${indexOfPlayedMove}: ${playedMove.getTitle()}\n${playedMove.getDescription()}`,
      fontname: "Monospace",
    });
    graph.addEdge(edgeFromGraphviz);
  }
};

export const generateGraphvizDotStringFromTree = <
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
>(
  game: GenericGame,
  rootNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
): string => {
  const graph = new DigraphFromGraphviz("G", GRAPH_ATTRIBUTES);
  const tuplesOfTreeNodesAndTheirParentNodesFromGraphviz: TupleWithTreeNodeAndItsParentNodeFromGraphviz<
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
    const { node: currentNode, parentNodeFromGraphviz } = nodeTuple;

    const currentNodeFromGraphviz = insertNodeIntoGraph({
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
      childNode: currentNodeFromGraphviz,
      game,
      graph,
      indexOfPlayedMove,
      parentNode: parentNodeFromGraphviz,
    });
  }

  return toDotFromGraphviz(graph);
};
