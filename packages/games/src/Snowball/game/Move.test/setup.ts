import {
  createRecordOfMovesWithData,
  type DerivedParamsOfMove,
  deriveParamsOfMove,
  type MoveWithData,
  type RecordOfMovesWithData,
  type RequiredParamsOfMove,
} from "@repo/game/Move.test/setup.js";

import { type ParamsOfSnowballMove, SnowballMove } from "../Move.js";

type DerivedParamsOfSnowballMove = DerivedParamsOfMove &
  Pick<RequiredParamsOfSnowballMove, "indexOfSlotInWhichPlacePiece">;

type RecordOfRequiredParamsOfSnowballMoves = Record<
  string,
  RequiredParamsOfSnowballMove
>;

type RecordOfSnowballMovesWithData<
  GenericRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
> = RecordOfMovesWithData<
  SnowballMove,
  RequiredParamsOfSnowballMove,
  GenericRecordOfRequiredParamsOfSnowballMoves
>;

type RequiredParamsOfSnowballMove = Pick<
  ParamsOfSnowballMove,
  "indexOfSlotInWhichPlacePiece"
> &
  Pick<RequiredParamsOfMove, "title">;

type SnowballMoveWithData<GenericKeyOfSnowballMove extends string = string> =
  MoveWithData<
    SnowballMove,
    RequiredParamsOfSnowballMove,
    GenericKeyOfSnowballMove
  >;

const deriveParamsOfSnowballMove = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: RequiredParamsOfSnowballMove): DerivedParamsOfSnowballMove => {
  const moveParams = deriveParamsOfMove({
    description: `Control the move on ${title}.`,
    title,
  });
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

const createRecordOfSnowballMovesWithData = <
  GenericRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
>({
  recordOfRequiredParamsOfMoves,
}: {
  recordOfRequiredParamsOfMoves: GenericRecordOfRequiredParamsOfSnowballMoves;
}) =>
  createRecordOfMovesWithData<
    SnowballMove,
    DerivedParamsOfSnowballMove,
    RequiredParamsOfSnowballMove,
    RecordOfSnowballMovesWithData<GenericRecordOfRequiredParamsOfSnowballMoves>
  >({
    create: createSnowballMove,
    deriveParams: deriveParamsOfSnowballMove,
    recordOfRequiredParamsOfMoves,
  });

export type {
  DerivedParamsOfSnowballMove,
  RecordOfRequiredParamsOfSnowballMoves,
  RecordOfSnowballMovesWithData,
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
};
export {
  createRecordOfSnowballMovesWithData,
  createSnowballMove,
  deriveParamsOfSnowballMove,
};
