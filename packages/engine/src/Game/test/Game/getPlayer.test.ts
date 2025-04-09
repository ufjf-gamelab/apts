import { expect, test } from "vitest";

import type { IndexOfPlayer } from "../../Player.js";
import TestingPlayer from "../Player.js";
import type { CreatedPlayersAndRelatedData } from "../Player/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getPlayerShouldReturn = ({
  expectedPlayer,
  game,
  indexOfPlayer,
  testDescriptor,
}: TestGameParams & {
  expectedPlayer: TestingPlayer;
  indexOfPlayer: IndexOfPlayer;
}): void => {
  test(`${testDescriptor}: getPlayer(${indexOfPlayer}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const player = game.getPlayer(indexOfPlayer);
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
}: TestGameParams & { players: CreatedPlayersAndRelatedData }): void => {
  players.forEach(({ player }, index) => {
    getPlayerShouldReturn({
      expectedPlayer: player,
      game,
      indexOfPlayer: index,
      testDescriptor,
    });
  });
};
const testGetPlayerForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { players },
    game,
  } = setupGame();
  testGetPlayer({ game, players, testDescriptor: "common" });
};

testGetPlayerForCommonGame();
