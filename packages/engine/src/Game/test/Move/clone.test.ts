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
    expect(clone).toStrictEqual(move);
  });
};

const testCloneForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(({ dataRelatedToCreatedMove: { nameOfIndex }, move }) => {
    cloneShouldCreateANewInstance({
      move,
      testDescriptor: nameOfIndex,
    });
  });
};

testCloneForEveryMove();
