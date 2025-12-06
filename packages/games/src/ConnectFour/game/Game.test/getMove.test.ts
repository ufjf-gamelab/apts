import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMove,
  validateGetMove,
} from "@repo/game/Game.test/getMove.test.js";
import { expect, test } from "vitest";

import type { ConnectFourGameWithData } from "./setup.js";

import { ConnectFourMove } from "../Move.js";
import { recordOfConnectFourGamesWithData } from "./records.js";

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
  arrayOfGamesWithData: ConnectFourGameWithData[];
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

          expect(move).toBeInstanceOf(ConnectFourMove);
        },
      );
    });
  });
};

testGetMove({
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
});
