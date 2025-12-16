import type { Integer } from "@repo/engine_core/types.js";

import { constructModel } from "@repo/interface/actions/constructModel/action.js";
import { Command, Option } from "commander";
import path from "path";

import type { DefinitionOfCommand } from "../commands.js";

import { createDirectory, truncateFileName } from "../../../file.js";
import {
  type KeyOfGame,
  selectGameUsingKeyOfGame,
} from "../../entries/games.js";
import { parseArgumentIntoInt } from "../../parsing.js";
import { commonOptions } from "../options.js";

const executeAction = async ({
  directory: directoryPathOrUndefined,
  game: keyOfGame,
  hidden: quantityOfHiddenChannels,
  name: nameOfModelOrUndefined,
  residual: quantityOfResidualBlocks,
  seed: seedOrUndefined,
}: {
  directory: string | undefined;
  game: KeyOfGame;
  hidden: Integer;
  name: string | undefined;
  residual: Integer;
  seed: string | undefined;
}): Promise<void> => {
  const seed = seedOrUndefined ?? Math.random().toString();
  const nameOfModel =
    nameOfModelOrUndefined ??
    `game(${keyOfGame})_hidden(${quantityOfHiddenChannels})_residual(${quantityOfResidualBlocks})_seed(${seed})`;

  const folderName = truncateFileName({
    truncatableSlice: nameOfModel,
  });

  const directoryPath = directoryPathOrUndefined ?? "./";
  const fullPath = path.resolve(path.join(directoryPath, folderName));
  await createDirectory({ directoryPath: fullPath });

  const game = selectGameUsingKeyOfGame(keyOfGame);

  await constructModel({
    game,
    logMessage: console.info,
    nameOfModel,
    path: fullPath,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
    scheme: "file",
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
      .argParser(parseArgumentIntoInt)
      .makeOptionMandatory(),
    new Option(
      "--residual <quantity of residual blocks>",
      "The quantity of residual blocks to construct the backbone.",
    )
      .argParser(parseArgumentIntoInt)
      .makeOptionMandatory(),
    commonOptions.seed,
  ],
} satisfies DefinitionOfCommand;

export { commandToConstructModel };
