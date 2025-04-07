import { expect, test } from "vitest";

import { createPlayers, type TestPlayerParams } from "./setup.js";

const getSymbolShouldReturn = ({
  expectedSymbol,
  player,
  testDescriptor,
}: TestPlayerParams & {
  expectedSymbol: string;
}): void => {
  test(`${testDescriptor}: getSymbol() should return {${expectedSymbol}}`, () => {
    expect(player.getSymbol()).toBe(expectedSymbol);
  });
};

const testGetSymbol = ({
  expectedSymbol,
  player,
  testDescriptor,
}: TestPlayerParams & { expectedSymbol: string }): void => {
  getSymbolShouldReturn({
    expectedSymbol,
    player,
    testDescriptor,
  });
};

const testGetSymbolForEveryPlayer = (): void => {
  const [alice, bruno] = createPlayers();

  if (typeof alice === "undefined") {
    throw new Error("Player Alice is not defined");
  }
  testGetSymbol({
    expectedSymbol: "X",
    player: alice,
    testDescriptor: "Alice",
  });

  if (typeof bruno === "undefined") {
    throw new Error("Player Bruno is not defined");
  }
  testGetSymbol({
    expectedSymbol: "O",
    player: bruno,
    testDescriptor: "Bruno",
  });
};

testGetSymbolForEveryPlayer();
