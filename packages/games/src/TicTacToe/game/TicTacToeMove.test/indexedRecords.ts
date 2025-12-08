import type {
  MoveWithDataAndIndex,
  RecordOfMovesWithDataAndIndex,
} from "@repo/game/Move.test/setup.js";

import type { TicTacToeMove } from "../TicTacToeMove.js";
import type {
  RecordOfRequiredParamsOfTicTacToeMoves,
  RecordOfTicTacToeMovesWithData,
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData,
} from "./setup.js";

import {
  type recordOfRequiredParamsOfTicTacToeMoves,
  recordOfTicTacToeMovesWithData,
} from "./records.js";

type KeysOfMovesInOrder<
  GenericRecordOfRequiredParamsOfTicTacToeMoves extends
    RecordOfRequiredParamsOfTicTacToeMoves,
> = (keyof GenericRecordOfRequiredParamsOfTicTacToeMoves)[];

type RecordOfTicTacToeMovesWithDataAndIndex<
  GenericRecordOfRequiredParamsOfTicTacToeMoves extends
    RecordOfRequiredParamsOfTicTacToeMoves,
> = RecordOfMovesWithDataAndIndex<
  TicTacToeMove,
  RequiredParamsOfTicTacToeMove,
  GenericRecordOfRequiredParamsOfTicTacToeMoves,
  TicTacToeMoveWithData
>;

type TicTacToeMoveWithDataAndIndex = MoveWithDataAndIndex<
  TicTacToeMove,
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData
>;

const createIndexedTicTacToeMovesWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeMoves extends
    RecordOfRequiredParamsOfTicTacToeMoves,
>({
  keysOfTicTacToeMovesInOrder,
  ticTacToeMovesWithData,
}: {
  keysOfTicTacToeMovesInOrder: KeysOfMovesInOrder<GenericRecordOfRequiredParamsOfTicTacToeMoves>;
  ticTacToeMovesWithData: RecordOfTicTacToeMovesWithData<GenericRecordOfRequiredParamsOfTicTacToeMoves>;
}) => {
  const recordOfTicTacToeMovesWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfTicTacToeMovesWithDataAndIndex<GenericRecordOfRequiredParamsOfTicTacToeMoves>;
  const indexedTicTacToeMovesWithData: (typeof ticTacToeMovesWithData)[keyof typeof ticTacToeMovesWithData][] =
    [];

  keysOfTicTacToeMovesInOrder.forEach((keyOfMove, indexOfMove) => {
    const moveWithData = ticTacToeMovesWithData[keyOfMove];
    recordOfTicTacToeMovesWithDataAndIndex[keyOfMove] = {
      indexOfMove,
      moveWithData,
    } as RecordOfTicTacToeMovesWithDataAndIndex<GenericRecordOfRequiredParamsOfTicTacToeMoves>[typeof keyOfMove];
    indexedTicTacToeMovesWithData.push(moveWithData);
  });
  return {
    indexedTicTacToeMovesWithData,
    recordOfTicTacToeMovesWithDataAndIndex,
  };
};

const keysOfTicTacToeMovesInOrder = [
  "northwest",
  "north",
  "northeast",
  "west",
  "center",
  "east",
  "southwest",
  "south",
  "southeast",
] as const satisfies KeysOfMovesInOrder<
  typeof recordOfRequiredParamsOfTicTacToeMoves
>;

const {
  indexedTicTacToeMovesWithData,
  recordOfTicTacToeMovesWithDataAndIndex,
} = createIndexedTicTacToeMovesWithData({
  keysOfTicTacToeMovesInOrder,
  ticTacToeMovesWithData: recordOfTicTacToeMovesWithData,
});

export type { TicTacToeMoveWithDataAndIndex };
export {
  indexedTicTacToeMovesWithData,
  recordOfTicTacToeMovesWithDataAndIndex,
};
