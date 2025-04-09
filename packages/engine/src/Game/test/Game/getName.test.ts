import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getNameShouldReturn = ({
  expectedName,
  game,
}: TestGameParams & {
  expectedName: TestingGame["name"];
}): void => {
  test(`getName() should return {${expectedName}}`, () => {
    const name = game.getName();
    expect(name).toBe(expectedName);
  });
};

const testGetName = ({ game, testDescriptor }: TestGameParams): void => {
  getNameShouldReturn({ expectedName: "Testing Game", game, testDescriptor });
};

const testGetNameForCommonGame = (): void => {
  const { game } = setupGame();
  testGetName({ game, testDescriptor: "common" });
};

testGetNameForCommonGame();
