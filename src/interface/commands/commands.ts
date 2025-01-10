import { Argument, Command, Option } from "commander";
import { WriteStream } from "fs";
import TicTacToeGame from "../../games/TicTacToe/Game";
import { parseGameMode, parseJsonFile } from "../parsing";
import { getInput } from "../program";
import { GameMode, GameName } from "../types";
import play from "./play/play";
import predict from "./predict/predict";

interface CommandDefinition {
  command: Command;
  arguments?: Argument[];
  options?: Option[];
}

const actionToGenerateGameDescriptionFile = (
  game: GameName,
  output: WriteStream,
) => {
  if (game === GameName.TicTacToe) {
    const description = {
      $schema: `${process.env.SCHEMAS_DIRECTORY}/TicTacToe/schema.json`,
    };
    output.write(JSON.stringify(description));
  }
};

const actionToStartGameplay = async (game: string, gameMode: GameMode) => {
  switch (game as GameName) {
    case GameName.Connect4:
      console.log("Playing Connect 4...");
      break;
    case GameName.TicTacToe:
      await play({
        game: new TicTacToeGame({
          quantityOfColumns: 3,
          quantityOfRows: 3,
        }),
        gameMode,
        getInput,
      });
      break;
    default:
      console.error("Invalid game.");
      break;
  }
};

const actionToPredictProbabilities = async () => {
  await predict();
};

const commandsDefinitions: CommandDefinition[] = [
  {
    // Get the description file for implementing a new game
    arguments: [
      new Argument("<game>", "The game to be implemented.")
        .choices([GameName.Connect4, GameName.TicTacToe])
        .argRequired(),
      new Argument("<output>", "The output file path.").argParser(
        parseJsonFile,
      ),
    ],
    command: new Command("desc-file")
      .description("Get the description file for implementing a new game.")
      .action(actionToGenerateGameDescriptionFile),
  },

  {
    // Play a game
    arguments: [
      new Argument("<game>", "The game to be played.")
        .choices([GameName.Connect4, GameName.TicTacToe])
        .argRequired(),
      new Argument("[mode]", "The game mode.")
        .choices([GameMode.PvP, GameMode.PvC, GameMode.CvC])
        .argParser(parseGameMode)
        .argRequired(),
    ],
    command: new Command("play")
      .description("Play a game.")
      .action(actionToStartGameplay),
  },

  {
    // Predict the victory probabilities of each possible next move of a state
    command: new Command("predict")
      .description(
        "Predict the victory probabilities of each possible next move of a state.",
      )
      .action(actionToPredictProbabilities),
  },
];

export default commandsDefinitions;
