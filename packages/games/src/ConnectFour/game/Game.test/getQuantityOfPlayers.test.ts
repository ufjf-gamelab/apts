import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfPlayers,
  validateGetQuantityOfPlayers,
} from "@repo/game/Game.test/getQuantityOfPlayers.test.js";
import { test } from "vitest";

import type { ConnectFourGame } from "../Game.js";
import type { ConnectFourGameWithData } from "./setup.js";

import { recordOfConnectFourGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfPlayers,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedQuantityOfPlayers: ReturnType<
    ConnectFourGame["getQuantityOfPlayers"]
  >;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfPlayers({
      expectedQuantityOfPlayers,
    }),
  });

const testGetQuantityOfPlayers = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: ConnectFourGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { playersWithData } }) => {
      const expectedQuantityOfPlayers = playersWithData.length;

      test(
        createDescription({
          affix: keyOfGame,
          expectedQuantityOfPlayers,
        }),

        () => {
          validateGetQuantityOfPlayers({
            expectedQuantityOfPlayers,
            game,
          });
        },
      );
    },
  );
};

testGetQuantityOfPlayers({
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
});
