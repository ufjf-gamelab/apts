import type { IndexOfMove } from "@repo/game/Move.js";
import type { StrategyToSearch } from "@repo/interface/constants.js";
import type {
  QualityOfMove,
  SofteningCoefficient,
} from "@repo/search/qualityOfMove.js";

import { predictQualityOfMoves } from "@repo/interface/actions/predictQualityOfMoves/action.js";
import { Command, Option } from "commander";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";

import { truncateFileName } from "../../../file.js";
import { generateGraphvizImage } from "../../../graphviz.js";
import {
  type KeyOfState,
  selectStateUsingKeyOfState,
} from "../../entries/states.js";
import { loadPredictionModel } from "../../loadModel.js";
import { commonOptions } from "../options.js";

const QUANTITY_OF_CHARACTERS_ON_FILE_EXTENSION = 4;

const processQualityOfMoves = (
  qualitiesOfMoves: ReadonlyMap<IndexOfMove, QualityOfMove>,
): void => {
  console.info(qualitiesOfMoves);
};

const processGraphvizGraph = ({
  directoryPath,
  fileName,
  shouldConstructGraph,
}: Pick<
  Parameters<typeof generateGraphvizImage>[0],
  "directoryPath" | "fileName"
> & { shouldConstructGraph: boolean }) =>
  shouldConstructGraph
    ? (graphvizGraph: GraphvizDigraph): void => {
        const graphvizDotString = graphvizToDot(graphvizGraph);
        generateGraphvizImage({
          directoryPath,
          fileName,
          graphvizDotString,
        }).catch((error: unknown) => {
          console.error("Error generating Graphviz image:", error);
        });
      }
    : null;

const executeAction = async ({
  directory: directoryPathOrUndefined,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  exportTree: shouldConstructGraph,
  file: fileNameOrUndefined,
  model: pathToResidualNeuralNetworkFolderOrUndefined,
  probabilities: shouldReturnProbabilities,
  seed: seedOrUndefined,
  softening: softeningCoefficient,
  state: keyOfState,
  strategy: strategyToSearch,
}: {
  directory: string | undefined;
  expansions: number;
  exploration: number;
  exportTree: boolean;
  file: string | undefined;
  model: string | undefined;
  probabilities: boolean;
  seed: string | undefined;
  softening: SofteningCoefficient;
  state: KeyOfState;
  strategy: StrategyToSearch;
}): Promise<void> => {
  const seed = seedOrUndefined ?? Math.random().toString();
  const state = selectStateUsingKeyOfState(keyOfState);
  const game = state.getGame();

  const predictionModelAndMetadataOrNull = await (async () => {
    if (typeof pathToResidualNeuralNetworkFolderOrUndefined === "undefined") {
      return null;
    }
    return await loadPredictionModel({
      game,
      pathToResidualNeuralNetworkFolder:
        pathToResidualNeuralNetworkFolderOrUndefined,
      seed,
    });
  })();

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

  predictQualityOfMoves({
    explorationCoefficient,
    predictionModel: predictionModelAndMetadataOrNull
      ? predictionModelAndMetadataOrNull.predictionModel
      : null,
    processGraphvizGraph: processGraphvizGraph({
      directoryPath: directoryPathOrUndefined,
      fileName,
      shouldConstructGraph,
    }),
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
    commonOptions.modelPath,
    commonOptions.expansions,
    commonOptions.exploration,
    commonOptions.softeningCoefficient,
    new Option(
      "--export-tree",
      "Whether to output an image file of the search tree.",
    ).default(false),
    new Option(
      "--directory <path of directory>",
      "The path to the directory where the image file of the search tree will be created.",
    ),
    new Option(
      "--file <file name>",
      "The name of the image file of the search tree (without extension).",
    ),
    commonOptions.seed,
    new Option(
      "--probabilities",
      "Whether to calculate the probabilities of each move after the search has completed by applying softmax.",
    ).default(false),
  ],
} satisfies DefinitionOfCommand;

export { commandToPredictQualityOfMoves };
