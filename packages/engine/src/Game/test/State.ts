import { INCREMENT_ONE } from "../../constants.js";
import { type Integer } from "../../types.js";
import State, { type StateParams } from "../State.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import { type default as TestingPlayer, TestingPlayerKey } from "./Player.js";

// TODO: Slot should be a class, not an enum
enum TestingSlot {
  Empty,
  PlayerOne,
  PlayerTwo,
}

type TestingStateParams = StateParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

const INITIAL_AMOUNT_OF_POINTS: Integer = 0;
const AMOUNT_OF_POINTS_TO_FINISH_MATCH: Integer = 15;
const AMOUNT_OF_SLOTS_TO_FINISH_MATCH: Integer = 49;
const COLUMN_LENGTH: Integer = 9;
const INITIAL_SLOT_INDEX: Integer = 0;
const ROW_LENGTH: Integer = 9;

class TestingState extends State<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  public static getSlotThatRepresentsPlayerKey(
    playerKey: TestingPlayerKey,
  ): TestingSlot {
    switch (playerKey) {
      case TestingPlayerKey.One:
        return TestingSlot.PlayerOne;
      case TestingPlayerKey.Two:
        return TestingSlot.PlayerTwo;
      default:
        return TestingSlot.Empty;
    }
  }

  public override changePerspective(): TestingState {
    return this.clone();
  }

  public override clone(): TestingState {
    return new TestingState({
      game: this.getGame(),
      playerKey: this.getPlayerKey(),
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
      (slot: TestingSlot) => slot !== TestingSlot.Empty,
    ).length;
    if (amountOfFilledSlots === AMOUNT_OF_SLOTS_TO_FINISH_MATCH) {
      return true;
    }

    for (const [, points] of this.getScore()) {
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
    for (let row = INITIAL_SLOT_INDEX; row < ROW_LENGTH; row += INCREMENT_ONE) {
      board += "|";
      for (
        let column = INITIAL_SLOT_INDEX;
        column < COLUMN_LENGTH;
        column += INCREMENT_ONE
      ) {
        board += " ";
        const slot = this.getSlots()[row * ROW_LENGTH + column];
        if (slot === TestingSlot.Empty) {
          board += "-";
        } else if (slot === TestingSlot.PlayerOne) {
          board += `${TestingSlot.PlayerOne}`;
        } else if (slot === TestingSlot.PlayerTwo) {
          board += `${TestingSlot.PlayerTwo}`;
        }
        board += " |";
      }
      board += "\n";
    }
    return board;
  }

  protected override initializeScore(): void {
    for (const player of this.getGame().getPlayers()) {
      const [playerKey] = player;
      this.setScore(playerKey, INITIAL_AMOUNT_OF_POINTS);
    }
  }
}

export type { TestingStateParams };
export { TestingState as default, TestingSlot };
