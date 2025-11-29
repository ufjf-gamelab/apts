import type { Argument, Command, Option } from "commander";

import { commandToGenerateGraph } from "./generateGraph/command.js";

interface DefinitionOfCommand {
  arguments?: Argument[];
  command: Command;
  options?: Option[];
}

const definitionsOfCommands: DefinitionOfCommand[] = [commandToGenerateGraph];

export type { DefinitionOfCommand };
export { definitionsOfCommands };
