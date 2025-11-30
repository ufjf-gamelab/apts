import { recordOfSnowballStatesWithData } from "@repo/games/Snowball/game/State.test/records.js";
import { recordOfTicTacToeStatesWithData } from "@repo/games/TicTacToe/game/State.test/records.js";
import { playMatch } from "@repo/interface/actions/playMatch/action.js";
import { Command, Option } from "commander";

import type { DefinitionOfCommand } from "../commands.js";

import { getInput } from "../../../input.js";
import { parseArgumentIntoInt } from "../../parsing.js";

const EXPLORATION_CONSTANT = 1.4;
const QUANTITY_OF_EXPANSIONS = 1000;

const keysOfStates = {
  snowball: "snowball",
  ticTacToe: "tic-tac-toe",
} as const;

const executeAction = async ({
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  state: keyOfState,
}: {
  expansions: number;
  exploration: number;
  state: string;
}): Promise<void> => {
  const state =
    keyOfState === keysOfStates.ticTacToe
      ? recordOfTicTacToeStatesWithData
          .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
          .state
      : recordOfSnowballStatesWithData
          .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
          .state;

  await playMatch({
    getInput,
    processMessage: console.info,
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
    new Option(
      "-x, --exploration <exploration-constant>",
      "The exploration constant for the search.",
    )
      .default(EXPLORATION_CONSTANT)
      .argParser(parseArgumentIntoInt),
    new Option(
      "-e, --expansions <quantity-of-expansions>",
      "The quantity of expansions to perform on the search.",
    )
      .default(QUANTITY_OF_EXPANSIONS)
      .argParser(parseArgumentIntoInt),
  ],
} satisfies DefinitionOfCommand;

export { commandToPlayMatch };
