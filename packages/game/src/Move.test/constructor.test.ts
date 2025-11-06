import { expect } from "vitest";

import { Move, type MoveParams } from "../Move.js";

const validateConstructor = <M extends Move<M>>({
  move,
  params,
}: {
  move: M;
  params: MoveParams;
}) => {
  expect(move).toBeInstanceOf(Move);
  expect(move.getDescription()).toBe(params.description);
  expect(move.getTitle()).toBe(params.title);
};

export { validateConstructor };
