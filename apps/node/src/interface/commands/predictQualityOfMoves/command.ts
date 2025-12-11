import type { IndexOfMove } from "@repo/game/Move.js";
import type { StrategyToSearch } from "@repo/interface/constants.js";
import type {
  QualityOfMove,
  SofteningCoefficient,
} from "@repo/search/quality.js";

import { predictQualityOfMoves } from "@repo/interface/actions/predictQualityOfMoves/action.js";
import { Command, Option } from "commander";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";

import { truncateFileName } from "../../../file.js";
import { generateGraphvizImage } from "../../../graphviz.js";
import { type KeyOfState, selectStateUsingKeyOfState } from "../../states.js";
import { commonOptions } from "../options.js";

const QUANTITY_OF_CHARACTERS_ON_FILE_EXTENSION = 4;

const executeAction = ({
  directory: directoryPathOrUndefined,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  file: fileNameOrUndefined,
  graph: shouldConstructGraph,
  seed,
  softening: softeningCoefficient,
  softmax: shouldReturnProbabilities,
  state: keyOfState,
  strategy: strategyToSearch,
}: {
  directory: string | undefined;
  expansions: number;
  exploration: number;
  file: string | undefined;
  graph: boolean;
  seed: string;
  softening: SofteningCoefficient;
  softmax: boolean;
  state: KeyOfState;
  strategy: StrategyToSearch;
}): void => {
  const processQualityOfMoves = (
    qualitiesOfMoves: ReadonlyMap<IndexOfMove, QualityOfMove>,
  ): void => {
    console.info(qualitiesOfMoves);
  };

  const fileName = (() => {
    const processedFileName = (() => {
      if (typeof fileNameOrUndefined === "undefined") {
        return truncateFileName({
          prefix: "state(",
          reduceQuantityOfMaximumCharacters:
            QUANTITY_OF_CHARACTERS_ON_FILE_EXTENSION,
          suffix: `)_strategy(${strategyToSearch})_expansions(${quantityOfExpansions})_exploration(${explorationCoefficient})_softening(${softeningCoefficient})_seed(${seed})`,
          truncatableSlice: keyOfState,
        });
      }
      return fileNameOrUndefined;
    })();
    return truncateFileName({
      suffix: ".svg",
      truncatableSlice: processedFileName,
    });
  })();

  const processGraphvizGraph = shouldConstructGraph
    ? (graphvizGraph: GraphvizDigraph): void => {
        const graphvizDotString = graphvizToDot(graphvizGraph);
        generateGraphvizImage({
          directoryPath: directoryPathOrUndefined,
          fileName,
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
    processMessage: console.info,
    processQualityOfMoves,
    quantityOfExpansions,
    seed,
    shouldReturnProbabilities,
    softeningCoefficient,
    state,
    strategyToSearch,
  });
};

const commandToPredictQualityOfMoves = {
  command: new Command("predict-quality")
    .description("Predict quality of a Monte-Carlo Tree node.")
    .action(executeAction),
  options: [
    commonOptions.state,
    commonOptions.strategyToSearch,
    commonOptions.expansions,
    commonOptions.exploration,
    commonOptions.softeningCoefficient,
    new Option(
      "-g, --graph",
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
    new Option(
      "--softmax",
      "Whether to apply softmax to normalize quality of moves.",
    ).default(false),
  ],
} satisfies DefinitionOfCommand;

export { commandToPredictQualityOfMoves };
