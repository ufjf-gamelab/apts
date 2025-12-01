import type { IndexOfMove } from "@repo/game/Move.js";
import type { QualityOfMove } from "@repo/search/CommonMonteCarloTree/search/search.js";

import { predictQualityOfMoves } from "@repo/interface/actions/predictQualityOfMoves/action.js";
import { Command, Option } from "commander";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";

import { generateGraphvizImage } from "../../../graphviz.js";
import { type KeyOfState, selectStateUsingKeyOfState } from "../../states.js";
import { commonOptions } from "../options.js";

const executeAction = ({
  directory: directoryPath,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  file: fileName,
  seed,
  state: keyOfState,
  tree: shouldConstructGraph,
}: {
  directory: string | undefined;
  expansions: number;
  exploration: number;
  file: string | undefined;
  seed: string;
  state: KeyOfState;
  tree: boolean;
}): void => {
  const processQualityOfMoves = (
    qualityOfMoves: Map<IndexOfMove, QualityOfMove>,
  ): void => {
    console.info(qualityOfMoves);
  };

  const processGraphvizGraph = shouldConstructGraph
    ? (graphvizGraph: GraphvizDigraph): void => {
        const graphvizDotString = graphvizToDot(graphvizGraph);
        generateGraphvizImage({
          directoryPath,
          fileName:
            fileName ??
            `state(${keyOfState})_expansions(${quantityOfExpansions})_exploration(${explorationCoefficient})_seed(${seed})`,
          graphvizDotString,
        }).catch((error: unknown) => {
          console.error("Error generating Graphviz image:", error);
        });
      }
    : null;

  const state = selectStateUsingKeyOfState(keyOfState);

  predictQualityOfMoves({
    explorationCoefficient,
    processGraphvizGraph,
    processQualityOfMoves,
    quantityOfExpansions,
    seed,
    state,
  });
};

const commandToPredictQualityOfMoves = {
  command: new Command("predict-quality")
    .description("Predict quality of a Monte-Carlo Tree node.")
    .action(executeAction),
  options: [
    commonOptions.state,
    commonOptions.expansions,
    commonOptions.exploration,
    new Option(
      "-t, --tree",
      "Whether to output an image file of the search tree.",
    ).default(false),
    new Option(
      "-d, --directory <output-directory>",
      "The path to the directory where create the image file.",
    ),
    new Option(
      "-f, --file <output-file-name>",
      "The name of the outputted image file (without extension).",
    ),
    commonOptions.seed,
  ],
} satisfies DefinitionOfCommand;

export { commandToPredictQualityOfMoves };
