import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMove,
  validateGetMove,
} from "@repo/game/Game.test/getMove.test.js";
import { expect, test } from "vitest";

import type { SnowballGameWithData } from "./setup.js";

import { SnowballMove } from "../Move.js";
import { gamesWithData } from "./records.js";

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

const testGetMove = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ game, keyOfGame, requiredParams }) => {
    requiredParams.movesWithData.forEach(({ keyOfMove, move }, indexOfMove) => {
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
  });
};

testGetMove({
  arrayOfGamesWithData: Object.values(gamesWithData),
});
