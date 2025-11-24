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
  arrayOfGamesWithData.forEach(({ game, keyOfGame, params }) => {
    test(
      createDescription({
        affix: keyOfGame,
        keysOfExpectedMoves: params.moves.map(({ keyOfMove }) => keyOfMove),
      }),

      () => {
        validateGetMoves({
          expectedMoves: params.moves.map(({ move }) => move),
          game,
        });

        expect(params.moves).toBeInstanceOf(Array<SnowballMove>);
        const [firstMoveWithData] = params.moves;
        expect(firstMoveWithData?.move).toBeInstanceOf(SnowballMove);
      },
    );
  });
};

testGetMoves({
  arrayOfGamesWithData: Object.values(gamesWithData),
});
