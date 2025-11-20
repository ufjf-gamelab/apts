import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetScore,
  validateGetScore,
} from "@repo/game/State.test/getScore.test.js";
import { test } from "vitest";

import { statesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedScore,
  keyOfPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetScore>[0],
    "expectedScore" | "keyOfPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetScore({
      expectedScore,
      keyOfPlayer,
    }),
  });

Object.values(statesWithDataForUnitTest).forEach(
  ({ keyOfState, params, state }) => {
    const expectedScore = params.score.score;
    test(
      createDescription({
        affix: keyOfState,
        expectedScore,
        keyOfPlayer: params.player.player.keyOfPlayer,
      }),
      () => {
        validateGetScore({
          expectedScore,
          state,
        });
      },
    );
  },
);
