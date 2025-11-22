import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Slot.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballSlotWithData } from "./setup.js";

import { SnowballSlot } from "../Slot.js";
import {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballSlot",
    }),
  });

const testClone = ({
  arrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, slot }) => {
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
};

testClone({
  arrayOfSlotsWithData: indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
});
testClone({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});
