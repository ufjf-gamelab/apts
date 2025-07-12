import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballMove } from "../Move.js";
import { movesWithParams } from "./setup.js";

const validateGetTitle = ({
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
}: {
  affix: string;
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

Object.values(movesWithParams).forEach(({ move, params }) => {
  const description = createDescription({
    affix: params.title,
    expectedIndexOfSlotInWhichPlacePiece: params.indexOfSlotInWhichPlacePiece,
  });
  test(description, () => {
    validateGetTitle({
      expectedIndexOfSlotInWhichPlacePiece: params.indexOfSlotInWhichPlacePiece,
      move,
    });
  });
});
