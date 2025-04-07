/* eslint-disable @typescript-eslint/no-magic-numbers */
import { describe, expect, test } from "vitest";

import type { Score } from "../../State.js";
import { createGame, QUANTITY_OF_SLOTS } from "../Game/setup.js";
import { createMoves } from "../Move/setup.js";
import { TestingPlayerKey } from "../Player.js";
import { createPlayers } from "../Player/setup.js";
import TestingState, { TestingSlot } from "../State.js";
import { createState } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  state,
}: {
  state: TestingState;
}): void => {
  test("state should be an instance of the class {TestingState}", () => {
    expect(state).toBeInstanceOf(TestingState);
  });
};

const cloneShouldCreateANewInstance = ({
  state,
}: {
  state: TestingState;
}): void => {
  test("clone() should return a new instance of {TestingState}", () => {
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

const getGameShouldReturn = ({
  expectedGame,
  state,
}: {
  expectedGame: TestingState["game"];
  state: TestingState;
}): void => {
  test("getGame() should return an object equal to the one passed as parameter, but as a different reference", () => {
    expect(state.getGame()).not.toBe(expectedGame);
    expect(state.getGame()).toStrictEqual(expectedGame);
  });
};

const getPlayerKeyShouldReturn = ({
  expectedPlayerKey,
  state,
}: {
  expectedPlayerKey: TestingState["playerKey"];
  state: TestingState;
}): void => {
  test(`getPlayerKey() should return {${expectedPlayerKey}}`, () => {
    expect(state.getPlayerKey()).toBe(expectedPlayerKey);
  });
};

const getScoreShouldReturn = ({
  expectedScore,
  state,
}: {
  expectedScore: TestingState["score"];
  state: TestingState;
}): void => {
  test("getScore should return {[[TestingPlayerKey.Alice, 0], [TestingPlayerKey.Bruno, 0]]}", () => {
    expect(state.getScore()).not.toBe(expectedScore);
    expect(state.getScore()).toStrictEqual(expectedScore);
  });

  test("modifying the object score received by the getter should not change the internal attribute", () => {
    const scoreBeforeUpdate = state.getScore();

    const [playerOne] = scoreBeforeUpdate.keys();
    if (typeof playerOne === "undefined") {
      throw new Error("Player one is undefined");
    }

    const updatedScore = state.getScore();
    updatedScore.set(playerOne, 1);

    expect(state.getScore()).not.toBe(scoreBeforeUpdate);
    expect(state.getScore()).toStrictEqual(scoreBeforeUpdate);
    expect(state.getScore()).not.toBe(updatedScore);
    expect(state.getScore()).not.toEqual(updatedScore);
  });
};

const getSlotsShouldReturn = ({
  expectedSlots,
  state,
}: {
  expectedSlots: TestingState["slots"];
  state: TestingState;
}): void => {
  test("all slots should be empty", () => {
    expect(state.getSlots()).not.toBe(expectedSlots);
    expect(state.getSlots()).toStrictEqual(expectedSlots);
  });

  test("modifying the object slots passed via constructor should not change the internal attribute", () => {
    const slotsBeforeUpdate = [...expectedSlots];
    expectedSlots[0] = TestingSlot.PlayerOne;

    expect(state.getSlots()).not.toBe(expectedSlots);
    expect(state.getSlots()).not.toEqual(expectedSlots);
    expect(state.getSlots()).not.toBe(slotsBeforeUpdate);
    expect(state.getSlots()).toStrictEqual(slotsBeforeUpdate);
  });

  test("modifying the object slots received by the getter should not change the internal attribute", () => {
    const slotsBeforeUpdate = state.getSlots();
    const updatedSlots = state.getSlots();
    updatedSlots[0] = TestingSlot.PlayerTwo;

    expect(state.getSlots()).not.toBe(slotsBeforeUpdate);
    expect(state.getSlots()).toStrictEqual(slotsBeforeUpdate);
    expect(state.getSlots()).not.toBe(updatedSlots);
    expect(state.getSlots()).not.toEqual(updatedSlots);
  });
};

const toStringShouldReturn = ({ state }: { state: TestingState }): void => {
  test('toString() should return a matrix of 9x9 in which each slot is surrounded by "|" and its value is shown as "-"', () => {
    expect(state.toString()).toBe(
      "| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n",
    );
  });
};

const isFinalShouldReturn = ({ state }: { state: TestingState }): void => {
  test("isFinal() should return {false}", () => {
    expect(state.isFinal()).toBe(false);
  });
};

const testState = (): void => {
  const players = createPlayers();
  const moves = createMoves();
  const game = createGame({
    movesList: moves,
    playersList: players,
  });

  const slots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
  const state = createState({
    game,
    slots,
  });

  shouldBeAnInstanceOfItsClass({ state });
  cloneShouldCreateANewInstance({ state });

  getGameShouldReturn({
    expectedGame: game,
    state,
  });
  getPlayerKeyShouldReturn({ expectedPlayerKey: TestingPlayerKey.One, state });

  const expectedScore: Score = new Map([
    [TestingPlayerKey.One, 0],
    [TestingPlayerKey.Two, 0],
  ]);
  getScoreShouldReturn({ expectedScore, state });

  getSlotsShouldReturn({ expectedSlots: slots, state });
  toStringShouldReturn({ state });
  isFinalShouldReturn({ state });
};

describe("State", () => {
  testState();
});
