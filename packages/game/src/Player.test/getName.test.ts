import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetName = <GenericPlayer extends Player<GenericPlayer>>({
  expectedName,
  player,
}: {
  expectedName: ReturnType<GenericPlayer["getName"]>;
  player: GenericPlayer;
}) => {
  let name = player.getName();
  expect(name).toBe(expectedName);

  // Ensure that the returned object does not keep reference to the internal property
  name = `${name} (modified)`;
  expect(player.getName()).toBe(expectedName);
  expect(player.getName()).not.toEqual(name);
};

const createDescriptionForTestOfGetName = <
  GenericPlayer extends Player<GenericPlayer>,
>({
  expectedName,
}: {
  expectedName: ReturnType<GenericPlayer["getName"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getName()",
    returnedValue: `"${expectedName}"`,
  });

export { createDescriptionForTestOfGetName, validateGetName };
