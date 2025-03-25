import { expect, test } from "vitest";

import type { Char } from "../types.js";
import type { MockGame } from "./Game.test.js";
import type { MockMove } from "./Move.test.js";
import Player, { type PlayerParams } from "./Player.js";
import type { MockState } from "./State.test.js";

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
  const name = "Alice";
  const symbol: Char = "X";
  const player = new MockPlayer({ name, symbol });

  test("player should be an instance of MockPlayer", () => {
    expect(player).toBeInstanceOf(MockPlayer);
  });

  nameShouldBe(player, "Alice");
  symbolShouldBe(player, "X");

  return player;
};

const testPlayerBruno = (): MockPlayer => {
  const name = "Bruno";
  const symbol: Char = "O";
  const player = new MockPlayer({ name, symbol });

  test("player should be an instance of MockPlayer", () => {
    expect(player).toBeInstanceOf(MockPlayer);
  });

  nameShouldBe(player, "Bruno");
  symbolShouldBe(player, "O");

  return player;
};

const players = new Map<PlayerKey, MockPlayer>([
  [PlayerKey.Alice, testPlayerAlice()],
  [PlayerKey.Bruno, testPlayerBruno()],
]);

export { MockPlayer, PlayerKey, players };
