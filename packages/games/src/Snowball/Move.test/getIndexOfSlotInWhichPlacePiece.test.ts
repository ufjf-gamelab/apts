import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballMove } from "../Move.js";

import { indexedMovesWithData } from "./indexedRecords.js";
import { type SnowballMoveWithData } from "./setup.js";

const validateGetIndexOfSlotInWhichPlacePiece = ({
  expectedIndexOfSlotInWhichPlacePiece,
  move,
}: {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    SnowballMove["getIndexOfSlotInWhichPlacePiece"]
  >;
  move: SnowballMove;
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
    SnowballMove["getIndexOfSlotInWhichPlacePiece"]
  >;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getIndexOfSlotInWhichPlacePiece()",
    returnedValue: expectedIndexOfSlotInWhichPlacePiece,
  });

const createDescription = ({
  affix,
  expectedIndexOfSlotInWhichPlacePiece,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    SnowballMove["getIndexOfSlotInWhichPlacePiece"]
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
  arrayOfMovesWithData: SnowballMoveWithData[];
}) => {
  arrayOfMovesWithData.forEach(({ keyOfMove, move, params }) => {
    test(
      createDescription({
        affix: keyOfMove,
        expectedIndexOfSlotInWhichPlacePiece:
          params.indexOfSlotInWhichPlacePiece,
      }),
      () => {
        validateGetIndexOfSlotInWhichPlacePiece({
          expectedIndexOfSlotInWhichPlacePiece:
            params.indexOfSlotInWhichPlacePiece,
          move,
        });
      },
    );
  });
};

testGetIndexOfSlotInWhichPlacePiece({
  arrayOfMovesWithData: indexedMovesWithData,
});
