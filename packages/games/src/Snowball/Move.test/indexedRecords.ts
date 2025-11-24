import type { Integer } from "@repo/engine_core/types.js";

import type { ExtendedSnowballMovesWithData } from "./setup.js";

import {
  movesWithData as defaultMovesWithData,
  type RecordOfRequiredSnowballMoveParams,
} from "./records.js";

type KeysOfMovesInOrder<GenericExtendedSnowballMovesWithData> =
  (keyof GenericExtendedSnowballMovesWithData)[];

type SnowballMovesWithDataAndIndex<
  ExtendedRecordOfRequiredSnowballMoveParams extends
    RecordOfRequiredSnowballMoveParams,
> = Record<
  KeysOfMovesInOrder<
    ExtendedSnowballMovesWithData<ExtendedRecordOfRequiredSnowballMoveParams>
  >[number],
  SnowballMoveWithDataAndIndex<ExtendedRecordOfRequiredSnowballMoveParams>
>;

interface SnowballMoveWithDataAndIndex<
  ExtendedRecordOfRequiredSnowballMoveParams extends
    RecordOfRequiredSnowballMoveParams,
> {
  index: Integer;
  move: ExtendedSnowballMovesWithData<ExtendedRecordOfRequiredSnowballMoveParams>[keyof ExtendedSnowballMovesWithData<ExtendedRecordOfRequiredSnowballMoveParams>];
}

const createIndexedSnowballMovesWithData = <
  ExtendedRecordOfRequiredSnowballMoveParams extends
    RecordOfRequiredSnowballMoveParams,
>({
  keysOfMovesInOrder,
  movesWithData,
}: {
  keysOfMovesInOrder: KeysOfMovesInOrder<ExtendedRecordOfRequiredSnowballMoveParams>;
  movesWithData: ExtendedSnowballMovesWithData<ExtendedRecordOfRequiredSnowballMoveParams>;
}) => {
  const movesWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as SnowballMovesWithDataAndIndex<ExtendedRecordOfRequiredSnowballMoveParams>;
  const indexedMovesWithData: (typeof movesWithData)[keyof typeof movesWithData][] =
    [];
  keysOfMovesInOrder.forEach((key, indexOfMove) => {
    const move = movesWithData[key];
    movesWithDataAndIndex[key] = { index: indexOfMove, move };
    indexedMovesWithData.push(move);
  });
  return {
    indexedMovesWithData,
    movesWithDataAndIndex,
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
] as const satisfies KeysOfMovesInOrder<typeof defaultMovesWithData>;

const { indexedMovesWithData, movesWithDataAndIndex } =
  createIndexedSnowballMovesWithData({
    keysOfMovesInOrder: keysOfSnowballMovesInOrder,
    movesWithData: defaultMovesWithData,
  });

export type { SnowballMoveWithDataAndIndex };
export { indexedMovesWithData, movesWithDataAndIndex };
