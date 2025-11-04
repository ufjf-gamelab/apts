import { expect } from "vitest";

import { State } from "../State.js";

const validateClone = ({
  clonedState,
  state,
}: {
  clonedState: unknown;
  state: State;
}) => {
  expect(clonedState).toBeInstanceOf(State);
  expect(clonedState).not.toBe(state);
  expect(clonedState).toStrictEqual(state);
};

export { validateClone };
