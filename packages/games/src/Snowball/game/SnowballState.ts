import type { TensorLikeArray } from "@repo/engine_core/types.js";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { State } from "@repo/game/State.js";

import type { SnowballMove } from "./SnowballMove.js";
import type { SnowballPlayer } from "./SnowballPlayer.js";
import type { SnowballScore } from "./SnowballScore.js";
import type { SnowballSlot } from "./SnowballSlot.js";

import { INDEX_OF_FIRST_PLAYER, type SnowballGame } from "./SnowballGame.js";
import { QUANTITY_OF_COLUMNS, QUANTITY_OF_ROWS } from "./SnowballShape.js";

const VALUE_OF_NOT_FILLED_PIXEL = 0;
const VALUE_OF_FILLED_PIXEL = 1;

const indexOfChannelForEachPlayer = {
  channelOfEmptySlot: 2,
  channelOfFirstPlayer: 0,
  channelOfSecondPlayer: 1,
} as const;

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

  public override getEncodedState(): TensorLikeArray {
    const encodedState: number[][][] = [];

    for (
      let indexOfRow = FIRST_INDEX;
      indexOfRow < QUANTITY_OF_ROWS;
      indexOfRow += INCREMENT_ONE
    ) {
      const encodedRow: number[][] = [];

      for (
        let indexOfColumn = FIRST_INDEX;
        indexOfColumn < QUANTITY_OF_COLUMNS;
        indexOfColumn += INCREMENT_ONE
      ) {
        const indexOfSlot = indexOfRow * QUANTITY_OF_COLUMNS + indexOfColumn;
        const slot = this.getSlot({
          indexOfSlot,
        });
        if (slot === null) {
          throw new Error(
            `Could not retrieve slot with the index ${indexOfSlot}.`,
          );
        }

        const channels = [
          VALUE_OF_NOT_FILLED_PIXEL,
          VALUE_OF_NOT_FILLED_PIXEL,
          VALUE_OF_NOT_FILLED_PIXEL,
        ];
        const indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();

        if (indexOfOccupyingPlayer === null) {
          channels[indexOfChannelForEachPlayer.channelOfEmptySlot] =
            VALUE_OF_FILLED_PIXEL;
        } else if (indexOfOccupyingPlayer === INDEX_OF_FIRST_PLAYER) {
          channels[indexOfChannelForEachPlayer.channelOfFirstPlayer] =
            VALUE_OF_FILLED_PIXEL;
        } else {
          channels[indexOfChannelForEachPlayer.channelOfSecondPlayer] =
            VALUE_OF_FILLED_PIXEL;
        }

        encodedRow.push(channels);
      }

      encodedState.push(encodedRow);
    }

    return encodedState;
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
