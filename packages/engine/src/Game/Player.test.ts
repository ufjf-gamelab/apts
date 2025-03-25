import { expect, test } from "vitest";

import type { Char } from "../types.js";
import type { MockGame } from "./Game.test.js";
import type { MockMove } from "./Move.test.js";
import type { MockState } from "./State.test.js";

import Player, { type PlayerParams } from "./Player.js";

enum PlayerKey {
  Alice = 0,
  Bruno = 1,
}

type MockPlayerParams = PlayerParams<MockPlayer, MockMove, MockState, MockGame>;

class MockPlayer extends Player<MockPlayer, MockMove, MockState, MockGame> {}

const nameShouldBe = (player: MockPlayer, name: string): void => {
  test(`name of player should be {${name}}`, () => {
    expect(player.getName()).toBe(name);
  });
};

const symbolShouldBe = (player: MockPlayer, symbol: Char): void => {
  test(`symbol of player should be {${symbol}}`, () => {
    expect(player.getSymbol()).toBe(symbol);
  });
};

const testPlayerAlice = (): MockPlayer => {
  let name = "Alice";
  let symbol: Char = "X";
  const player = new MockPlayer({ name, symbol });

  nameShouldBe(player, "Alice");
  symbolShouldBe(player, "X");

  test("name of player should not change if the external object that defined its name changes", () => {
    name = "Alice2";
    expect(player.getName()).toBe("Alice");
  });

  test("symbol of player should not change if the external object that defined its symbol changes", () => {
    symbol = "Z";
    expect(player.getSymbol()).toBe("X");
  });

  return player;
};

const testPlayerBruno = (): MockPlayer => {
  let name = "Bruno";
  let symbol: Char = "O";
  const player = new MockPlayer({ name, symbol });

  nameShouldBe(player, "Bruno");
  symbolShouldBe(player, "O");

  test("name of player should not change if the external object that defined its name changes", () => {
    name = "Bruno2";
    expect(player.getName()).toBe("Bruno");
  });

  test("symbol of player should not change if the external object that defined its symbol changes", () => {
    symbol = "Z";
    expect(player.getSymbol()).toBe("O");
  });

  return player;
};

const players = new Map<PlayerKey, MockPlayer>([
  [PlayerKey.Alice, testPlayerAlice()],
  [PlayerKey.Bruno, testPlayerBruno()],
]);

export { MockPlayer, players };
