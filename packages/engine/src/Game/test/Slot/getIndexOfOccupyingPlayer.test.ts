import { expect, test } from "vitest";

import type TestingSlot from "../Slot.js";
import { createSlots, type TestSlotParams } from "./setup.js";

const getIndexOfOccupyingPlayerShouldReturn = ({
  expectedIndexOfOccupyingPlayerShouldReturn,
  slot,
  testDescriptor,
}: TestSlotParams & {
  expectedIndexOfOccupyingPlayerShouldReturn: ReturnType<
    TestingSlot["getIndexOfOccupyingPlayer"]
  >;
}): void => {
  test(`${testDescriptor}: getIndexOfOccupyingPlayer() should return {${expectedIndexOfOccupyingPlayerShouldReturn}}`, () => {
    expect(slot.getIndexOfOccupyingPlayer()).toBe(
      expectedIndexOfOccupyingPlayerShouldReturn,
    );
  });
};

const testGetName = ({
  expectedIndexOfOccupyingPlayerShouldReturn,
  slot,
  testDescriptor,
}: TestSlotParams & {
  expectedIndexOfOccupyingPlayerShouldReturn: ReturnType<
    TestingSlot["getIndexOfOccupyingPlayer"]
  >;
}): void => {
  getIndexOfOccupyingPlayerShouldReturn({
    expectedIndexOfOccupyingPlayerShouldReturn,
    slot,
    testDescriptor,
  });
};

const testGetNameForEverySlot = (): void => {
  const slots = createSlots();
  slots.forEach(
    ({
      dataRelatedToCreatedSlot: { indexOfOccupyingPlayer, nameOfIndex },
      slot,
    }) => {
      testGetName({
        expectedIndexOfOccupyingPlayerShouldReturn: indexOfOccupyingPlayer,
        slot,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetNameForEverySlot();
