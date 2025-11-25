import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";

import { State } from "../State.js";

const validateClone = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  clonedState,
  state,
}: {
  clonedState: unknown;
  state: State<G, M, P, Sc, Sl, St>;
}) => {
  expect(clonedState).toBeInstanceOf(State);
  expect(clonedState).not.toBe(state);
  expect(clonedState).toStrictEqual(state);
};

export { validateClone };
