import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetScore,
  validateGetScore,
} from "@repo/game/State.test/getScore.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "./setup.js";

import { recordOfSnowballStatesWithData } from "./records.js";

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

const testGetScore = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({
      keyOfState,
      requiredParams: { playerWithDataAndIndex, scoreWithData },
      state,
    }) => {
      const expectedScore = scoreWithData.score;

      test(
        createDescription({
          affix: keyOfState,
          expectedScore,
          keyOfPlayer: playerWithDataAndIndex.playerWithData.keyOfPlayer,
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
};

testGetScore({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
