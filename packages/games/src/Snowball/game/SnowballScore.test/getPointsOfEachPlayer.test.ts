import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
} from "@repo/game/Score.test/getPointsOfEachPlayer.test.js";
import { test } from "vitest";

import { recordOfSnowballScoresWithData } from "./records.js";
import {
  deriveParamsOfSnowballScore,
  type SnowballScoreWithData,
} from "./setup.js";

const createDescription = ({
  affix,
  expectedPointsOfEachPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetPointsOfEachPlayer>[0],
    "expectedPointsOfEachPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPointsOfEachPlayer({
      expectedPointsOfEachPlayer,
    }),
  });

const testGetPointsOfEachPlayer = ({
  arrayOfScoresWithData,
}: {
  arrayOfScoresWithData: SnowballScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(({ keyOfScore, requiredParams, score }) => {
    test(
      createDescription({
        affix: keyOfScore,
        expectedPointsOfEachPlayer: new Map(
          requiredParams.pointsOfEachPlayerWithData
            .values()
            .map((playerWithData) => [
              playerWithData.playerWithData.keyOfPlayer,
              playerWithData.points,
            ]),
        ),
      }),

      () => {
        const derivedParams = deriveParamsOfSnowballScore(requiredParams);

        validateGetPointsOfEachPlayer({
          expectedPointsOfEachPlayer: derivedParams.pointsOfEachPlayer,
          score,
        });
      },
    );
  });
};

testGetPointsOfEachPlayer({
  arrayOfScoresWithData: Object.values(recordOfSnowballScoresWithData),
});
