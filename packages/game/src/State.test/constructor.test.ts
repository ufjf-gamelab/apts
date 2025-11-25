import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";

import { type ParamsOfState, State } from "../State.js";

const validateConstructor = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  params,
  state,
}: {
  params: ParamsOfState<G, M, P, Sc, Sl, St>;
  state: St;
}) => {
  expect(state).toBeInstanceOf(State);
  expect(state.getGame()).toStrictEqual(params.game);
  expect(state.getIndexOfPlayer()).toBe(params.indexOfPlayer);
  expect(state.getScore()).toStrictEqual(params.score);
  expect(state.getSlots()).toStrictEqual(params.slots);
};

export { validateConstructor };
