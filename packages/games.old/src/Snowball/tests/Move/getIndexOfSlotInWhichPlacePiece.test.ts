import { expect, test } from "vitest";

import type { default as TestingMove } from "../../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const getIndexOfSlotInWhichPlacePieceShouldReturn = ({
  expectedIndexOfSlotInWhichPlacePiece,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedIndexOfSlotInWhichPlacePiece: ReturnType<
    TestingMove["getIndexOfSlotInWhichPlacePiece"]
  >;
}): void => {
  test(`${testDescriptor}: getIndexOfSlotInWhichPlacePiece() should return {${expectedIndexOfSlotInWhichPlacePiece}}`, () => {
    expect(move.getIndexOfSlotInWhichPlacePiece()).toBe(
      expectedIndexOfSlotInWhichPlacePiece,
    );
  });
};

const testGetIndexOfSlotInWhichPlacePieceForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(
    ({
      dataRelatedToCreatedMove: { indexOfSlotInWhichPlacePiece, nameOfIndex },
      move,
    }) => {
      getIndexOfSlotInWhichPlacePieceShouldReturn({
        expectedIndexOfSlotInWhichPlacePiece: indexOfSlotInWhichPlacePiece,
        move,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetIndexOfSlotInWhichPlacePieceForEveryMove();
