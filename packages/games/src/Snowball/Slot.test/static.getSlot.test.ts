import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/Slot.test/static.getSlot.test.js";
import { test } from "vitest";

import type { SnowballSlotWithData } from "./setup.js";

import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./indexedRecords.js";

const createDescription = ({
  affix,
  indexOfSlot,
  keyOfSlot,
  slots,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetSlot>[0],
    "indexOfSlot" | "keyOfSlot" | "slots"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetSlot({
      indexOfSlot,
      keyOfSlot,
      slots,
    }),
  });

const testGetSlot = ({
  arrayOfSlotsWithData,
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
  descriptionOfArrayOfSlotsWithData: string;
}) => {
  const arrayOfSlotsToCreateDescription = `[${arrayOfSlotsWithData
    .map(({ keyOfSlot: innerKeyOfSlot }) => innerKeyOfSlot)
    .join(", ")}]`;
  const arrayOfSlotsToValidateGetSlot = arrayOfSlotsWithData.map(
    ({ slot: innerSlot }) => innerSlot,
  );
  arrayOfSlotsWithData.forEach(({ keyOfSlot, slot }, indexOfSlot) => {
    test(
      createDescription({
        affix: descriptionOfArrayOfSlotsWithData,
        indexOfSlot,
        keyOfSlot,
        slots: arrayOfSlotsToCreateDescription,
      }),

      () => {
        validateGetSlot({
          expectedSlot: slot,
          indexOfSlot,
          slots: arrayOfSlotsToValidateGetSlot,
        });
      },
    );
  });
};

testGetSlot({
  arrayOfSlotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testGetSlot({
  arrayOfSlotsWithData: indexedSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
testGetSlot({
  arrayOfSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testGetSlot({
  arrayOfSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testGetSlot({
  arrayOfSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno",
});
