import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetName = <
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  expectedName,
  game,
}: {
  expectedName: ReturnType<Game<M, S, Sl>["getName"]>;
  game: Game<M, S, Sl>;
}) => {
  let name = game.getName();
  expect(name).toBe(expectedName);

  // Ensure that the returned object does not keep reference to the internal property
  name = `${name} (modified)`;
  expect(game.getName()).toBe(expectedName);
  expect(game.getName()).not.toEqual(name);
};

const createDescriptionForTestOfGetName = <
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  expectedName,
}: {
  expectedName: ReturnType<Game<M, S, Sl>["getName"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getName()",
    returnedValue: expectedName,
  });

export { createDescriptionForTestOfGetName, validateGetName };
