import type { IndexOfMove } from "@repo/game/Move.js";
import type { QualityOfMatch } from "@repo/search/MonteCarloTree/TreeNode.js";
import type {
  QualityOfMove,
  SofteningCoefficient,
} from "@repo/search/qualityOfMove.js";

import { formatObjectWithNotFiniteNumbers } from "@repo/core/format.js";
import { predictQualityOfMoves } from "@repo/interface/actions/predictQualityOfMoves/action.js";
import { constructErrorForWhenPredictionModelHasNotBeenProvided } from "@repo/interface/constructSearchBasedOnStrategy.js";
import { Command, Option } from "commander";
import path from "path";

import type { DefinitionOfCommand } from "../commands.js";
import type { MetadataOfModel } from "../constructModel/command.js";

import {
  assertFileNotExists,
  createDirectory,
  createWriteStream,
  truncateFileName,
} from "../../../file.js";
import {
  type KeyOfState,
  selectStateUsingKeyOfState,
} from "../../entries/states.js";
import { loadPredictionModel } from "../../load/loadModel.js";
import { commonOptions } from "../options.js";

interface MetadataOfPredictQualityOfMoves {
  readonly keyOfState: KeyOfState;
  readonly metadataOfModel: MetadataOfModel | null;
  readonly softeningCoefficient: SofteningCoefficient;
}

const processMetadata = ({
  canOverwrite,
  filePath,
  keyOfState,
  metadataOfModel,
  softeningCoefficient,
}: MetadataOfPredictQualityOfMoves &
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
      keyOfState,
      metadataOfModel,
      softeningCoefficient,
    }),
  );
};

interface Predictions {
  probabilityOfPlayingEachMove: null | ReadonlyMap<IndexOfMove, number>;
  qualityOfEachMove: null | ReadonlyMap<IndexOfMove, QualityOfMove>;
  qualityOfMatch: null | QualityOfMatch;
}

const processPredictions = ({
  canOverwrite,
  filePath,
  predictions: {
    probabilityOfPlayingEachMove,
    qualityOfEachMove,
    qualityOfMatch,
  },
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
  const object = formatObjectWithNotFiniteNumbers({
    object: {
      probabilityOfPlayingEachMove: probabilityOfPlayingEachMove
        ? Object.fromEntries(probabilityOfPlayingEachMove)
        : null,
      qualityOfEachMove: qualityOfEachMove
        ? Object.fromEntries(qualityOfEachMove)
        : null,
      qualityOfMatch,
    },
  });
  writeStream.write(object);
};

// eslint-disable-next-line max-statements
const executeAction = async ({
  directory: directoryPathOrUndefined,
  export: shouldExport,
  folder: folderNameOrUndefined,
  model: pathToResidualNeuralNetworkFolderOrUndefined,
  overwrite: canOverwrite,
  probabilities: shouldReturnProbabilities,
  softening: softeningCoefficient,
  state: keyOfState,
}: {
  directory: string | undefined;
  export: boolean;
  folder: string | undefined;
  model: string | undefined;
  overwrite: boolean;
  probabilities: boolean;
  softening: SofteningCoefficient;
  state: KeyOfState;
}): Promise<void> => {
  const state = selectStateUsingKeyOfState(keyOfState);
  const game = state.getGame();

  if (typeof pathToResidualNeuralNetworkFolderOrUndefined === "undefined") {
    throw constructErrorForWhenPredictionModelHasNotBeenProvided();
  }
  const { metadata: metadataOfModel, predictionModel } =
    await loadPredictionModel({
      game,
      pathToResidualNeuralNetworkFolder:
        pathToResidualNeuralNetworkFolderOrUndefined,
    });

  const expectedReturns: {
    predictions: Predictions;
  } = {
    predictions: {
      probabilityOfPlayingEachMove: null,
      qualityOfEachMove: null,
      qualityOfMatch: null,
    },
  };

  predictQualityOfMoves({
    predictionModel,
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
    processQualityOfMatch: qualityOfMatch => {
      expectedReturns.predictions.qualityOfMatch = qualityOfMatch;
    },
    softeningCoefficient,
    state,
  });

  if (shouldExport) {
    const folderName =
      typeof folderNameOrUndefined === "undefined"
        ? truncateFileName({
            prefix: "state[",
            suffix: `]_softening[${softeningCoefficient}]`,
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
    const metadataFilePath = path.join(folderPath, "metadata.json");
    const predictionsFilePath = path.join(folderPath, "predictions.json");
    if (!canOverwrite) {
      assertFileNotExists({ filePath: metadataFilePath });
      assertFileNotExists({ filePath: predictionsFilePath });
    }
    await createDirectory({ directoryPath: folderPath });

    const { predictions } = expectedReturns;

    processMetadata({
      canOverwrite,
      filePath: metadataFilePath,
      keyOfState,
      metadataOfModel,
      softeningCoefficient,
    });

    processPredictions({
      canOverwrite,
      filePath: predictionsFilePath,
      predictions,
    });
  }
};

const commandToPredictQualityOfMoves = {
  command: new Command("predict-quality")
    .description(
      "Predict quality of a Monte-Carlo Tree node using a prediction model.",
    )
    .action(executeAction),
  options: [
    commonOptions.state,
    commonOptions.modelPath,
    commonOptions.softeningCoefficient,
    new Option(
      "--export",
      "Whether to output files related to the search: predictions and metadata.",
    ).default(false),
    new Option(
      "--directory <path of directory>",
      "The path to the directory where the files related to the search will be created.",
    ),
    new Option(
      "--folder <name of folder>",
      "The name of the folder that will be created to contain the files related to the search.",
    ),
    new Option(
      "--probabilities",
      "Whether to calculate the probabilities of each move  by applying softmax.",
    ).default(false),
    commonOptions.canOverwrite,
  ],
} satisfies DefinitionOfCommand;

export { commandToPredictQualityOfMoves };
