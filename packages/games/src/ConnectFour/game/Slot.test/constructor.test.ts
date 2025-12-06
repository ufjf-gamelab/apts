import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Slot.test/constructor.test.js";
import { expect, test } from "vitest";

import type { ConnectFourSlotWithData } from "./setup.js";

import { ConnectFourSlot } from "../Slot.js";
import {
  indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
} from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "ConnectFourSlot",
    }),
  });

const testConstructor = ({
  arrayOfSlotsWithData,
  descriptionOfArrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: ConnectFourSlotWithData[];
  descriptionOfArrayOfSlotsWithData: string;
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, requiredParams }) => {
    test(
      createDescription({
        affix: `${descriptionOfArrayOfSlotsWithData} — ${keyOfSlot}`,
      }),

      () => {
        const { indexOfOccupyingPlayer } = requiredParams;

        const newSlot = new ConnectFourSlot({
          indexOfOccupyingPlayer,
        });

        validateConstructor({ slot: newSlot });

        expect(newSlot).toBeInstanceOf(ConnectFourSlot);
      },
    );
  });
};

testConstructor({
  arrayOfSlotsWithData: indexedConnectFourSlotsWithDataInWhichAllSlotsAreEmpty,
  descriptionOfArrayOfSlotsWithData: "allSlotsAreEmpty",
});
testConstructor({
  arrayOfSlotsWithData:
    indexedConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
