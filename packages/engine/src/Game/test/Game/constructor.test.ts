import { expect, test } from "vitest";

import TestingGame from "../Game.js";
import { setupGame, type TestGameParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  test(`${testDescriptor}: game should be an instance of the class {TestingGame}`, () => {
    expect(game).toBeInstanceOf(TestingGame);
  });
};

const testInstanceForCommonGame = (): void => {
  const { game } = setupGame();
  shouldBeAnInstanceOfItsClass({ game, testDescriptor: "common" });
};

testInstanceForCommonGame();
