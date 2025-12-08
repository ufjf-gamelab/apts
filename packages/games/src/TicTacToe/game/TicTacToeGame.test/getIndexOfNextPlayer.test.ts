import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexOfNextPlayer,
  validateGetIndexOfNextPlayer,
} from "@repo/game/Game.test/getIndexOfNextPlayer.test.js";
import { test } from "vitest";

import type { TicTacToeStateWithData } from "../TicTacToeState.test/setup.js";

import { recordOfTicTacToeStatesWithData } from "../TicTacToeState.test/records.js";

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
  arrayOfStatesWithData: TicTacToeStateWithData[];
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
  arrayOfStatesWithData: Object.values(recordOfTicTacToeStatesWithData),
});
