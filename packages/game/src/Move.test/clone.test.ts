import { expect } from "vitest";

import { Move } from "../Move.js";

const validateClonedMove = ({
  clonedMove,
  move,
}: {
  clonedMove: unknown;
  move: Move;
}) => {
  expect(clonedMove).toBeInstanceOf(Move);
  expect(clonedMove).not.toBe(move);
  expect(clonedMove).toStrictEqual(move);
};

export { validateClonedMove };
