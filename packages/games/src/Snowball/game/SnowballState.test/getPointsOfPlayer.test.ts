import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/State.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { SnowballPlayerWithData } from "../SnowballPlayer.test/setup.js";
import type { SnowballStateWithData } from "./setup.js";

import { indexedSnowballPlayersWithData } from "../SnowballPlayer.test/indexedRecords.js";
import { recordOfSnowballStatesWithData } from "./records.js";

const ZERO_POINTS = 0;

const createDescription = ({
  affix,
  expectedPointsOfPlayer,
  keyOfPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetPointsOfPlayer>[0],
    "expectedPointsOfPlayer" | "keyOfPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPointsOfPlayer({
      expectedPointsOfPlayer,
      keyOfPlayer,
    }),
  });

const testGetPointsOfPlayer = ({
  arrayOfPlayersWithData,
  arrayOfStatesWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { scoreWithData }, state }) => {
      arrayOfPlayersWithData.forEach(({ keyOfPlayer }, indexOfPlayer) => {
        const expectedPointsOfPlayer =
          scoreWithData.requiredParams.pointsOfEachPlayerWithData.get(
            indexOfPlayer,
          )?.points ?? ZERO_POINTS;

        test(
          createDescription({
            affix: keyOfState,
            expectedPointsOfPlayer,
            keyOfPlayer,
          }),

          () => {
            validateGetPointsOfPlayer({
              expectedPointsOfPlayer,
              indexOfPlayer,
              state,
            });
          },
        );
      });
    },
  );
};

testGetPointsOfPlayer({
  arrayOfPlayersWithData: indexedSnowballPlayersWithData,
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
