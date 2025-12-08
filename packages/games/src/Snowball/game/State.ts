import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { SnowballGame } from "./Game.js";
import type { SnowballMove } from "./Move.js";
import type { SnowballPlayer } from "./Player.js";
import type { SnowballScore } from "./Score.js";
import type { SnowballSlot } from "./Slot.js";

import { COLUMN_LENGTH, ROW_LENGTH } from "./Shape.js";

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
      indexOfRow < COLUMN_LENGTH;
      indexOfRow += INCREMENT_ONE
    ) {
      board += "|";
      for (
        let indexOfColumn = FIRST_INDEX;
        indexOfColumn < ROW_LENGTH;
        indexOfColumn += INCREMENT_ONE
      ) {
        board += " ";
        const slot = this.getSlot({
          indexOfSlot: indexOfRow * ROW_LENGTH + indexOfColumn,
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
