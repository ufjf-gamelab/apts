import { expect, test } from "vitest";

import { type default as TestingMove } from "../Move.js";
import {
  createMoves,
  formatMoveKeyName,
  type TestMoveParams,
} from "./setup.js";

const getDescriptionShouldReturn = ({
  expectedDescription,
  move,
  testDescriptor,
}: TestMoveParams & {
  expectedDescription: TestingMove["description"];
}): void => {
  test(`${testDescriptor}: getDescription() should return {${expectedDescription}}.`, () => {
    expect(move.getDescription()).toBe(expectedDescription);
  });
};

const testGetDescription = ({
  expectedDescription,
  move,
  testDescriptor,
}: TestMoveParams & { expectedDescription: string }): void => {
  getDescriptionShouldReturn({
    expectedDescription,
    move,
    testDescriptor,
  });
};

const testGetDescriptionForEveryMove = (): void => {
  const moves = createMoves();
  for (const { move, nameOfMoveKey } of moves) {
    const expectedDescription = `Control the slot on ${formatMoveKeyName(nameOfMoveKey)}`;
    testGetDescription({
      expectedDescription,
      move,
      testDescriptor: nameOfMoveKey,
    });
  }
};

testGetDescriptionForEveryMove();
