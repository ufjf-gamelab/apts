import { recordOfSnowballSlotsWithDataAndIndexInWhichAllSlotsAreEmpty as recordOfSnowballSlotsWithDataAndIndex } from "../SnowballSlot.test/indexedRecords.js";
import {
  createRecordOfSnowballMovesWithData,
  type RecordOfRequiredParamsOfSnowballMoves,
} from "./setup.js";

const recordOfRequiredParamsOfSnowballMoves = {
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
    title: "Center of West",
  },

  /* East */
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfSouthwest.indexOfSlot,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
    title: "East of West",
  },

  /* Northeast */
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northeastOfWest.indexOfSlot,
    title: "Northeast of West",
  },

  /* North */
  northOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfEast.indexOfSlot,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northOfWest.indexOfSlot,
    title: "North of West",
  },

  /* Northwest */
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfEast.indexOfSlot,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfSouth.indexOfSlot,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
    title: "Northwest of West",
  },

  /* Southeast */
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southeastOfWest.indexOfSlot,
    title: "Southeast of West",
  },

  /* South */
  southOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfNortheast.indexOfSlot,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
    title: "South of West",
  },

  /* Southwest */
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfEast.indexOfSlot,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
    title: "Southwest of West",
  },

  /* West */
  westOfCenter: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfNorth.indexOfSlot,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfSouth.indexOfSlot,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece:
      recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
    title: "West of West",
  },
} as const satisfies RecordOfRequiredParamsOfSnowballMoves;

const recordOfSnowballMovesWithData = createRecordOfSnowballMovesWithData({
  recordOfRequiredParamsOfMoves: recordOfRequiredParamsOfSnowballMoves,
});

export { recordOfRequiredParamsOfSnowballMoves, recordOfSnowballMovesWithData };
