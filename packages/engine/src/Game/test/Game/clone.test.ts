import { describe, expect, test } from "vitest";

import TestingGame from "../Game.js";
import { setupGame } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  game,
}: {
  game: TestingGame;
}): void => {
  test("clone() should return a new instance of {TestingGame}", () => {
    const clone = game.clone();
    expect(clone).toBeInstanceOf(TestingGame);
    expect(clone).not.toBe(game);
    expect(clone.getMoves()).toStrictEqual(game.getMoves());
    expect(clone.getName()).toBe(game.getName());
    expect(clone.getPlayers()).toStrictEqual(game.getPlayers());
  });
};

const testClone = (): void => {
  const { game } = setupGame();
  cloneShouldCreateANewInstance({ game });
};

testClone();
