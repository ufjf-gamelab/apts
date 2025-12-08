import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetName = <GenericPlayer extends Player<GenericPlayer>>({
  expectedName,
  player,
}: {
  expectedName: ReturnType<GenericPlayer["getName"]>;
  player: GenericPlayer;
}) => {
  const name = player.getName();
  expect(name).toBe(expectedName);
};

const createDescriptionForTestOfGetName = <
  GenericPlayer extends Player<GenericPlayer>,
>({
  expectedName,
}: {
  expectedName: ReturnType<GenericPlayer["getName"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getName()",
    returnedValue: `"${expectedName}"`,
  });

export { createDescriptionForTestOfGetName, validateGetName };
