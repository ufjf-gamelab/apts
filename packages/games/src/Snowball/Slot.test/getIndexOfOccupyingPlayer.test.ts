import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballSlot } from "../Slot.js";
import type { SnowballSlotWithData } from "./setup.js";

import {
  indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./indexedRecords.js";

const INDEX_OF_FIRST_PLAYER = 0;

const validateGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
  slot,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    SnowballSlot["getIndexOfOccupyingPlayer"]
  >;
  slot: SnowballSlot;
}) => {
  let indexOfOccupyingPlayer = slot.getIndexOfOccupyingPlayer();
  expect(indexOfOccupyingPlayer).toBe(expectedIndexOfOccupyingPlayer);

  // Ensure that the returned object does not keep reference to the internal property
  if (indexOfOccupyingPlayer === null) {
    indexOfOccupyingPlayer = INDEX_OF_FIRST_PLAYER;
  } else {
    indexOfOccupyingPlayer += INCREMENT_ONE;
  }
  expect(slot.getIndexOfOccupyingPlayer()).toBe(expectedIndexOfOccupyingPlayer);
  expect(slot.getIndexOfOccupyingPlayer()).not.toEqual(indexOfOccupyingPlayer);
};

const createDescriptionForTestOfGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    SnowballSlot["getIndexOfOccupyingPlayer"]
  >;
}): string =>
  createDescriptionForTestsOfGetter({
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
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, params, slot }) => {
    test(
      createDescription({
        affix: keyOfSlot,
        expectedIndexOfOccupyingPlayer: params.indexOfOccupyingPlayer,
      }),
      () => {
        validateGetIndexOfOccupyingPlayer({
          expectedIndexOfOccupyingPlayer: params.indexOfOccupyingPlayer,
          slot,
        });
      },
    );
  });
};

testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData: indexedSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
});
testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});
