import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import { Slot } from "../Slot.js";

type PropsOfGetSlot<Sl extends Slot> = Parameters<typeof Slot.getSlot<Sl>>[0];
type ReturnTypeOfGetSlot<Sl extends Slot> = ReturnType<typeof Slot.getSlot<Sl>>;

const validateGetSlot = <Sl extends Slot>({
  expectedSlot,
  indexOfSlot,
  slots,
}: {
  expectedSlot: ReturnTypeOfGetSlot<Sl>;
  indexOfSlot: PropsOfGetSlot<Sl>["indexOfSlot"];
  slots: PropsOfGetSlot<Sl>["slots"];
}) => {
  const slot = Slot.getSlot({ indexOfSlot, slots });
  expect(slot).toBe(expectedSlot);
};

const createDescriptionForTestOfGetSlot = <Sl extends Slot>({
  expectedKeyOfSlot,
  indexOfSlot,
  slots,
}: {
  expectedKeyOfSlot: string;
  indexOfSlot: PropsOfGetSlot<Sl>["indexOfSlot"];
  slots: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `Slot.getSlot({ indexOfSlot: ${indexOfSlot}, slots: ${slots} })`,
    returnedValue: expectedKeyOfSlot,
  });

export { createDescriptionForTestOfGetSlot, validateGetSlot };
