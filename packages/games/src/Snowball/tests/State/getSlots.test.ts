import { expect, test } from "vitest";

import TestingSlot from "../../Slot.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { IndexOfTestingSlot } from "../Slot/setup.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const getSlotsShouldReturn = ({
  expectedSlots,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedSlots: TestingSlot[];
}): void => {
  test(`${testDescriptor}: getSlots() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    expect(state.getSlots()).not.toBe(expectedSlots);
    expect(state.getSlots()).toStrictEqual(expectedSlots);
  });

  test(`${testDescriptor}: modifying the object slots passed via constructor should not change the internal attribute`, () => {
    const slotsBeforeUpdate = [...expectedSlots];
    expectedSlots[IndexOfTestingSlot.NorthwestOfNorthwest] = new TestingSlot({
      indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
    });

    expect(state.getSlots()).not.toBe(expectedSlots);
    expect(state.getSlots()).not.toEqual(expectedSlots);
    expect(state.getSlots()).not.toBe(slotsBeforeUpdate);
    expect(state.getSlots()).toStrictEqual(slotsBeforeUpdate);
  });

  test(`${testDescriptor}: modifying the object slots received by the getter should not change the internal attribute`, () => {
    const slotsBeforeUpdate = [...state.getSlots()];
    const updatedSlots = state.getSlots() as TestingSlot[];
    updatedSlots[IndexOfTestingSlot.NorthwestOfNorthwest] = new TestingSlot({
      indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
    });

    expect(state.getSlots()).not.toBe(slotsBeforeUpdate);
    expect(state.getSlots()).toStrictEqual(slotsBeforeUpdate);
    expect(state.getSlots()).not.toBe(updatedSlots);
    expect(state.getSlots()).not.toEqual(updatedSlots);
  });
};

const testGetSlotsForInitialState = (): void => {
  const {
    dataRelatedToCreatedState: { slots },
    state,
  } = createInitialState();
  getSlotsShouldReturn({
    expectedSlots: Array.from(slots.entries()).map(([, { slot }]) => slot),
    state,
    testDescriptor: "initial",
  });
};

testGetSlotsForInitialState();
