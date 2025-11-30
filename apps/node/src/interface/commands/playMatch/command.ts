import { playMatch } from "@repo/interface/actions/playMatch/action.js";
import { type ModeOfPlay, modesOfPlay } from "@repo/interface/constants.js";
import { Command, Option } from "commander";

import type { DefinitionOfCommand } from "../commands.js";

import { getInput } from "../../../input.js";
import { parseArgumentIntoFloat, parseArgumentIntoInt } from "../../parsing.js";
import {
  type KeyOfState,
  keysOfStates,
  selectStateUsingKeyOfState,
} from "../../states.js";

const EXPLORATION_COEFFICIENT = 1.4;
const QUANTITY_OF_EXPANSIONS = 1000;

const executeAction = async ({
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  mode: modeOfPlay,
  state: keyOfState,
}: {
  expansions: number;
  exploration: number;
  mode: ModeOfPlay;
  state: KeyOfState;
}): Promise<void> => {
  const state = selectStateUsingKeyOfState(keyOfState);

  await playMatch({
    explorationCoefficient,
    getInput,
    modeOfPlay,
    processMessage: console.info,
    quantityOfExpansions,
    state,
  });
};

const commandToPlayMatch = {
  command: new Command("play-match")
    .description("Play against agent using Monte-Carlo Tree Search.")
    .action(executeAction),
  options: [
    new Option(
      "-s, --state <key-of-state>",
      "The key of a state to use as root of the tree.",
    )
      .choices(Object.values(keysOfStates))
      .makeOptionMandatory(),
    new Option("-m, --mode <game-mode>", "The game mode to play.")
      .choices(Object.values(modesOfPlay))
      .makeOptionMandatory(),
    new Option(
      "-x, --exploration <exploration-constant>",
      "The exploration constant for the search.",
    )
      .default(EXPLORATION_COEFFICIENT)
      .argParser(parseArgumentIntoFloat),
    new Option(
      "-e, --expansions <quantity-of-expansions>",
      "The quantity of expansions to perform on the search.",
    )
      .default(QUANTITY_OF_EXPANSIONS)
      .argParser(parseArgumentIntoInt),
  ],
} satisfies DefinitionOfCommand;

export { commandToPlayMatch };
