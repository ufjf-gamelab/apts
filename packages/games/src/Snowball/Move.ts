import type { Integer } from "@repo/engine_core/types.js";
import {
  type default as BaseMove,
  createMove as createBaseMove,
} from "@repo/game/Move.js";

interface Move extends BaseMove {
  readonly indexOfSlotInWhichPlacePiece: Integer;
}

const createMove = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: {
  indexOfSlotInWhichPlacePiece: Move["indexOfSlotInWhichPlacePiece"];
  title: Move["title"];
}): Move => {
  const baseMove = createBaseMove({
    description: `Control the slot on ${title}`,
    title,
  });
  return {
    ...baseMove,
    clone: () =>
      createMove({
        indexOfSlotInWhichPlacePiece,
        title,
      }),
    indexOfSlotInWhichPlacePiece,
  };
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

export type { Move as default };
export { moves };
