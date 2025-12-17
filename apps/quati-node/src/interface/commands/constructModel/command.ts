import type { Integer, Seed } from "@repo/engine_core/types.js";

import { parseIntoInt } from "@repo/engine_core/parse.js";
import { constructModel } from "@repo/interface/actions/constructModel/action.js";
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
import { commonOptions } from "../options.js";

interface MetadataOfModel {
  keyOfGame: KeyOfGame;
  nameOfModel: string;
  quantityOfHiddenChannels: Integer;
  quantityOfResidualBlocks: Integer;
  seed: Seed;
}

const processMetadata = ({
  canOverwrite,
  filePath,
  keyOfGame,
  nameOfModel,
  quantityOfHiddenChannels,
  quantityOfResidualBlocks,
  seed,
}: MetadataOfModel &
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
      keyOfGame,
      nameOfModel,
      quantityOfHiddenChannels,
      quantityOfResidualBlocks,
      seed,
    }),
  );
};

const executeAction = async ({
  directory: directoryPathOrUndefined,
  game: keyOfGame,
  hidden: quantityOfHiddenChannels,
  name: nameOfModelOrUndefined,
  overwrite: canOverwrite,
  residual: quantityOfResidualBlocks,
  seed: seedOrUndefined,
}: {
  directory: string | undefined;
  game: KeyOfGame;
  hidden: Integer;
  name: string | undefined;
  overwrite: boolean;
  residual: Integer;
  seed: string | undefined;
}): Promise<void> => {
  const seed = seedOrUndefined ?? Math.random().toString();
  const game = selectGameUsingKeyOfGame(keyOfGame);

  const nameOfModel =
    nameOfModelOrUndefined ??
    `game(${keyOfGame})_hidden(${quantityOfHiddenChannels})_residual(${quantityOfResidualBlocks})_seed(${seed})`;

  const sanitizedFolderName = truncateFileName({
    truncatableSlice: nameOfModel,
  });
  const directoryPath = directoryPathOrUndefined ?? "./";

  const folderPath = path.resolve(
    path.join(directoryPath, sanitizedFolderName),
  );
  await createDirectory({ directoryPath: folderPath });

  const modelFilePath = path.join(folderPath, "model.json");
  const weightsFilePath = path.join(folderPath, "weights.json");
  const metadataFilePath = path.join(folderPath, "metadata.json");
  if (!canOverwrite) {
    assertFileNotExists({ filePath: modelFilePath });
    assertFileNotExists({ filePath: weightsFilePath });
    assertFileNotExists({ filePath: metadataFilePath });
  }

  await constructModel({
    game,
    nameOfModel,
    path: folderPath,
    processMessage: console.info,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
    scheme: "file",
    seed,
  });

  processMetadata({
    canOverwrite,
    filePath: metadataFilePath,
    keyOfGame,
    nameOfModel,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
    seed,
  });
};

const commandToConstructModel = {
  command: new Command("construct-model")
    .description("Construct a Residual Neural Network model.")
    .action(executeAction),
  options: [
    commonOptions.game,
    new Option(
      "--directory <path of directory>",
      "The path to the directory in which will be created the folder that will contain the architecture and the weights of the outputted model.",
    ),
    new Option(
      "--name <name of folder>",
      "The name of the folder that will be created to contain the architecture and the weights of the outputted model.",
    ),
    new Option(
      "--hidden <quantity of hidden channels>",
      "The quantity of hidden channels to construct the backbone.",
    )
      .argParser(parseIntoInt)
      .makeOptionMandatory(),
    new Option(
      "--residual <quantity of residual blocks>",
      "The quantity of residual blocks to construct the backbone.",
    )
      .argParser(parseIntoInt)
      .makeOptionMandatory(),
    commonOptions.seed,
    commonOptions.canOverwrite,
  ],
} satisfies DefinitionOfCommand;

export type { MetadataOfModel };
export { commandToConstructModel };
