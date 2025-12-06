import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Slot.test/clone.test.js";
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
    indexedConnectFourSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  descriptionOfArrayOfSlotsWithData: "slotR0C0IsFilledByAlice",
});
