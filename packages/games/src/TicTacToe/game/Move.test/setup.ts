import {
  createRecordOfMovesWithData,
  type DerivedParamsOfMove,
  deriveParamsOfMove,
  type MoveWithData,
  type RecordOfMovesWithData,
  type RequiredParamsOfMove,
} from "@repo/game/Move.test/setup.js";

import { type ParamsOfTicTacToeMove, TicTacToeMove } from "../Move.js";

type DerivedParamsOfTicTacToeMove = DerivedParamsOfMove &
  Pick<RequiredParamsOfTicTacToeMove, "indexOfSlotInWhichPlacePiece">;

type RecordOfRequiredParamsOfTicTacToeMoves = Record<
  string,
  RequiredParamsOfTicTacToeMove
>;

type RecordOfTicTacToeMovesWithData<
  GenericRecordOfRequiredParamsOfTicTacToeMoves extends
    RecordOfRequiredParamsOfTicTacToeMoves,
> = RecordOfMovesWithData<
  TicTacToeMove,
  RequiredParamsOfTicTacToeMove,
  GenericRecordOfRequiredParamsOfTicTacToeMoves
>;

type RequiredParamsOfTicTacToeMove = Pick<
  ParamsOfTicTacToeMove,
  "indexOfSlotInWhichPlacePiece"
> &
  Pick<RequiredParamsOfMove, "title">;

type TicTacToeMoveWithData<GenericKeyOfTicTacToeMove extends string = string> =
  MoveWithData<
    TicTacToeMove,
    RequiredParamsOfTicTacToeMove,
    GenericKeyOfTicTacToeMove
  >;

const deriveParamsOfTicTacToeMove = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: RequiredParamsOfTicTacToeMove): DerivedParamsOfTicTacToeMove => {
  const moveParams = deriveParamsOfMove({
    description: `Control the move on ${title}.`,
    title,
  });
  return {
    ...moveParams,
    indexOfSlotInWhichPlacePiece,
  };
};

const createTicTacToeMove = ({
  description,
  indexOfSlotInWhichPlacePiece,
  title,
}: DerivedParamsOfTicTacToeMove): TicTacToeMove =>
  new TicTacToeMove({
    description,
    indexOfSlotInWhichPlacePiece,
    title,
  });

const createRecordOfTicTacToeMovesWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeMoves extends
    RecordOfRequiredParamsOfTicTacToeMoves,
>({
  recordOfRequiredParamsOfMoves,
}: {
  recordOfRequiredParamsOfMoves: GenericRecordOfRequiredParamsOfTicTacToeMoves;
}) =>
  createRecordOfMovesWithData<
    TicTacToeMove,
    DerivedParamsOfTicTacToeMove,
    RequiredParamsOfTicTacToeMove,
    RecordOfTicTacToeMovesWithData<GenericRecordOfRequiredParamsOfTicTacToeMoves>
  >({
    create: createTicTacToeMove,
    deriveParams: deriveParamsOfTicTacToeMove,
    recordOfRequiredParamsOfMoves,
  });

export type {
  DerivedParamsOfTicTacToeMove,
  RecordOfRequiredParamsOfTicTacToeMoves,
  RecordOfTicTacToeMovesWithData,
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData,
};
export {
  createRecordOfTicTacToeMovesWithData,
  createTicTacToeMove,
  deriveParamsOfTicTacToeMove,
};
