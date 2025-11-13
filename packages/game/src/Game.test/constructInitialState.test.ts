import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateConstructInitialState = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedInitialState,
  game,
}: {
  expectedInitialState: ReturnType<G["constructInitialState"]>;
  game: G;
}) => {
  const initialState = game.constructInitialState();
  expect(initialState).toBe(expectedInitialState);

  // Ensure that the returned object does not keep reference to the internal property
  const otherInitialState = game.constructInitialState();
  expect(otherInitialState).not.toBe(initialState);
};

const createDescriptionForTestOfConstructInitialState = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedInitialState,
}: {
  expectedInitialState: ReturnType<G["constructInitialState"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "constructInitialState()",
    returnedValue: `"${expectedInitialState}"`,
  });

export {
  createDescriptionForTestOfConstructInitialState,
  validateConstructInitialState,
};
