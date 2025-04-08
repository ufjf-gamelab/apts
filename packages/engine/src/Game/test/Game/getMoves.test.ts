import { expect, test } from "vitest";

import type { TestingMoves } from "../Game.js";
import TestingMove from "../Move.js";
import { type CreatedMovesAndRelatedData } from "../Move/setup.js";
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

    moves.forEach((move, index) => {
      const expectedMove = expectedMoves[index];
      expect(move).toBeInstanceOf(TestingMove);
      expect(move).not.toBe(expectedMove);
      expect(move).toStrictEqual(expectedMove);
    });
  });
};

const testGetMoves = ({
  game,
  moves,
  testDescriptor,
}: TestGameParams & { moves: CreatedMovesAndRelatedData }): void => {
  const expectedMoves: TestingMoves = Array.from(moves.entries()).map(
    ([, { move }]) => move,
  );
  getMovesShouldReturn({ expectedMoves, game, testDescriptor });
};

const testGetMovesForCommonGame = (): void => {
  const { game, moves } = setupGame();
  testGetMoves({ game, moves, testDescriptor: "common" });
};

testGetMovesForCommonGame();
