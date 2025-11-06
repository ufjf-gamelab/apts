import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMoves,
  validateGetMoves,
} from "@repo/game/Game.test/getMoves.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  keysOfExpectedMoves,
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetMoves>[0],
  "keysOfExpectedMoves"
> & {
  affix: string;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetMoves({
      keysOfExpectedMoves,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    const movesWithData = Object.values(params.moves);

    test(
      createDescription({
        affix: keyOfGame,
        keysOfExpectedMoves: movesWithData.map(({ keyOfMove }) => keyOfMove),
      }),
      () => {
        validateGetMoves({
          expectedMoves: movesWithData.map(({ move }) => move),
          game,
        });
        expect(movesWithData).toBeInstanceOf(Array<SnowballMove>);
        const [firstMoveWithData] = movesWithData;
        expect(firstMoveWithData?.move).toBeInstanceOf(SnowballMove);
      },
    );
  },
);
