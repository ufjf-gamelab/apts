import { Argument, Command, Option } from "commander";
import commandToGenerateGameDescription from "./generateGameDescription/command";
import commandToPredictProbabilities from "./predictProbabilities/command";
import commandToSayHello from "./sayHello/command";
import commandToStartGameplay from "./startGameplay/command";

interface CommandDefinition {
  command: Command;
  arguments?: Argument[];
  options?: Option[];
}

const commandsDefinitions: CommandDefinition[] = [
  commandToGenerateGameDescription,
  commandToPredictProbabilities,
  commandToStartGameplay,
  commandToSayHello,
];

export default commandsDefinitions;
