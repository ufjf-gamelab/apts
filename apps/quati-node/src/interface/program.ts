import { program } from "commander";

import { definitionsOfCommands } from "./commands/commands.js";

program
  .name("quati")
  .version("5.0.0")
  .description(
    "Engine to simulate and create AI models for tabletop games, inspired by the AlphaZero algorithm.",
  );

definitionsOfCommands.forEach(definitionOfCommand => {
  if (definitionOfCommand.arguments) {
    definitionOfCommand.arguments.forEach(argument => {
      definitionOfCommand.command.addArgument(argument);
    });
  }
  if (definitionOfCommand.options) {
    definitionOfCommand.options.forEach(option => {
      definitionOfCommand.command.addOption(option);
    });
  }
  program.addCommand(definitionOfCommand.command);
});

export { program };
