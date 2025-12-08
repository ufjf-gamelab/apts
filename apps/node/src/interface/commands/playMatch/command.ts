import type { SofteningCoefficient } from "@repo/search/CommonMonteCarloTree/search/quality.js";

import { playMatch } from "@repo/interface/actions/playMatch/action.js";
import {
  type ModeOfPlay,
  modesOfPlay,
  type StrategyToSearch,
} from "@repo/interface/constants.js";
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
  softening: softeningCoefficient,
  state: keyOfState,
  strategy: strategyToSearch,
}: {
  expansions: number;
  exploration: number;
  mode: ModeOfPlay;
  seed: string;
  softening: SofteningCoefficient;
  state: KeyOfState;
  strategy: StrategyToSearch;
}): Promise<void> => {
  const state = selectStateUsingKeyOfState(keyOfState);

  await playMatch({
    explorationCoefficient,
    getInput,
    modeOfPlay,
    processMessage: console.info,
    quantityOfExpansions,
    seed,
    softeningCoefficient,
    state,
    strategyToSearch,
  });
};

const commandToPlayMatch = {
  command: new Command("play-match")
    .description("Play against agent using Monte-Carlo Tree Search.")
    .action(executeAction),
  options: [
    commonOptions.state,
    commonOptions.strategyToSearch,
    new Option("-m, --mode <game-mode>", "The game mode to play.")
      .choices(Object.values(modesOfPlay))
      .makeOptionMandatory(),
    commonOptions.expansions,
    commonOptions.exploration,
    commonOptions.softeningCoefficient,
    commonOptions.seed,
  ],
} satisfies DefinitionOfCommand;

export { commandToPlayMatch };
