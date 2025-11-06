import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetQuantityOfSlots = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedQuantityOfSlots,
  game,
}: {
  expectedQuantityOfSlots: ReturnType<G["getQuantityOfSlots"]>;
  game: G;
}) => {
  let quantityOfSlots = game.getQuantityOfSlots();
  expect(quantityOfSlots).toBe(expectedQuantityOfSlots);

  // Ensure that the returned object does not keep reference to the internal property
  quantityOfSlots += INCREMENT_ONE;
  expect(game.getQuantityOfSlots()).toBe(expectedQuantityOfSlots);
  expect(game.getQuantityOfSlots()).not.toEqual(quantityOfSlots);
};

const createDescriptionForTestOfGetQuantityOfSlots = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedQuantityOfSlots,
}: {
  expectedQuantityOfSlots: ReturnType<G["getQuantityOfSlots"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getQuantityOfSlots()",
    returnedValue: expectedQuantityOfSlots,
  });

export {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
};
