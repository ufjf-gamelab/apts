import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { TicTacToeMove } from "../Move.js";

import { indexedTicTacToeMovesWithData } from "./indexedRecords.js";
import { type TicTacToeMoveWithData } from "./setup.js";

const validateGetIndexOfSlotInWhichPlacePiece = ({
  expectedIndexOfSlotInWhichPlacePiece,
  move,
}: {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    TicTacToeMove["getIndexOfSlotInWhichPlacePiece"]
  >;
  move: TicTacToeMove;
}) => {
  let indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();
  expect(indexOfSlotInWhichPlacePiece).toBe(
    expectedIndexOfSlotInWhichPlacePiece,
  );

  // Ensure that the returned object does not keep reference to the internal property
  indexOfSlotInWhichPlacePiece += INCREMENT_ONE;
  expect(move.getIndexOfSlotInWhichPlacePiece()).toBe(
    expectedIndexOfSlotInWhichPlacePiece,
  );
  expect(move.getIndexOfSlotInWhichPlacePiece()).not.toEqual(
    indexOfSlotInWhichPlacePiece,
  );
};

const createDescriptionForTestOfGetIndexOfSlotInWhichPlacePiece = ({
  expectedIndexOfSlotInWhichPlacePiece,
}: {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    TicTacToeMove["getIndexOfSlotInWhichPlacePiece"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getIndexOfSlotInWhichPlacePiece()",
    returnedValue: expectedIndexOfSlotInWhichPlacePiece,
  });

const createDescription = ({
  affix,
  expectedIndexOfSlotInWhichPlacePiece,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    TicTacToeMove["getIndexOfSlotInWhichPlacePiece"]
  >;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfSlotInWhichPlacePiece({
      expectedIndexOfSlotInWhichPlacePiece,
    }),
  });

const testGetIndexOfSlotInWhichPlacePiece = ({
  arrayOfMovesWithData,
}: {
  arrayOfMovesWithData: TicTacToeMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(
    ({ keyOfMove, move, requiredParams: { indexOfSlotInWhichPlacePiece } }) => {
      test(
        createDescription({
          affix: keyOfMove,
          expectedIndexOfSlotInWhichPlacePiece: indexOfSlotInWhichPlacePiece,
        }),

        () => {
          validateGetIndexOfSlotInWhichPlacePiece({
            expectedIndexOfSlotInWhichPlacePiece: indexOfSlotInWhichPlacePiece,
            move,
          });
        },
      );
    },
  );
};

testGetIndexOfSlotInWhichPlacePiece({
  arrayOfMovesWithData: indexedTicTacToeMovesWithData,
});
