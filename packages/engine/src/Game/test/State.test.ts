/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import { testingGame } from "./Game.test.js";
import { TestingPlayerKey, testingPlayers } from "./Player.test.js";
import TestingState, { TestingSlot } from "./State.js";

const stateShouldBeAnInstanceOfItsClass = (state: TestingState): void => {
  test("state should be an instance of its class", () => {
    expect(state).toBeInstanceOf(TestingState);
  });
};

const gameOfSateShouldBeEqualToTheOnePassedAsParameter = (
  state: TestingState,
  game: TestingState["game"],
): void => {
  test("game of state should be equal to the one passed as parameter", () => {
    expect(state.getGame()).not.toBe(game);
    expect(state.getGame()).toEqual(game);
  });
};

// eslint-disable-next-line max-lines-per-function
const testState = (): TestingState => {
  const state = new TestingState({
    game: testingGame,
    playerKey: TestingPlayerKey.Alice,
    slots: new Array<TestingSlot>(81).fill(TestingSlot.Empty),
  });

  stateShouldBeAnInstanceOfItsClass(state);
  gameOfSateShouldBeEqualToTheOnePassedAsParameter(state, testingGame);

  test("game of state should be {game}", () => {
    expect(state.getGame()).not.toBe(testingGame);
    expect(state.getGame()).toEqual(testingGame);
  });

  test("playerKey of state should be {TestingPlayerKey.Alice}", () => {
    expect(state.getPlayerKey()).toBe(TestingPlayerKey.Alice);
  });

  test("score of state should be {[[TestingPlayerKey.Alice, 0], [TestingPlayerKey.Bruno, 0]]}", () => {
    const score = new Map([
      [testingPlayers[0], 0],
      [testingPlayers[1], 0],
    ]);

    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).toStrictEqual(score);

    const oldScore = new Map(score);
    score.set(testingPlayers[0], 1);

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

export { TestingState as default };
