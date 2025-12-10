import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { TicTacToeGame } from "./TicTacToeGame.js";
import type { TicTacToeMove } from "./TicTacToeMove.js";
import type { TicTacToePlayer } from "./TicTacToePlayer.js";
import type { TicTacToeScore } from "./TicTacToeScore.js";
import type { TicTacToeSlot } from "./TicTacToeSlot.js";

import { QUANTITY_OF_COLUMNS, QUANTITY_OF_ROWS } from "./TicTacToeShape.js";

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
