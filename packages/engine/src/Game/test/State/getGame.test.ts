import { expect, test } from "vitest";

import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const getGameShouldReturn = ({
  expectedGame,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedGame: TestingState["game"];
}): void => {
  test(`${testDescriptor}: getGame() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    expect(state.getGame()).not.toBe(expectedGame);
    expect(state.getGame()).toStrictEqual(expectedGame);
  });
};

const testGetGame = ({
  expectedGame,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedGame: TestingState["game"];
}): void => {
  getGameShouldReturn({ expectedGame, state, testDescriptor });
};

const testGetGameForInitialState = (): void => {
  const state = createInitialState();
  const expectedGame = state.getGame();
  testGetGame({ expectedGame, state, testDescriptor: "initial state" });
};

testGetGameForInitialState();
