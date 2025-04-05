/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import { createGame } from "./Game.test.js";
import { createMoves } from "./Move.test.js";
import {
  createPlayers,
  type TestingPlayer,
  TestingPlayerKey,
} from "./Player.test.js";
import TestingState, { TestingSlot } from "./State.js";

const shouldBeAnInstanceOfItsClass = (state: TestingState): void => {
  test("state should be an instance of its class", () => {
    expect(state).toBeInstanceOf(TestingState);
  });
};

const cloneShouldCreateANewInstance = (state: TestingState): void => {
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
};

const gameOfStateShouldBeEqualToTheOnePassedAsParameterWithDifferentReference =
  (state: TestingState, game: TestingState["game"]): void => {
    test("game of state should be equal to the one passed as parameter with different reference", () => {
      expect(state.getGame()).not.toBe(game);
      expect(state.getGame()).toEqual(game);
    });
  };

const getPlayerKeyShouldBe = (
  state: TestingState,
  playerKey: TestingPlayerKey,
): void => {
  test(`playerKey of state should be {${playerKey}}`, () => {
    expect(state.getPlayerKey()).toBe(playerKey);
  });
};

const getScoreShouldBe = (
  state: TestingState,
  testingPlayers: TestingPlayer[],
): void => {
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
};

const testState = (): TestingState => {
  const players = createPlayers();
  const moves = createMoves();
  const game = createGame({
    moves,
    players,
  });

  const state = new TestingState({
    game,
    playerKey: TestingPlayerKey.Alice,
    slots: new Array<TestingSlot>(81).fill(TestingSlot.Empty),
  });

  shouldBeAnInstanceOfItsClass(state);
  cloneShouldCreateANewInstance(state);
  gameOfStateShouldBeEqualToTheOnePassedAsParameterWithDifferentReference(
    state,
    game,
  );

  getPlayerKeyShouldBe(state, TestingPlayerKey.Alice);
  getScoreShouldBe(state, players);

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
