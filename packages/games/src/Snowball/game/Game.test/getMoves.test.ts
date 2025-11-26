import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMoves,
  validateGetMoves,
} from "@repo/game/Game.test/getMoves.test.js";
import { expect, test } from "vitest";

import type { SnowballGameWithData } from "./setup.js";

import { SnowballMove } from "../Move.js";
import { gamesWithData } from "./records.js";

const createDescription = ({
  affix,
  keysOfExpectedMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetMoves>[0],
    "keysOfExpectedMoves"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetMoves({
      keysOfExpectedMoves,
    }),
  });

const testGetMoves = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { movesWithData } }) => {
      const moves = movesWithData.map(({ move }) => move);

      test(
        createDescription({
          affix: keyOfGame,
          keysOfExpectedMoves: movesWithData.map(({ keyOfMove }) => keyOfMove),
        }),

        () => {
          validateGetMoves({
            expectedMoves: moves,
            game,
          });

          expect(moves).toBeInstanceOf(Array<SnowballMove>);
          const [firstMoveWithData] = movesWithData;
          expect(firstMoveWithData?.move).toBeInstanceOf(SnowballMove);
        },
      );
    },
  );
};

testGetMoves({
  arrayOfGamesWithData: Object.values(gamesWithData),
});
