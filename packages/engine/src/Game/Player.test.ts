import { expect, test } from "vitest";

import type { Char } from "../types.js";
import type { TestingGame } from "./Game.test.js";
import type { TestingMove } from "./Move.test.js";
import Player, { type PlayerParams } from "./Player.js";
import type { TestingState } from "./State.test.js";

enum PlayerKey {
  Alice,
  Bruno,
}

type TestingPlayerParams = PlayerParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingPlayer extends Player<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {}

const nameShouldBe = (player: TestingPlayer, name: string): void => {
  test(`name of player should be {${name}}`, () => {
    expect(player.getName()).toBe(name);
  });
};

const symbolShouldBe = (player: TestingPlayer, symbol: Char): void => {
  test(`symbol of player should be {${symbol}}`, () => {
    expect(player.getSymbol()).toBe(symbol);
  });
};

const testPlayer = ({
  expectedName,
  expectedSymbol,
  player,
}: {
  expectedName: string;
  expectedSymbol: Char;
  player: TestingPlayer;
}): void => {
  test("player should be an instance of TestingPlayer", () => {
    expect(player).toBeInstanceOf(TestingPlayer);
  });

  nameShouldBe(player, expectedName);
  symbolShouldBe(player, expectedSymbol);
};

const getNameOfPlayerKey = (playerKey: PlayerKey): string =>
  String(PlayerKey[playerKey as unknown as keyof typeof PlayerKey]);

const createPlayers = (): TestingPlayer[] => {
  const alice = new TestingPlayer({
    name: getNameOfPlayerKey(PlayerKey.Alice),
    symbol: "A",
  });

  const bruno = new TestingPlayer({
    name: getNameOfPlayerKey(PlayerKey.Bruno),
    symbol: "B",
  });

  testPlayer({
    expectedName: getNameOfPlayerKey(PlayerKey.Alice),
    expectedSymbol: "A",
    player: alice,
  });

  testPlayer({
    expectedName: getNameOfPlayerKey(PlayerKey.Bruno),
    expectedSymbol: "B",
    player: bruno,
  });

  return [alice, bruno];
};

const players = createPlayers();

export { PlayerKey, players, TestingPlayer };
