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
  expect(clonedMove).toStrictEqual(move);
};

export { validateClone };
