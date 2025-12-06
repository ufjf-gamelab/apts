import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { ConnectFourGame } from "./Game.js";
import type { ConnectFourMove } from "./Move.js";
import type { ConnectFourPlayer } from "./Player.js";
import type { ConnectFourScore } from "./Score.js";
import type { ConnectFourSlot } from "./Slot.js";

import { COLUMN_LENGTH, ROW_LENGTH } from "./Shape.js";

class ConnectFourState extends State<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState
> {
  public override clone() {
    return new ConnectFourState({
      game: this.getGame(),
      indexOfPlayer: this.getIndexOfPlayer(),
      score: this.getScore(),
      slots: this.getSlots(),
    });
  }

  public override toString(): string {
    let board = "";
    for (let row = FIRST_INDEX; row < ROW_LENGTH; row += INCREMENT_ONE) {
      board += "|";
      for (
        let column = FIRST_INDEX;
        column < COLUMN_LENGTH;
        column += INCREMENT_ONE
      ) {
        board += " ";
        const slot = this.getSlot({ indexOfSlot: row * ROW_LENGTH + column });
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

export { ConnectFourState };
