import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/State.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import { getIndexOfPlayer } from "../Game.test/players.js";
import { playersWithData } from "../Player.test/setup.js";
import { statesWithDataForUnitTest } from "./setup.js";

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

Object.values(statesWithDataForUnitTest).forEach(
  ({ keyOfState, params, state }) => {
    Object.values(playersWithData).forEach(({ keyOfPlayer }) => {
      const indexOfPlayer = getIndexOfPlayer({ keyOfPlayer });
      const expectedPointsOfPlayer =
        params.score.params.pointsOfEachPlayer.get(indexOfPlayer) ??
        ZERO_POINTS;

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
