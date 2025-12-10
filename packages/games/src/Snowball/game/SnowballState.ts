import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { SnowballGame } from "./SnowballGame.js";
import type { SnowballMove } from "./SnowballMove.js";
import type { SnowballPlayer } from "./SnowballPlayer.js";
import type { SnowballScore } from "./SnowballScore.js";
import type { SnowballSlot } from "./SnowballSlot.js";

import { QUANTITY_OF_ROWS, QUANTITY_OF_COLUMNS } from "./SnowballShape.js";

class SnowballState extends State<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState
> {
  public override clone() {
    return new SnowballState({
      game: this.getGame(),
      indexOfPlayer: this.getIndexOfPlayer(),
      score: this.getScore(),
      slots: this.getSlots(),
    });
  }

  public override toString(): string {
    let board = "";
    for (
      let indexOfRow = FIRST_INDEX;
      indexOfRow < QUANTITY_OF_ROWS;
      indexOfRow += INCREMENT_ONE
    ) {
      board += "|";
      for (
        let indexOfColumn = FIRST_INDEX;
        indexOfColumn < QUANTITY_OF_COLUMNS;
        indexOfColumn += INCREMENT_ONE
      ) {
        board += " ";
        const slot = this.getSlot({
          indexOfSlot: indexOfRow * QUANTITY_OF_COLUMNS + indexOfColumn,
        });
        if (slot === null) {
          board += "-";
        } else {
          const indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();
          if (indexOfOccupyingPlayer === null) {
            board += "-";
          } else {
            const player = this.getGame().getPlayer({
              indexOfPlayer: indexOfOccupyingPlayer,
            });
            board += player?.getSymbol() ?? "-";
          }
        }
        board += " |";
      }
      board += "\n";
    }
    return board;
  }
}

export { SnowballState };
