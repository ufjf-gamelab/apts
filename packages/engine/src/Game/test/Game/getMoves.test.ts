import { expect, test } from "vitest";

import type { TestingMoves } from "../Game.js";
import TestingMove from "../Move.js";
import type { CreatedMoveAndRelatedData } from "../Move/setup.js";
import { TestingPlayerKey } from "../Player.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getMovesShouldReturn = ({
  expectedMoves,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedMoves: TestingMoves;
}): void => {
  test(`${testDescriptor}: getMoves() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const moves = game.getMoves();

    expect(moves).not.toBe(expectedMoves);
    expect(moves).toStrictEqual(expectedMoves);

    for (const [moveKey, move] of moves) {
      const expectedMove = expectedMoves.get(moveKey);

      expect(move).toBeInstanceOf(TestingMove);
      expect(move).not.toBe(expectedMove);
      expect(move).toStrictEqual(expectedMove);
    }
  });

  test("modifying the object moves received by the getter should not change its internal attribute", () => {
    const newMove = new TestingMove({
      description: "This is a nowhere move",
      positionWherePlacePlayerKey: 0,
      title: "Nowhere move",
    });

    const movesBeforeUpdate = game.getMoves();
    const updatedMoves = game.getMoves();
    updatedMoves.set(TestingPlayerKey.One, newMove);

    expect(game.getMoves()).not.toBe(movesBeforeUpdate);
    expect(game.getMoves()).toStrictEqual(movesBeforeUpdate);
    expect(game.getMoves()).not.toBe(updatedMoves);
    expect(game.getMoves()).not.toEqual(updatedMoves);
  });
};

const testGetMoves = ({
  game,
  moves,
  testDescriptor,
}: TestGameParams & { moves: CreatedMoveAndRelatedData[] }): void => {
  const expectedMoves: TestingMoves = new Map(
    moves.map(({ move }, index) => [index, move.clone()]),
  );
  getMovesShouldReturn({ expectedMoves, game, testDescriptor });
};

const testGetMovesForCommonGame = (): void => {
  const { game, moves } = setupGame();
  testGetMoves({ game, moves, testDescriptor: "common" });
};

testGetMovesForCommonGame();
