import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfEachPlayer,
  validateGetPointsOfEachPlayer,
} from "@repo/game/Score.test/getPointsOfEachPlayer.test.js";
import { test } from "vitest";

import type { SnowballScore } from "../Score.js";

import { getKeyOfPlayer } from "../Game.test/players.js";
import { scoresWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedPointsOfEachPlayer,
}: {
  affix: string;
  expectedPointsOfEachPlayer: ReturnType<
    SnowballScore["getPointsOfEachPlayer"]
  >;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPointsOfEachPlayer({
      expectedPointsOfEachPlayer,
      getKeyOfPlayer,
    }),
  });

Object.values(scoresWithDataForUnitTest).forEach(
  ({ keyOfScore, params, score }) => {
    test(
      createDescription({
        affix: keyOfScore,
        expectedPointsOfEachPlayer: params.pointsOfEachPlayer,
      }),
      () => {
        validateGetPointsOfEachPlayer({
          expectedPointsOfEachPlayer: params.pointsOfEachPlayer,
          score,
        });
      },
    );
  },
);
