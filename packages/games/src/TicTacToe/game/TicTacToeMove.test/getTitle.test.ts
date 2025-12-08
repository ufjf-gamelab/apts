import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetTitle,
  validateGetTitle,
} from "@repo/game/Move.test/getTitle.test.js";
import { test } from "vitest";

import type { TicTacToeMove } from "../TicTacToeMove.js";

import { indexedTicTacToeMovesWithData } from "./indexedRecords.js";
import { type TicTacToeMoveWithData } from "./setup.js";

const createDescription = ({
  affix,
  expectedTitle,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedTitle: ReturnType<TicTacToeMove["getTitle"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetTitle({
      expectedTitle,
    }),
  });

const testGetTitle = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: TicTacToeMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(
    ({ keyOfMove, move, requiredParams: { title } }) => {
      test(
        createDescription({
          affix: keyOfMove,
          expectedTitle: title,
        }),

        () => {
          validateGetTitle({
            expectedTitle: title,
            move,
          });
        },
      );
    },
  );
};

testGetTitle({
  arrayOfMovesWithData: indexedTicTacToeMovesWithData,
});
