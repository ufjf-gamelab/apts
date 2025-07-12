import { expect } from "vitest";

import { Slot } from "../Slot.js";

const validateClone = ({
  clonedSlot,
  slot,
}: {
  clonedSlot: unknown;
  slot: Slot;
}) => {
  expect(clonedSlot).toBeInstanceOf(Slot);
  expect(clonedSlot).not.toBe(slot);
  expect(clonedSlot).toStrictEqual(slot);
};

export { validateClone };
