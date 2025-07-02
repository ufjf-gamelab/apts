import { expect, test } from "vitest";

import TestingState from "../../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  state,
  testDescriptor,
}: TestStateParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingState}`, () => {
    const clone = state.clone();
    expect(clone).toBeInstanceOf(TestingState);
    expect(clone).not.toBe(state);
    expect(clone).toStrictEqual(state);
  });
};

const testCloneForInitialState = (): void => {
  const { state } = createInitialState();
  cloneShouldCreateANewInstance({ state, testDescriptor: "initial" });
};

testCloneForInitialState();
