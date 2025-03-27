/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import { game, type TestingGame } from "./Game.test.js";
import type { TestingMove } from "./Move.test.js";
import {
  type TestingPlayer,
  PlayerKey as TestingPlayerKey,
} from "./Player.test.js";
import State, { type StateParams } from "./State.js";

enum Slot {
  Empty = 0,
  Filled = 1,
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
    const quantityOfEmptySlots = this.getSlots().filter(
      (slot: Slot) => slot === Slot.Empty,
    ).length;
    return quantityOfEmptySlots === this.getQuantityOfSlots();
  }

  /**
   * Converts the current state of the game slots into a string representation.
   *
   * @returns A string formatted as a row of slots separated by vertical bars.
   */
  public override toString(): string {
    return `| ${this.getSlots().join(" | ")} |`;
  }
}

// eslint-disable-next-line max-lines-per-function
const testState = (): TestingState => {
  const state = new TestingState({
    game,
    playerKey: TestingPlayerKey.Alice,
    score: new Map([
      [TestingPlayerKey.Alice, 0],
      [TestingPlayerKey.Bruno, 0],
    ]),
    slots: [Slot.Filled, Slot.Filled, Slot.Filled, Slot.Filled, Slot.Filled],
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

  test("slots of state should be {[1, 1, 1, 1, 1]}", () => {
    const slots = [
      Slot.Filled,
      Slot.Filled,
      Slot.Filled,
      Slot.Filled,
      Slot.Filled,
    ];

    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).toStrictEqual(slots);

    const oldSlots = [...slots];
    slots[0] = Slot.Empty;

    expect(state.getSlots()).not.toBe(oldSlots);
    expect(state.getSlots()).toStrictEqual(oldSlots);
    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).not.toEqual(slots);
  });

  test('toString() should return {"| 1 | 1 | 1 | 1 | 1 |"}', () => {
    expect(state.toString()).toBe("| 1 | 1 | 1 | 1 | 1 |");
  });

  test("isFinal() should return false for slots {1, 1, 1, 1, 1]}", () => {
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

const state = testState();

export { state, TestingState };
