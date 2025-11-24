import { slotsWithDataAndIndexInWhichAllSlotsAreEmpty as slotsWithDataAndIndex } from "../Slot.test/indexedRecords.js";
import {
  createSnowballMovesWithData,
  type RequiredSnowballMoveParams,
} from "./setup.js";

type RecordOfRequiredSnowballMoveParams = Record<
  string,
  RequiredSnowballMoveParams
>;

const recordOfRequiredParamsOfMoves = {
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfCenter.index,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfEast.index,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfNorth.index,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfNortheast.index,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfNorthwest.index,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfSouth.index,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfSoutheast.index,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfSouthwest.index,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.centerOfWest.index,
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfCenter.index,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfEast.index,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfNorth.index,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfNortheast.index,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfNorthwest.index,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfSouth.index,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfSoutheast.index,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfSouthwest.index,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.eastOfWest.index,
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northeastOfCenter.index,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northeastOfEast.index,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northeastOfNorth.index,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfNortheast.index,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfNorthwest.index,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northeastOfSouth.index,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfSoutheast.index,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northeastOfSouthwest.index,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northeastOfWest.index,
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfCenter.index,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfEast.index,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfNorth.index,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfNortheast.index,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfNorthwest.index,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfSouth.index,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfSoutheast.index,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfSouthwest.index,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northOfWest.index,
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northwestOfCenter.index,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northwestOfEast.index,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfNorthwest.index,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfNortheast.index,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfNorthwest.index,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northwestOfSouth.index,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfSoutheast.index,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.northwestOfSouthwest.index,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.northwestOfWest.index,
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southeastOfCenter.index,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southeastOfEast.index,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southeastOfNorth.index,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfNortheast.index,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfNorthwest.index,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southeastOfSouth.index,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfSoutheast.index,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southeastOfSouthwest.index,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southeastOfWest.index,
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfCenter.index,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfEast.index,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfNorth.index,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfNortheast.index,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfNorthwest.index,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfSouth.index,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfSoutheast.index,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfSouthwest.index,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southOfWest.index,
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southwestOfCenter.index,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southwestOfEast.index,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southwestOfNorth.index,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfNortheast.index,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfNorthwest.index,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southwestOfSouth.index,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfSoutheast.index,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndex.southwestOfSouthwest.index,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.southwestOfWest.index,
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfCenter.index,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfEast.index,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfNorth.index,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfNortheast.index,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfNorthwest.index,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfSouth.index,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfSoutheast.index,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfSouthwest.index,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithDataAndIndex.westOfWest.index,
    title: "West of West",
  },
} as const satisfies RecordOfRequiredSnowballMoveParams;

const movesWithData = createSnowballMovesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfMoves,
});

export type { RecordOfRequiredSnowballMoveParams };
export { movesWithData, recordOfRequiredParamsOfMoves };
