import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexOfNextPlayer,
  validateGetIndexOfNextPlayer,
} from "@repo/game/Game.test/getIndexOfNextPlayer.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "../SnowballState.test/setup.js";

import { recordOfSnowballStatesWithData } from "../SnowballState.test/records.js";

const createDescription = ({
  affix,
  expectedIndexOfNextPlayer,
  keyOfState,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexOfNextPlayer>[0],
    "expectedIndexOfNextPlayer" | "keyOfState"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfNextPlayer({
      expectedIndexOfNextPlayer,
      keyOfState,
    }),
  });

const testGetIndexOfNextPlayer = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({
      keyOfState,
      requiredParams: { gameWithData, nextPlayerWithDataAndIndex },
      state,
    }) => {
      test(
        createDescription({
          affix: gameWithData.keyOfGame,
          expectedIndexOfNextPlayer: nextPlayerWithDataAndIndex.indexOfPlayer,
          keyOfState,
        }),

        () => {
          validateGetIndexOfNextPlayer({
            expectedIndexOfNextPlayer: nextPlayerWithDataAndIndex.indexOfPlayer,
            state,
          });
        },
      );
    },
  );
};

testGetIndexOfNextPlayer({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
