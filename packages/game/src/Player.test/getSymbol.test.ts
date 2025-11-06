import type { Char } from "@repo/engine_core/types.js";

import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetSymbol = <P extends Player<P>>({
  expectedSymbol,
  player,
}: {
  expectedSymbol: ReturnType<P["getSymbol"]>;
  player: P;
}) => {
  let symbol = player.getSymbol();
  expect(symbol).toBe(expectedSymbol);

  // Ensure that the returned object does not keep reference to the internal property
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  symbol = `${symbol} (modified)` as Char;
  expect(player.getSymbol()).toBe(expectedSymbol);
  expect(player.getSymbol()).not.toEqual(symbol);
};

const createDescriptionForTestOfGetSymbol = <P extends Player<P>>({
  expectedSymbol,
}: {
  expectedSymbol: ReturnType<P["getSymbol"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getSymbol()",
    returnedValue: `'${expectedSymbol}'`,
  });

export { createDescriptionForTestOfGetSymbol, validateGetSymbol };
