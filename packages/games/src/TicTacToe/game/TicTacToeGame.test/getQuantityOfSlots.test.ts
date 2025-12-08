import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
} from "@repo/game/Game.test/getQuantityOfSlots.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../TicTacToeGame.js";
import type { TicTacToeGameWithData } from "./setup.js";

import { recordOfTicTacToeGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfSlots,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedQuantityOfSlots: ReturnType<TicTacToeGame["getQuantityOfSlots"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfSlots({
      expectedQuantityOfSlots,
    }),
  });

const testGetQuantityOfSlots = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: TicTacToeGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { slotsWithData } }) => {
      const expectedQuantityOfSlots = slotsWithData.length;

      test(
        createDescription({
          affix: keyOfGame,
          expectedQuantityOfSlots,
        }),

        () => {
          validateGetQuantityOfSlots({
            expectedQuantityOfSlots,
            game,
          });
        },
      );
    },
  );
};

testGetQuantityOfSlots({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
