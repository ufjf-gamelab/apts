import { expect, test } from "vitest";
import { MockGame } from "./Game.test.js";
import { MockMove } from "./Move.test.js";
import Player from "./Player.js";
import { MockState } from "./State.test.js";

// type MockPlayerParams = PlayerParams<MockPlayer, MockMove, MockState, MockGame>;

class MockPlayer extends Player<MockPlayer, MockMove, MockState, MockGame> {}

const playerAlice = new MockPlayer({
  name: "Alice",
  symbol: "X",
});

const playerBruno = new MockPlayer({
  name: "Bruno",
  symbol: "O",
});

const players = [playerAlice, playerBruno];

test("playerAlice name should be {Alice}", () => {
  expect(playerAlice.getName()).toBe("Alice");
});

test("playerAlice symbol should be {X}", () => {
  expect(playerAlice.getSymbol()).toBe("X");
});

test("playerBruno name should be {Bruno}", () => {
  expect(playerBruno.getName()).toBe("Bruno");
});

test("playerBruno symbol should be {O}", () => {
  expect(playerBruno.getSymbol()).toBe("O");
});

export { MockPlayer, players };
