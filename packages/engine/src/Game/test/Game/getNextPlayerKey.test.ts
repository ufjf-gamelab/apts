import { expect, test } from "vitest";

import { TestingPlayerKey } from "../Player.js";
import type TestingState from "../State.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getNextPlayerKeyShouldReturn = ({
  expectedPlayerKey,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedPlayerKey: TestingPlayerKey;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: getNextPlayerKey() should return {${expectedPlayerKey}}`, () => {
    const nextPlayerKey = game.getNextPlayerKey(state);
    expect(nextPlayerKey).toBe(expectedPlayerKey);
  });
};

const testGetNextPlayerKey = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  getNextPlayerKeyShouldReturn({
    expectedPlayerKey: TestingPlayerKey.Two,
    game,
    state: game.getInitialState(),
    testDescriptor,
  });
};

const testGetNextPlayerKeyForCommonGame = (): void => {
  const { game } = setupGame();
  testGetNextPlayerKey({ game, testDescriptor: "common" });
};

testGetNextPlayerKeyForCommonGame();
