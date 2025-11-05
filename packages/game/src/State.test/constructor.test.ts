import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import { State, type StateParams } from "../State.js";

const validateConstructor = <
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  params,
  state,
}: {
  params: StateParams<M, S, Sl>;
  state: S;
}) => {
  expect(state).toBeInstanceOf(State);
  expect(state.getGame()).toStrictEqual(params.game);
  expect(state.getIndexOfPlayer()).toBe(params.indexOfPlayer);
  expect(state.getScore()).toStrictEqual(params.score);
  expect(state.getSlots()).toStrictEqual(params.slots);
};

export { validateConstructor };
