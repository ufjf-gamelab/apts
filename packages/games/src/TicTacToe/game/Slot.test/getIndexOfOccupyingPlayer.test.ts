import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { TicTacToeSlot } from "../Slot.js";
import type { TicTacToeSlotWithData } from "./setup.js";

import {
  indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
} from "./indexedRecords.js";

const INDEX_OF_FIRST_PLAYER = 0;

const validateGetIndexOfOccupyingPlayer = ({
  expectedIndexOfOccupyingPlayer,
  slot,
}: {
  expectedIndexOfOccupyingPlayer: ReturnType<
    TicTacToeSlot["getIndexOfOccupyingPlayer"]
  >;
  slot: TicTacToeSlot;
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
    TicTacToeSlot["getIndexOfOccupyingPlayer"]
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
  arrayOfSlotsWithData: TicTacToeSlotWithData[];
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
  arrayOfSlotsWithData: indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testGetIndexOfOccupyingPlayer({
  arrayOfSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
