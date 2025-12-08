import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { ConnectFourSlot } from "../Slot.js";
import type { ConnectFourSlotWithData } from "./setup.js";

import {
  indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
} from "./indexedRecords.js";

const validateGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
  slot,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    ConnectFourSlot["getIndexOfOccupyingPlayer"]
  >;
  slot: ConnectFourSlot;
}) => {
  const indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();
  expect(indexOfOccupyingPlayer).toBe(expectedIndexOfOccupyingPlayer);
};

const createDescriptionForTestOfGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    ConnectFourSlot["getIndexOfOccupyingPlayer"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getIndexOfOccupyingPlayer()",
    returnedValue: expectedIndexOfOccupyingPlayer,
  });

const createDescription = ({
  affix,
  expectedIndexOfOccupyingPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexOfOccupyingPlayer>[0],
    "expectedIndexOfOccupyingPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfOccupyingPlayer({
      expectedIndexOfOccupyingPlayer,
    }),
  });

const testGetIndexOfOccupyingPlayer = ({
  arrayOfSlotsWithData,
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: ConnectFourSlotWithData[];
  descriptionOfArrayOfSlotsWithData: string;
}) => {
  arrayOfSlotsWithData.forEach(
    ({ keyOfSlot, requiredParams: { indexOfOccupyingPlayer }, slot }) => {
      test(
        createDescription({
          affix: `${descriptionOfArrayOfSlotsWithData} — ${keyOfSlot}`,
          expectedIndexOfOccupyingPlayer: indexOfOccupyingPlayer,
        }),

        () => {
          validateGetIndexOfOccupyingPlayer({
            expectedIndexOfOccupyingPlayer: indexOfOccupyingPlayer,
            slot,
          });
        },
      );
    },
  );
};

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData: indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotR5C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR5C0IsFilledByAlice",
});

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno",
});

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno",
});

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AndR0C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno",
});

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR5C0AndR4C0AndR3C0AndR2C1AndR1C1AreFilledByAliceAndR5C1AndR4C1AndR3C1AndR2C0AndR1C0AreFilledByBruno",
});
