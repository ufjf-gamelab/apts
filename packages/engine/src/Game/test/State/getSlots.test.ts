import { expect, test } from "vitest";

import TestingContent from "../Content.js";
import { TestingPlayerKey } from "../Player.js";
import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const SLOT_ON_NORTHWEST_OF_NORTHWEST = 0;

const getSlotsShouldReturn = ({
  expectedSlots,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedSlots: TestingState["slots"];
}): void => {
  test(`${testDescriptor}: getSlots() should return should return an object equal to the one passed as parameter, but as a different reference`, () => {
    expect(state.getSlots()).not.toBe(expectedSlots);
    expect(state.getSlots()).toStrictEqual(expectedSlots);
  });

  test("modifying the object slots passed via constructor should not change the internal attribute", () => {
    const slotsBeforeUpdate = [...expectedSlots];
    expectedSlots[SLOT_ON_NORTHWEST_OF_NORTHWEST] = new TestingContent({
      playerKey: TestingPlayerKey.One,
    });

    expect(state.getSlots()).not.toBe(expectedSlots);
    expect(state.getSlots()).not.toEqual(expectedSlots);
    expect(state.getSlots()).not.toBe(slotsBeforeUpdate);
    expect(state.getSlots()).toStrictEqual(slotsBeforeUpdate);
  });

  test("modifying the object slots received by the getter should not change the internal attribute", () => {
    const slotsBeforeUpdate = state.getSlots();
    const updatedSlots = state.getSlots();
    updatedSlots[SLOT_ON_NORTHWEST_OF_NORTHWEST] = new TestingContent({
      playerKey: TestingPlayerKey.Two,
    });

    expect(state.getSlots()).not.toBe(slotsBeforeUpdate);
    expect(state.getSlots()).toStrictEqual(slotsBeforeUpdate);
    expect(state.getSlots()).not.toBe(updatedSlots);
    expect(state.getSlots()).not.toEqual(updatedSlots);
  });
};

const testGetSlots = ({
  expectedSlots,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedSlots: TestingState["slots"];
}): void => {
  getSlotsShouldReturn({ expectedSlots, state, testDescriptor });
};

const testGetSlotsForInitialState = (): void => {
  const state = createInitialState();
  const expectedSlots = state.getSlots();
  testGetSlots({ expectedSlots, state, testDescriptor: "initial state" });
};

testGetSlotsForInitialState();
