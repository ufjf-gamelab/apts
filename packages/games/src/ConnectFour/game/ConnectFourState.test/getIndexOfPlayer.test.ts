import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetIndexOfPlayer,
  validateGetIndexOfPlayer,
} from "@repo/game/State.test/getIndexOfPlayer.test.js";
import { test } from "vitest";

import type { ConnectFourStateWithData } from "./setup.js";

import { recordOfConnectFourStatesWithData } from "./records.js";

const createDescription = ({
  affix,
  indexOfPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexOfPlayer>[0],
    "indexOfPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfPlayer({
      indexOfPlayer,
    }),
  });

const testGetIndexOfPlayer = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: ConnectFourStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { playerWithDataAndIndex }, state }) => {
      test(
        createDescription({
          affix: keyOfState,
          indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
        }),

        () => {
          validateGetIndexOfPlayer({
            expectedIndexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
            state,
          });
        },
      );
    },
  );
};

testGetIndexOfPlayer({
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
});
