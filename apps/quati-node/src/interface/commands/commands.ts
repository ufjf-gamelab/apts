import type { Argument, Command, Option } from "commander";

import { commandToBuildTrainingMemory } from "./buildTrainingMemory/command.js";
import { commandToConstructModel } from "./constructModel/command.js";
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
  commandToConstructModel,
  commandToBuildTrainingMemory,
];

export type { DefinitionOfCommand };
export { definitionsOfCommands };
