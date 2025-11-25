import { slotsWithDataAndIndexInWhichAllSlotsAreEmpty as slotsWithDataAndIndex } from "../Slot.test/indexedRecords.js";
import {
  createSnowballMovesWithData,
  type RequiredParamsOfSnowballMove,
} from "./setup.js";

type RecordOfRequiredParamsOfSnowballMoves = Record<
  string,
  RequiredParamsOfSnowballMove
>;

const recordOfRequiredParamsOfMoves = {
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfEast.indexOfSlot,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.centerOfWest.indexOfSlot,
    title: "Center of West",
  },

  /* East */
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfEast.indexOfSlot,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.eastOfSouthwest.indexOfSlot,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfWest.indexOfSlot,
    title: "East of West",
  },

  /* Northeast */
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfEast.indexOfSlot,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfWest.indexOfSlot,
    title: "Northeast of West",
  },

  /* North */
  northOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfCenter.indexOfSlot,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfEast.indexOfSlot,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfNorth.indexOfSlot,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfSouth.indexOfSlot,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfWest.indexOfSlot,
    title: "North of West",
  },

  /* Northwest */
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfEast.indexOfSlot,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfSouth.indexOfSlot,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfWest.indexOfSlot,
    title: "Northwest of West",
  },

  /* Southeast */
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfWest.indexOfSlot,
    title: "Southeast of West",
  },

  /* South */
  southOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfCenter.indexOfSlot,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfEast.indexOfSlot,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfNorth.indexOfSlot,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfNortheast.indexOfSlot,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfSouth.indexOfSlot,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfWest.indexOfSlot,
    title: "South of West",
  },

  /* Southwest */
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfEast.indexOfSlot,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
    title: "Southwest of West",
  },

  /* West */
  westOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.westOfCenter.indexOfSlot,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfEast.indexOfSlot,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfNorth.indexOfSlot,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfSouth.indexOfSlot,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfWest.indexOfSlot,
    title: "West of West",
  },
} as const satisfies RecordOfRequiredParamsOfSnowballMoves;

const movesWithData = createSnowballMovesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfMoves,
});

export type { RecordOfRequiredParamsOfSnowballMoves };
export { movesWithData, recordOfRequiredParamsOfMoves };
