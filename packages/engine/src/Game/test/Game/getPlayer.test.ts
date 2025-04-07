import { describe, expect, test } from "vitest";

import type { default as TestingGame, TestingPlayers } from "../Game.js";
import TestingPlayer, { TestingPlayerKey } from "../Player.js";
import { setupGame } from "./setup.js";

const getPlayerShouldReturn = ({
  expectedPlayer,
  game,
  playerDescriptor,
  playerKey,
}: {
  expectedPlayer: TestingPlayer;
  game: TestingGame;
  playerDescriptor: string;
  playerKey: TestingPlayerKey;
}): void => {
  test(`getPlayer(${playerDescriptor}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const player = game.getPlayer(playerKey);
    expect(player).toBeDefined();
    expect(player).toBeInstanceOf(TestingPlayer);
    expect(player).not.toBe(expectedPlayer);
    expect(player).toStrictEqual(expectedPlayer);
  });
};

const testGetPlayer = (): void => {
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

  for (const [playerKey, player] of expectedPlayers) {
    const nameOfKey = String(
      TestingPlayerKey[playerKey.toString() as keyof typeof TestingPlayerKey],
    );
    getPlayerShouldReturn({
      expectedPlayer: player,
      game,
      playerDescriptor: nameOfKey,
      playerKey,
    });
  }
};

testGetPlayer();
