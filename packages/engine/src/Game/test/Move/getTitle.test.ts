import { expect, test } from "vitest";

import { type default as TestingMove } from "../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const getTitleShouldReturn = ({
  expectedTitle,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedTitle: ReturnType<TestingMove["getTitle"]>;
}): void => {
  test(`${testDescriptor}: getTitle() should return {${expectedTitle}}`, () => {
    expect(move.getTitle()).toBe(expectedTitle);
  });
};

const testGetTitle = ({
  expectedTitle,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedTitle: ReturnType<TestingMove["getTitle"]>;
}): void => {
  getTitleShouldReturn({
    expectedTitle,
    move,
    testDescriptor,
  });
};

const testGetTitleForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(
    ({ dataRelatedToCreatedMove: { nameOfIndex, title }, move }) => {
      testGetTitle({
        expectedTitle: title,
        move,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetTitleForEveryMove();
