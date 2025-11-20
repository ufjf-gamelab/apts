import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlots,
  validateGetSlots,
} from "@repo/game/State.test/getSlots.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "./setup.js";

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

Object.values(statesWithDataForUnitTest).forEach(
  ({ keyOfState, params, state }) => {
    test(
      createDescription({
        affix: keyOfState,
        keysOfExpectedSlots: params.slots.map((slot) => slot.keyOfSlot),
      }),
      () => {
        validateGetSlots({
          expectedSlots: params.slots.map((slot) => slot.slot),
          state,
        });
      },
    );
  },
);
