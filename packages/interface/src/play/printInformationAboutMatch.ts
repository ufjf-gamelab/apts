import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ProcessMessage } from "@repo/search/types.js";

import { formatMap } from "@repo/core/format.js";

const printInformationAboutMatch = <
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
  finalState,
  processMessage,
}: {
  finalState: GenericState;
  processMessage: ProcessMessage;
}) => {
  const game = finalState.getGame();
  processMessage(`\n${finalState.toString()}`);
  processMessage("End of game.");
  processMessage(
    `\n${formatMap({
      map: new Map(
        finalState
          .getScore()
          .getPointsOfEachPlayer()
          .entries()
          .map(([indexOfPlayer, points]) => {
            const player = game.getPlayer({ indexOfPlayer });
            return [`(${player?.getSymbol()}) ${player?.getName()}`, points];
          }),
      ),
    })}`,
  );
};

export { printInformationAboutMatch };
