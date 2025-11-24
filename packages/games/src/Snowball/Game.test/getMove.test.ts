import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMove,
  validateGetMove,
} from "@repo/game/Game.test/getMove.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { getIndexedSnowballMovesWithData, getIndexOfMove } from "./moves.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  indexOfMove,
  keyOfMove,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetMove>[0],
    "indexOfMove" | "keyOfMove"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetMove({
      indexOfMove,
      keyOfMove,
    }),
  });

const indexedMoves = getIndexedSnowballMovesWithData();

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    params.moves.forEach(({ keyOfMove, move }) => {
      const indexOfMove = getIndexOfMove({ indexedMoves, keyOfMove });

      test(
        createDescription({
          affix: keyOfGame,
          indexOfMove,
          keyOfMove,
        }),
        () => {
          validateGetMove({
            expectedMove: move,
            game,
            indexOfMove,
          });
          expect(move).toBeInstanceOf(SnowballMove);
        },
      );
    });
  },
);
