import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/Score.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { TicTacToePlayerWithData } from "../TicTacToePlayer.test/setup.js";

import { indexedTicTacToePlayersWithData } from "../TicTacToePlayer.test/indexedRecords.js";
import { recordOfTicTacToeScoresWithData } from "./records.js";
import { type TicTacToeScoreWithData } from "./setup.js";

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
  arrayOfPlayersWithData: TicTacToePlayerWithData[];
  arrayOfScoresWithData: TicTacToeScoreWithData[];
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
  arrayOfPlayersWithData: indexedTicTacToePlayersWithData,
  arrayOfScoresWithData: Object.values(recordOfTicTacToeScoresWithData),
});
