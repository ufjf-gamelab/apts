import { expect, test } from "vitest";

import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const toStringShouldReturn = ({
  expectedToString,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedToString: ReturnType<TestingState["toString"]>;
}): void => {
  test(`${testDescriptor}: toString() should return a string equal to the one passed as parameter`, () => {
    expect(state.toString()).toBe(expectedToString);
  });
};

const testToStringForInitialState = (): void => {
  const { state } = createInitialState();
  toStringShouldReturn({
    expectedToString:
      "| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n",
    state,
    testDescriptor: "initial",
  });
};

testToStringForInitialState();
