import { playMatchInTheModePlayerVersusPlayer } from "@repo/interface/actions/playMatchInTheModePlayerVersusPlayer/action.js";
import { Command } from "commander";

import type { DefinitionOfCommand } from "../commands.js";

import { getInput } from "../../../input.js";
import {
  type KeyOfState,
  selectStateUsingKeyOfState,
} from "../../entries/states.js";
import { commonOptions } from "../options.js";

const executeAction = async ({
  state: keyOfState,
}: {
  state: KeyOfState;
}): Promise<void> => {
  const state = selectStateUsingKeyOfState(keyOfState);

  await playMatchInTheModePlayerVersusPlayer({
    getInput,
    processMessage: console.info,
    state,
  });
};

const commandToPlayMatchInTheModePlayerVersusPlayer: DefinitionOfCommand = {
  command: new Command("play-match-pvp")
    .description("Play match against another player.")
    .action(executeAction),
  options: [commonOptions.state],
};

export { commandToPlayMatchInTheModePlayerVersusPlayer };
