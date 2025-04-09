import { expect, test } from "vitest";

import TestingMove from "../Move.js";
import type {
  CreatedMovesAndRelatedData,
  IndexOfTestingMove,
} from "../Move/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getMoveShouldReturn = ({
  expectedMove,
  game,
  indexOfMove,
  testDescriptor,
}: TestGameParams & {
  expectedMove: TestingMove;
  indexOfMove: IndexOfTestingMove;
}): void => {
  test(`${testDescriptor}: getMove(${indexOfMove}) should return {${expectedMove.getTitle()}}`, () => {
    const moveFromGame = game.getMove(indexOfMove);
    expect(moveFromGame).toBeDefined();
    expect(moveFromGame).toBeInstanceOf(TestingMove);
    expect(moveFromGame).not.toBe(expectedMove);
    expect(moveFromGame).toStrictEqual(expectedMove);
  });
};

const testGetMove = ({
  game,
  moves,
  testDescriptor,
}: TestGameParams & { moves: CreatedMovesAndRelatedData }): void => {
  moves.forEach(
    ({ dataRelatedToCreatedMove: { index, nameOfIndex }, move }) => {
      getMoveShouldReturn({
        expectedMove: move,
        game,
        indexOfMove: index,
        testDescriptor: `${testDescriptor}: ${nameOfIndex}`,
      });
    },
  );
};

const testGetMoveForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { moves },
    game,
  } = setupGame();
  testGetMove({
    game,
    moves,
    testDescriptor: "common",
  });
};

testGetMoveForCommonGame();
