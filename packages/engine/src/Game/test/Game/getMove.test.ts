import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import TestingMove from "../Move.js";
import type { IndexOfTestingMove } from "../Move/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getMoveShouldReturn = ({
  expectedMove,
  game,
  indexOfMove,
  testDescriptor,
}: TestGameParams & {
  expectedMove: ReturnType<TestingGame["getMove"]>;
  indexOfMove: IndexOfTestingMove;
}): void => {
  test(`${testDescriptor}: getMove(${indexOfMove}) should return {${expectedMove?.getTitle() ?? "null"}}`, () => {
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
  } = setupGame();
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
};

testGetMoveForCommonGame();
