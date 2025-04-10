import { expect, test } from "vitest";

import TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  state,
  testDescriptor,
}: TestStateParams): void => {
  test(`${testDescriptor}: state should be an instance of the class {TestingState}`, () => {
    expect(state).toBeInstanceOf(TestingState);
  });
};

const testConstructorForInitialState = (): void => {
  const { state } = createInitialState();
  shouldBeAnInstanceOfItsClass({ state, testDescriptor: "initial" });
};

testConstructorForInitialState();
