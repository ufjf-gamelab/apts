import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetQuantityOfSlots = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedQuantityOfSlots,
  state,
}: {
  expectedQuantityOfSlots: ReturnType<St["getQuantityOfSlots"]>;
  state: St;
}) => {
  const game = state.getQuantityOfSlots();
  expect(game).toBe(expectedQuantityOfSlots);
};

const createDescriptionForTestOfGetQuantityOfSlots = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
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
