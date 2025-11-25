import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateIsFinal = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedToBeFinal,
  state,
}: Pick<Parameters<G["isFinal"]>[0], "state"> & {
  expectedToBeFinal: ReturnType<G["isFinal"]>;
}) => {
  const game = state.getGame();
  const isFinal = game.isFinal({
    state,
  });
  expect(isFinal).toBe(expectedToBeFinal);
};

const createDescriptionForTestOfIsFinal = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedToBeFinal,
  keyOfState,
}: {
  expectedToBeFinal: ReturnType<G["isFinal"]>;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `isFinal({ state: ${keyOfState} })`,
    returnedValue: expectedToBeFinal,
  });

export { createDescriptionForTestOfIsFinal, validateIsFinal };
