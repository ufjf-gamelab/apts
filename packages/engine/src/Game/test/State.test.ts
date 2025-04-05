/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import { createGame } from "./Game.test.js";
import { createMoves } from "./Move.test.js";
import { type default as TestingPlayer, TestingPlayerKey } from "./Player.js";
import { createPlayers } from "./Player.test.js";
import TestingState, { TestingSlot } from "./State.js";

//TODO: test if changing the slots passed as argument to the constructor changes the internal state of the object

const createState = ({ game }: { game: TestingState["game"] }): TestingState =>
  new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots: new Array<TestingSlot>(81).fill(TestingSlot.Empty),
  });

const shouldBeAnInstanceOfItsClass = ({
  state,
}: {
  state: TestingState;
}): void => {
  test("state should be an instance of its class", () => {
    expect(state).toBeInstanceOf(TestingState);
  });
};

const cloneShouldCreateANewInstance = ({
  state,
}: {
  state: TestingState;
}): void => {
  test("clone() should return a new instance of TestingState", () => {
    const clone = state.clone();
    expect(clone).toBeInstanceOf(TestingState);
    expect(clone).not.toBe(state);
    expect(clone.getGame()).not.toBe(state.getGame());
    expect(clone.getGame()).toStrictEqual(state.getGame());
    expect(clone.getPlayerKey()).toBe(state.getPlayerKey());
    expect(clone.getScore()).not.toBe(state.getScore());
    expect(clone.getScore()).toStrictEqual(state.getScore());
    expect(clone.getSlots()).not.toBe(state.getSlots());
    expect(clone.getSlots()).toStrictEqual(state.getSlots());
  });
};

const getGameShouldBe = ({
  game,
  state,
}: {
  game: TestingState["game"];
  state: TestingState;
}): void => {
  test("game of state should be equal to the one passed as parameter with different reference", () => {
    expect(state.getGame()).not.toBe(game);
    expect(state.getGame()).toEqual(game);
  });
};

const getPlayerKeyShouldBe = ({
  playerKey,
  state,
}: {
  playerKey: TestingPlayerKey;
  state: TestingState;
}): void => {
  test(`playerKey of state should be {${playerKey}}`, () => {
    expect(state.getPlayerKey()).toBe(playerKey);
  });
};

const getScoreShouldBe = ({
  players,
  state,
}: {
  players: TestingPlayer[];
  state: TestingState;
}): void => {
  test("score of state should be {[[TestingPlayerKey.Alice, 0], [TestingPlayerKey.Bruno, 0]]}", () => {
    const score = new Map([
      [players[0], 0],
      [players[1], 0],
    ]);

    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).toStrictEqual(score);

    const oldScore = new Map(score);
    score.set(players[0], 1);

    expect(state.getScore()).not.toBe(oldScore);
    expect(state.getScore()).toStrictEqual(oldScore);
    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).not.toEqual(score);
  });
};

const getSlotsShouldBe = ({ state }: { state: TestingState }): void => {
  test("all slots should be empty", () => {
    const slots = new Array<TestingSlot>(81).fill(TestingSlot.Empty);

    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).toStrictEqual(slots);

    const oldSlots = [...slots];
    slots[0] = TestingSlot.PlayerOne;

    expect(state.getSlots()).not.toBe(oldSlots);
    expect(state.getSlots()).toStrictEqual(oldSlots);
    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).not.toEqual(slots);
  });
};

const toStringShouldBe = ({ state }: { state: TestingState }): void => {
  test('toString() should return a matrix of 9x9 in which each slot is surrounded by "|" and its value is shown as "-"', () => {
    expect(state.toString()).toBe(
      "| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n",
    );
  });
};

const isFinalShouldBe = ({ state }: { state: TestingState }): void => {
  test("isFinal() should return false", () => {
    expect(state.isFinal()).toBe(false);
  });
};

const testState = (): TestingState => {
  const players = createPlayers();
  const moves = createMoves();
  const game = createGame({
    moves,
    players,
  });
  const state = createState({
    game,
  });

  shouldBeAnInstanceOfItsClass({ state });
  cloneShouldCreateANewInstance({ state });

  getGameShouldBe({
    game,
    state,
  });
  getPlayerKeyShouldBe({ playerKey: TestingPlayerKey.One, state });
  getScoreShouldBe({ players, state });
  getSlotsShouldBe({ state });
  toStringShouldBe({ state });
  isFinalShouldBe({ state });

  return state;
};

testState();

export { createState };
