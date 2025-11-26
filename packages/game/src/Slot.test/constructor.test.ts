import { expect } from "vitest";

import { Slot } from "../Slot.js";

const validateConstructor = <GenericSlot extends Slot<GenericSlot>>({
  slot,
}: {
  slot: GenericSlot;
}) => {
  expect(slot).toBeInstanceOf(Slot);
};

export { validateConstructor };
