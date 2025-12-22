import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfPlayers,
  validateGetQuantityOfPlayers,
} from "@repo/game/Game.test/getQuantityOfPlayers.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../TicTacToeGame.js";
import type { TicTacToeGameWithData } from "./setup.js";

import { recordOfTicTacToeGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfPlayers,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedQuantityOfPlayers: ReturnType<TicTacToeGame["getQuantityOfPlayers"]>;
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
  arrayOfGamesWithData: TicTacToeGameWithData[];
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
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
