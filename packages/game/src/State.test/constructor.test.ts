import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";

import { type ParamsOfState, State } from "../State.js";

const validateConstructor = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  params,
  state,
}: {
  params: ParamsOfState<G, M, P, S, Sc, Sl>;
  state: S;
}) => {
  expect(state).toBeInstanceOf(State);
  expect(state.getGame()).toStrictEqual(params.game);
  expect(state.getIndexOfPlayer()).toBe(params.indexOfPlayer);
  expect(state.getScore()).toStrictEqual(params.score);
  expect(state.getSlots()).toStrictEqual(params.slots);
};

export { validateConstructor };
