import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/core/test.js";
import { validateConstructor } from "@repo/game/Slot.test/constructor.test.js";
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
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballSlot",
    }),
  });

const testConstructor = ({
  arrayOfSlotsWithData,
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
  descriptionOfArrayOfSlotsWithData: string;
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, requiredParams }) => {
    test(
      createDescription({
        affix: `${descriptionOfArrayOfSlotsWithData} — ${keyOfSlot}`,
      }),

      () => {
        const { indexOfOccupyingPlayer } = requiredParams;

        const newSlot = new SnowballSlot({
          indexOfOccupyingPlayer,
        });

        validateConstructor({ slot: newSlot });

        expect(newSlot).toBeInstanceOf(SnowballSlot);
      },
    );
  });
};

testConstructor({
  arrayOfSlotsWithData: indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testConstructor({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
testConstructor({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testConstructor({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testConstructor({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno",
});
