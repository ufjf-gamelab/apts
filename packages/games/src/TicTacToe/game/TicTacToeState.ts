import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { TicTacToeGame } from "./TicTacToeGame.js";
import type { TicTacToeMove } from "./TicTacToeMove.js";
import type { TicTacToePlayer } from "./TicTacToePlayer.js";
import type { TicTacToeScore } from "./TicTacToeScore.js";
import type { TicTacToeSlot } from "./TicTacToeSlot.js";

import { COLUMN_LENGTH, ROW_LENGTH } from "./TicTacToeShape.js";

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
    const game = this.getGame();
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
            const player = game.getPlayer({
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
