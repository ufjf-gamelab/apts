import { expect, test } from "vitest";

import TestingSlot from "../Slot.js";
import {
  createOneSlotForEachOccupyingPlayer,
  type TestSlotParams,
} from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  slot,
  testDescriptor,
}: TestSlotParams): void => {
  test(`${testDescriptor}: slot should be an instance of the class {TestingSlot}`, () => {
    expect(slot).toBeInstanceOf(TestingSlot);
  });
};

const testConstructorForEverySlot = (): void => {
  const slots = createOneSlotForEachOccupyingPlayer();
  slots.forEach(({ dataRelatedToCreatedSlot: { nameOfIndex }, slot }) => {
    shouldBeAnInstanceOfItsClass({
      slot,
      testDescriptor: nameOfIndex,
    });
  });
};

testConstructorForEverySlot();
