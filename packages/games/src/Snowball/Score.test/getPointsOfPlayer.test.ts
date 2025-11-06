import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/Score.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { SnowballScore } from "../Score.js";

import { playersWithData } from "../Player.test/setup.js";
import { scoresWithDataForUnitTest } from "./setup.js";

const ZERO_POINTS = 0;

const createDescription = ({
  affix,
  expectedPointsOfPlayer,
  keyOfPlayer,
}: {
  affix: string;
  expectedPointsOfPlayer: ReturnType<SnowballScore["getPointsOfPlayer"]>;
  keyOfPlayer: string;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPointsOfPlayer({
      expectedPointsOfPlayer,
      keyOfPlayer,
    }),
  });

Object.values(scoresWithDataForUnitTest).forEach(
  ({ keyOfScore, params, score }) => {
    Object.values(playersWithData).forEach(({ indexOfPlayer, keyOfPlayer }) => {
      test(
        createDescription({
          affix: keyOfScore,
          expectedPointsOfPlayer:
            params.pointsOfEachPlayer.get(indexOfPlayer) ?? ZERO_POINTS,
          keyOfPlayer,
        }),
        () => {
          validateGetPointsOfPlayer({
            expectedPointsOfPlayer:
              params.pointsOfEachPlayer.get(indexOfPlayer) ?? ZERO_POINTS,
            indexOfPlayer,
            score,
          });
        },
      );
    });
  },
);
