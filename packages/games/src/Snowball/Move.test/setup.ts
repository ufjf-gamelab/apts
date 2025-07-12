import type { IndexOfMove } from "@repo/game/Move.js";
import {
  createMoveParams,
  createMovesWithData,
} from "@repo/game/Move.test/setup.js";

import { SnowballMove } from "../Move.js";
import { slotsWithData } from "../Slot.test/setup.js";

type RequiredSnowballMoveParams = Pick<
  SnowballMoveParams,
  "indexOfSlotInWhichPlacePiece" | "title"
>;

type SnowballMoveParams = ConstructorParameters<typeof SnowballMove>[number];

const createSnowballMoveParams = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: RequiredSnowballMoveParams): SnowballMoveParams => {
  const moveParams = createMoveParams({ title });
  return {
    ...moveParams,
    indexOfSlotInWhichPlacePiece,
  };
};

const createMove = ({
  description,
  indexOfSlotInWhichPlacePiece,
  title,
}: SnowballMoveParams): SnowballMove =>
  new SnowballMove({
    description,
    indexOfSlotInWhichPlacePiece,
    title,
  });

const paramsOfMoves = {
  // Center
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfCenter.indexOfSlot,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfEast.indexOfSlot,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfNorth.indexOfSlot,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfNortheast.indexOfSlot,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfNorthwest.indexOfSlot,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfSouth.indexOfSlot,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfSoutheast.indexOfSlot,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfSouthwest.indexOfSlot,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.centerOfWest.indexOfSlot,
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfCenter.indexOfSlot,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfEast.indexOfSlot,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfNorth.indexOfSlot,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfNortheast.indexOfSlot,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfNorthwest.indexOfSlot,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfSouth.indexOfSlot,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfSoutheast.indexOfSlot,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfSouthwest.indexOfSlot,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.eastOfWest.indexOfSlot,
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northeastOfCenter.indexOfSlot,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northeastOfEast.indexOfSlot,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northeastOfNorth.indexOfSlot,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northeastOfNortheast.indexOfSlot,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northeastOfNorthwest.indexOfSlot,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northeastOfSouth.indexOfSlot,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northeastOfSoutheast.indexOfSlot,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northeastOfSouthwest.indexOfSlot,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northeastOfWest.indexOfSlot,
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfCenter.indexOfSlot,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfEast.indexOfSlot,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfNorth.indexOfSlot,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfNortheast.indexOfSlot,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfNorthwest.indexOfSlot,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfSouth.indexOfSlot,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfSoutheast.indexOfSlot,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfSouthwest.indexOfSlot,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northOfWest.indexOfSlot,
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northwestOfCenter.indexOfSlot,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northwestOfEast.indexOfSlot,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northwestOfNortheast.indexOfSlot,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northwestOfSouth.indexOfSlot,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northwestOfSoutheast.indexOfSlot,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.northwestOfSouthwest.indexOfSlot,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.northwestOfWest.indexOfSlot,
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southeastOfCenter.indexOfSlot,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southeastOfEast.indexOfSlot,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southeastOfNorth.indexOfSlot,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southeastOfNortheast.indexOfSlot,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southeastOfNorthwest.indexOfSlot,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southeastOfSouth.indexOfSlot,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southeastOfSoutheast.indexOfSlot,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southeastOfSouthwest.indexOfSlot,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southeastOfWest.indexOfSlot,
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfCenter.indexOfSlot,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfEast.indexOfSlot,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfNorth.indexOfSlot,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfNortheast.indexOfSlot,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfNorthwest.indexOfSlot,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfSouth.indexOfSlot,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfSoutheast.indexOfSlot,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfSouthwest.indexOfSlot,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southOfWest.indexOfSlot,
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southwestOfCenter.indexOfSlot,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southwestOfEast.indexOfSlot,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southwestOfNorth.indexOfSlot,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southwestOfNortheast.indexOfSlot,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southwestOfNorthwest.indexOfSlot,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southwestOfSouth.indexOfSlot,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southwestOfSoutheast.indexOfSlot,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithData.southwestOfSouthwest.indexOfSlot,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.southwestOfWest.indexOfSlot,
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfCenter.indexOfSlot,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfEast.indexOfSlot,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfNorth.indexOfSlot,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfNortheast.indexOfSlot,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfNorthwest.indexOfSlot,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfSouth.indexOfSlot,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfSoutheast.indexOfSlot,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfSouthwest.indexOfSlot,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithData.westOfWest.indexOfSlot,
    title: "West of West",
  },
} as const satisfies Record<string, RequiredSnowballMoveParams>;

const movesWithData = createMovesWithData({
  createMove,
  createMoveParams: createSnowballMoveParams,
  partialParamsOfMoves: paramsOfMoves,
}) as {
  [K in keyof typeof paramsOfMoves]: {
    indexOfMove: IndexOfMove;
    keyOfMove: keyof typeof paramsOfMoves;
    move: SnowballMove;
    params: SnowballMoveParams;
  };
};

export { movesWithData };
