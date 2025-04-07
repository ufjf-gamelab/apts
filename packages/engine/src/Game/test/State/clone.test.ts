import { expect, test } from "vitest";

import TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  state,
  testDescriptor,
}: TestStateParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingState}`, () => {
    const clone = state.clone();
    expect(clone).toBeInstanceOf(TestingState);
    expect(clone).not.toBe(state);
    expect(clone.getGame()).not.toBe(state.getGame());
    expect(clone.getGame()).toStrictEqual(state.getGame());
    expect(clone.getPlayerKey()).toBe(state.getPlayerKey());
    expect(clone.getScore()).not.toBe(state.getScore());
    expect(clone.getScore()).toStrictEqual(state.getScore());
    expect(clone.getSlots()).not.toBe(state.getSlots());
    expect(clone.getSlots()).toStrictEqual(state.getSlots());
  });
};

const testClone = ({ state, testDescriptor }: TestStateParams): void => {
  cloneShouldCreateANewInstance({ state, testDescriptor });
};

const testCloneForInitialState = (): void => {
  const state = createInitialState();
  testClone({ state, testDescriptor: "initial state" });
};

testCloneForInitialState();
