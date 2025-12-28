import type { Integer } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ExplorationCoefficient } from "@repo/search/MonteCarloTree/Search.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";
import type {
  QualityOfMove,
  SofteningCoefficient,
} from "@repo/search/qualityOfMove.js";
import type { ParamsOfRandom } from "@repo/search/Random/Random.js";

import { INCREMENT_ONE } from "@repo/core/constants.js";
import { formatMap } from "@repo/core/format.js";
import { AgentGuidedTreeNode } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedTreeNode.js";
import {
  attribute as graphvizAttribute,
  Digraph as GraphvizDigraph,
  Edge as GraphvizEdge,
  type EdgeAttributesObject as GraphvizEdgeAttributesObject,
  type GraphAttributesObject as GraphvizGraphAttributesObject,
  Node as GraphvizNode,
  type NodeAttributesObject as GraphvizNodeAttributesObject,
} from "ts-graphviz";

import type { StrategyToSearch } from "./constants.js";

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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
> {
  fitness: number;
  node: GenericTreeNode;
  parentGraphvizNode: GraphvizNode;
}

const ID_OF_FIRST_CHILD = 0;
const ID_OF_ROOT = -1;

const GRAPH_ATTRIBUTES = {
  fontname: "Monospace",
  fontsize: 30,
  labelloc: "t",
  nodesep: 2,
  rankdir: "TB",
  ranksep: 4,
  splines: "true",
} as const satisfies GraphvizGraphAttributesObject;

const NODE_ATTRIBUTES = {
  fontname: GRAPH_ATTRIBUTES.fontname,
  labelloc: "c",
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  id,
  treeNode,
}: {
  id: Integer;
  treeNode: GenericTreeNode;
}) => {
  const state = treeNode.getState();
  const qualityOfMatch = treeNode.getQualityOfMatch();
  const quantityOfVisits = treeNode.getQuantityOfVisits();
  const qualityOfMoveAttributedByModel = (() => {
    if (treeNode instanceof AgentGuidedTreeNode) {
      return treeNode.getQualityOfMoveAttributedByModel();
    }
    return null;
  })();

  const game = state.getGame();
  const indexOfPlayer = state.getIndexOfPlayer();
  const player = game.getPlayer({ indexOfPlayer });
  if (player === null) {
    throw new Error(
      `There is no player in this game with the index ${indexOfPlayer}.`,
    );
  }
  const isFinal = state.isFinal();

  const label = `id: ${id}, player: ${player.getSymbol()},\nvisits: ${
    quantityOfVisits
  }, quality: ${qualityOfMatch},${
    qualityOfMoveAttributedByModel === null
      ? ""
      : `\nprior: ${qualityOfMoveAttributedByModel},`
  }\nisFinal: ${isFinal ? "true" : "false"}\n${state.toString()}`;

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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  currentNode,
  explorationCoefficient,
  graph,
  idOfCurrentNode,
  tuplesOfInformationOfGraphvizEdge,
}: {
  currentNode: GenericTreeNode;
  explorationCoefficient: ExplorationCoefficient;
  graph: GraphvizDigraph;
  idOfCurrentNode: Integer;
  tuplesOfInformationOfGraphvizEdge: TupleOfInformationOfGraphvizEdge<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
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
  qualityOfNode,
}: {
  childNode: GraphvizNode;
  fitness: number;
  game: GenericGame;
  graph: GraphvizDigraph;
  indexOfPlayedMove: IndexOfMove;
  parentNode: GraphvizNode;
  qualityOfNode: number;
}): void => {
  const playedMove = game.getMove({ indexOfMove: indexOfPlayedMove });
  if (playedMove !== null) {
    const graphvizEdge = new GraphvizEdge([parentNode, childNode], {
      ...EDGE_ATTRIBUTES,
      [graphvizAttribute.label]: `move: (${indexOfPlayedMove}) ${playedMove.getTitle()}\nfitness: ${fitness}\nquality: ${qualityOfNode}`,
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  explorationCoefficient,
  probabilityOfPlayingEachMove,
  qualityOfEachMove,
  quantityOfExpansions,
  rootNode,
  seed,
  softeningCoefficient,
  strategyToSearch,
}: {
  explorationCoefficient: ExplorationCoefficient;
  probabilityOfPlayingEachMove: ReadonlyMap<IndexOfMove, number>;
  qualityOfEachMove: ReadonlyMap<IndexOfMove, QualityOfMove>;
  quantityOfExpansions: Integer;
  rootNode: GenericTreeNode;
  seed: ParamsOfRandom["seed"];
  softeningCoefficient: SofteningCoefficient;
  strategyToSearch: StrategyToSearch;
}): GraphvizDigraph => {
  const game = rootNode.getState().getGame();
  const graph = new GraphvizDigraph("G", GRAPH_ATTRIBUTES);
  const tuplesOfInformationOfGraphvizEdge: TupleOfInformationOfGraphvizEdge<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >[] = [];

  const informationGraphvizNode = new GraphvizNode("information", {
    ...NODE_ATTRIBUTES,
    label: `strategyToSearch: "${strategyToSearch}",\nseed: "${seed}",\nexplorationCoefficient: ${explorationCoefficient},\nquantityOfExpansions: ${quantityOfExpansions},\nsofteningCoefficient: ${softeningCoefficient},\nqualityOfEachMove: ${formatMap(
      {
        map: qualityOfEachMove,
      },
    )},\nprobabilityOfPlayingEachMove: ${formatMap({
      map: probabilityOfPlayingEachMove,
    })}`,
  });
  graph.addNode(informationGraphvizNode);

  const rootGraphvizNode = insertNodeIntoGraph({
    currentNode: rootNode,
    explorationCoefficient,
    graph,
    idOfCurrentNode: ID_OF_ROOT,
    tuplesOfInformationOfGraphvizEdge,
  });
  graph.addEdge(
    new GraphvizEdge([informationGraphvizNode, rootGraphvizNode], {
      ...EDGE_ATTRIBUTES,
      style: "invis",
    }),
  );

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
      qualityOfNode: currentNode.getQualityOfMove(),
    });
  }

  return graph;
};

export { constructGraphvizGraph };
