import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetDescription,
  validateGetDescription,
} from "@repo/game/Move.test/getDescription.test.js";
import { test } from "vitest";

import type { TicTacToeMove } from "../TicTacToeMove.js";

import { indexedTicTacToeMovesWithData } from "./indexedRecords.js";
import {
  deriveParamsOfTicTacToeMove,
  type TicTacToeMoveWithData,
} from "./setup.js";

const createDescription = ({
  affix,
  expectedDescription,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedDescription: ReturnType<TicTacToeMove["getDescription"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetDescription({
      expectedDescription,
    }),
  });

const testGetDescription = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: TicTacToeMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move, requiredParams }) => {
    const { description } = deriveParamsOfTicTacToeMove(requiredParams);

    test(
      createDescription({
        affix: keyOfMove,
        expectedDescription: description,
      }),

      () => {
        validateGetDescription({
          expectedDescription: description,
          move,
        });
      },
    );
  });
};

testGetDescription({
  arrayOfMovesWithData: indexedTicTacToeMovesWithData,
});
