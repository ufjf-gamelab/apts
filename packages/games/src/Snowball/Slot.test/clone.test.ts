import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Slot.test/clone.test.js";
import { expect, test } from "vitest";

import { SnowballSlot } from "../Slot.js";
import { slotsWithDataForUnitTest } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballSlot",
    }),
  });

Object.values(slotsWithDataForUnitTest).forEach(({ keyOfSlot, slot }) => {
  test(
    createDescription({
      affix: keyOfSlot,
    }),
    () => {
      const clonedSlot = slot.clone();
      validateClone({ clonedSlot, slot });
      expect(clonedSlot).toBeInstanceOf(SnowballSlot);
    },
  );
});
