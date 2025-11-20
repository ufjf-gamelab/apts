import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
} from "@repo/game/State.test/getQuantityOfSlots.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedQuantityOfSlots,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetQuantityOfSlots>[0],
    "expectedQuantityOfSlots"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfSlots({
      expectedQuantityOfSlots,
    }),
  });

Object.values(statesWithDataForUnitTest).forEach(
  ({ keyOfState, params, state }) => {
    const expectedQuantityOfSlots = params.slots.length;
    test(
      createDescription({
        affix: keyOfState,
        expectedQuantityOfSlots,
      }),
      () => {
        validateGetQuantityOfSlots({
          expectedQuantityOfSlots,
          state,
        });
      },
    );
  },
);
