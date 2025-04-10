import { expect, test } from "vitest";

import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const getIndexOfPlayerShouldReturn = ({
  expectedIndexOfPlayer,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedIndexOfPlayer: ReturnType<TestingState["getIndexOfPlayer"]>;
}): void => {
  test(`${testDescriptor}: getIndexOfPlayer() should return {${expectedIndexOfPlayer}}`, () => {
    expect(state.getIndexOfPlayer()).toBe(expectedIndexOfPlayer);
  });
};

const testGetIndexOfPlayerForInitialState = (): void => {
  const { state } = createInitialState();
  const expectedIndexOfPlayer = state.getIndexOfPlayer();
  getIndexOfPlayerShouldReturn({
    expectedIndexOfPlayer,
    state,
    testDescriptor: "initial",
  });
};

testGetIndexOfPlayerForInitialState();
