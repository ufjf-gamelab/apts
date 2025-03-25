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

const createPlayerAlice = (name = "Alice", symbol: Char = "X"): MockPlayer =>
  new MockPlayer({
    name,
    symbol,
  });

const createPlayerBruno = (name = "Bruno", symbol: Char = "O"): MockPlayer =>
  new MockPlayer({
    name,
    symbol,
  });

const createPlayers = (): Map<PlayerKey, MockPlayer> =>
  new Map<PlayerKey, MockPlayer>([
    [PlayerKey.Alice, createPlayerAlice()],
    [PlayerKey.Bruno, createPlayerBruno()],
  ]);

const testPlayerAlice = (): void => {
  let name = "Alice";
  let symbol: Char = "X";
  const player = createPlayerAlice(name, symbol);

  test("name of player should be {Alice}", () => {
    expect(player.getName()).toBe("Alice");
  });

  test("name of player should not change if the external object that defined its name changes", () => {
    name = "Alice2";
    expect(player.getName()).toBe("Alice");
  });

  test("symbol of player should not change if the external object that defined its symbol changes", () => {
    symbol = "Z";
    expect(player.getSymbol()).toBe("X");
  });

  test("symbol of player should be {X}", () => {
    expect(player.getSymbol()).toBe("X");
  });
};

const testPlayerBruno = (): void => {
  let name = "Bruno";
  let symbol: Char = "O";
  const player = createPlayerBruno(name, symbol);

  test("name of player should be {Bruno}", () => {
    expect(player.getName()).toBe("Bruno");
  });

  test("name of player should not change if the external object that defined its name changes", () => {
    name = "Bruno2";
    expect(player.getName()).toBe("Bruno");
  });

  test("symbol of player should not change if the external object that defined its symbol changes", () => {
    symbol = "Z";
    expect(player.getSymbol()).toBe("O");
  });

  test("symbol of player should be {O}", () => {
    expect(player.getSymbol()).toBe("O");
  });
};

testPlayerAlice();
testPlayerBruno();

const players = createPlayers();

export { MockPlayer, players };
