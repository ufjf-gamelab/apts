import { INCREMENT_ONE } from "../../constants.js";
import { type Integer } from "../../types.js";
import State, { type StateParams } from "../State.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingPlayer from "./Player.js";
import type TestingSlot from "./Slot.js";

type TestingStateParams = StateParams<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
>;

const AMOUNT_OF_POINTS_TO_FINISH_MATCH: Integer = 15;
const AMOUNT_OF_SLOTS_TO_FINISH_MATCH: Integer = 49;

const COLUMN_LENGTH: Integer = 9;
const ROW_LENGTH: Integer = 9;

const INDEX_OF_INITIAL_SLOT: Integer = 0;

class TestingState extends State<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> {
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
   * Determines if the current state is final.
   *
   * This method checks if all slots are empty (i.e., equal to 0).
   *
   * @returns {boolean} `true` if all slots are empty, indicating the final state; otherwise, `false`.
   */
  public override isFinal(): boolean {
    const amountOfFilledSlots = this.getSlots().filter(
      (slot: TestingSlot) => slot.getIndexOfOccupyingPlayer() !== null,
    ).length;
    if (amountOfFilledSlots === AMOUNT_OF_SLOTS_TO_FINISH_MATCH) {
      return true;
    }

    for (const points of this.getScore()) {
      if (points >= AMOUNT_OF_POINTS_TO_FINISH_MATCH) {
        return true;
      }
    }

    return false;
  }

  /**
   * Converts the current state of the game slots into a string representation.
   *
   * @returns A string formatted as a row of slots separated by vertical bars.
   */
  public override toString(): string {
    let board = "";
    for (
      let row = INDEX_OF_INITIAL_SLOT;
      row < ROW_LENGTH;
      row += INCREMENT_ONE
    ) {
      board += "|";
      for (
        let column = INDEX_OF_INITIAL_SLOT;
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

export type { TestingStateParams };
export { TestingState as default };
