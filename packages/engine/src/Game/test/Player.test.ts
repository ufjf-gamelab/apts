import { expect, test } from "vitest";

import type { Char } from "../../types.js";
import TestingPlayer, { TestingPlayerKey } from "./Player.js";

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

const cloneShouldCreateANewInstance = (player: TestingPlayer): void => {
  test("clone() should return a new instance of TestingMove", () => {
    const clone = player.clone();
    expect(clone).toBeInstanceOf(TestingPlayer);
    expect(clone).not.toBe(player);
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
  cloneShouldCreateANewInstance(player);
};

const getNameOfPlayerKey = (playerKey: TestingPlayerKey): string =>
  String(
    TestingPlayerKey[playerKey as unknown as keyof typeof TestingPlayerKey],
  );

const createPlayers = (): TestingPlayer[] => {
  const alice = new TestingPlayer({
    name: getNameOfPlayerKey(TestingPlayerKey.Alice),
    symbol: "A",
  });

  const bruno = new TestingPlayer({
    name: getNameOfPlayerKey(TestingPlayerKey.Bruno),
    symbol: "B",
  });

  testPlayer({
    expectedName: getNameOfPlayerKey(TestingPlayerKey.Alice),
    expectedSymbol: "A",
    player: alice,
  });

  testPlayer({
    expectedName: getNameOfPlayerKey(TestingPlayerKey.Bruno),
    expectedSymbol: "B",
    player: bruno,
  });

  return [alice, bruno];
};

export { createPlayers, TestingPlayer, TestingPlayerKey };
