import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/Slot.test/static.getSlot.test.js";
import { test } from "vitest";

import type { SnowballSlotWithData } from "./setup.js";

import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./indexedRecords.js";

const createDescription = ({
  indexOfSlot,
  keyOfSlot,
  slots,
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetSlot>[0],
  "indexOfSlot" | "keyOfSlot" | "slots"
>) =>
  createDescriptionForTest({
    description: createDescriptionForTestOfGetSlot({
      indexOfSlot,
      keyOfSlot,
      slots,
    }),
  });

const testGetSlot = ({
  arrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
}) => {
  const arrayOfSlotsToCreateDescription = `[${arrayOfSlotsWithData
    .map(({ keyOfSlot: innerKeyOfSlot }) => innerKeyOfSlot)
    .join(", ")}]`;
  const arrayOfSlotsToValidateGetSlot = arrayOfSlotsWithData.map(
    ({ slot: innerSlot }) => innerSlot,
  );
  arrayOfSlotsWithData.forEach(({ keyOfSlot, slot }, index) => {
    test(
      createDescription({
        indexOfSlot: index,
        keyOfSlot,
        slots: arrayOfSlotsToCreateDescription,
      }),
      () => {
        validateGetSlot({
          expectedSlot: slot,
          indexOfSlot: index,
          slots: arrayOfSlotsToValidateGetSlot,
        });
      },
    );
  });
};

testGetSlot({
  arrayOfSlotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
});
testGetSlot({
  arrayOfSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});
