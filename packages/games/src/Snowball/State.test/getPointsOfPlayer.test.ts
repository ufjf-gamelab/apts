import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/State.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { SnowballPlayerWithData } from "../Player.test/setup.js";
import type { SnowballStateWithData } from "./setup.js";

import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as indexedPlayersWithData } from "../Player.test/indexedRecords.js";
import { statesWithData } from "./records.js";

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
  arrayOfStatesWithData.forEach(({ keyOfState, params, state }) => {
    arrayOfPlayersWithData.forEach(({ keyOfPlayer }, indexOfPlayer) => {
      const expectedPointsOfPlayer =
        params.score.params.pointsOfEachPlayer.get(indexOfPlayer)?.points ??
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
  });
};

testGetPointsOfPlayer({
  arrayOfPlayersWithData: indexedPlayersWithData,
  arrayOfStatesWithData: Object.values(statesWithData),
});
