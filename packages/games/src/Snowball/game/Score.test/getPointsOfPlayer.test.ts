import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/Score.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { SnowballPlayerWithData } from "../Player.test/setup.js";

import { indexedSnowballPlayersWithData } from "../Player.test/indexedRecords.js";
import { recordOfSnowballScoresWithData } from "./records.js";
import { type SnowballScoreWithData } from "./setup.js";

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
  arrayOfScoresWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
  arrayOfScoresWithData: SnowballScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(
    ({ keyOfScore, requiredParams: { pointsOfEachPlayer }, score }) => {
      arrayOfPlayersWithData.forEach(({ keyOfPlayer }, indexOfPlayer) => {
        const expectedPointsOfPlayer =
          pointsOfEachPlayer.get(indexOfPlayer)?.points ?? ZERO_POINTS;

        test(
          createDescription({
            affix: keyOfScore,
            expectedPointsOfPlayer,
            keyOfPlayer,
          }),

          () => {
            validateGetPointsOfPlayer({
              expectedPointsOfPlayer,
              indexOfPlayer,
              score,
            });
          },
        );
      });
    },
  );
};

testGetPointsOfPlayer({
  arrayOfPlayersWithData: indexedSnowballPlayersWithData,
  arrayOfScoresWithData: Object.values(recordOfSnowballScoresWithData),
});
