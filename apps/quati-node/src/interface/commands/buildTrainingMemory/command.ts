import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { SofteningCoefficient } from "@repo/search/qualityOfMove.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/Trainer.js";

import { buildTrainingMemory } from "@repo/interface/actions/buildTrainingMemory/action.js";
import { constructErrorForWhenAgentGuidedSearchHasNotAPredictionModel } from "@repo/interface/constructSearchBasedOnStrategy.js";
import { Command, Option } from "commander";
import path from "path";

import type { DefinitionOfCommand } from "../commands.js";

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
import { loadPredictionModel } from "../../loadPredictionModel.js";
import { parseArgumentIntoInt } from "../../parsing.js";
import { commonOptions } from "../options.js";

const QUANTITY_OF_ITERATIONS = 500;

const processTrainingMemory = ({
  canOverwrite,
  filePath,
  trainingMemory,
}: NonNullable<Pick<Parameters<typeof createWriteStream>[0], "filePath">> &
  Pick<Parameters<typeof createWriteStream>[0], "canOverwrite"> & {
    trainingMemory: TrainingMemory;
  }) => {
  const writeStream = createWriteStream({ canOverwrite, filePath });
  writeStream.write(
    JSON.stringify(trainingMemory, (_, value: number) => {
      if (value === Infinity) {
        return "Infinity";
      }
      if (value === -Infinity) {
        return "-Infinity";
      }
      return value;
    }),
  );
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
  file: fileNameOrUndefined,
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
  file: string | undefined;
  game: KeyOfGame;
  iterations: Integer;
  model: string | undefined;
  overwrite: boolean;
  seed: string | undefined;
  softening: SofteningCoefficient;
}): Promise<void> => {
  if (typeof pathToResidualNeuralNetworkFolder === "undefined") {
    throw constructErrorForWhenAgentGuidedSearchHasNotAPredictionModel();
  }

  const seed = seedOrUndefined ?? Math.random().toString();
  const game = selectGameUsingKeyOfGame(keyOfGame);

  const predictionModel = await loadPredictionModel({
    game,
    pathToResidualNeuralNetworkFolder,
    seed,
  });

  const nameOfModel = predictionModel.getName();
  const nameOfTrainingMemoryFile =
    fileNameOrUndefined ??
    `model(${nameOfModel})_iterations(${quantityOfIterations})_expansions(${quantityOfExpansions})_exploration(${explorationCoefficient})_softening(${softeningCoefficient})_seed(${seed})`;

  const fileName = truncateFileName({
    suffix: ".json",
    truncatableSlice: nameOfTrainingMemoryFile,
  });

  const directoryPath =
    typeof directoryPathOrUndefined === "undefined"
      ? path.join(
          truncateFileName({
            truncatableSlice: pathToResidualNeuralNetworkFolder,
          }),
          "memories",
        )
      : truncateFileName({
          truncatableSlice: directoryPathOrUndefined,
        });

  await createDirectory({ directoryPath });
  const fullPath = path.resolve(path.join(directoryPath, fileName));
  if (!canOverwrite) {
    assertFileNotExists({
      filePath: fullPath,
    });
  }

  buildTrainingMemory({
    explorationCoefficient,
    logMessage: console.info,
    predictionModel,
    processTrainingMemory: trainingMemory => {
      processTrainingMemory({
        canOverwrite,
        filePath: fullPath,
        trainingMemory,
      });
    },
    quantityOfExpansions,
    quantityOfIterations,
    quantityOfIterationsToAnnounceProgress,
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
    new Option("--file <file name>", "The name of the training memory file."),
    commonOptions.expansions,
    commonOptions.exploration,
    new Option(
      "-i, --iterations <quantity of iterations>",
      "The quantity of iterations of the self-play process.",
    )
      .default(QUANTITY_OF_ITERATIONS)
      .argParser(parseArgumentIntoInt),
    new Option(
      "--announce-progress <quantity of iterations>",
      "The quantity of iterations to announce process of the self-play process.",
    ).argParser(parseArgumentIntoInt),
    commonOptions.softeningCoefficient,
    commonOptions.seed,
    new Option("--overwrite", "Can overwrite the training memory file."),
  ],
} satisfies DefinitionOfCommand;

export { commandToBuildTrainingMemory };
