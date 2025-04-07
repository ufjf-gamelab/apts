import { expect, test } from "vitest";

import TestingMove from "../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  move,
  testDescriptor,
}: TestMoveParams): void => {
  test(`${testDescriptor}: move should be an instance of the class {TestingMove}`, () => {
    expect(move).toBeInstanceOf(TestingMove);
  });
};

const testConstructor = ({ move, testDescriptor }: TestMoveParams): void => {
  shouldBeAnInstanceOfItsClass({ move, testDescriptor });
};

const testConstructorForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(({ move, nameOfMoveKey }) => {
    testConstructor({
      move,
      testDescriptor: nameOfMoveKey,
    });
  });
};

testConstructorForEveryMove();
