import { program } from "commander";
import prompts from "prompts";
import commandsDefinitions from "./commands/commands";

export type GetInput = (
  questions: prompts.PromptObject | prompts.PromptObject[],
) => Promise<prompts.Answers<string>>;
export const getInput: GetInput = async questions => await prompts(questions);

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
