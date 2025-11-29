import { actions } from "@repo/interface/actions/actions.js";
import { Command, Option } from "commander";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";

import { generateGraphvizImage } from "../../../graphviz.js";

const executeAction = ({
  directory: directoryPath,
  file: fileName,
}: {
  directory: string | undefined;
  file: string | undefined;
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

  actions.constructGraph(processGraphvizGraph);
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
  ],
} satisfies DefinitionOfCommand;

export { commandToGenerateGraph };
