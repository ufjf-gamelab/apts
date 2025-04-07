import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import TestingMove, { TestingMoveKey } from "../Move.js";
import { setupGame } from "./setup.js";

const getMoveShouldReturn = ({
  expectedMove,
  game,
  moveKey,
}: {
  expectedMove: TestingMove;
  game: TestingGame;
  moveKey: TestingMoveKey;
}): void => {
  test(`getMove(${moveKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const moveFromGame = game.getMove(moveKey);
    expect(moveFromGame).toBeDefined();
    expect(moveFromGame).toBeInstanceOf(TestingMove);
    expect(moveFromGame).not.toBe(expectedMove);
    expect(moveFromGame).toStrictEqual(expectedMove);
  });
};

const testGetMove = (): void => {
  const { game, movesList } = setupGame();

  const [moveToNorthwestOfNorthwest] = movesList;
  if (typeof moveToNorthwestOfNorthwest === "undefined") {
    throw new Error("Move to Northwest of Northwest is undefined");
  }

  // TODO: Loop to test every move
  getMoveShouldReturn({
    expectedMove: moveToNorthwestOfNorthwest,
    game,
    moveKey: TestingMoveKey.NorthwestOfNorthwest,
  });
};

testGetMove();
