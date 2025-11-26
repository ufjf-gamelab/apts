import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexOfNextPlayer,
  validateGetIndexOfNextPlayer,
} from "@repo/game/Game.test/getIndexOfNextPlayer.test.js";
import { test } from "vitest";

import type { SnowballStateWithData } from "../State.test/setup.js";

import { statesWithData } from "../State.test/records.js";

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
  arrayOfStatesWithData.forEach(({ keyOfState, params, state }) => {
    test(
      createDescription({
        affix: params.game.keyOfGame,
        expectedIndexOfNextPlayer: params.nextPlayer.indexOfPlayer,
        keyOfState,
      }),

      () => {
        validateGetIndexOfNextPlayer({
          expectedIndexOfNextPlayer: params.nextPlayer.indexOfPlayer,
          state,
        });
      },
    );
  });
};

testGetIndexOfNextPlayer({
  arrayOfStatesWithData: Object.values(statesWithData),
});
