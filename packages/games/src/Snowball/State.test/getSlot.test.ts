import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSlot,
  validateGetSlot,
} from "@repo/game/State.test/getSlot.test.js";
import { test } from "vitest";

import { statesWithData } from "./records.js";

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

Object.values(statesWithData).forEach(({ keyOfState, params, state }) => {
  params.slots.forEach(({ keyOfSlot, slot }, index) => {
    test(
      createDescription({
        affix: keyOfState,
        indexOfSlot: index,
        keyOfSlot,
      }),
      () => {
        validateGetSlot({
          expectedSlot: slot,
          indexOfSlot: index,
          state,
        });
      },
    );
  });
});
