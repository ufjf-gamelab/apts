import { Argument, Command, Option } from "commander";
import commandToPredictProbabilities from "./predictProbabilities/command";
import commandToStartGameplay from "./startGameplay/command";

interface CommandDefinition {
  command: Command;
  arguments?: Argument[];
  options?: Option[];
}

const commandsDefinitions: CommandDefinition[] = [
  commandToStartGameplay,
  commandToPredictProbabilities,
];

export default commandsDefinitions;
