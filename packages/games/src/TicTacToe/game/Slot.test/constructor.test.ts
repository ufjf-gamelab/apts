import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Slot.test/constructor.test.js";
import { expect, test } from "vitest";

import type { TicTacToeSlotWithData } from "./setup.js";

import { TicTacToeSlot } from "../Slot.js";
import {
  indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
} from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeSlot",
    }),
  });

const testConstructor = ({
  arrayOfSlotsWithData,
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: TicTacToeSlotWithData[];
  descriptionOfArrayOfSlotsWithData: string;
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, requiredParams }) => {
    test(
      createDescription({
        affix: `${descriptionOfArrayOfSlotsWithData} — ${keyOfSlot}`,
      }),

      () => {
        const { indexOfOccupyingPlayer } = requiredParams;

        const newSlot = new TicTacToeSlot({
          indexOfOccupyingPlayer,
        });

        validateConstructor({ slot: newSlot });

        expect(newSlot).toBeInstanceOf(TicTacToeSlot);
      },
    );
  });
};

testConstructor({
  arrayOfSlotsWithData: indexedTicTacToeSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testConstructor({
  arrayOfSlotsWithData:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
