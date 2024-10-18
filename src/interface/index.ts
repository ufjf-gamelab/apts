import { Argument, Command, Option, program } from "commander";
import { WriteStream } from "fs";
import { FileOperation, validateFilePath } from "./file";
import play from "./play";

enum GameName {
  Connect4 = "connect4",
  TicTacToe = "tictactoe",
}

program
  .name("apts-engine")
  .version("4.2.0")
  .description(
    "Engine to simulate and create AI models for tabletop games, inspired by the AlphaZero algorithm.",
  );

interface CommandDefinition {
  command: Command;
  arguments?: Argument[];
  options?: Option[];
}

const commandsDefinitions: CommandDefinition[] = [
  {
    arguments: [
      new Argument("<game>", "The game to be implemented.").choices([
        GameName.Connect4,
        GameName.TicTacToe,
      ]),
      new Argument("<output>", "The output file path.").argParser(
        (filePath: string) => {
          const hasJsonExtension = filePath.endsWith(".json");
          const formattedPath = hasJsonExtension
            ? filePath
            : `${filePath}.json`;
          return validateFilePath(formattedPath, FileOperation.Write);
        },
      ),
    ],
    command: new Command("desc-file")
      .description("Get the description file for implementing a new game.")
      .action((game: GameName, output: WriteStream) => {
        if (game === GameName.TicTacToe) {
          const description = {
            $schema: `${process.env.SCHEMAS_DIRECTORY}/TicTacToe/schema.json`,
          };
          output.write(JSON.stringify(description));
        }
      }),
  },
  {
    arguments: [
      new Argument("<game>", "The game to be played.").choices([
        GameName.Connect4,
        GameName.TicTacToe,
      ]),
    ],
    command: new Command("play")
      .description("Play a game.")
      .action((game: string) => {
        switch (game as GameName) {
          case GameName.Connect4:
            console.log("Playing Connect 4...");
            break;
          case GameName.TicTacToe:
            play();
            break;
          default:
            console.error("Invalid game.");
            break;
        }
      }),
  },
  {
    command: new Command("predict")
      .description(
        "Predict the victory probabilities of each possible next move of a state.",
      )
      .action(() => {
        console.log("Predicting...");
      }),
  },
];

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
