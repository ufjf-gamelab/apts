import { createMoveParams } from "@repo/game/Move.test/setup.js";

import { SnowballMove } from "../Move.js";

const createMove = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: Pick<
  ConstructorParameters<typeof SnowballMove>[number],
  "indexOfSlotInWhichPlacePiece" | "title"
>): SnowballMove => {
  const moveParams = createMoveParams({ title });
  return new SnowballMove({
    ...moveParams,
    indexOfSlotInWhichPlacePiece,
  });
};

const moves: Record<string, SnowballMove> = {
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
