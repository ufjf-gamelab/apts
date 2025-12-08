import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballSlot } from "../Slot.js";
import type { SnowballSlotWithData } from "./setup.js";

import {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./indexedRecords.js";

const validateGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
  slot,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    SnowballSlot["getIndexOfOccupyingPlayer"]
  >;
  slot: SnowballSlot;
}) => {
  const indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();
  expect(indexOfOccupyingPlayer).toBe(expectedIndexOfOccupyingPlayer);
};

const createDescriptionForTestOfGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    SnowballSlot["getIndexOfOccupyingPlayer"]
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
  arrayOfSlotsWithData: SnowballSlotWithData[];
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
  arrayOfSlotsWithData: indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0reFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno",
});
testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  descriptionOfArrayOfSlotsWithData:
    "slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno",
});
