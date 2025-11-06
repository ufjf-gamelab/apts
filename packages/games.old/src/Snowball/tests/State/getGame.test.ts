import { expect, test } from "vitest";

import type TestingState from "../../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const getGameShouldReturn = ({
  expectedGame,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedGame: ReturnType<TestingState["getGame"]>;
}): void => {
  test(`${testDescriptor}: getGame() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    expect(state.getGame()).not.toBe(expectedGame);
    expect(state.getGame()).toStrictEqual(expectedGame);
  });
};

const testGetGameForInitialState = (): void => {
  const { state } = createInitialState();
  const expectedGame = state.getGame();
  getGameShouldReturn({ expectedGame, state, testDescriptor: "initial" });
};

testGetGameForInitialState();
