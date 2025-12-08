import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfMoves,
  validateGetQuantityOfMoves,
} from "@repo/game/Game.test/getQuantityOfMoves.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../SnowballGame.js";
import type { SnowballGameWithData } from "./setup.js";

import { recordOfSnowballGamesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedQuantityOfMoves: ReturnType<SnowballGame["getQuantityOfMoves"]>;
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
  arrayOfGamesWithData: SnowballGameWithData[];
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
  arrayOfGamesWithData: Object.values(recordOfSnowballGamesWithData),
});
