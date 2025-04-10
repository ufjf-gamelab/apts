import { expect, test } from "vitest";

import type TestingSlot from "../Slot.js";
import {
  createOneSlotForEachOccupyingPlayer,
  type TestSlotParams,
} from "./setup.js";

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

const testGetNameForEverySlot = (): void => {
  const slots = createOneSlotForEachOccupyingPlayer();
  slots.forEach(
    ({
      dataRelatedToCreatedSlot: { indexOfOccupyingPlayer, nameOfIndex },
      slot,
    }) => {
      getIndexOfOccupyingPlayerShouldReturn({
        expectedIndexOfOccupyingPlayerShouldReturn: indexOfOccupyingPlayer,
        slot,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetNameForEverySlot();
