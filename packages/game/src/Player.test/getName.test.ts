import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import type { Char } from "@repo/engine_core/types.js";
import { expect } from "vitest";

import type { Player } from "../Player.js";

const validateGetName = ({
  expectedName,
  player,
}: {
  expectedName: ReturnType<Player["getName"]>;
  player: Player;
}) => {
  let name = player.getName();
  expect(name).toBe(expectedName);

  // Ensure that the returned object does not keep reference to the internal property
  name = `${name} (modified)` as Char;
  expect(player.getName()).toBe(expectedName);
  expect(player.getName()).not.toEqual(name);
};

const createDescriptionForTestOfGetName = ({
  expectedName,
}: {
  expectedName: ReturnType<Player["getName"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getName()",
    returnedValue: expectedName,
  });

export { createDescriptionForTestOfGetName, validateGetName };
