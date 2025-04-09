import { expect, test } from "vitest";

import { type default as TestingMove } from "../Move.js";
import { createMoves, type TestMoveParams } from "./setup.js";

const getDescriptionShouldReturn = ({
  expectedDescription,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedDescription: ReturnType<TestingMove["getDescription"]>;
}): void => {
  test(`${testDescriptor}: getDescription() should return {${expectedDescription}}.`, () => {
    expect(move.getDescription()).toBe(expectedDescription);
  });
};

const testGetDescription = ({
  expectedDescription,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedDescription: ReturnType<TestingMove["getDescription"]>;
}): void => {
  getDescriptionShouldReturn({
    expectedDescription,
    move,
    testDescriptor,
  });
};

const testGetDescriptionForEveryMove = (): void => {
  const moves = createMoves();
  moves.forEach(
    ({ dataRelatedToCreatedMove: { description, nameOfIndex }, move }) => {
      testGetDescription({
        expectedDescription: description,
        move,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetDescriptionForEveryMove();
