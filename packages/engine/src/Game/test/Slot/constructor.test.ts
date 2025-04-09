import { expect, test } from "vitest";

import TestingSlot from "../Slot.js";
import { createSlots, type TestSlotParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  slot,
  testDescriptor,
}: TestSlotParams): void => {
  test(`${testDescriptor}: slot should be an instance of the class {TestingSlot}`, () => {
    expect(slot).toBeInstanceOf(TestingSlot);
  });
};

const testConstructor = ({ slot, testDescriptor }: TestSlotParams): void => {
  shouldBeAnInstanceOfItsClass({ slot, testDescriptor });
};

const testConstructorForEverySlot = (): void => {
  const slots = createSlots();
  slots.forEach(({ dataRelatedToCreatedSlot: { nameOfIndex }, slot }) => {
    testConstructor({
      slot,
      testDescriptor: nameOfIndex,
    });
  });
};

testConstructorForEverySlot();
