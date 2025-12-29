import type { Integer, Seed } from "@repo/core/types.js";
import type { IndexOfMove } from "@repo/game/Move.js";
import type { StrategyToSearch } from "@repo/interface/constants.js";
import type { ExplorationCoefficient } from "@repo/search/MonteCarloTree/Search.js";
import type {
  QualityOfMove,
  SofteningCoefficient,
} from "@repo/search/qualityOfMove.js";

import { searchQualityOfMoves } from "@repo/interface/actions/searchQualityOfMoves/action.js";
import { Command, Option } from "commander";
import path from "path";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";
import type { MetadataOfModel } from "../constructModel/command.js";

import {
  assertFileNotExists,
  createDirectory,
  createWriteStream,
  truncateFileName,
} from "../../../file.js";
import { generateGraphvizImage } from "../../../graphviz.js";
import {
  type KeyOfState,
  selectStateUsingKeyOfState,
} from "../../entries/states.js";
import { loadPredictionModel } from "../../load/loadModel.js";
import { commonOptions } from "../options.js";

const processGraphvizGraph = ({
  filePath,
  graphvizGraph,
}: Pick<Parameters<typeof generateGraphvizImage>[0], "filePath"> & {
  graphvizGraph: GraphvizDigraph;
}) => {
  const graphvizDotString = graphvizToDot(graphvizGraph);
  generateGraphvizImage({
    filePath,
    graphvizDotString,
  }).catch((error: unknown) => {
    console.error("Error generating Graphviz image:", error);
  });
};

interface MetadataOfSearchQualityOfMoves {
  readonly explorationCoefficient: ExplorationCoefficient;
  readonly keyOfState: KeyOfState;
  readonly metadataOfModel: MetadataOfModel | null;
  readonly quantityOfExpansions: Integer;
  readonly seed: Seed;
  readonly softeningCoefficient: SofteningCoefficient;
}

const processMetadata = ({
  canOverwrite,
  explorationCoefficient,
  filePath,
  keyOfState,
  metadataOfModel,
  quantityOfExpansions,
  seed,
  softeningCoefficient,
}: MetadataOfSearchQualityOfMoves &
  Pick<
    Parameters<typeof createWriteStream>[0],
    "canOverwrite" | "filePath"
  >) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  writeStream.write(
    JSON.stringify({
      explorationCoefficient,
      keyOfState,
      metadataOfModel,
      quantityOfExpansions,
      seed,
      softeningCoefficient,
    }),
  );
};

interface Predictions {
  probabilityOfPlayingEachMove: null | ReadonlyMap<IndexOfMove, number>;
  qualityOfEachMove: null | ReadonlyMap<IndexOfMove, QualityOfMove>;
}

const processPredictions = ({
  canOverwrite,
  filePath,
  predictions: { probabilityOfPlayingEachMove, qualityOfEachMove },
}: Pick<
  Parameters<typeof createWriteStream>[0],
  "canOverwrite" | "filePath"
> & {
  predictions: Predictions;
}) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  writeStream.write(
    JSON.stringify({
      probabilityOfPlayingEachMove: probabilityOfPlayingEachMove
        ? Object.fromEntries(probabilityOfPlayingEachMove)
        : null,
      qualityOfEachMove: qualityOfEachMove
        ? Object.fromEntries(qualityOfEachMove)
        : null,
    }),
  );
};

