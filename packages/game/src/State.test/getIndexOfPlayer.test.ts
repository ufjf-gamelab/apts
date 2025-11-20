import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexOfPlayer = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedIndexOfPlayer,
  state,
}: {
  expectedIndexOfPlayer: ReturnType<S["getIndexOfPlayer"]>;
  state: S;
}) => {
  const indexOfPlayer = state.getIndexOfPlayer();
  expect(indexOfPlayer).toBe(expectedIndexOfPlayer);
};

const createDescriptionForTestOfGetIndexOfPlayer = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  keyOfPlayer,
}: {
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getIndexOfPlayer()`,
    returnedValue: keyOfPlayer,
  });

export { createDescriptionForTestOfGetIndexOfPlayer, validateGetIndexOfPlayer };
