import { expect, test } from "vitest";

import TestingGame from "../Game.js";
import { setupGame, type TestGameParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingGame}`, () => {
    const clone = game.clone();
    expect(clone).toBeInstanceOf(TestingGame);
    expect(clone).not.toBe(game);
    expect(clone.getMoves()).toStrictEqual(game.getMoves());
    expect(clone.getName()).toBe(game.getName());
    expect(clone.getPlayers()).toStrictEqual(game.getPlayers());
  });
};

const testClone = ({ game, testDescriptor }: TestGameParams): void => {
  cloneShouldCreateANewInstance({ game, testDescriptor });
};

const testCloneForCommonGame = (): void => {
  const { game } = setupGame();
  testClone({ game, testDescriptor: "common" });
};

testCloneForCommonGame();
