import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetGame,
  validateGetGame,
} from "@repo/game/State.test/getGame.test.js";
import { test } from "vitest";

import type { ConnectFourStateWithData } from "./setup.js";

import { recordOfConnectFourStatesWithData } from "./records.js";

const createDescription = ({
  affix,
  keyOfGame,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<Parameters<typeof createDescriptionForTestOfGetGame>[0], "keyOfGame">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetGame({
      keyOfGame,
    }),
  });

const testGetGame = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: ConnectFourStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(
    ({ keyOfState, requiredParams: { gameWithData }, state }) => {
      test(
        createDescription({
          affix: keyOfState,
          keyOfGame: gameWithData.keyOfGame,
        }),

        () => {
          validateGetGame({
            expectedGame: gameWithData.game,
            state,
          });
        },
      );
    },
  );
};

testGetGame({
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
});
