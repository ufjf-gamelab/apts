import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateConstructInitialState = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedInitialState,
  game,
}: {
  expectedInitialState: ReturnType<G["constructInitialState"]>;
  game: G;
}) => {
  const initialState = game.constructInitialState();
  expect(initialState).not.toBe(expectedInitialState);
  expect(initialState).toStrictEqual(expectedInitialState);

  // Ensure that the returned object does not keep reference to the internal property
  const otherInitialState = game.constructInitialState();
  expect(otherInitialState).not.toBe(initialState);
};

const createDescriptionForTestOfConstructInitialState = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  keyOfExpectedInitialState,
}: {
  keyOfExpectedInitialState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "constructInitialState()",
    returnedValue: keyOfExpectedInitialState,
  });

export {
  createDescriptionForTestOfConstructInitialState,
  validateConstructInitialState,
};
