import { expect, test } from "vitest";

import TestingSlot from "../Slot.js";
import {
  createOneSlotForEachOccupyingPlayer,
  type TestSlotParams,
} from "./setup.js";

const cloneShouldCreateANewInstance = ({
  slot,
  testDescriptor,
}: TestSlotParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingSlot}`, () => {
    const clone = slot.clone();
    expect(clone).toBeInstanceOf(TestingSlot);
    expect(clone).not.toBe(slot);
    expect(clone).toStrictEqual(slot);
  });
};

const testCloneForEverySlot = (): void => {
  const slots = createOneSlotForEachOccupyingPlayer();
  slots.forEach(({ dataRelatedToCreatedSlot: { nameOfIndex }, slot }) => {
    cloneShouldCreateANewInstance({ slot, testDescriptor: nameOfIndex });
  });
};

testCloneForEverySlot();
