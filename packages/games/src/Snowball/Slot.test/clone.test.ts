import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Slot.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballSlot } from "../Slot.js";
import { slotsWithParams } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballSlot",
    }),
  });

Object.values(slotsWithParams).forEach(({ indexOfSlot, slot }) => {
  const description = createDescription({
    affix: indexOfSlot.toString(),
  });
  test(description, () => {
    const clonedSlot = slot.clone();
    validateClone({ clonedSlot, slot });
    expect(clonedSlot).toBeInstanceOf(SnowballSlot);
  });
});
