import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexOfPlayer,
  validateGetIndexOfPlayer,
} from "@repo/game/State.test/getIndexOfPlayer.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "./setup.js";

import { statesWithData } from "./records.js";

const createDescription = ({
  affix,
  indexOfPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexOfPlayer>[0],
    "indexOfPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfPlayer({
      indexOfPlayer,
    }),
  });

const testGetIndexOfPlayer = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, params, state }) => {
    test(
      createDescription({
        affix: keyOfState,
        indexOfPlayer: params.player.indexOfPlayer,
      }),

      () => {
        validateGetIndexOfPlayer({
          expectedIndexOfPlayer: params.player.indexOfPlayer,
          state,
        });
      },
    );
  });
};

testGetIndexOfPlayer({
  arrayOfStatesWithData: Object.values(statesWithData),
});
