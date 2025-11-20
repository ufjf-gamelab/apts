import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexOfPlayer,
  validateGetIndexOfPlayer,
} from "@repo/game/State.test/getIndexOfPlayer.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  keyOfPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexOfPlayer>[0],
    "keyOfPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfPlayer({
      keyOfPlayer,
    }),
  });

Object.values(statesWithDataForUnitTest).forEach(
  ({ keyOfState, params, state }) => {
    test(
      createDescription({
        affix: keyOfState,
        keyOfPlayer: params.player.player.keyOfPlayer,
      }),
      () => {
        validateGetIndexOfPlayer({
          expectedIndexOfPlayer: params.player.indexOfPlayer,
          state,
        });
      },
    );
  },
);
