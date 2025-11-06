import { expect, test } from "vitest";

import type TestingGame from "../../Game.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const getNameShouldReturn = ({
  expectedName,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedName: ReturnType<TestingGame["getName"]>;
}): void => {
  test(`${testDescriptor}: getName() should return {${expectedName}}`, () => {
    const name = game.getName();
    expect(name).toBe(expectedName);
  });
};

const testGetNameForCommonGame = (): void => {
  const { game } = createCommonGame();
  getNameShouldReturn({
    expectedName: "Testing Game",
    game,
    testDescriptor: "common",
  });
};

testGetNameForCommonGame();
