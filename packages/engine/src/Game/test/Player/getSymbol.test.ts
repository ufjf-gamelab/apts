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
  const players = createPlayers();
  players.forEach(
    ({ dataRelatedToCreatedPlayer: { nameOfIndex, symbol }, player }) => {
      testGetSymbol({
        expectedSymbol: symbol,
        player,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetSymbolForEveryPlayer();
