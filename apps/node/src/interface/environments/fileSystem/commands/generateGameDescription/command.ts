import { Argument, Command } from "commander";
import actions from "../../../../actions/actions";
import { GameName } from "../../../../types";
import { parseJsonFile } from "../../parsing";

const action = (gameName: GameName): void => {
  const gameDescription = actions.generateGameDescription(gameName);
  console.log(gameDescription);
};

const generateGameDescription = {
  arguments: [
    new Argument("<game>", "The game to be implemented.")
      .choices([GameName.Connect4, GameName.TicTacToe])
      .argRequired(),
    new Argument("<output>", "The output file path.").argParser(parseJsonFile),
  ],
  command: new Command("desc-file")
    .description("Get the description file for implementing a new game.")
    .action(action),
};

export default generateGameDescription;
