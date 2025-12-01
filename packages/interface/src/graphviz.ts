import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfRandom } from "@repo/search/CommonMonteCarloTree/Random.js";
import type { QualityOfMove } from "@repo/search/CommonMonteCarloTree/search/quality.js";
import type { ExplorationCoefficient } from "@repo/search/CommonMonteCarloTree/search/search.js";
import type { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { formatMap } from "@repo/engine_core/format.js";
import {
  attribute as graphvizAttribute,
  Digraph as GraphvizDigraph,
  Edge as GraphvizEdge,
  type EdgeAttributesObject as GraphvizEdgeAttributesObject,
  type GraphAttributesObject as GraphvizGraphAttributesObject,
  Node as GraphvizNode,
  type NodeAttributesObject as GraphvizNodeAttributesObject,
} from "ts-graphviz";

interface TupleOfInformationOfGraphvizEdge<
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
  fitness: number;
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

const ID_OF_FIRST_CHILD = 0;
const ID_OF_ROOT = -1;

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
  margin: "0.5,0.125",
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
  const isFinal = game.isFinal({ state });

  const label = `id: ${id}, visits: ${quantityOfVisits},\nquality: ${
    qualityOfMatch
  }, player: ${player.getSymbol()}\nisFinal: ${isFinal ? "true" : "false"}\n${state.toString()}`;

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
  explorationCoefficient,
  graph,
  idOfCurrentNode,
  tuplesOfInformationOfGraphvizEdge,
}: {
  currentNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  explorationCoefficient: ExplorationCoefficient;
  graph: GraphvizDigraph;
  idOfCurrentNode: Integer;
  tuplesOfInformationOfGraphvizEdge: TupleOfInformationOfGraphvizEdge<
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

  currentNode.getChildrenNodes().forEach((childNode) => {
    if (childNode !== null) {
      tuplesOfInformationOfGraphvizEdge.push({
        fitness: currentNode.calculateFitnessOfChildNode({
          childNode,
          explorationCoefficient,
        }),
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
  fitness,
  game,
  graph,
  indexOfPlayedMove,
  parentNode,
}: {
  childNode: GraphvizNode;
  fitness: number;
  game: GenericGame;
  graph: GraphvizDigraph;
  indexOfPlayedMove: IndexOfMove;
  parentNode: GraphvizNode;
}): void => {
  const playedMove = game.getMove({ indexOfMove: indexOfPlayedMove });
  if (playedMove !== null) {
    const graphvizEdge = new GraphvizEdge([parentNode, childNode], {
      ...EDGE_ATTRIBUTES,
      [graphvizAttribute.label]: `move: (${indexOfPlayedMove}) ${playedMove.getTitle()}\nfitness: ${fitness}`,
    });
    graph.addEdge(graphvizEdge);
  }
};

const constructGraphvizGraph = <
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
  explorationCoefficient,
  probabilityOfPlayingEachMove,
  qualityOfEachMove,
  quantityOfExpansions,
  rootNode,
  seed,
}: {
  explorationCoefficient: ExplorationCoefficient;
  probabilityOfPlayingEachMove: ReadonlyMap<IndexOfMove, number>;
  qualityOfEachMove: ReadonlyMap<IndexOfMove, QualityOfMove>;
  quantityOfExpansions: Integer;
  rootNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  seed: ParamsOfRandom["seed"];
}): GraphvizDigraph => {
  const game = rootNode.getState().getGame();
  const graph = new GraphvizDigraph("G", GRAPH_ATTRIBUTES);
  const tuplesOfInformationOfGraphvizEdge: TupleOfInformationOfGraphvizEdge<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >[] = [];

  graph.addNode(
    new GraphvizNode("information", {
      ...NODE_ATTRIBUTES,
      label: `seed: "${seed}", explorationCoefficient: ${explorationCoefficient}, quantityOfExpansions: ${quantityOfExpansions}\nqualityOfEachMove: ${formatMap(
        {
          map: qualityOfEachMove,
        },
      )}\nprobabilityOfPlayingEachMove: ${formatMap({
        map: probabilityOfPlayingEachMove,
      })}`,
    }),
  );

  insertNodeIntoGraph({
    currentNode: rootNode,
    explorationCoefficient,
    graph,
    idOfCurrentNode: ID_OF_ROOT,
    tuplesOfInformationOfGraphvizEdge,
  });

  // Include every node in the tree in the graph.
  for (
    let idOfCurrentNode = ID_OF_FIRST_CHILD;
    idOfCurrentNode < tuplesOfInformationOfGraphvizEdge.length;
    idOfCurrentNode += INCREMENT_ONE
  ) {
    const nodeTuple = tuplesOfInformationOfGraphvizEdge[idOfCurrentNode];
    if (typeof nodeTuple === "undefined") {
      break;
    }
    const { fitness, node: currentNode, parentGraphvizNode } = nodeTuple;

    const currentGraphvizNode = insertNodeIntoGraph({
      currentNode,
      explorationCoefficient,
      graph,
      idOfCurrentNode,
      tuplesOfInformationOfGraphvizEdge,
    });

    const indexOfPlayedMove = currentNode.getIndexOfPlayedMove();
    if (indexOfPlayedMove === null) {
      continue;
    }

    insertEdgeIntoGraph({
      childNode: currentGraphvizNode,
      fitness,
      game,
      graph,
      indexOfPlayedMove,
      parentNode: parentGraphvizNode,
    });
  }

  return graph;
};

export { constructGraphvizGraph };
