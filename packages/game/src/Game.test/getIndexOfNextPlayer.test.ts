import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexOfNextPlayer = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedIndexOfNextPlayer,
  game,
  state,
}: {
  expectedIndexOfNextPlayer: ReturnType<G["getIndexOfNextPlayer"]>;
  game: G;
  state: Parameters<G["getIndexOfNextPlayer"]>[0]["state"];
}) => {
  let indexOfNextPlayer = game.getIndexOfNextPlayer({ state });
  expect(indexOfNextPlayer).toBe(expectedIndexOfNextPlayer);

  // Ensure that the returned object does not keep reference to the internal property
  indexOfNextPlayer += INCREMENT_ONE;
  expect(game.getIndexOfNextPlayer({ state })).toBe(expectedIndexOfNextPlayer);
  expect(game.getIndexOfNextPlayer({ state })).not.toEqual(indexOfNextPlayer);
};

const createDescriptionForTestOfGetIndexOfNextPlayer = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedIndexOfNextPlayer,
  keyOfState,
}: {
  expectedIndexOfNextPlayer: ReturnType<G["getIndexOfNextPlayer"]>;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getIndexOfNextPlayer({ state: ${keyOfState} })`,
    returnedValue: `"${expectedIndexOfNextPlayer}"`,
  });

export {
  createDescriptionForTestOfGetIndexOfNextPlayer,
  validateGetIndexOfNextPlayer,
};
