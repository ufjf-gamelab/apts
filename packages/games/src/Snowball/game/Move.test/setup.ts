import {
  createMovesWithData,
  type DerivedParamsOfMove,
  deriveParamsOfMove,
  type MoveWithData,
  type RequiredParamsOfMove,
} from "@repo/game/Move.test/setup.js";

import { type ParamsOfSnowballMove, SnowballMove } from "../Move.js";
import { type RecordOfRequiredParamsOfSnowballMoves } from "./records.js";

type DerivedParamsOfSnowballMove = DerivedParamsOfMove &
  Pick<RequiredParamsOfSnowballMove, "indexOfSlotInWhichPlacePiece">;

type RequiredParamsOfSnowballMove = Pick<
  ParamsOfSnowballMove,
  "indexOfSlotInWhichPlacePiece"
> &
  RequiredParamsOfMove;

type SnowballMoveWithData = MoveWithData<
  SnowballMove,
  RequiredParamsOfSnowballMove
>;

const deriveParamsOfSnowballMove = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: RequiredParamsOfSnowballMove): DerivedParamsOfSnowballMove => {
  const moveParams = deriveParamsOfMove({ title });
  return {
    ...moveParams,
    indexOfSlotInWhichPlacePiece,
  };
};

const createSnowballMove = ({
  description,
  indexOfSlotInWhichPlacePiece,
  title,
}: DerivedParamsOfSnowballMove): SnowballMove =>
  new SnowballMove({
    description,
    indexOfSlotInWhichPlacePiece,
    title,
  });

type ExtendedSnowballMovesWithData<
  ExtendedRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
> = {
  [K in keyof ExtendedRecordOfRequiredParamsOfSnowballMoves]: {
    keyOfMove: keyof ExtendedRecordOfRequiredParamsOfSnowballMoves;
    move: SnowballMove;
    params: RequiredParamsOfSnowballMove;
  };
};

const createSnowballMovesWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredParamsOfSnowballMoves;
}): ExtendedSnowballMovesWithData<ExtendedRecordOfRequiredParamsOfSnowballMoves> =>
  createMovesWithData({
    create: createSnowballMove,
    deriveParams: deriveParamsOfSnowballMove,
    recordOfRequiredParams,
  });

export type {
  DerivedParamsOfSnowballMove,
  ExtendedSnowballMovesWithData,
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
};
export {
  createSnowballMove,
  createSnowballMovesWithData,
  deriveParamsOfSnowballMove,
};
