import type {
  MoveWithDataAndIndex,
  RecordOfMovesWithDataAndIndex,
} from "@repo/game/Move.test/setup.js";

import type { SnowballMove } from "../Move.js";
import type {
  RecordOfRequiredParamsOfSnowballMoves,
  RecordOfSnowballMovesWithData,
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
} from "./setup.js";

import {
  type recordOfRequiredParamsOfSnowballMoves,
  recordOfSnowballMovesWithData,
} from "./records.js";

type KeysOfMovesInOrder<
  GenericRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
> = (keyof GenericRecordOfRequiredParamsOfSnowballMoves)[];

type RecordOfSnowballMovesWithDataAndIndex<
  GenericRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
> = RecordOfMovesWithDataAndIndex<
  SnowballMove,
  RequiredParamsOfSnowballMove,
  GenericRecordOfRequiredParamsOfSnowballMoves,
  SnowballMoveWithData
>;

type SnowballMoveWithDataAndIndex = MoveWithDataAndIndex<
  SnowballMove,
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData
>;

const createIndexedSnowballMovesWithData = <
  GenericRecordOfRequiredParamsOfSnowballMoves extends
    RecordOfRequiredParamsOfSnowballMoves,
>({
  keysOfMovesInOrder,
  movesWithData,
}: {
  keysOfMovesInOrder: KeysOfMovesInOrder<GenericRecordOfRequiredParamsOfSnowballMoves>;
  movesWithData: RecordOfSnowballMovesWithData<GenericRecordOfRequiredParamsOfSnowballMoves>;
}) => {
  const recordOfMovesWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfSnowballMovesWithDataAndIndex<GenericRecordOfRequiredParamsOfSnowballMoves>;
  const indexedMovesWithData: (typeof movesWithData)[keyof typeof movesWithData][] =
    [];

  keysOfMovesInOrder.forEach((keyOfMove, indexOfMove) => {
    const moveWithData = movesWithData[keyOfMove];
    recordOfMovesWithDataAndIndex[keyOfMove] = {
      indexOfMove,
      moveWithData,
    } as RecordOfSnowballMovesWithDataAndIndex<GenericRecordOfRequiredParamsOfSnowballMoves>[typeof keyOfMove];
    indexedMovesWithData.push(moveWithData);
  });
  return {
    indexedMovesWithData,
    recordOfMovesWithDataAndIndex,
  };
};

const keysOfSnowballMovesInOrder = [
  // Row 0
  "northwestOfNorthwest",
  "northOfNorthwest",
  "northeastOfNorthwest",
  "northwestOfNorth",
  "northOfNorth",
  "northeastOfNorth",
  "northwestOfNortheast",
  "northOfNortheast",
  "northeastOfNortheast",

  // Row 1
  "westOfNorthwest",
  "centerOfNorthwest",
  "eastOfNorthwest",
  "westOfNorth",
  "centerOfNorth",
  "eastOfNorth",
  "westOfNortheast",
  "centerOfNortheast",
  "eastOfNortheast",

  // Row 2
  "southwestOfNorthwest",
  "southOfNorthwest",
  "southeastOfNorthwest",
  "southwestOfNorth",
  "southOfNorth",
  "southeastOfNorth",
  "southwestOfNortheast",
  "southOfNortheast",
  "southeastOfNortheast",

  // Row 3
  "northwestOfWest",
  "northOfWest",
  "northeastOfWest",
  "northwestOfCenter",
  "northOfCenter",
  "northeastOfCenter",
  "northwestOfEast",
  "northOfEast",
  "northeastOfEast",

  // Row 4
  "westOfWest",
  "centerOfWest",
  "eastOfWest",
  "westOfCenter",
  "centerOfCenter",
  "eastOfCenter",
  "westOfEast",
  "centerOfEast",
  "eastOfEast",

  // Row 5
  "southwestOfWest",
  "southOfWest",
  "southeastOfWest",
  "southwestOfCenter",
  "southOfCenter",
  "southeastOfCenter",
  "southwestOfEast",
  "southOfEast",
  "southeastOfEast",

  // Row 6
  "northwestOfSouthwest",
  "northOfSouthwest",
  "northeastOfSouthwest",
  "northwestOfSouth",
  "northOfSouth",
  "northeastOfSouth",
  "northwestOfSoutheast",
  "northOfSoutheast",
  "northeastOfSoutheast",

  // Row 7
  "westOfSouthwest",
  "centerOfSouthwest",
  "eastOfSouthwest",
  "westOfSouth",
  "centerOfSouth",
  "eastOfSouth",
  "westOfSoutheast",
  "centerOfSoutheast",
  "eastOfSoutheast",

  // Row 8
  "southwestOfSouthwest",
  "southOfSouthwest",
  "southeastOfSouthwest",
  "southwestOfSouth",
  "southOfSouth",
  "southeastOfSouth",
  "southwestOfSoutheast",
  "southOfSoutheast",
  "southeastOfSoutheast",
] as const satisfies KeysOfMovesInOrder<
  typeof recordOfRequiredParamsOfSnowballMoves
>;

const {
  indexedMovesWithData: indexedSnowballMovesWithData,
  recordOfMovesWithDataAndIndex: recordOfSnowballMovesWithDataAndIndex,
} = createIndexedSnowballMovesWithData({
  keysOfMovesInOrder: keysOfSnowballMovesInOrder,
  movesWithData: recordOfSnowballMovesWithData,
});

export type { SnowballMoveWithDataAndIndex };
export { indexedSnowballMovesWithData, recordOfSnowballMovesWithDataAndIndex };
