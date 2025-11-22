import { slotsWithDataAndIndexInWhichAllSlotsAreEmpty } from "../Slot.test/indexedRecords.js";
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
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfCenter.index,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfEast.index,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfNorth.index,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfNortheast.index,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfNorthwest.index,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfSouth.index,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfSoutheast.index,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfSouthwest.index,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.centerOfWest.index,
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfCenter.index,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfEast.index,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfNorth.index,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfNortheast.index,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfNorthwest.index,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfSouth.index,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfSoutheast.index,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfSouthwest.index,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.eastOfWest.index,
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfCenter.index,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfEast.index,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfNorth.index,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfNortheast.index,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfNorthwest.index,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfSouth.index,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfSoutheast.index,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfSouthwest.index,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northeastOfWest.index,
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfCenter.index,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfEast.index,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfNorth.index,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfNortheast.index,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfNorthwest.index,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfSouth.index,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfSoutheast.index,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfSouthwest.index,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northOfWest.index,
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfCenter.index,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfEast.index,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfNorthwest.index,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfNortheast.index,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfNorthwest.index,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfSouth.index,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfSoutheast.index,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfSouthwest.index,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.northwestOfWest.index,
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfCenter.index,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfEast.index,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfNorth.index,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfNortheast.index,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfNorthwest.index,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfSouth.index,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfSoutheast.index,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfSouthwest.index,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southeastOfWest.index,
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfCenter.index,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfEast.index,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfNorth.index,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfNortheast.index,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfNorthwest.index,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfSouth.index,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfSoutheast.index,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfSouthwest.index,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southOfWest.index,
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfCenter.index,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfEast.index,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfNorth.index,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfNortheast.index,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfNorthwest.index,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfSouth.index,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfSoutheast.index,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfSouthwest.index,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.southwestOfWest.index,
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfCenter.index,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfEast.index,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfNorth.index,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfNortheast.index,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfNorthwest.index,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfSouth.index,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfSoutheast.index,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfSouthwest.index,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithDataAndIndexInWhichAllSlotsAreEmpty.westOfWest.index,
    title: "West of West",
  },
} as const satisfies RecordOfRequiredSnowballMoveParams;

const movesWithData = createSnowballMovesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfMoves,
});

export type { RecordOfRequiredSnowballMoveParams };
export { movesWithData, recordOfRequiredParamsOfMoves };
