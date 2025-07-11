import { createMoveParams } from "@repo/game/Move.test/setup.js";

import Move from "../Move.js";

const createMove = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: Pick<
  ConstructorParameters<typeof Move>[number],
  "indexOfSlotInWhichPlacePiece" | "title"
>): Move => {
  const baseMoveParams = createMoveParams({ title });
  return new Move({
    ...baseMoveParams,
    indexOfSlotInWhichPlacePiece,
  });
};

const moves: Record<string, Move> = {
  northOfNorthwest: createMove({
    indexOfSlotInWhichPlacePiece: 1,
    title: "North of Northwest",
  }),
  northwestOfNorthwest: createMove({
    indexOfSlotInWhichPlacePiece: 0,
    title: "Northwest of Northwest",
  }),
} as const;

export { moves };
