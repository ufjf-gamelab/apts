import { recordOfSnowballTreeNodesWithData } from "@repo/games/Snowball/search/CommonMonteCarloTree/TreeNode.test/records.js";
import { recordOfTicTacToeTreeNodesWithData } from "@repo/games/TicTacToe/search/CommonMonteCarloTree/TreeNode.test/records.js";
import { constructGraph } from "@repo/interface/actions/constructGraph/action.js";
import { Command, Option } from "commander";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";

import { generateGraphvizImage } from "../../../graphviz.js";
import { parseArgumentIntoInt } from "../../parsing.js";

const EXPLORATION_CONSTANT = 1.4;
const QUANTITY_OF_SEARCHES = 1000;

const keysOfTreeNodes = {
  snowball: "snowball",
  ticTacToe: "tic-tac-toe",
} as const;

const executeAction = ({
  directory: directoryPath,
  expansions: quantityOfExpansions,
  exploration: explorationConstant,
  file: fileName,
  node: keyOfTreeNode,
}: {
  directory: string | undefined;
  expansions: number;
  exploration: number;
  file: string | undefined;
  node: string;
}): void => {
  const processGraphvizGraph = (graphvizGraph: GraphvizDigraph): void => {
    const graphvizDotString = graphvizToDot(graphvizGraph);

    generateGraphvizImage({
      directoryPath,
      fileName,
      graphvizDotString,
    }).catch((error: unknown) => {
      console.error("Error generating Graphviz image:", error);
    });
  };

  const treeNode =
    keyOfTreeNode === keysOfTreeNodes.ticTacToe
      ? recordOfTicTacToeTreeNodesWithData.currentRoot.treeNode
      : recordOfSnowballTreeNodesWithData.currentRoot.treeNode;

  constructGraph({
    explorationConstant,
    processGraphvizGraph,
    quantityOfExpansions,
    treeNode,
  });
};

const commandToGenerateGraph = {
  command: new Command("generate-graph")
    .description("Generate an image of the graph of the MCTS.")
    .action(executeAction),
  options: [
    new Option(
      "-d, --directory <output-directory>",
      "The path to the directory where create the image file.",
    ),
    new Option(
      "-f, --file <output-file-name>",
      "The name of the outputted image file (without extension).",
    ),
    new Option(
      "-n, --node <key-of-node>",
      "The key of a node to use as root of the tree.",
    ).choices(Object.values(keysOfTreeNodes)),
    new Option(
      "-x, --exploration <exploration-constant>",
      "The exploration constant for the search.",
    )
      .default(EXPLORATION_CONSTANT)
      .argParser(parseArgumentIntoInt),
    new Option(
      "-s, --expansions <quantity-of-expansions>",
      "The quantity of expansions to perform.",
    )
      .default(QUANTITY_OF_SEARCHES)
      .argParser(parseArgumentIntoInt),
  ],
} satisfies DefinitionOfCommand;

export { commandToGenerateGraph };
