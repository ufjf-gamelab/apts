import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { type Integer } from "@repo/engine_core/types.js";
import State, {
  type Points,
  type StateParams,
} from "../../../game.old/src/State.js";

import {
  COLUMN_LENGTH,
  ROW_LENGTH,
  type default as TestingGame,
} from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingPlayer from "./Player.js";
import type TestingSlot from "./Slot.js";

const INITIAL_POINTS: Points = 0;

const INDEX_OF_FIRST_SLOT: Integer = 0;

type EncodedTestingState = TestingStateParams;

type TestingStateParams = StateParams<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
>;

class TestingState extends State<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> {
  public static initializeScore(quantityOfPlayers: Integer): Points[] {
    return Array<Points>(quantityOfPlayers).fill(INITIAL_POINTS);
  }

  public override changePerspective(): TestingState {
    return this.clone();
  }

  public override clone(): TestingState {
    return new TestingState({
      game: this.getGame(),
      indexOfPlayer: this.getIndexOfPlayer(),
      score: this.getScore(),
      slots: this.getSlots(),
    });
  }

  /**
   * Converts the current state of the game slots into a string representation.
   *
   * @returns A string formatted as a row of slots separated by vertical bars.
   */
  public override toString(): string {
    let board = "";
    for (
      let row = INDEX_OF_FIRST_SLOT;
      row < ROW_LENGTH;
      row += INCREMENT_ONE
    ) {
      board += "|";
      for (
        let column = INDEX_OF_FIRST_SLOT;
        column < COLUMN_LENGTH;
        column += INCREMENT_ONE
      ) {
        board += " ";
        const slot = this.getSlot(row * ROW_LENGTH + column);
        if (slot === null) {
          board += "-";
        } else {
          const indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();
          if (indexOfOccupyingPlayer === null) {
            board += "-";
          } else {
            const player = this.getGame().getPlayer(indexOfOccupyingPlayer);
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

export type { EncodedTestingState, TestingStateParams };
export { TestingState as default, INITIAL_POINTS };
