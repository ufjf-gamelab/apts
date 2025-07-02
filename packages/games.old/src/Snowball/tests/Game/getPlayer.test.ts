import { expect, test } from "vitest";

import type TestingGame from "../../Game.js";
import TestingPlayer from "../../Player.js";
import { encodePlayer } from "../Player/encode.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const INDEX_BEFORE_FIRST_PLAYER = 1;

const getDescriptorOfTestedMethod = ({
  indexOfPlayer,
  testDescriptor,
}: {
  indexOfPlayer: IndexOfTestingPlayer;
  testDescriptor: string;
}): string => `${testDescriptor}: getPlayer(${indexOfPlayer})`;

const getPlayerShouldReturn = ({
  expectedPlayer,
  game,
  indexOfPlayer,
  testDescriptor,
}: TestGameParams & {
  expectedPlayer: NonNullable<ReturnType<TestingGame["getPlayer"]>>;
  indexOfPlayer: IndexOfTestingPlayer;
}): void => {
  test(`${getDescriptorOfTestedMethod({
    indexOfPlayer,
    testDescriptor,
  })} should return {${encodePlayer({ player: expectedPlayer })}}`, () => {
    const player = game.getPlayer(indexOfPlayer);
    expect(player).toBeDefined();
    expect(player).toBeInstanceOf(TestingPlayer);
    expect(player).not.toBe(expectedPlayer);
    expect(player).toStrictEqual(expectedPlayer);
  });
};

const getPlayerShouldReturnNull = ({
  game,
  indexOfPlayer,
  testDescriptor,
}: TestGameParams & {
  indexOfPlayer: IndexOfTestingPlayer;
}): void => {
  test(`${getDescriptorOfTestedMethod({
    indexOfPlayer,
    testDescriptor,
  })} should return {null}`, () => {
    const moveFromGame = game.getPlayer(indexOfPlayer);
    expect(moveFromGame).not.toBeInstanceOf(TestingPlayer);
    expect(moveFromGame).toBeNull();
  });
};

const testGetPlayerForCommonGame = (): void => {
  const {
    dataRelatedToCreatedGame: { players },
    game,
  } = createCommonGame();

  // Test every player that was created in the common game
  players.forEach(({ player }, index) => {
    getPlayerShouldReturn({
      expectedPlayer: player,
      game,
      indexOfPlayer: index,
      testDescriptor: "common",
    });
  });

  getPlayerShouldReturnNull({
    game,
    indexOfPlayer: IndexOfTestingPlayer.One - INDEX_BEFORE_FIRST_PLAYER,
    testDescriptor: "common: invalid index",
  });
};

testGetPlayerForCommonGame();
