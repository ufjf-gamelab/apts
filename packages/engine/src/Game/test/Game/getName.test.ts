import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getNameShouldReturn = ({
  expectedName,
  game,
}: TestGameParams & {
  expectedName: ReturnType<TestingGame["getName"]>;
}): void => {
  test(`getName() should return {${expectedName}}`, () => {
    const name = game.getName();
    expect(name).toBe(expectedName);
  });
};

const testGetNameForCommonGame = (): void => {
  const { game } = setupGame();
  getNameShouldReturn({
    expectedName: "Testing Game",
    game,
    testDescriptor: "common",
  });
};

testGetNameForCommonGame();