// eslint-disable-next-line max-statements
const executeAction = async ({
  directory: directoryPathOrUndefined,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  export: shouldExport,
  folder: folderNameOrUndefined,
  model: pathToResidualNeuralNetworkFolderOrUndefined,
  overwrite: canOverwrite,
  probabilities: shouldReturnProbabilities,
  seed: seedOrUndefined,
  softening: softeningCoefficient,
  state: keyOfState,
  strategy: strategyToSearch,
}: {
  directory: string | undefined;
  expansions: number;
  exploration: number;
  export: boolean;
  folder: string | undefined;
  model: string | undefined;
  overwrite: boolean;
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
    });
  })();

  const expectedReturns: {
    graphvizGraph: GraphvizDigraph | null;
    predictions: Predictions;
  } = {
    graphvizGraph: null,
    predictions: {
      probabilityOfPlayingEachMove: null,
      qualityOfEachMove: null,
    },
  };

  searchQualityOfMoves({
    explorationCoefficient,
    predictionModel: predictionModelAndMetadataOrNull
      ? predictionModelAndMetadataOrNull.predictionModel
      : null,
    processGraphvizGraph: shouldExport
      ? graphvizGraph => {
          expectedReturns.graphvizGraph = graphvizGraph;
        }
      : null,
    processMessage: console.info,
    processProbabilityPlayingEachMove: shouldReturnProbabilities
      ? probabilityOfPlayingEachMove => {
          expectedReturns.predictions.probabilityOfPlayingEachMove =
            probabilityOfPlayingEachMove;
        }
      : null,
    processQualityOfEachMove: qualityOfEachMove => {
      expectedReturns.predictions.qualityOfEachMove = qualityOfEachMove;
    },
    quantityOfExpansions,
    seed,
    softeningCoefficient,
    state,
    strategyToSearch,
  });

  if (shouldExport) {
    const folderName =
      typeof folderNameOrUndefined === "undefined"
        ? truncateFileName({
            prefix: "state[",
            suffix: `]_strategy[${strategyToSearch}]_expansions[${quantityOfExpansions}]_exploration[${explorationCoefficient}]_softening[${softeningCoefficient}]_seed[${seed}]`,
            truncatableSlice: keyOfState,
          })
        : folderNameOrUndefined;
    const sanitizedFolderName = truncateFileName({
      truncatableSlice: folderName,
    });
    const directoryPath =
      typeof directoryPathOrUndefined === "undefined"
        ? "./"
        : directoryPathOrUndefined;

    const folderPath = path.join(directoryPath, sanitizedFolderName);
    const imageFilePath = path.join(folderPath, "image.svg");
    const metadataFilePath = path.join(folderPath, "metadata.json");
    const predictionsFilePath = path.join(folderPath, "predictions.json");
    if (!canOverwrite) {
      assertFileNotExists({ filePath: imageFilePath });
      assertFileNotExists({ filePath: metadataFilePath });
      assertFileNotExists({ filePath: predictionsFilePath });
    }
    await createDirectory({ directoryPath: folderPath });

    const { graphvizGraph, predictions } = expectedReturns;

    processMetadata({
      canOverwrite,
      explorationCoefficient,
      filePath: metadataFilePath,
      keyOfState,
      metadataOfModel: predictionModelAndMetadataOrNull?.metadata ?? null,
      quantityOfExpansions,
      seed,
      softeningCoefficient,
    });

    processPredictions({
      canOverwrite,
      filePath: predictionsFilePath,
      predictions,
    });

    if (graphvizGraph) {
      processGraphvizGraph({
        filePath: imageFilePath,
        graphvizGraph,
      });
    }
  }
};

const commandToSearchQualityOfMoves = {
  command: new Command("search-quality")
    .description("Search quality of a Monte-Carlo Tree node.")
    .action(executeAction),
  options: [
    commonOptions.state,
    commonOptions.strategyToSearch,
    commonOptions.modelPath,
    commonOptions.expansions,
    commonOptions.exploration,
    commonOptions.softeningCoefficient,
    new Option(
      "--export",
      "Whether to output files related to the search: predictions, search tree image, metadata.",
    ).default(false),
    new Option(
      "--directory <path of directory>",
      "The path to the directory where the files related to the search will be created.",
    ),
    new Option(
      "--folder <name of folder>",
      "The name of the folder that will be created to contain the files related to the search.",
    ),
    commonOptions.seed,
    new Option(
      "--probabilities",
      "Whether to calculate the probabilities of each move after the search has completed by applying softmax.",
    ).default(false),
    commonOptions.canOverwrite,
  ],
} satisfies DefinitionOfCommand;

export { commandToSearchQualityOfMoves };
