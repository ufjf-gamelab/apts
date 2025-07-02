import { expect, test } from "vitest";

import TestingMove from "../../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  move,
  testDescriptor,
}: TestMoveParams): void => {
  test(`${testDescriptor}: move should be an instance of the class {TestingMove}`, () => {
    expect(move).toBeInstanceOf(TestingMove);
  });
};

const testConstructorForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(({ dataRelatedToCreatedMove: { nameOfIndex }, move }) => {
    shouldBeAnInstanceOfItsClass({
      move,
      testDescriptor: nameOfIndex,
    });
  });
};

testConstructorForEveryMove();
