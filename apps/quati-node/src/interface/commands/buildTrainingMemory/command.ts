import type { Integer, Seed } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ExplorationCoefficient } from "@repo/search/MonteCarloTree/Search.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";
import type { SofteningCoefficient } from "@repo/search/qualityOfMove.js";
import type {
  MemoryOfMatch,
  TrainingMemory,
} from "@repo/search/ResidualNeuralNetwork/memory.js";

import { parseIntoInt } from "@repo/core/parse.js";
import { applyAllReplacers } from "@repo/core/replacers.js";
import { buildTrainingMemory } from "@repo/interface/actions/buildTrainingMemory/action.js";
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

const processMemoryOfMatches = ({
  canOverwrite,
  filePath,
  memoryOfMatches,
}: Pick<
  Parameters<typeof createWriteStream>[0],
  "canOverwrite" | "filePath"
> & {
  memoryOfMatches: MemoryOfMatch[];
}) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  const content = JSON.stringify(memoryOfMatches, applyAllReplacers);
  writeStream.write(content);
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
  const content = JSON.stringify(trainingMemory, applyAllReplacers);
  writeStream.write(content);
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  announceProgress: quantityOfIterationsToAnnounceProgress,
  directory: directoryPathOrUndefined,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  folder: folderNameOrUndefined,
  game: keyOfGame,
  iterations: quantityOfIterations,
  model: pathToResidualNeuralNetworkFolderOrUndefined,
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
  const pathToResidualNeuralNetworkFolder =
    pathToResidualNeuralNetworkFolderOrUndefined ?? path.resolve(".");

  const seed = seedOrUndefined ?? Math.random().toString();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const game = selectGameUsingKeyOfGame(keyOfGame) as unknown as GenericGame;

  const { metadata: metadataOfModel, predictionModel } =
    await loadPredictionModel<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
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
  const memoryOfMatchesFilePath = path.join(folderPath, "memoryOfMatches.json");
  const trainingMemoryFilePath = path.join(folderPath, "trainingMemory.json");
  const metadataFilePath = path.join(folderPath, "metadata.json");
  if (!canOverwrite) {
    assertFileNotExists({ filePath: memoryOfMatchesFilePath });
    assertFileNotExists({ filePath: trainingMemoryFilePath });
    assertFileNotExists({ filePath: metadataFilePath });
  }
  await createDirectory({ directoryPath: folderPath });

  buildTrainingMemory<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >({
    explorationCoefficient,
    predictionModel,
    processMemoryOfMatches: memoryOfMatches => {
      processMemoryOfMatches({
        canOverwrite,
        filePath: memoryOfMatchesFilePath,
        memoryOfMatches,
      });
    },
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
    new Option(
      "--directory <path of directory>",
      "The path to the directory where the training memory will be created.",
    ),
    new Option(
      "--folder <name of folder>",
      "The name of the folder that will be created to contain the training memory.",
    ),
    commonOptions.canOverwrite,
  ],
} satisfies DefinitionOfCommand;

export type { MetadataOfTrainingMemory };
export { commandToBuildTrainingMemory };
