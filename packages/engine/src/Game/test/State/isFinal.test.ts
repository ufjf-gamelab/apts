import { expect, test } from "vitest";

import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const isFinalShouldReturn = ({
  expectedIsFinal,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedIsFinal: ReturnType<TestingState["isFinal"]>;
}): void => {
  test(`${testDescriptor}: isFinal() should return {${expectedIsFinal}}`, () => {
    expect(state.isFinal()).toBe(expectedIsFinal);
  });
};

const testIsFinalForInitialState = (): void => {
  const { state } = createInitialState();
  isFinalShouldReturn({
    expectedIsFinal: false,
    state,
    testDescriptor: "initial",
  });
};

testIsFinalForInitialState();
