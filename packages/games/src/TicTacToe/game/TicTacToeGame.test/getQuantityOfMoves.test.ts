import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfMoves,
  validateGetQuantityOfMoves,
} from "@repo/game/Game.test/getQuantityOfMoves.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../TicTacToeGame.js";
import type { TicTacToeGameWithData } from "./setup.js";

import { recordOfTicTacToeGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedQuantityOfMoves: ReturnType<TicTacToeGame["getQuantityOfMoves"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfMoves({
      expectedQuantityOfMoves,
    }),
  });

const testGetQuantityOfMoves = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: TicTacToeGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { movesWithData } }) => {
      const expectedQuantityOfMoves = movesWithData.length;

      test(
        createDescription({
          affix: keyOfGame,
          expectedQuantityOfMoves,
        }),

        () => {
          validateGetQuantityOfMoves({
            expectedQuantityOfMoves,
            game,
          });
        },
      );
    },
  );
};

testGetQuantityOfMoves({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
