import { expect, test } from "vitest";

import TestingMove, { type TestingMoveKey } from "../Move.js";
import type { CreatedMoveAndRelatedData } from "../Move/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getMoveShouldReturn = ({
  expectedMove,
  game,
  moveKey,
  testDescriptor,
}: TestGameParams & {
  expectedMove: TestingMove;
  moveKey: TestingMoveKey;
}): void => {
  test(`${testDescriptor}: getMove(${moveKey}) should return {${expectedMove.getTitle()}}`, () => {
    const moveFromGame = game.getMove(moveKey);
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
}: TestGameParams & { moves: CreatedMoveAndRelatedData[] }): void => {
  moves.forEach(({ move }, index) => {
    getMoveShouldReturn({
      expectedMove: move,
      game,
      moveKey: index,
      testDescriptor,
    });
  });
};

const testGetMoveForCommonGame = (): void => {
  const { game, moves } = setupGame();
  testGetMove({
    game,
    moves,
    testDescriptor: "common",
  });
};

testGetMoveForCommonGame();
