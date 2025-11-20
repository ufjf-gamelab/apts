import type { RequiredSnowballMoveParams } from "./setup.js";

import { getIndexOfSlotOnDefaultSlots } from "../Game.test/slots.js";

const recordOfRequiredParamsOfMoves = {
  // Center
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfCenter",
    }),
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfEast",
    }),
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfNorth",
    }),
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfNortheast",
    }),
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfNorthwest",
    }),
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfSouth",
    }),
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfSoutheast",
    }),
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfSouthwest",
    }),
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "centerOfWest",
    }),
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfCenter",
    }),
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfEast",
    }),
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfNorth",
    }),
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfNortheast",
    }),
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfNorthwest",
    }),
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfSouth",
    }),
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfSoutheast",
    }),
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfSouthwest",
    }),
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "eastOfWest",
    }),
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfCenter",
    }),
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfEast",
    }),
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfNorth",
    }),
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfNortheast",
    }),
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfNorthwest",
    }),
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfSouth",
    }),
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfSoutheast",
    }),
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfSouthwest",
    }),
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northeastOfWest",
    }),
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfCenter",
    }),
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfEast",
    }),
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfNorth",
    }),
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfNortheast",
    }),
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfNorthwest",
    }),
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfSouth",
    }),
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfSoutheast",
    }),
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfSouthwest",
    }),
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northOfWest",
    }),
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfCenter",
    }),
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfEast",
    }),
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfNorthwest",
    }),
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfNortheast",
    }),
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfNorthwest",
    }),
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfSouth",
    }),
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfSoutheast",
    }),
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfSouthwest",
    }),
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "northwestOfWest",
    }),
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfCenter",
    }),
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfEast",
    }),
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfNorth",
    }),
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfNortheast",
    }),
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfNorthwest",
    }),
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfSouth",
    }),
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfSoutheast",
    }),
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfSouthwest",
    }),
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southeastOfWest",
    }),
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfCenter",
    }),
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfEast",
    }),
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfNorth",
    }),
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfNortheast",
    }),
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfNorthwest",
    }),
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfSouth",
    }),
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfSoutheast",
    }),
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfSouthwest",
    }),
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southOfWest",
    }),
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfCenter",
    }),
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfEast",
    }),
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfNorth",
    }),
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfNortheast",
    }),
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfNorthwest",
    }),
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfSouth",
    }),
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfSoutheast",
    }),
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfSouthwest",
    }),
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "southwestOfWest",
    }),
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfCenter",
    }),
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfEast",
    }),
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfNorth",
    }),
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfNortheast",
    }),
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfNorthwest",
    }),
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfSouth",
    }),
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfSoutheast",
    }),
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfSouthwest",
    }),
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlotOnDefaultSlots({
      keyOfSlot: "westOfWest",
    }),
    title: "West of West",
  },
} as const satisfies Record<string, RequiredSnowballMoveParams>;

export { recordOfRequiredParamsOfMoves };
