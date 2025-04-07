import { expect, test } from "vitest";

import type { TestingPlayers } from "../Game.js";
import TestingPlayer, { TestingPlayerKey } from "../Player.js";
import type { CreatedPlayerAndRelatedData } from "../Player/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getPlayersShouldReturn = ({
  expectedPlayers,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedPlayers: TestingPlayers;
}): void => {
  test(`${testDescriptor}: getPlayers() should return an object equal to the one passed as parameter, but as a different reference`, () => {
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

const testGetPlayers = ({
  game,
  players,
  testDescriptor,
}: TestGameParams & { players: CreatedPlayerAndRelatedData[] }): void => {
  const expectedPlayers: TestingPlayers = new Map(
    players.map(({ player }, index) => [index, player.clone()]),
  );
  getPlayersShouldReturn({
    expectedPlayers,
    game,
    testDescriptor,
  });
};

const testGetPlayersForCommonGame = (): void => {
  const { game, players } = setupGame();
  testGetPlayers({ game, players, testDescriptor: "common" });
};

testGetPlayersForCommonGame();
