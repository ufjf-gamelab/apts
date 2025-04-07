import { describe, expect, test } from "vitest";

import { type default as TestingGame, type TestingPlayers } from "../Game.js";
import TestingPlayer, { TestingPlayerKey } from "../Player.js";
import { setupGame } from "./setup.js";

const getPlayersShouldReturn = ({
  expectedPlayers,
  game,
}: {
  expectedPlayers: TestingPlayers;
  game: TestingGame;
}): void => {
  test("getPlayers() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const players = game.getPlayers();
    expect(players).not.toBe(expectedPlayers);
    expect(players).toStrictEqual(expectedPlayers);

    for (const [playerKey, player] of players) {
      const expectedPlayer = expectedPlayers.get(playerKey);

      expect(player).toBeInstanceOf(TestingPlayer);
      expect(player).not.toBe(expectedPlayer);
      expect(player).toStrictEqual(expectedPlayer);
    }
  });

  test("modifying the object players received by the getter should not change its internal attribute", () => {
    const newPlayer = new TestingPlayer({
      name: "Carlos",
      symbol: "C",
    });

    const playersBeforeUpdate = game.getPlayers();
    const updatedPlayers = game.getPlayers();
    updatedPlayers.set(TestingPlayerKey.One, newPlayer);

    expect(game.getPlayers()).not.toBe(playersBeforeUpdate);
    expect(game.getPlayers()).toStrictEqual(playersBeforeUpdate);
    expect(game.getPlayers()).not.toBe(updatedPlayers);
    expect(game.getPlayers()).not.toEqual(updatedPlayers);
  });
};

const testGetPlayers = (): void => {
  const { game, playersList } = setupGame();

  const [playerOne] = playersList;
  if (typeof playerOne === "undefined") {
    throw new Error("Player One is undefined");
  }
  const [, playerTwo] = playersList;
  if (typeof playerTwo === "undefined") {
    throw new Error("Player Two is undefined");
  }

  const expectedPlayers: TestingPlayers = new Map();
  expectedPlayers.set(TestingPlayerKey.One, playerOne);
  expectedPlayers.set(TestingPlayerKey.Two, playerTwo);

  getPlayersShouldReturn({
    expectedPlayers,
    game,
  });
};

testGetPlayers();
