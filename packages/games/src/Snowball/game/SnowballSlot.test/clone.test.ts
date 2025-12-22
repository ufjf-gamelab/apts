import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/core/test.js";
import { validateClone } from "@repo/game/Slot.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballSlotWithData } from "./setup.js";

import { SnowballSlot } from "../SnowballSlot.js";
import {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
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
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
  descriptionOfArrayOfSlotsWithData: string;
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, slot }) => {
    test(
      createDescription({
        affix: `${descriptionOfArrayOfSlotsWithData} — ${keyOfSlot}`,
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
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testClone({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
testClone({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testClone({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testClone({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno",
});
