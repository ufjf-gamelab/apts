import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import TestingMove from "../Move.js";
import { type CreatedMovesAndRelatedData } from "../Move/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getMovesShouldReturn = ({
  expectedMoves,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedMoves: ReturnType<TestingGame["getMoves"]>;
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

  // TODO: Create test for modifying the object given to the constructor

  // TODO: Create test for modifying the object received by the getter
};

const testGetMoves = ({
  game,
  moves,
  testDescriptor,
}: TestGameParams & { moves: CreatedMovesAndRelatedData }): void => {
  const expectedMoves: TestingMove[] = Array.from(moves.entries()).map(
    ([, { move }]) => move,
  );
  getMovesShouldReturn({ expectedMoves, game, testDescriptor });
};

const testGetMovesForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { moves },
    game,
  } = setupGame();
  testGetMoves({ game, moves, testDescriptor: "common" });
};

testGetMovesForCommonGame();
