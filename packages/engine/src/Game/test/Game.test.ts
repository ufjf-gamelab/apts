import { expect, test } from "vitest";

import TestingGame from "./Game.js";
import { testingMoves } from "./Move.test.js";
import { testingPlayers } from "./Player.test.js";

const testGame = (): TestingGame => {
  const name = "Single pile Testing";
  const quantityOfSlots = 5;
  const game = new TestingGame({
    moves: testingMoves,
    name,
    players: testingPlayers,
    quantityOfSlots,
  });

  test("game should be an instance of TestingGame", () => {
    expect(game).toBeInstanceOf(TestingGame);
  });

  test("game name should be {Single pile Testing}", () => {
    expect(game.getName()).toBe("Single pile Testing");
  });

  return game;
};

const testingGame = testGame();

export { TestingGame as default, testingGame };
