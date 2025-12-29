import type { Integer, Seed } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ExplorationCoefficient } from "@repo/search/MonteCarloTree/Search.js";
import type { SofteningCoefficient } from "@repo/search/qualityOfMove.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/training.js";

import { formatObjectWithNotFiniteNumbers } from "@repo/core/format.js";
import { parseIntoInt } from "@repo/core/parse.js";
import { buildTrainingMemory } from "@repo/interface/actions/buildTrainingMemory/action.js";
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
  type KeyOfGame,
  selectGameUsingKeyOfGame,
} from "../../entries/games.js";
import { loadPredictionModel } from "../../load/loadModel.js";
import { commonOptions } from "../options.js";

const QUANTITY_OF_ITERATIONS = 500;

interface MetadataOfTrainingMemory {
  readonly explorationCoefficient: ExplorationCoefficient;
  readonly keyOfGame: KeyOfGame;
  readonly metadataOfModel: MetadataOfModel;
  readonly quantityOfExpansions: Integer;
  readonly quantityOfIterations: Integer;
  readonly seed: Seed;
  readonly softeningCoefficient: SofteningCoefficient;
}

const processMetadata = ({
  canOverwrite,
  explorationCoefficient,
  filePath,
  keyOfGame,
  metadataOfModel,
  quantityOfExpansions,
  quantityOfIterations,
  seed,
  softeningCoefficient,
}: MetadataOfTrainingMemory &
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
      keyOfGame,
      metadataOfModel,
      quantityOfExpansions,
      quantityOfIterations,
      seed,
      softeningCoefficient,
    }),
  );
};

const processTrainingMemory = ({
  canOverwrite,
  filePath,
  trainingMemory,
}: Pick<
  Parameters<typeof createWriteStream>[0],
  "canOverwrite" | "filePath"
> & {
  trainingMemory: TrainingMemory;
}) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  const stringifiedTrainingMemory = formatObjectWithNotFiniteNumbers({
    object: trainingMemory,
  });
  writeStream.write(stringifiedTrainingMemory);
};

const executeAction = async <
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
  announceProgress: quantityOfIterationsToAnnounceProgress,
  directory: directoryPathOrUndefined,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  folder: folderNameOrUndefined,
  game: keyOfGame,
  iterations: quantityOfIterations,
  model: pathToResidualNeuralNetworkFolder,
  overwrite: canOverwrite,
  seed: seedOrUndefined,
  softening: softeningCoefficient,
}: {
  announceProgress: Integer;
  directory: string | undefined;
  expansions: Integer;
  exploration: number;
  folder: string | undefined;
  game: KeyOfGame;
  iterations: Integer;
  model: string | undefined;
  overwrite: boolean;
  seed: string | undefined;
  softening: SofteningCoefficient;
}): Promise<void> => {
  if (typeof pathToResidualNeuralNetworkFolder === "undefined") {
    throw constructErrorForWhenPredictionModelHasNotBeenProvided();
  }

  const seed = seedOrUndefined ?? Math.random().toString();
  const game = selectGameUsingKeyOfGame(keyOfGame);

  const { metadata: metadataOfModel, predictionModel } =
    await loadPredictionModel({
      game,
      pathToResidualNeuralNetworkFolder,
    });

  const folderName =
    folderNameOrUndefined ??
    `expansions[${quantityOfExpansions}]_exploration[${explorationCoefficient}]_softening[${softeningCoefficient}]_iterations[${quantityOfIterations}]_seed[${seed}]`;
  const sanitizedFolderName = truncateFileName({
    truncatableSlice: folderName,
  });
  const directoryPath =
    typeof directoryPathOrUndefined === "undefined"
      ? path.join(pathToResidualNeuralNetworkFolder, "memories")
      : directoryPathOrUndefined;

  const folderPath = path.join(directoryPath, sanitizedFolderName);
  const trainingMemoryFilePath = path.join(folderPath, "memory.json");
  const metadataFilePath = path.join(folderPath, "metadata.json");
  if (!canOverwrite) {
    assertFileNotExists({ filePath: trainingMemoryFilePath });
    assertFileNotExists({ filePath: metadataFilePath });
  }
  await createDirectory({ directoryPath: folderPath });

  buildTrainingMemory({
    explorationCoefficient,
    predictionModel,
    processMessage: console.info,
    processTrainingMemory: trainingMemory => {
      processTrainingMemory({
        canOverwrite,
        filePath: trainingMemoryFilePath,
        trainingMemory,
      });
    },
    quantityOfExpansions,
    quantityOfIterations,
    quantityOfIterationsToAnnounceProgress,
    seed,
    softeningCoefficient,
  });

  processMetadata({
    canOverwrite,
    explorationCoefficient,
    filePath: metadataFilePath,
    keyOfGame,
    metadataOfModel,
    quantityOfExpansions,
    quantityOfIterations,
    seed,
    softeningCoefficient,
  });
};

const commandToBuildTrainingMemory = {
  command: new Command("build-training-memory")
    .description(
      "Build memory of inputs and outputs for training model via self-play.",
    )
    .action(executeAction),
  options: [
    commonOptions.game,
    commonOptions.modelPath,
    new Option(
      "--directory <path of directory>",
      "The path to the directory where the training memory will be created.",
    ),
    new Option(
      "--folder <name of folder>",
      "The name of the folder that will be created to contain the training memory.",
    ),
    commonOptions.expansions,
    commonOptions.exploration,
    new Option(
      "-i, --iterations <quantity of iterations>",
      "The quantity of iterations of the self-play process.",
    )
      .default(QUANTITY_OF_ITERATIONS)
      .argParser(parseIntoInt),
    new Option(
      "--announce-progress <quantity of iterations>",
      "The quantity of iterations to announce process of the self-play process.",
    ).argParser(parseIntoInt),
    commonOptions.softeningCoefficient,
    commonOptions.seed,
    commonOptions.canOverwrite,
  ],
} satisfies DefinitionOfCommand;

export type { MetadataOfTrainingMemory };
export { commandToBuildTrainingMemory };
