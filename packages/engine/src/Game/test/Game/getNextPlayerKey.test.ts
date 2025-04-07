import { describe, expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { TestingPlayerKey } from "../Player.js";
import type TestingState from "../State.js";
import { setupGame } from "./setup.js";

const getNextPlayerKeyShouldReturn = ({
  expectedPlayerKey,
  game,
  state,
}: {
  expectedPlayerKey: TestingPlayerKey;
  game: TestingGame;
  state: TestingState;
}): void => {
  test(`getNextPlayerKey() should return {${expectedPlayerKey}}`, () => {
    const nextPlayerKey = game.getNextPlayerKey(state);
    expect(nextPlayerKey).toBe(expectedPlayerKey);
  });
};

const testGetNextPlayerKey = (): void => {
  const { game } = setupGame();
  getNextPlayerKeyShouldReturn({
    expectedPlayerKey: TestingPlayerKey.Two,
    game,
    state: game.getInitialState(),
  });
};

describe("getNextPlayerKey", () => {
  testGetNextPlayerKey();
});
