import { expect, test } from "vitest";

import type TestingGame from "../../Game.js";
import TestingMove from "../../Move.js";
import { encodeMove } from "../Move/encode.js";
import { IndexOfTestingMove } from "../Move/setup.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const INDEX_BEFORE_FIRST_MOVE = 1;

const getDescriptorOfTestedMethod = ({
  indexOfMove,
  testDescriptor,
}: {
  indexOfMove: IndexOfTestingMove;
  testDescriptor: string;
}): string => `${testDescriptor}: getMove(${indexOfMove})`;

const getMoveShouldReturnNull = ({
  game,
  indexOfMove,
  testDescriptor,
}: TestGameParams & {
  indexOfMove: IndexOfTestingMove;
}): void => {
  test(`${getDescriptorOfTestedMethod({
    indexOfMove,
    testDescriptor,
  })} should return {null}`, () => {
    const moveFromGame = game.getMove(indexOfMove);
    expect(moveFromGame).not.toBeInstanceOf(TestingMove);
    expect(moveFromGame).toBeNull();
  });
};

const getMoveShouldReturn = ({
  expectedMove,
  game,
  indexOfMove,
  testDescriptor,
}: TestGameParams & {
  expectedMove: NonNullable<ReturnType<TestingGame["getMove"]>>;
  indexOfMove: IndexOfTestingMove;
}): void => {
  test(`${getDescriptorOfTestedMethod({
    indexOfMove,
    testDescriptor,
  })} should return {${encodeMove({ move: expectedMove })}}`, () => {
    const moveFromGame = game.getMove(indexOfMove);
    expect(moveFromGame).toBeDefined();
    expect(moveFromGame).toBeInstanceOf(TestingMove);
    expect(moveFromGame).not.toBe(expectedMove);
    expect(moveFromGame).toStrictEqual(expectedMove);
  });
};

const testGetMoveForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { moves },
    game,
  } = createCommonGame();

  // Test every move that was created in the common game
  moves.forEach(
    ({ dataRelatedToCreatedMove: { index, nameOfIndex }, move }) => {
      getMoveShouldReturn({
        expectedMove: move,
        game,
        indexOfMove: index,
        testDescriptor: `common: ${nameOfIndex}`,
      });
    },
  );

  getMoveShouldReturnNull({
    game,
    indexOfMove:
      IndexOfTestingMove.NorthwestOfNorthwest - INDEX_BEFORE_FIRST_MOVE,
    testDescriptor: "common: invalid index",
  });
};

testGetMoveForCommonGame();
