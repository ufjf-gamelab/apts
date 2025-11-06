import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetName = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedName,
  game,
}: {
  expectedName: ReturnType<G["getName"]>;
  game: G;
}) => {
  let name = game.getName();
  expect(name).toBe(expectedName);

  // Ensure that the returned object does not keep reference to the internal property
  name = `${name} (modified)`;
  expect(game.getName()).toBe(expectedName);
  expect(game.getName()).not.toEqual(name);
};

const createDescriptionForTestOfGetName = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedName,
}: {
  expectedName: ReturnType<G["getName"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getName()",
    returnedValue: expectedName,
  });

export { createDescriptionForTestOfGetName, validateGetName };
