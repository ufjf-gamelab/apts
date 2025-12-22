import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetSymbol = <GenericPlayer extends Player<GenericPlayer>>({
  expectedSymbol,
  player,
}: {
  expectedSymbol: ReturnType<GenericPlayer["getSymbol"]>;
  player: GenericPlayer;
}) => {
  const symbol = player.getSymbol();
  expect(symbol).toBe(expectedSymbol);
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
