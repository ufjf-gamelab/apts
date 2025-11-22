import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Slot.test/constructor.test.js";
import { expect, test } from "vitest";

import type { SnowballSlotWithData } from "./setup.js";

import { SnowballSlot } from "../Slot.js";
import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballSlot",
    }),
  });

const testConstructor = ({
  arrayOfSlotsWithData,
}: {
  arrayOfSlotsWithData: SnowballSlotWithData[];
}) => {
  arrayOfSlotsWithData.forEach(({ keyOfSlot, params }) => {
    test(
      createDescription({
        affix: keyOfSlot,
      }),
      () => {
        const { indexOfOccupyingPlayer } = params;
        const newSlot = new SnowballSlot({
          indexOfOccupyingPlayer,
        });

        validateConstructor({ slot: newSlot });
        expect(newSlot).toBeInstanceOf(SnowballSlot);
      },
    );
  });
};

testConstructor({
  arrayOfSlotsWithData: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
});
testConstructor({
  arrayOfSlotsWithData:
    indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
});
