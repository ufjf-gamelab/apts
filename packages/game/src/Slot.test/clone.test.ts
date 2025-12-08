import { expect } from "vitest";

import { Slot } from "../Slot.js";

const validateClone = <GenericSlot extends Slot<GenericSlot>>({
  clonedSlot,
  slot,
}: {
  clonedSlot: unknown;
  slot: GenericSlot;
}) => {
  expect(clonedSlot).toBeInstanceOf(Slot);
  expect(clonedSlot).toStrictEqual(slot);
};

export { validateClone };
