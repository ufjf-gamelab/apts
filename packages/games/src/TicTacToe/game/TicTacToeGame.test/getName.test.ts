import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Game.test/getName.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../TicTacToeGame.js";
import type { TicTacToeGameWithData } from "./setup.js";

import { recordOfTicTacToeGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedName,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedName: ReturnType<TicTacToeGame["getName"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetName({
      expectedName,
    }),
  });

const testGetName = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: TicTacToeGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { name } }) => {
      test(
        createDescription({
          affix: keyOfGame,
          expectedName: name,
        }),

        () => {
          validateGetName({
            expectedName: name,
            game,
          });
        },
      );
    },
  );
};

testGetName({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
