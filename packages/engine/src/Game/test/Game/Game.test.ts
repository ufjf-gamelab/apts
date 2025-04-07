import { describe, expect, test } from "vitest";

import TestingGame from "../Game.js";
import { setupGame } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  game,
}: {
  game: TestingGame;
}): void => {
  test("game should be an instance of the class {TestingGame}", () => {
    expect(game).toBeInstanceOf(TestingGame);
  });
};

const testInstance = (): void => {
  const { game } = setupGame();
  shouldBeAnInstanceOfItsClass({ game });
};

describe("Game", () => {
  testInstance();
});
