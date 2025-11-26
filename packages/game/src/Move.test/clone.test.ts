import { expect } from "vitest";

import { Move } from "../Move.js";

const validateClone = <GenericMove extends Move<GenericMove>>({
  clonedMove,
  move,
}: {
  clonedMove: unknown;
  move: GenericMove;
}) => {
  expect(clonedMove).toBeInstanceOf(Move);
  expect(clonedMove).not.toBe(move);
  expect(clonedMove).toStrictEqual(move);
};

export { validateClone };
