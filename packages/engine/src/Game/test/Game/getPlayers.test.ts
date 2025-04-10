import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import TestingPlayer from "../Player.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getPlayersShouldReturn = ({
  expectedPlayers,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedPlayers: ReturnType<TestingGame["getPlayers"]>;
}): void => {
  test(`${testDescriptor}: getPlayers() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const players = game.getPlayers();
    expect(players).not.toBe(expectedPlayers);
    expect(players).toStrictEqual(expectedPlayers);

    players.forEach((player, index) => {
      const expectedPlayer = expectedPlayers[index];
      expect(player).toBeInstanceOf(TestingPlayer);
      expect(player).not.toBe(expectedPlayer);
      expect(player).toStrictEqual(expectedPlayer);
    });
  });

  // TODO: Create test for modifying the object given to the constructor

  test(`${testDescriptor}: modifying the object players received by the getter should not change its internal attribute`, () => {
    const newPlayer = new TestingPlayer({
      name: "Carlos",
      symbol: "C",
    });

    const playersBeforeUpdate = game.getPlayers();
    const updatedPlayers = game.getPlayers() as TestingPlayer[];
    updatedPlayers[IndexOfTestingPlayer.One] = newPlayer;

    expect(game.getPlayers()).not.toBe(playersBeforeUpdate);
    expect(game.getPlayers()).toStrictEqual(playersBeforeUpdate);
    expect(game.getPlayers()).not.toBe(updatedPlayers);
    expect(game.getPlayers()).not.toEqual(updatedPlayers);
  });
};

const testGetPlayersForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { players },
    game,
  } = setupGame();
  const expectedPlayers: TestingPlayer[] = Array.from(players.entries()).map(
    ([, { player }]) => player,
  );
  getPlayersShouldReturn({
    expectedPlayers,
    game,
    testDescriptor: "common",
  });
};

testGetPlayersForCommonGame();
