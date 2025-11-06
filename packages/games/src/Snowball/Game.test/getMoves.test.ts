import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMoves,
  validateGetMoves,
} from "@repo/game/Game.test/getMoves.test.js";
import { test } from "vitest";

import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  keysOfExpectedMoves,
}: {
  affix: string;
  keysOfExpectedMoves: Parameters<
    typeof createDescriptionForTestOfGetMoves
  >[0]["keysOfExpectedMoves"];
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetMoves({
      keysOfExpectedMoves,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    const moves = Object.values(params.moves);

    test(
      createDescription({
        affix: keyOfGame,
        keysOfExpectedMoves: moves.map(({ keyOfMove }) => keyOfMove),
      }),
      () => {
        validateGetMoves({
          expectedMoves: moves.map(({ move }) => move),
          game,
        });
      },
    );
  },
);
