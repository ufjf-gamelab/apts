import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetMove,
  validateGetMove,
} from "@repo/game/Game.test/getMove.test.js";
import { expect, test } from "vitest";

import { SnowballMove } from "../Move.js";
import { createSnowballMove } from "../Move.test/setup.js";
import { getIndexOfMove } from "./moves.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  indexOfMove,
  keyOfMove,
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetMove>[0],
  "indexOfMove" | "keyOfMove"
> & { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetMove({
      indexOfMove,
      keyOfMove,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    params.moves.forEach(({ keyOfMove, move, params: paramsOfMove }) => {
      const indexOfMove = getIndexOfMove({ keyOfMove });

      test(
        createDescription({
          affix: keyOfGame,
          indexOfMove,
          keyOfMove,
        }),
        () => {
          validateGetMove({
            createMove: (requiredParams) =>
              createSnowballMove({
                ...requiredParams,
                indexOfSlotInWhichPlacePiece:
                  paramsOfMove.indexOfSlotInWhichPlacePiece,
              }),
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
