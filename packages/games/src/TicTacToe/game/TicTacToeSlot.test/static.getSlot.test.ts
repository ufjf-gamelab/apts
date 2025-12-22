import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/Slot.test/static.getSlot.test.js";
import { test } from "vitest";

import type { TicTacToeSlotWithData } from "./setup.js";

import {
  indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
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
  arrayOfSlotsWithData: TicTacToeSlotWithData[];
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
  arrayOfSlotsWithData: indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testGetSlot({
  arrayOfSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
