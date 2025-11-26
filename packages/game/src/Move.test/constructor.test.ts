import { expect } from "vitest";

import { Move, type ParamsOfMove } from "../Move.js";

const validateConstructor = <GenericMove extends Move<GenericMove>>({
  move,
  params,
}: {
  move: GenericMove;
  params: ParamsOfMove;
}) => {
  expect(move).toBeInstanceOf(Move);
  expect(move.getDescription()).toBe(params.description);
  expect(move.getTitle()).toBe(params.title);
};

export { validateConstructor };
