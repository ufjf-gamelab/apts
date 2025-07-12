import { expect } from "vitest";

import { Slot } from "../Slot.js";

const validateConstructor = ({ slot }: { slot: Slot }) => {
  expect(slot).toBeInstanceOf(Slot);
};

export { validateConstructor };
