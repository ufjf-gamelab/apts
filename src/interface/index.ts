import {
  Argument,
  Command,
  InvalidArgumentError,
  Option,
  program,
} from "commander";
import { WriteStream } from "fs";
import prompts from "prompts";
import TicTacToeGame from "src/games/TicTacToe/Game";
import { FileOperation, validateFilePath } from "./file";
import play from "./play";
enum GameName {
  Connect4 = "connect4",
  TicTacToe = "tictactoe",
}

export enum GameMode {
  PvP = "PvP",
  PvC = "PvC",
  CvC = "CvC",
}

interface CommandDefinition {
  command: Command;
  arguments?: Argument[];
  options?: Option[];
}

export type GetInput = (
  questions: prompts.PromptObject | prompts.PromptObject[],
) => Promise<prompts.Answers<string>>;
const getInput: GetInput = async questions => await prompts(questions);

const parseJsonFile = (filePath: string) => {
  const hasJsonExtension = filePath.endsWith(".json");
  const formattedPath = hasJsonExtension ? filePath : `${filePath}.json`;
  return validateFilePath(formattedPath, FileOperation.Write);
};

const parseGameMode = (mode: string) => {
  switch (mode.toLowerCase()) {
    case "pvp":
      return GameMode.PvP;
    case "pvc":
      return GameMode.PvC;
    case "cvc":
      return GameMode.CvC;
    default:
      throw new InvalidArgumentError("Invalid game mode.");
  }
};

const descFileAction = (game: GameName, output: WriteStream) => {
  if (game === GameName.TicTacToe) {
    const description = {
      $schema: `${process.env.SCHEMAS_DIRECTORY}/TicTacToe/schema.json`,
    };
    output.write(JSON.stringify(description));
  }
};

const playAction = async (game: string, gameMode: GameMode) => {
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
      .action(descFileAction),
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
    command: new Command("play").description("Play a game.").action(playAction),
  },

  {
    // Predict the victory probabilities of each possible next move of a state
    command: new Command("predict")
      .description(
        "Predict the victory probabilities of each possible next move of a state.",
      )
      .action(() => {
        console.log("Predicting...");
      }),
  },
];

program
  .name("apts-engine")
  .version("4.2.0")
  .description(
    "Engine to simulate and create AI models for tabletop games, inspired by the AlphaZero algorithm.",
  );

commandsDefinitions.forEach(commandDefinition => {
  if (commandDefinition.arguments) {
    commandDefinition.arguments.forEach(argument => {
      commandDefinition.command.addArgument(argument);
    });
  }
  if (commandDefinition.options) {
    commandDefinition.options.forEach(option => {
      commandDefinition.command.addOption(option);
    });
  }
  program.addCommand(commandDefinition.command);
});

export default program;
