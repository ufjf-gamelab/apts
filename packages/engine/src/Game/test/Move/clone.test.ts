import { expect, test } from "vitest";

import TestingMove from "../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  move,
  testDescriptor,
}: TestMoveParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingMove}`, () => {
    const clone = move.clone();
    expect(clone).toBeInstanceOf(TestingMove);
    expect(clone).not.toBe(move);
  });
};

const testClone = ({ move, testDescriptor }: TestMoveParams): void => {
  cloneShouldCreateANewInstance({
    move,
    testDescriptor,
  });
};

const testCloneForEveryMove = (): void => {
  const moves = createMoves();
  for (const { move, nameOfMoveKey } of moves) {
    testClone({
      move,
      testDescriptor: nameOfMoveKey,
    });
  }
};

testCloneForEveryMove();
