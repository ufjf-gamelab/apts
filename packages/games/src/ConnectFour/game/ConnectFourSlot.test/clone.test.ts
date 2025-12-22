import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/core/test.js";
import { validateClone } from "@repo/game/Slot.test/clone.test.js";
import { expect, test } from "vitest";

import type { ConnectFourSlotWithData } from "./setup.js";

import { ConnectFourSlot } from "../ConnectFourSlot.js";
import {
  indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
} from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "ConnectFourSlot",
    }),
  });

const testClone = ({
  arrayOfSlotsWithData,
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: ConnectFourSlotWithData[];
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

        expect(clonedSlot).toBeInstanceOf(ConnectFourSlot);
      },
    );
  });
};

testClone({
  arrayOfSlotsWithData: indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});

testClone({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR5C0IsFilledByAlice",
});

testClone({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno",
});

testClone({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno",
});

testClone({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno",
});

testClone({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno",
});
