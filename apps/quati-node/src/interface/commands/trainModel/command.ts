import type { Integer, Seed } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { Logs } from "@repo/search/ResidualNeuralNetwork/training.js";

import { parseIntoInt } from "@repo/core/parse.js";
import { applyAllReplacers } from "@repo/core/replacers.js";
import { trainModel } from "@repo/interface/actions/trainModel/action.js";
import { Command, Option } from "commander";
import path from "path";

import type { MetadataOfTrainingMemory } from "../buildTrainingMemory/command.js";
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
import { loadResidualNeuralNetwork } from "../../load/loadModel.js";
import { loadTrainingMemory } from "../../load/loadTrainingMemory.js";
import { commonOptions } from "../options.js";

const QUANTITY_OF_EPOCHS = 4;
const SIZE_OF_BATCH = 64;

const processArrayOfLogs = ({
  arrayOfLogs,
  canOverwrite,
  filePath,
}: NonNullable<Pick<Parameters<typeof createWriteStream>[0], "filePath">> &
  Pick<Parameters<typeof createWriteStream>[0], "canOverwrite"> & {
    arrayOfLogs: Logs[];
  }) => {
  const writeStream = createWriteStream({ canOverwrite, filePath });
  const recordOfLogs = arrayOfLogs.reduce<Record<string, Logs>>(
    (accumulator, logs, indexOfLogs) => {
      accumulator[indexOfLogs] = logs;
      return accumulator;
    },
    {},
  );
  const content = JSON.stringify(recordOfLogs, applyAllReplacers);
  writeStream.write(content);
};

const processMetadata = ({
  canOverwrite,
  filePath,
  keyOfGame,
  metadataOfModel,
  metadataOfTrainingMemory,
  quantityOfEpochs,
  seed,
  sizeOfBatch,
}: Pick<
  Parameters<typeof createWriteStream>[0],
  "canOverwrite" | "filePath"
> & {
  keyOfGame: KeyOfGame;
  metadataOfModel: MetadataOfModel;
  metadataOfTrainingMemory: MetadataOfTrainingMemory;
  quantityOfEpochs: Integer;
  seed: Seed;
  sizeOfBatch: Integer;
}) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  writeStream.write(
    JSON.stringify({
      keyOfGame,
      metadataOfModel,
      metadataOfTrainingMemory,
      quantityOfEpochs,
      seed,
      sizeOfBatch,
    }),
  );
};

// eslint-disable-next-line max-statements
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
  batch: sizeOfBatch,
  directory: directoryPathOrUndefined,
  epochs: quantityOfEpochs,
  game: keyOfGame,
  memory: pathToTrainingMemoryFolder,
  model: pathToResidualNeuralNetworkFolder,
  name: nameOfModelOrUndefined,
  overwrite: canOverwrite,
  seed: seedOrUndefined,
}: {
  batch: Integer;
  directory: string | undefined;
  epochs: Integer;
  game: KeyOfGame;
  memory: string | undefined;
  model: string | undefined;
  name: string | undefined;
  overwrite: boolean;
  seed: string | undefined;
}): Promise<void> => {
  if (typeof pathToResidualNeuralNetworkFolder === "undefined") {
    throw new Error(
      "To train a model, it is necessary to inform the path of the architecture of the model.",
    );
  }
  if (typeof pathToTrainingMemoryFolder === "undefined") {
    throw new Error(
      "To train a model, it is necessary to inform the path of the training memory.",
    );
  }

  const { metadata: metadataOfTrainingMemory, trainingMemory } =
    await loadTrainingMemory<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      pathToTrainingMemoryFolder,
    });

  const game = selectGameUsingKeyOfGame(keyOfGame);

  const { metadata: metadataOfModel, residualNeuralNetwork } =
    await loadResidualNeuralNetwork({
      game,
      pathToResidualNeuralNetworkFolder,
    });

  const time = Date.now().toString();
  const nameOfModel =
    nameOfModelOrUndefined ??
    `${residualNeuralNetwork.getName()}_time[${time}]`;

  const sanitizedFolderName = truncateFileName({
    truncatableSlice: nameOfModel,
  });
  const directoryPath =
    typeof directoryPathOrUndefined === "undefined"
      ? path.join(pathToTrainingMemoryFolder, "trained")
      : directoryPathOrUndefined;

  const folderPath = path.join(directoryPath, sanitizedFolderName);
  const modelFilePath = path.join(folderPath, "model.json");
  const weightsFilePath = path.join(folderPath, "weights.json");
  const metadataFilePath = path.join(folderPath, "metadata.json");
  const logsFilePath = path.join(folderPath, "logs.json");
  if (!canOverwrite) {
    assertFileNotExists({ filePath: modelFilePath });
    assertFileNotExists({ filePath: weightsFilePath });
    assertFileNotExists({ filePath: metadataFilePath });
    assertFileNotExists({ filePath: logsFilePath });
  }
  await createDirectory({ directoryPath: folderPath });

  await trainModel({
    path: folderPath,
    processArrayOfLogs: arrayOfLogs => {
      processArrayOfLogs({
        arrayOfLogs,
        canOverwrite,
        filePath: logsFilePath,
      });
    },
    processMessage: console.info,
    quantityOfEpochs,
    residualNeuralNetwork,
    scheme: "file",
    sizeOfBatch,
    trainingMemory,
  });

  const seed = seedOrUndefined ?? Math.random().toString();

  processMetadata({
    canOverwrite,
    filePath: metadataFilePath,
    keyOfGame,
    metadataOfModel,
    metadataOfTrainingMemory,
    quantityOfEpochs,
    seed,
    sizeOfBatch,
  });
};

const commandToTrainModel = {
  command: new Command("train")
    .description("Train model using already exported training memory.")
    .action(executeAction),
  options: [
    commonOptions.game,
    commonOptions.modelPath,
    new Option(
      "--memory <path of memory>",
      "The path to the folder that contains the memory file to be used to train the model.",
    ),
    new Option(
      "--directory <path of directory>",
      "The path to the directory in which will be created the folder that will contain the architecture and the weights of the trained model.",
    ),
    new Option(
      "--name <name of folder>",
      "The name of the folder that will be created to contain the architecture and the weights of the trained model.",
    ),
    new Option(
      "--batch <size of batch>",
      "Size of batch used on the training process.",
    )
      .default(SIZE_OF_BATCH)
      .argParser(parseIntoInt),
    new Option(
      "--epochs <quantity of epochs>",
      "The quantity of epochs of the training process.",
    )
      .default(QUANTITY_OF_EPOCHS)
      .argParser(parseIntoInt),
    commonOptions.seed,
    new Option("--overwrite", "Can overwrite the training memory file."),
  ],
} satisfies DefinitionOfCommand;

export { commandToTrainModel };
