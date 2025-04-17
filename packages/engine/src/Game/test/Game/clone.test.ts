import { expect, test } from "vitest";

import TestingGame from "../Game.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingGame}`, () => {
    const clone = game.clone();
    expect(clone).toBeInstanceOf(TestingGame);
    expect(clone).not.toBe(game);
    expect(clone).toStrictEqual(game);
  });
};

const testCloneForCommonGame = (): void => {
  const { game } = createCommonGame();
  cloneShouldCreateANewInstance({ game, testDescriptor: "common" });
};

testCloneForCommonGame();
