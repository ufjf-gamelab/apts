import { expect, test } from "vitest";

import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const getPlayerKeyShouldReturn = ({
  expectedPlayerKey,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedPlayerKey: TestingState["playerKey"];
}): void => {
  test(`${testDescriptor}: getPlayerKey() should return {${expectedPlayerKey}}`, () => {
    expect(state.getPlayerKey()).toBe(expectedPlayerKey);
  });
};

const testGetPlayerKey = ({
  expectedPlayerKey,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedPlayerKey: TestingState["playerKey"];
}): void => {
  getPlayerKeyShouldReturn({ expectedPlayerKey, state, testDescriptor });
};

const testGetPlayerKeyForInitialState = (): void => {
  const state = createInitialState();
  const expectedPlayerKey = state.getPlayerKey();
  testGetPlayerKey({
    expectedPlayerKey,
    state,
    testDescriptor: "initial state",
  });
};

testGetPlayerKeyForInitialState();
