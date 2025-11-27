import type { Char } from "@repo/engine_core/types.js";

import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetSymbol = <GenericPlayer extends Player<GenericPlayer>>({
  expectedSymbol,
  player,
}: {
  expectedSymbol: ReturnType<GenericPlayer["getSymbol"]>;
  player: GenericPlayer;
}) => {
  let symbol = player.getSymbol();
  expect(symbol).toBe(expectedSymbol);

  // Ensure that the returned object does not keep reference to the internal property
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  symbol = `${symbol} (modified)` as Char;
  expect(player.getSymbol()).toBe(expectedSymbol);
  expect(player.getSymbol()).not.toEqual(symbol);
};

const createDescriptionForTestOfGetSymbol = <
  GenericPlayer extends Player<GenericPlayer>,
>({
  expectedSymbol,
}: {
  expectedSymbol: ReturnType<GenericPlayer["getSymbol"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getSymbol()",
    returnedValue: `'${expectedSymbol}'`,
  });

export { createDescriptionForTestOfGetSymbol, validateGetSymbol };
