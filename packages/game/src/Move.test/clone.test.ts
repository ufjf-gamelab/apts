import { expect } from "vitest";

import { Move } from "../Move.js";

const validateClone = <M extends Move<M>>({
  clonedMove,
  move,
}: {
  clonedMove: unknown;
  move: M;
}) => {
  expect(clonedMove).toBeInstanceOf(Move);
  expect(clonedMove).not.toBe(move);
  expect(clonedMove).toStrictEqual(move);
};

export { validateClone };
