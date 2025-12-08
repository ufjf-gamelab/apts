import type {
  MoveWithDataAndIndex,
  RecordOfMovesWithDataAndIndex,
} from "@repo/game/Move.test/setup.js";

import type { ConnectFourMove } from "../ConnectFourMove.js";
import type {
  ConnectFourMoveWithData,
  RecordOfConnectFourMovesWithData,
  RecordOfRequiredParamsOfConnectFourMoves,
  RequiredParamsOfConnectFourMove,
} from "./setup.js";

import {
  recordOfConnectFourMovesWithData,
  type recordOfRequiredParamsOfConnectFourMoves,
} from "./records.js";

type ConnectFourMoveWithDataAndIndex = MoveWithDataAndIndex<
  ConnectFourMove,
  RequiredParamsOfConnectFourMove,
  ConnectFourMoveWithData
>;

type KeysOfMovesInOrder<
  GenericRecordOfRequiredParamsOfConnectFourMoves extends
    RecordOfRequiredParamsOfConnectFourMoves,
> = (keyof GenericRecordOfRequiredParamsOfConnectFourMoves)[];

type RecordOfConnectFourMovesWithDataAndIndex<
  GenericRecordOfRequiredParamsOfConnectFourMoves extends
    RecordOfRequiredParamsOfConnectFourMoves,
> = RecordOfMovesWithDataAndIndex<
  ConnectFourMove,
  RequiredParamsOfConnectFourMove,
  GenericRecordOfRequiredParamsOfConnectFourMoves,
  ConnectFourMoveWithData
>;

const createIndexedConnectFourMovesWithData = <
  GenericRecordOfRequiredParamsOfConnectFourMoves extends
    RecordOfRequiredParamsOfConnectFourMoves,
>({
  keysOfConnectFourMovesInOrder,
  snowballMovesWithData,
}: {
  keysOfConnectFourMovesInOrder: KeysOfMovesInOrder<GenericRecordOfRequiredParamsOfConnectFourMoves>;
  snowballMovesWithData: RecordOfConnectFourMovesWithData<GenericRecordOfRequiredParamsOfConnectFourMoves>;
}) => {
  const recordOfConnectFourMovesWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfConnectFourMovesWithDataAndIndex<GenericRecordOfRequiredParamsOfConnectFourMoves>;
  const indexedConnectFourMovesWithData: (typeof snowballMovesWithData)[keyof typeof snowballMovesWithData][] =
    [];

  keysOfConnectFourMovesInOrder.forEach((keyOfMove, indexOfMove) => {
    const moveWithData = snowballMovesWithData[keyOfMove];
    recordOfConnectFourMovesWithDataAndIndex[keyOfMove] = {
      indexOfMove,
      moveWithData,
    } as RecordOfConnectFourMovesWithDataAndIndex<GenericRecordOfRequiredParamsOfConnectFourMoves>[typeof keyOfMove];
    indexedConnectFourMovesWithData.push(moveWithData);
  });
  return {
    indexedConnectFourMovesWithData,
    recordOfConnectFourMovesWithDataAndIndex,
  };
};

const keysOfConnectFourMovesInOrder = [
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
] as const satisfies KeysOfMovesInOrder<
  typeof recordOfRequiredParamsOfConnectFourMoves
>;

const {
  indexedConnectFourMovesWithData,
  recordOfConnectFourMovesWithDataAndIndex,
} = createIndexedConnectFourMovesWithData({
  keysOfConnectFourMovesInOrder,
  snowballMovesWithData: recordOfConnectFourMovesWithData,
});

export type { ConnectFourMoveWithDataAndIndex };
export {
  indexedConnectFourMovesWithData,
  recordOfConnectFourMovesWithDataAndIndex,
};
