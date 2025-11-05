import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import { State } from "../State.js";

const validateClone = <M extends Move, Sl extends Slot>({
  clonedState,
  state,
}: {
  clonedState: unknown;
  state: State<M, Sl>;
}) => {
  expect(clonedState).toBeInstanceOf(State);
  expect(clonedState).not.toBe(state);
  expect(clonedState).toStrictEqual(state);
};

export { validateClone };
