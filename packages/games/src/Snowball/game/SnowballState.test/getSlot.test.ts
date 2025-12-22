import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/State.test/getSlot.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "./setup.js";

import { recordOfSnowballStatesWithData } from "./records.js";

const createDescription = ({
  affix,
  indexOfSlot,
  keyOfSlot,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetSlot>[0],
    "indexOfSlot" | "keyOfSlot"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetSlot({
      indexOfSlot,
      keyOfSlot,
    }),
  });

const testGetSlot = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { slotsWithData }, state }) => {
      slotsWithData.forEach(({ keyOfSlot, slot }, indexOfSlot) => {
        test(
          createDescription({
            affix: keyOfState,
            indexOfSlot,
            keyOfSlot,
          }),

          () => {
            validateGetSlot({
              expectedSlot: slot,
              indexOfSlot,
              state,
            });
          },
        );
      });
    },
  );
};

testGetSlot({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
