import type { Argument, Command, Option } from "commander";

import { commandToPredictQualityOfMoves } from "./predictQualityOfMoves/command.js";

interface DefinitionOfCommand {
  arguments?: Argument[];
  command: Command;
  options?: Option[];
}

const definitionsOfCommands: DefinitionOfCommand[] = [
  commandToPredictQualityOfMoves,
];

export type { DefinitionOfCommand };
export { definitionsOfCommands };
