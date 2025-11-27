import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
} from "@repo/game/Score.test/getPointsOfEachPlayer.test.js";
import { test } from "vitest";

import { recordOfTicTacToeScoresWithData } from "./records.js";
import {
  deriveParamsOfTicTacToeScore,
  type TicTacToeScoreWithData,
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
  arrayOfScoresWithData: TicTacToeScoreWithData[];
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
        const derivedParams = deriveParamsOfTicTacToeScore(requiredParams);

        validateGetPointsOfEachPlayer({
          expectedPointsOfEachPlayer: derivedParams.pointsOfEachPlayer,
          score,
        });
      },
    );
  });
};

testGetPointsOfEachPlayer({
  arrayOfScoresWithData: Object.values(recordOfTicTacToeScoresWithData),
});
