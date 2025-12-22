import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import { Slot } from "../Slot.js";

type PropsOfGetSlot<GenericSlot extends Slot<GenericSlot>> = Parameters<
  typeof Slot.getSlot<GenericSlot>
>[0];

type ReturnTypeOfGetSlot<GenericSlot extends Slot<GenericSlot>> = ReturnType<
  typeof Slot.getSlot<GenericSlot>
>;

const validateGetSlot = <GenericSlot extends Slot<GenericSlot>>({
  expectedSlot,
  indexOfSlot,
  slots,
}: Pick<PropsOfGetSlot<GenericSlot>, "indexOfSlot" | "slots"> & {
  expectedSlot: ReturnTypeOfGetSlot<GenericSlot>;
}) => {
  const slot = Slot.getSlot({ indexOfSlot, slots });
  expect(slot).toBeInstanceOf(Slot);
  expect(slot).toBe(expectedSlot);
};

const createDescriptionForTestOfGetSlot = <
  GenericSlot extends Slot<GenericSlot>,
>({
  indexOfSlot,
  keyOfSlot,
  slots,
}: Pick<PropsOfGetSlot<GenericSlot>, "indexOfSlot"> & {
  keyOfSlot: string;
  slots: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `Slot.getSlot({ indexOfSlot: ${indexOfSlot}, slots: ${slots} })`,
    returnedValue: keyOfSlot,
  });

export { createDescriptionForTestOfGetSlot, validateGetSlot };
