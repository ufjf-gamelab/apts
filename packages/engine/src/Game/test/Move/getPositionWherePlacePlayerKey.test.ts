import { expect, test } from "vitest";

import type { default as TestingMove, TestingMoveKey } from "../Move.js";
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
  expectedPositionWherePlacePlayerKey: TestingMoveKey;
}): void => {
  getPositionWherePlacePlayerKeyShouldReturn({
    expectedPositionWherePlacePlayerKey,
    move,
    testDescriptor,
  });
};

const testGetPositionWherePlacePlayerKeyForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(({ move, nameOfMoveKey, valueOfMoveKey }) => {
    testGetPositionWherePlacePlayerKey({
      expectedPositionWherePlacePlayerKey: valueOfMoveKey,
      move,
      testDescriptor: nameOfMoveKey,
    });
  });
};

testGetPositionWherePlacePlayerKeyForEveryMove();
