import {
  createRecordOfMovesWithData,
  type DerivedParamsOfMove,
  deriveParamsOfMove,
  type MoveWithData,
  type RecordOfMovesWithData,
  type RequiredParamsOfMove,
} from "@repo/game/Move.test/setup.js";

import {
  ConnectFourMove,
  type ParamsOfConnectFourMove,
} from "../ConnectFourMove.js";

type ConnectFourMoveWithData<
  GenericKeyOfConnectFourMove extends string = string,
> = MoveWithData<
  ConnectFourMove,
  RequiredParamsOfConnectFourMove,
  GenericKeyOfConnectFourMove
>;

type DerivedParamsOfConnectFourMove = DerivedParamsOfMove &
  Pick<RequiredParamsOfConnectFourMove, "indexOfColumnInWhichPlacePiece">;

type RecordOfConnectFourMovesWithData<
  GenericRecordOfRequiredParamsOfConnectFourMoves extends
    RecordOfRequiredParamsOfConnectFourMoves,
> = RecordOfMovesWithData<
  ConnectFourMove,
  RequiredParamsOfConnectFourMove,
  GenericRecordOfRequiredParamsOfConnectFourMoves
>;

type RecordOfRequiredParamsOfConnectFourMoves = Record<
  string,
  RequiredParamsOfConnectFourMove
>;

type RequiredParamsOfConnectFourMove = Pick<
  ParamsOfConnectFourMove,
  "indexOfColumnInWhichPlacePiece"
> &
  Pick<RequiredParamsOfMove, "title">;

const deriveParamsOfConnectFourMove = ({
  indexOfColumnInWhichPlacePiece,
  title,
}: RequiredParamsOfConnectFourMove): DerivedParamsOfConnectFourMove => {
  const moveParams = deriveParamsOfMove({
    description: `Place piece on the ${title}.`,
    title,
  });
  return {
    ...moveParams,
    indexOfColumnInWhichPlacePiece,
  };
};

const createConnectFourMove = ({
  description,
  indexOfColumnInWhichPlacePiece,
  title,
}: DerivedParamsOfConnectFourMove): ConnectFourMove =>
  new ConnectFourMove({
    description,
    indexOfColumnInWhichPlacePiece,
    title,
  });

const createRecordOfConnectFourMovesWithData = <
  GenericRecordOfRequiredParamsOfConnectFourMoves extends
    RecordOfRequiredParamsOfConnectFourMoves,
>({
  recordOfRequiredParamsOfMoves,
}: {
  recordOfRequiredParamsOfMoves: GenericRecordOfRequiredParamsOfConnectFourMoves;
}) =>
  createRecordOfMovesWithData<
    ConnectFourMove,
    DerivedParamsOfConnectFourMove,
    RequiredParamsOfConnectFourMove,
    RecordOfConnectFourMovesWithData<GenericRecordOfRequiredParamsOfConnectFourMoves>
  >({
    create: createConnectFourMove,
    deriveParams: deriveParamsOfConnectFourMove,
    recordOfRequiredParamsOfMoves,
  });

export type {
  ConnectFourMoveWithData,
  DerivedParamsOfConnectFourMove,
  RecordOfConnectFourMovesWithData,
  RecordOfRequiredParamsOfConnectFourMoves,
  RequiredParamsOfConnectFourMove,
};
export {
  createConnectFourMove,
  createRecordOfConnectFourMovesWithData,
  deriveParamsOfConnectFourMove,
};
