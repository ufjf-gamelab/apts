import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
} from "@repo/game/State.test/getQuantityOfSlots.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "./setup.js";

import { statesWithData } from "./records.js";

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

const testGetQuantityOfSlots = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, params, state }) => {
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
  });
};

testGetQuantityOfSlots({
  arrayOfStatesWithData: Object.values(statesWithData),
});
