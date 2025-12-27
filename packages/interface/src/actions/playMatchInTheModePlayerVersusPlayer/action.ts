import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { playMatchInTheModePlayerVersusPlayer as internalPlayMatchInTheModePlayerVersusPlayer } from "../../play/playMatchInTheModePlayerVersusPlayer.js";
import { printInformationAboutMatch } from "../../play/printInformationAboutMatch.js";

const playMatchInTheModePlayerVersusPlayer = async <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  getInput,
  processMessage,
  state,
}: Pick<
  Parameters<
    typeof internalPlayMatchInTheModePlayerVersusPlayer<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  "getInput" | "processMessage" | "state"
>): Promise<void> => {
  const game = state.getGame();
  processMessage(`Game: ${game.getName()}`);

  const finalState = await (async () =>
    await internalPlayMatchInTheModePlayerVersusPlayer({
      getInput,
      processMessage,
      state,
    }))();

  printInformationAboutMatch({ finalState, processMessage });
};

export { playMatchInTheModePlayerVersusPlayer };
