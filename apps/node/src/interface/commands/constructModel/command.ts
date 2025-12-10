import type { Integer } from "@repo/engine_core/types.js";

import { constructModel } from "@repo/interface/actions/constructModel/action.js";
import { Command, Option } from "commander";
import path from "path";

import type { DefinitionOfCommand } from "../commands.js";

import { createDirectory } from "../../../file.js";
import {
  type KeyOfGame,
  keysOfGames,
  selectGameUsingKeyOfGame,
} from "../../games.js";
import { parseArgumentIntoInt } from "../../parsing.js";
import { commonOptions } from "../options.js";

const executeAction = async ({
  directory: directoryPathOrUndefined,
  game: keyOfGame,
  hidden: quantityOfHiddenChannels,
  name: modelNameOrUndefined,
  residual: quantityOfResidualBlocks,
  seed,
}: {
  directory: string | undefined;
  game: KeyOfGame;
  hidden: Integer;
  name: string | undefined;
  residual: Integer;
  seed: string;
}): Promise<void> => {
  const modelName =
    modelNameOrUndefined ??
    `game(${keyOfGame})_hidden(${quantityOfHiddenChannels})_residual(${quantityOfResidualBlocks})`;
  const directoryPath = directoryPathOrUndefined ?? "./";
  await createDirectory({ directoryPath });
  const fullPath = path.join(directoryPath, modelName);

  const game = selectGameUsingKeyOfGame(keyOfGame);

  await constructModel({
    game,
    path: fullPath,
    processMessage: console.info,
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
    new Option(
      "--game <key-of-game>",
      "The key of a game to use to architect the model.",
    )
      .choices(Object.values(keysOfGames))
      .makeOptionMandatory(),
    new Option(
      "-d, --directory <output-directory>",
      "The path to the directory where create the model.",
    ),
    new Option(
      "-n, --name <name-of-outputted-folder-containing-model>",
      "The name of the folder where output model.",
    ),
    new Option(
      "--hidden <quantity-of-hidden-channels>",
      "The quantity of hidden channels to construct the backbone.",
    )
      .argParser(parseArgumentIntoInt)
      .makeOptionMandatory(),
    new Option(
      "--residual <quantity-of-residual-blocks>",
      "The quantity of residual blocks to construct the backbone.",
    )
      .argParser(parseArgumentIntoInt)
      .makeOptionMandatory(),
    commonOptions.seed,
  ],
} satisfies DefinitionOfCommand;

export { commandToConstructModel };
