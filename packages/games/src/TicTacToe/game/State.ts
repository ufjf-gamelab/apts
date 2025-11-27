import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { TicTacToeGame } from "./Game.js";
import type { TicTacToeMove } from "./Move.js";
import type { TicTacToePlayer } from "./Player.js";
import type { TicTacToeScore } from "./Score.js";
import type { TicTacToeSlot } from "./Slot.js";

import { COLUMN_LENGTH, ROW_LENGTH } from "./Shape.js";

class TicTacToeState extends State<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState
> {
  public override clone() {
    return new TicTacToeState({
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

export { TicTacToeState };
