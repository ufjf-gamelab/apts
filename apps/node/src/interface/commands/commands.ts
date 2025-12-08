import type { Argument, Command, Option } from "commander";

import { commandToPlayMatch } from "./playMatch/command.js";
import { commandToPredictQualityOfMoves } from "./predictQualityOfMoves/command.js";

interface DefinitionOfCommand {
  arguments?: Argument[];
  command: Command;
  options?: Option[];
}

const definitionsOfCommands: DefinitionOfCommand[] = [
  commandToPredictQualityOfMoves,
  commandToPlayMatch,
];

export type { DefinitionOfCommand };
export { definitionsOfCommands };
