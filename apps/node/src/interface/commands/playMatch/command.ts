import { playMatch } from "@repo/interface/actions/playMatch/action.js";
import { type ModeOfPlay, modesOfPlay } from "@repo/interface/constants.js";
import { Command, Option } from "commander";

import type { DefinitionOfCommand } from "../commands.js";

import { getInput } from "../../../input.js";
import { type KeyOfState, selectStateUsingKeyOfState } from "../../states.js";
import { commonOptions } from "../options.js";

const executeAction = async ({
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  mode: modeOfPlay,
  seed,
  state: keyOfState,
}: {
  expansions: number;
  exploration: number;
  mode: ModeOfPlay;
  seed: string;
  state: KeyOfState;
}): Promise<void> => {
  const state = selectStateUsingKeyOfState(keyOfState);

  await playMatch({
    explorationCoefficient,
    getInput,
    modeOfPlay,
    processMessage: console.info,
    quantityOfExpansions,
    seed,
    state,
  });
};

const commandToPlayMatch = {
  command: new Command("play-match")
    .description("Play against agent using Monte-Carlo Tree Search.")
    .action(executeAction),
  options: [
    commonOptions.state,
    new Option("-m, --mode <game-mode>", "The game mode to play.")
      .choices(Object.values(modesOfPlay))
      .makeOptionMandatory(),
    commonOptions.expansions,
    commonOptions.exploration,
    commonOptions.seed,
  ],
} satisfies DefinitionOfCommand;

export { commandToPlayMatch };
