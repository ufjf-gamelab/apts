import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlots,
  validateGetSlots,
} from "@repo/game/State.test/getSlots.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "./setup.js";

import { recordOfSnowballStatesWithData } from "./records.js";

const createDescription = ({
  affix,
  keysOfExpectedSlots,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetSlots>[0],
    "keysOfExpectedSlots"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetSlots({
      keysOfExpectedSlots,
    }),
  });

const testGetSlots = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { slotsWithData }, state }) => {
      test(
        createDescription({
          affix: keyOfState,
          keysOfExpectedSlots: slotsWithData.map(
            (slotWithData) => slotWithData.keyOfSlot,
          ),
        }),

        () => {
          validateGetSlots({
            expectedSlots: slotsWithData.map(
              (slotWithData) => slotWithData.slot,
            ),
            state,
          });
        },
      );
    },
  );
};

testGetSlots({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
