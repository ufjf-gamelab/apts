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
  state,
}: {
  expectedQuantityOfSlots: ReturnType<S["getQuantityOfSlots"]>;
  state: S;
}) => {
  const game = state.getQuantityOfSlots();
  expect(game).toBe(expectedQuantityOfSlots);
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
}: Pick<
  Parameters<typeof validateGetQuantityOfSlots>[0],
  "expectedQuantityOfSlots"
>): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getQuantityOfSlots()`,
    returnedValue: expectedQuantityOfSlots,
  });

export {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
};
