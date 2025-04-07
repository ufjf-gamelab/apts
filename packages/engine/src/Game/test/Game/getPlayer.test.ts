import { expect, test } from "vitest";

import TestingPlayer, { type TestingPlayerKey } from "../Player.js";
import type { CreatedPlayerAndRelatedData } from "../Player/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getPlayerShouldReturn = ({
  expectedPlayer,
  game,
  playerKey,
  testDescriptor,
}: TestGameParams & {
  expectedPlayer: TestingPlayer;
  playerKey: TestingPlayerKey;
}): void => {
  test(`${testDescriptor}: getPlayer(${playerKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const player = game.getPlayer(playerKey);
    expect(player).toBeDefined();
    expect(player).toBeInstanceOf(TestingPlayer);
    expect(player).not.toBe(expectedPlayer);
    expect(player).toStrictEqual(expectedPlayer);
  });
};

const testGetPlayer = ({
  game,
  players,
  testDescriptor,
}: TestGameParams & { players: CreatedPlayerAndRelatedData[] }): void => {
  players.forEach(({ player }, index) => {
    getPlayerShouldReturn({
      expectedPlayer: player,
      game,
      playerKey: index,
      testDescriptor,
    });
  });
};
const testGetPlayerForCommonGame = (): void => {
  const { game, players } = setupGame();
  testGetPlayer({ game, players, testDescriptor: "common" });
};

testGetPlayerForCommonGame();
