import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
} from "@repo/game/State.test/getPointsOfPlayer.test.js";
import { test } from "vitest";

import type { ConnectFourPlayerWithData } from "../ConnectFourPlayer.test/setup.js";
import type { ConnectFourStateWithData } from "./setup.js";

import { indexedConnectFourPlayersWithData } from "../ConnectFourPlayer.test/indexedRecords.js";
import { recordOfConnectFourStatesWithData } from "./records.js";

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
  arrayOfPlayersWithData: ConnectFourPlayerWithData[];
  arrayOfStatesWithData: ConnectFourStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { scoreWithData }, state }) => {
      arrayOfPlayersWithData.forEach(({ keyOfPlayer }, indexOfPlayer) => {
        const expectedPointsOfPlayer =
          scoreWithData.requiredParams.pointsOfEachPlayerWithData.get(
            indexOfPlayer,
          )?.points ?? ZERO_POINTS;

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
};

testGetPointsOfPlayer({
  arrayOfPlayersWithData: indexedConnectFourPlayersWithData,
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
});
