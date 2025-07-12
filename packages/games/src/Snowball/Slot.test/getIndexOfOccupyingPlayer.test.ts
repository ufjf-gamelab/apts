import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballSlot } from "../Slot.js";
import { slotsWithData, slotsWithDataForUnitTest } from "./setup.js";

const INDEX_OF_FIRST_PLAYER = 0;

const validateGetTitle = ({
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
}: {
  affix: string;
  expectedIndexOfOccupyingPlayer: ReturnType<
    SnowballSlot["getIndexOfOccupyingPlayer"]
  >;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfOccupyingPlayer({
      expectedIndexOfOccupyingPlayer,
    }),
  });

const testGetIndexOfOccupyingPlayer = (
  slotsWithDataToTest: typeof slotsWithData,
) => {
  Object.values(slotsWithDataToTest).forEach(({ keyOfSlot, params, slot }) => {
    test(
      createDescription({
        affix: keyOfSlot,
        expectedIndexOfOccupyingPlayer: params.indexOfOccupyingPlayer,
      }),
      () => {
        validateGetTitle({
          expectedIndexOfOccupyingPlayer: params.indexOfOccupyingPlayer,
          slot,
        });
      },
    );
  });
};

testGetIndexOfOccupyingPlayer(slotsWithData);
testGetIndexOfOccupyingPlayer(slotsWithDataForUnitTest);
