/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import type { Char } from "../../types.js";
import TestingPlayer, { TestingPlayerKey } from "./Player.js";

const getNameOfPlayerKey = (playerKey: TestingPlayerKey): string =>
  String(
    TestingPlayerKey[playerKey as unknown as keyof typeof TestingPlayerKey],
  );

const createPlayers = (): TestingPlayer[] => {
  const alice = new TestingPlayer({
    name: getNameOfPlayerKey(TestingPlayerKey.One),
    symbol: "A",
  });

  const bruno = new TestingPlayer({
    name: getNameOfPlayerKey(TestingPlayerKey.Two),
    symbol: "B",
  });

  return [alice, bruno];
};

const shouldBeAnInstanceOfItsClass = ({
  player,
}: {
  player: TestingPlayer;
}): void => {
  test("player should be an instance of the class {TestingPlayer}", () => {
    expect(player).toBeInstanceOf(TestingPlayer);
  });
};

const cloneShouldCreateANewInstance = ({
  player,
}: {
  player: TestingPlayer;
}): void => {
  test("clone() should return a new instance of {TestingPlayer}", () => {
    const clone = player.clone();
    expect(clone).toBeInstanceOf(TestingPlayer);
    expect(clone).not.toBe(player);
  });
};

const getNameShouldReturn = ({
  expectedName,
  player,
}: {
  expectedName: string;
  player: TestingPlayer;
}): void => {
  test(`getName() should return {${expectedName}}`, () => {
    expect(player.getName()).toBe(expectedName);
  });
};

const getSymbolShouldReturn = ({
  expectedSymbol,
  player,
}: {
  expectedSymbol: Char;
  player: TestingPlayer;
}): void => {
  test(`getSymbol() should return {${expectedSymbol}}`, () => {
    expect(player.getSymbol()).toBe(expectedSymbol);
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
  shouldBeAnInstanceOfItsClass({ player });
  cloneShouldCreateANewInstance({ player });
  getNameShouldReturn({ expectedName, player });
  getSymbolShouldReturn({ expectedSymbol, player });
};

const testPlayers = (): void => {
  const players = createPlayers();

  test("players should be an array", () => {
    expect(players).toBeInstanceOf(Array);
    expect(players.length).toBe(2);
    expect(players[0]).not.toBe(players[1]);
    expect(players[0]).not.toEqual(players[1]);
  });

  const [alice, bruno] = players;
  if (typeof alice === "undefined" || typeof bruno === "undefined") {
    throw new Error("Players should be created");
  }

  testPlayer({
    expectedName: getNameOfPlayerKey(TestingPlayerKey.One),
    expectedSymbol: "A",
    player: alice,
  });

  testPlayer({
    expectedName: getNameOfPlayerKey(TestingPlayerKey.Two),
    expectedSymbol: "B",
    player: bruno,
  });
};

testPlayers();

export { createPlayers };
