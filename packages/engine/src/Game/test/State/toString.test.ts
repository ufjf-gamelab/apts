import { expect, test } from "vitest";

import { createInitialState, type TestStateParams } from "./setup.js";

const toStringShouldReturn = ({
  state,
  testDescriptor,
}: TestStateParams): void => {
  test(`${testDescriptor}: toString() should return a matrix of 9x9 in which each slot is surrounded by "|" and its value is shown as "-"`, () => {
    expect(state.toString()).toBe(
      "| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n| - | - | - | - | - | - | - | - | - |\n",
    );
  });
};

const testToString = ({ state, testDescriptor }: TestStateParams): void => {
  toStringShouldReturn({ state, testDescriptor });
};

const testToStringForInitialState = (): void => {
  const state = createInitialState();
  testToString({ state, testDescriptor: "initial state" });
};

testToStringForInitialState();
