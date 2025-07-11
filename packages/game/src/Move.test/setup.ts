import type Move from "../Move.js";

type MoveParams = ConstructorParameters<typeof Move>[number];

const createMoveParams = ({
  title,
}: Pick<MoveParams, "title">): MoveParams => ({
  description: `Control the slot on ${title}`,
  title,
});

export { createMoveParams };
