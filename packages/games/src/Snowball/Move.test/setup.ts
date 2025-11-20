import {
  createMovesWithData,
  type DerivedMoveParams,
  deriveMoveParams,
  type RequiredMoveParams,
} from "@repo/game/Move.test/setup.js";

import { SnowballMove, type SnowballMoveParams } from "../Move.js";
import { recordOfRequiredParamsOfMoves } from "./records.js";

type DerivedSnowballMoveParams = Pick<DerivedMoveParams, "description"> &
  RequiredSnowballMoveParams;

type RequiredSnowballMoveParams = Pick<RequiredMoveParams, "title"> &
  Pick<SnowballMoveParams, "indexOfSlotInWhichPlacePiece">;

interface SnowballMoveWithData<
  Params extends RequiredSnowballMoveParams = RequiredSnowballMoveParams,
> {
  keyOfMove: string;
  move: SnowballMove;
  params: Params;
}

const deriveSnowballMoveParams = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: RequiredSnowballMoveParams): DerivedSnowballMoveParams => {
  const moveParams = deriveMoveParams({ title });
  return {
    ...moveParams,
    indexOfSlotInWhichPlacePiece,
  };
};

const createSnowballMove = ({
  description,
  indexOfSlotInWhichPlacePiece,
  title,
}: DerivedSnowballMoveParams): SnowballMove =>
  new SnowballMove({
    description,
    indexOfSlotInWhichPlacePiece,
    title,
  });

const movesWithData = createMovesWithData<
  SnowballMove,
  RequiredSnowballMoveParams,
  DerivedSnowballMoveParams,
  typeof recordOfRequiredParamsOfMoves
>({
  create: createSnowballMove,
  deriveParams: deriveSnowballMoveParams,
  recordOfRequiredParams: recordOfRequiredParamsOfMoves,
});

export type {
  DerivedSnowballMoveParams,
  RequiredSnowballMoveParams,
  SnowballMoveWithData,
};
export { createSnowballMove, deriveSnowballMoveParams, movesWithData };
