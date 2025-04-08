import { expect, test } from "vitest";

import type { default as TestingMove } from "../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const getPositionWherePlacePlayerKeyShouldReturn = ({
  expectedPositionWherePlacePlayerKey,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedPositionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
}): void => {
  test(`${testDescriptor}: getPositionWherePlacePlayerKey() should return {${expectedPositionWherePlacePlayerKey}}`, () => {
    expect(move.getPositionWherePlacePlayerKey()).toBe(
      expectedPositionWherePlacePlayerKey,
    );
  });
};

const testGetPositionWherePlacePlayerKey = ({
  expectedPositionWherePlacePlayerKey,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedPositionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
}): void => {
  getPositionWherePlacePlayerKeyShouldReturn({
    expectedPositionWherePlacePlayerKey,
    move,
    testDescriptor,
  });
};

const testGetPositionWherePlacePlayerKeyForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(
    ({
      dataRelatedToCreatedMove: { nameOfIndex, positionWherePlacePlayerKey },
      move,
    }) => {
      testGetPositionWherePlacePlayerKey({
        expectedPositionWherePlacePlayerKey: positionWherePlacePlayerKey,
        move,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetPositionWherePlacePlayerKeyForEveryMove();
