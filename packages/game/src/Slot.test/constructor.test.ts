import { expect } from "vitest";

import { Slot } from "../Slot.js";

const validateConstructor = <Sl extends Slot<Sl>>({ slot }: { slot: Sl }) => {
  expect(slot).toBeInstanceOf(Slot);
};

export { validateConstructor };
