/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import { INCREMENT_ONE } from "../types.js";
import { game, type TestingGame } from "./Game.test.js";
import type { TestingMove } from "./Move.test.js";
import { type TestingPlayer, TestingPlayerKey } from "./Player.test.js";
import State, { type StateParams } from "./State.js";

enum TestingSlot {
  Alice,
  Bruno,
  Empty,
}

type TestingStateParams = StateParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingState extends State<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  private AMOUNT_OF_POINTS_TO_FINISH_MATCH = 15;
  private AMOUNT_OF_SLOTS_TO_FINISH_MATCH = 49;
  private COLUMN_LENGTH = 9;
  private INITIAL_SLOT_INDEX = 0;
  private ROW_LENGTH = 9;

  public override changePerspective(): TestingState {
    return this.clone();
  }

  public override clone(): TestingState {
    return new TestingState({
      game: this.getGame(),
      playerKey: this.getPlayerKey(),
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
      (slot: TestingSlot) => slot !== TestingSlot.Empty,
    ).length;
    if (amountOfFilledSlots === this.AMOUNT_OF_SLOTS_TO_FINISH_MATCH) {
      return true;
    }

    for (const [, points] of this.getScore()) {
      if (points >= this.AMOUNT_OF_POINTS_TO_FINISH_MATCH) {
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
    for (let row = this.INITIAL_SLOT_INDEX; row < this.ROW_LENGTH; row += 1) {
      board += "|";
      for (
        let column = this.INITIAL_SLOT_INDEX;
        column < this.COLUMN_LENGTH;
        column += INCREMENT_ONE
      ) {
        board += " ";
        const slot = this.getSlots()[row * this.ROW_LENGTH + column];
        if (slot === TestingSlot.Empty) {
          board += "-";
        } else if (slot === TestingSlot.Alice) {
          board += `${TestingPlayerKey.Alice}`;
        } else if (slot === TestingSlot.Bruno) {
          board += `${TestingPlayerKey.Bruno}`;
        }
        board += " |";
      }
      board += "\n";
    }
    return board;
  }
}

const INITIAL_AMOUNT_OF_POINTS = 0;

// eslint-disable-next-line max-lines-per-function
const testState = (): TestingState => {
  const state = new TestingState({
    game,
    playerKey: TestingPlayerKey.Alice,
    score: new Map([
      [TestingPlayerKey.Alice, INITIAL_AMOUNT_OF_POINTS],
      [TestingPlayerKey.Bruno, INITIAL_AMOUNT_OF_POINTS],
    ]),
    slots: new Array<TestingSlot>(81).fill(TestingSlot.Empty),
  });

  test("state should be an instance of TestingState", () => {
    expect(state).toBeInstanceOf(TestingState);
  });

  test("game of state should be {game}", () => {
    expect(state.getGame()).not.toBe(game);
    expect(state.getGame()).toEqual(game);
  });

  test("playerKey of state should be {TestingPlayerKey.Alice}", () => {
    expect(state.getPlayerKey()).toBe(TestingPlayerKey.Alice);
  });

  test("score of state should be {[[TestingPlayerKey.Alice, 0], [TestingPlayerKey.Bruno, 0]]}", () => {
    const score = new Map([
      [TestingPlayerKey.Alice, 0],
      [TestingPlayerKey.Bruno, 0],
    ]);

    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).toStrictEqual(score);

    const oldScore = new Map(score);
    score.set(TestingPlayerKey.Alice, 1);

    expect(state.getScore()).not.toBe(oldScore);
    expect(state.getScore()).toStrictEqual(oldScore);
    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).not.toEqual(score);
  });

  test("all slots should be empty", () => {
    const slots = new Array<TestingSlot>(81).fill(TestingSlot.Empty);

    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).toStrictEqual(slots);

    const oldSlots = [...slots];
    slots[0] = TestingSlot.Alice;

    expect(state.getSlots()).not.toBe(oldSlots);
    expect(state.getSlots()).toStrictEqual(oldSlots);
    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).not.toEqual(slots);
  });

  test('toString() should return a matrix of 9x9 in which each slot is surrounded by "|" and its value is shown as "-"', () => {
    expect(state.toString()).toBe(
      "| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n",
    );
  });

  test("isFinal() should return false", () => {
    expect(state.isFinal()).toBe(false);
  });

  test("clone() should return a new instance of TestingState", () => {
    const clone = state.clone();
    expect(clone).toBeInstanceOf(TestingState);
    expect(clone).not.toBe(state);
    expect(clone.getGame()).toStrictEqual(state.getGame());
    expect(clone.getGame()).not.toBe(state.getGame());
    expect(clone.getPlayerKey()).toBe(state.getPlayerKey());
    expect(clone.getScore()).toStrictEqual(state.getScore());
    expect(clone.getScore()).not.toBe(state.getScore());
    expect(clone.getSlots()).toStrictEqual(state.getSlots());
    expect(clone.getSlots()).not.toBe(state.getSlots());
  });

  return state;
};

testState();
