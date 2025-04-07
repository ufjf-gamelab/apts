import { expect, test } from "vitest";

import { createInitialState, type TestStateParams } from "./setup.js";

const isFinalShouldReturn = ({
  state,
  testDescriptor,
}: TestStateParams): void => {
  test(`${testDescriptor}: isFinal() should return {false}`, () => {
    expect(state.isFinal()).toBe(false);
  });
};

const testIsFinal = ({ state, testDescriptor }: TestStateParams): void => {
  isFinalShouldReturn({ state, testDescriptor });
};

const testIsFinalForInitialState = (): void => {
  const state = createInitialState();
  testIsFinal({ state, testDescriptor: "initial state" });
};

testIsFinalForInitialState();
