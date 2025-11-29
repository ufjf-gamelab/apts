import type { Digraph as GraphvizDigraph } from "ts-graphviz";

import { recordOfTicTacToeTreeNodesWithData } from "@repo/games/TicTacToe/search/CommonMonteCarloTree/TreeNode.test/records.js";

import { constructGraphvizGraph } from "../../graphviz.js";

const constructGraph = (
  processGraphvizGraph: (graphvizGraph: GraphvizDigraph) => void,
): void => {
  const { treeNode } = recordOfTicTacToeTreeNodesWithData.thisRoot;
  const graph = constructGraphvizGraph({
    rootNode: treeNode,
  });
  processGraphvizGraph(graph);
};

export { constructGraph };
