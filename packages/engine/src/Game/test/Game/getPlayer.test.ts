import { expect, test } from "vitest";

import type { IndexOfPlayer } from "../../Player.js";
import type TestingGame from "../Game.js";
import TestingPlayer from "../Player.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getPlayerShouldReturn = ({
  expectedPlayer,
  game,
  indexOfPlayer,
  testDescriptor,
}: TestGameParams & {
  expectedPlayer: ReturnType<TestingGame["getPlayer"]>;
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

const testGetPlayerForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { players },
    game,
  } = setupGame();
  players.forEach(({ player }, index) => {
    getPlayerShouldReturn({
      expectedPlayer: player,
      game,
      indexOfPlayer: index,
      testDescriptor: "common",
    });
  });
};

testGetPlayerForCommonGame();
