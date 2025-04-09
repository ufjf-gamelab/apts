import { expect, test } from "vitest";

import type { default as TestingMove } from "../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const getIndexOfSlotInWhichPlacePieceShouldReturn = ({
  expectedIndexOfSlotInWhichPlacePiece,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedIndexOfSlotInWhichPlacePiece: TestingMove["indexOfSlotInWhichPlacePiece"];
}): void => {
  test(`${testDescriptor}: getIndexOfSlotInWhichPlacePiece() should return {${expectedIndexOfSlotInWhichPlacePiece}}`, () => {
    expect(move.getIndexOfSlotInWhichPlacePiece()).toBe(
      expectedIndexOfSlotInWhichPlacePiece,
    );
  });
};

const testGetIndexOfSlotInWhichPlacePiece = ({
  expectedIndexOfSlotInWhichPlacePiece,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedIndexOfSlotInWhichPlacePiece: TestingMove["indexOfSlotInWhichPlacePiece"];
}): void => {
  getIndexOfSlotInWhichPlacePieceShouldReturn({
    expectedIndexOfSlotInWhichPlacePiece,
    move,
    testDescriptor,
  });
};

const testGetIndexOfSlotInWhichPlacePieceForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(
    ({
      dataRelatedToCreatedMove: { indexOfSlotInWhichPlacePiece, nameOfIndex },
      move,
    }) => {
      testGetIndexOfSlotInWhichPlacePiece({
        expectedIndexOfSlotInWhichPlacePiece: indexOfSlotInWhichPlacePiece,
        move,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetIndexOfSlotInWhichPlacePieceForEveryMove();
