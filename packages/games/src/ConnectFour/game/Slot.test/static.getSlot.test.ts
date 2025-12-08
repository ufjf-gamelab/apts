import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/Slot.test/static.getSlot.test.js";
import { test } from "vitest";

import type { ConnectFourSlotWithData } from "./setup.js";

import {
  indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
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
  arrayOfSlotsWithData: ConnectFourSlotWithData[];
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
  arrayOfSlotsWithData: indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});

testGetSlot({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR5C0IsFilledByAlice",
});

testGetSlot({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno",
});

testGetSlot({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno",
});

testGetSlot({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno",
});

testGetSlot({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno",
});
