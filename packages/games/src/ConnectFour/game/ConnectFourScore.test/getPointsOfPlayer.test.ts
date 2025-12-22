import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/Score.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { ConnectFourPlayerWithData } from "../ConnectFourPlayer.test/setup.js";

import { indexedConnectFourPlayersWithData } from "../ConnectFourPlayer.test/indexedRecords.js";
import { recordOfConnectFourScoresWithData } from "./records.js";
import { type ConnectFourScoreWithData } from "./setup.js";

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
  arrayOfPlayersWithData: ConnectFourPlayerWithData[];
  arrayOfScoresWithData: ConnectFourScoreWithData[];
}) => {
  arrayOfScoresWithData.forEach(
    ({ keyOfScore, requiredParams: { pointsOfEachPlayerWithData }, score }) => {
      arrayOfPlayersWithData.forEach(({ keyOfPlayer }, indexOfPlayer) => {
        const expectedPointsOfPlayer =
          pointsOfEachPlayerWithData.get(indexOfPlayer)?.points ?? ZERO_POINTS;

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
  arrayOfPlayersWithData: indexedConnectFourPlayersWithData,
  arrayOfScoresWithData: Object.values(recordOfConnectFourScoresWithData),
});
