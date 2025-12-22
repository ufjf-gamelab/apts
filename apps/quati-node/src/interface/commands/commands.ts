import type { Argument, Command, Option } from "commander";

import { commandToBuildTrainingMemory } from "./buildTrainingMemory/command.js";
import { commandToConstructModel } from "./constructModel/command.js";
import { commandToPlayMatchUsingSearch } from "./playMatchUsingSearch/command.js";
import { commandToPredictQualityOfMoves } from "./predictQualityOfMoves/command.js";
import { commandToSearchQualityOfMoves } from "./searchQualityOfMoves/command.js";
import { commandToTrainModel } from "./trainModel/command.js";

interface DefinitionOfCommand {
  arguments?: Argument[];
  command: Command;
  options?: Option[];
}

const definitionsOfCommands: DefinitionOfCommand[] = [
  commandToSearchQualityOfMoves,
  commandToPlayMatchUsingSearch,
  commandToPredictQualityOfMoves,
  commandToConstructModel,
  commandToBuildTrainingMemory,
  commandToTrainModel,
];

export type { DefinitionOfCommand };
export { definitionsOfCommands };
