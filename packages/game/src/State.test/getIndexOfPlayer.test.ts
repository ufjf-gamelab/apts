import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { IndexOfPlayer, Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexOfPlayer = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedIndexOfPlayer,
  state,
}: {
  expectedIndexOfPlayer: ReturnType<St["getIndexOfPlayer"]>;
  state: St;
}) => {
  const indexOfPlayer = state.getIndexOfPlayer();
  expect(indexOfPlayer).toBe(expectedIndexOfPlayer);
};

const createDescriptionForTestOfGetIndexOfPlayer = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  indexOfPlayer,
}: {
  indexOfPlayer: IndexOfPlayer;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getIndexOfPlayer()`,
    returnedValue: indexOfPlayer,
  });

export { createDescriptionForTestOfGetIndexOfPlayer, validateGetIndexOfPlayer };
