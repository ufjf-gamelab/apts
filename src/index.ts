import { Argument, Command, Option, program } from "commander";
import play from "./interface/play";

enum GameNames {
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
      new Argument("<game>", "The game to be played.").choices([
        GameNames.Connect4,
        GameNames.TicTacToe,
      ]),
    ],
    command: new Command("play")
      .description("Play a game.")
      .action((game: string) => {
        switch (game as GameNames) {
          case GameNames.Connect4:
            console.log("Playing Connect 4...");
            break;
          case GameNames.TicTacToe:
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

program.parse();
