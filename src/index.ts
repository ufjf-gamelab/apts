import {
  Argument,
  Command,
  InvalidArgumentError,
  Option,
  program,
} from "commander";
import dotenv from "dotenv";
import fs, { ReadStream, WriteStream } from "fs";
import path from "path";
import play from "./interface/play";

enum GameName {
  Connect4 = "connect4",
  TicTacToe = "tictactoe",
}

enum FileOperation {
  Read = "r",
  Write = "wx",
  Overwrite = "w+",
}

const createReadStream = (filePath: string): ReadStream => {
  try {
    return fs.createReadStream(filePath);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new InvalidArgumentError(
        `\n  Failed to create read stream: ${error.message}`,
      );
    }
    throw new InvalidArgumentError(
      "\n  An unknown error occurred while creating read stream.",
    );
  }
};

const createWriteStream = (filePath: string): WriteStream => {
  try {
    return fs.createWriteStream(filePath);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new InvalidArgumentError(
        `\n  Failed to create write stream: ${error.message}`,
      );
    }
    throw new InvalidArgumentError(
      "\n  An unknown error occurred while creating write stream.",
    );
  }
};

const validateFilePath = (
  filePath: string,
  fileOperation: FileOperation,
): ReadStream | WriteStream => {
  const resolvedPath = path.resolve(filePath);

  if (fileOperation === FileOperation.Read) {
    if (!fs.existsSync(resolvedPath)) {
      throw new InvalidArgumentError("\n  The file path does not exist.");
    }
    return createReadStream(resolvedPath);
  }

  // Attempt to create a file to check if it's writable
  try {
    fs.writeFileSync(resolvedPath, "", { flag: FileOperation.Overwrite });
    return createWriteStream(resolvedPath);
  } catch (error: unknown) {
    if (error instanceof Error && "code" in (error as NodeJS.ErrnoException)) {
      if ((error as NodeJS.ErrnoException).code === "EEXIST") {
        throw new InvalidArgumentError(
          `\n  The file already exists and cannot be overwritten.`,
        );
      }

      throw new InvalidArgumentError(
        `\n  Failed to create write stream:\n  ${error.message}`,
      );
    }
    throw new InvalidArgumentError("\n  An unknown error occurred.");
  }
};

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
        (filePath: string) => validateFilePath(filePath, FileOperation.Write),
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

dotenv.config();

program.parse();
