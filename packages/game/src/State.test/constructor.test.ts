import { expect } from "vitest";

import { State, type StateParams } from "../State.js";

const validateConstructor = ({
  params,
  state,
}: {
  params: StateParams;
  state: State;
}) => {
  expect(state).toBeInstanceOf(State);
  expect(state.getGame()).toStrictEqual(params.game);
  expect(state.getIndexOfPlayer()).toBe(params.indexOfPlayer);
  expect(state.getScore()).toStrictEqual(params.score);
  expect(state.getSlots()).toStrictEqual(params.slots);
};

export { validateConstructor };
