import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import type { Char } from "@repo/engine_core/types.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetSymbol = ({
  expectedSymbol,
  player,
}: {
  expectedSymbol: ReturnType<Player["getSymbol"]>;
  player: Player;
}) => {
  let symbol = player.getSymbol();
  expect(symbol).toBe(expectedSymbol);

  // Ensure that the returned object does not keep reference to the internal property
  symbol = `${symbol} (modified)` as Char;
  expect(player.getSymbol()).toBe(expectedSymbol);
  expect(player.getSymbol()).not.toEqual(symbol);
};

const createDescriptionForTestOfGetSymbol = ({
  expectedSymbol,
}: {
  expectedSymbol: ReturnType<Player["getSymbol"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getSymbol()",
    returnedValue: expectedSymbol,
  });

export { createDescriptionForTestOfGetSymbol, validateGetSymbol };
