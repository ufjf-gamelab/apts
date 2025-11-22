import {
  createMovesWithData,
  type DerivedMoveParams,
  deriveMoveParams,
  type MoveWithData,
  type RequiredMoveParams,
} from "@repo/game/Move.test/setup.js";

import { SnowballMove, type SnowballMoveParams } from "../Move.js";
import { type RecordOfRequiredSnowballMoveParams } from "./records.js";

type DerivedSnowballMoveParams = Pick<DerivedMoveParams, "description"> &
  RequiredSnowballMoveParams;

type RequiredSnowballMoveParams = Pick<RequiredMoveParams, "title"> &
  Pick<SnowballMoveParams, "indexOfSlotInWhichPlacePiece">;

type SnowballMoveWithData = MoveWithData<
  SnowballMove,
  RequiredSnowballMoveParams
>;

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

type ExtendedSnowballMovesWithData<
  ExtendedRecordOfRequiredSnowballMoveParams extends
    RecordOfRequiredSnowballMoveParams,
> = {
  [K in keyof ExtendedRecordOfRequiredSnowballMoveParams]: {
    keyOfMove: keyof ExtendedRecordOfRequiredSnowballMoveParams;
    move: SnowballMove;
    params: RequiredSnowballMoveParams;
  };
};

const createSnowballMovesWithData = <
  ExtendedRecordOfRequiredSnowballMoveParams extends
    RecordOfRequiredSnowballMoveParams,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredSnowballMoveParams;
}): ExtendedSnowballMovesWithData<ExtendedRecordOfRequiredSnowballMoveParams> =>
  createMovesWithData({
    create: createSnowballMove,
    deriveParams: deriveSnowballMoveParams,
    recordOfRequiredParams,
  });

export type {
  DerivedSnowballMoveParams,
  ExtendedSnowballMovesWithData,
  RequiredSnowballMoveParams,
  SnowballMoveWithData,
};
export {
  createSnowballMove,
  createSnowballMovesWithData,
  deriveSnowballMoveParams,
};
