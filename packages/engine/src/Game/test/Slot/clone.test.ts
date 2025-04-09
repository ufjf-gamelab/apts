import { expect, test } from "vitest";

import TestingSlot from "../Slot.js";
import { createSlots, type TestSlotParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  slot,
  testDescriptor,
}: TestSlotParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingSlot}`, () => {
    const clone = slot.clone();
    expect(clone).toBeInstanceOf(TestingSlot);
    expect(clone).not.toBe(slot);
  });
};

const testClone = ({ slot, testDescriptor }: TestSlotParams): void => {
  cloneShouldCreateANewInstance({ slot, testDescriptor });
};

const testCloneForEverySlot = (): void => {
  const slots = createSlots();
  slots.forEach(({ dataRelatedToCreatedSlot: { nameOfIndex }, slot }) => {
    testClone({ slot, testDescriptor: nameOfIndex });
  });
};

testCloneForEverySlot();
