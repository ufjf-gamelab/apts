import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
} from "@repo/game/Score.test/getPointsOfEachPlayer.test.js";
import { test } from "vitest";

import { scoresWithData } from "./records.js";
import {
  deriveSnowballScoreParams,
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
  arrayOfScoresWithData.forEach(({ keyOfScore, params, score }) => {
    const derivedParams = deriveSnowballScoreParams(params);
    test(
      createDescription({
        affix: keyOfScore,
        expectedPointsOfEachPlayer: new Map(
          params.pointsOfEachPlayer
            .values()
            .map((playerWithData) => [
              playerWithData.player.keyOfPlayer,
              playerWithData.points,
            ]),
        ),
      }),
      () => {
        validateGetPointsOfEachPlayer({
          expectedPointsOfEachPlayer: derivedParams.pointsOfEachPlayer,
          score,
        });
      },
    );
  });
};

testGetPointsOfEachPlayer({
  arrayOfScoresWithData: Object.values(scoresWithData),
});
