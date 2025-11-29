import type { Argument, Command, Option } from "commander";

// import commandToGenerateGameDescription from "./generateGameDescription/command.js";
// import commandToPredictProbabilities from "./predictProbabilities/command.js";
import commandToSayHello from "./sayHello/command.js";
// import commandToStartGameplay from "./startGameplay/command.js";

interface CommandDefinition {
  arguments?: Argument[];
  command: Command;
  options?: Option[];
}

const commandsDefinitions: CommandDefinition[] = [
  // commandToGenerateGameDescription,
  // commandToPredictProbabilities,
  // commandToStartGameplay,
  commandToSayHello,
];

export default commandsDefinitions;
