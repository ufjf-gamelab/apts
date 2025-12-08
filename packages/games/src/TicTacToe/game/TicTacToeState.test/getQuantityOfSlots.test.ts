import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
} from "@repo/game/State.test/getQuantityOfSlots.test.js";
import { test } from "vitest";

import type { TicTacToeStateWithData } from "./setup.js";

import { recordOfTicTacToeStatesWithData } from "./records.js";

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
  arrayOfStatesWithData: TicTacToeStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { slotsWithData }, state }) => {
      const expectedQuantityOfSlots = slotsWithData.length;

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
};

testGetQuantityOfSlots({
  arrayOfStatesWithData: Object.values(recordOfTicTacToeStatesWithData),
});
