import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { setupGame } from "./setup.js";

const getNameShouldReturn = ({
  expectedName,
  game,
}: {
  expectedName: TestingGame["name"];
  game: TestingGame;
}): void => {
  test(`getName() should return {${expectedName}}`, () => {
    const name = game.getName();
    expect(name).toBe(expectedName);
  });
};

const testGetName = (): void => {
  const { game } = setupGame();
  getNameShouldReturn({ expectedName: "Testing game", game });
};

testGetName();
