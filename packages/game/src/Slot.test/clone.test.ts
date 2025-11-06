import { expect } from "vitest";

import { Slot } from "../Slot.js";

const validateClone = <Sl extends Slot<Sl>>({
  clonedSlot,
  slot,
}: {
  clonedSlot: unknown;
  slot: Sl;
}) => {
  expect(clonedSlot).toBeInstanceOf(Slot);
  expect(clonedSlot).not.toBe(slot);
  expect(clonedSlot).toStrictEqual(slot);
};

export { validateClone };
