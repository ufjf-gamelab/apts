import {
  createMoveParams,
  createMovesWithParams,
} from "@repo/game/Move.test/setup.js";

import { SnowballMove } from "../Move.js";
import { slotsWithParams } from "../Slot.test/setup.js";

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
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfCenter.indexOfSlot,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfEast.indexOfSlot,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfNorth.indexOfSlot,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfNortheast.indexOfSlot,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfNorthwest.indexOfSlot,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfSouth.indexOfSlot,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfSoutheast.indexOfSlot,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfSouthwest.indexOfSlot,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.centerOfWest.indexOfSlot,
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfCenter.indexOfSlot,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfEast.indexOfSlot,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfNorth.indexOfSlot,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfNortheast.indexOfSlot,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfNorthwest.indexOfSlot,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfSouth.indexOfSlot,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfSoutheast.indexOfSlot,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfSouthwest.indexOfSlot,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.eastOfWest.indexOfSlot,
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northeastOfCenter.indexOfSlot,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northeastOfEast.indexOfSlot,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northeastOfNorth.indexOfSlot,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northeastOfNortheast.indexOfSlot,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northeastOfNorthwest.indexOfSlot,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northeastOfSouth.indexOfSlot,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northeastOfSoutheast.indexOfSlot,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northeastOfSouthwest.indexOfSlot,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northeastOfWest.indexOfSlot,
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfCenter.indexOfSlot,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfEast.indexOfSlot,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfNorth.indexOfSlot,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfNortheast.indexOfSlot,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfNorthwest.indexOfSlot,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfSouth.indexOfSlot,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfSoutheast.indexOfSlot,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfSouthwest.indexOfSlot,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northOfWest.indexOfSlot,
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northwestOfCenter.indexOfSlot,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northwestOfEast.indexOfSlot,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northwestOfNortheast.indexOfSlot,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northwestOfNorthwest.indexOfSlot,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northwestOfSouth.indexOfSlot,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northwestOfSoutheast.indexOfSlot,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.northwestOfSouthwest.indexOfSlot,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.northwestOfWest.indexOfSlot,
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southeastOfCenter.indexOfSlot,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southeastOfEast.indexOfSlot,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southeastOfNorth.indexOfSlot,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southeastOfNortheast.indexOfSlot,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southeastOfNorthwest.indexOfSlot,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southeastOfSouth.indexOfSlot,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southeastOfSoutheast.indexOfSlot,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southeastOfSouthwest.indexOfSlot,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southeastOfWest.indexOfSlot,
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfCenter.indexOfSlot,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfEast.indexOfSlot,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfNorth.indexOfSlot,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfNortheast.indexOfSlot,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfNorthwest.indexOfSlot,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfSouth.indexOfSlot,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfSoutheast.indexOfSlot,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfSouthwest.indexOfSlot,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southOfWest.indexOfSlot,
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southwestOfCenter.indexOfSlot,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southwestOfEast.indexOfSlot,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southwestOfNorth.indexOfSlot,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southwestOfNortheast.indexOfSlot,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southwestOfNorthwest.indexOfSlot,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southwestOfSouth.indexOfSlot,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southwestOfSoutheast.indexOfSlot,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece:
      slotsWithParams.southwestOfSouthwest.indexOfSlot,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.southwestOfWest.indexOfSlot,
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfCenter.indexOfSlot,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfEast.indexOfSlot,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfNorth.indexOfSlot,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfNortheast.indexOfSlot,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfNorthwest.indexOfSlot,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfSouth.indexOfSlot,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfSoutheast.indexOfSlot,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfSouthwest.indexOfSlot,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: slotsWithParams.westOfWest.indexOfSlot,
    title: "West of West",
  },
} as const satisfies Record<string, RequiredSnowballMoveParams>;

const movesWithParams = createMovesWithParams({
  createMove,
  createMoveParams: createSnowballMoveParams,
  partialParamsOfMoves: paramsOfMoves,
}) as {
  [K in keyof typeof paramsOfMoves]: {
    move: SnowballMove;
    params: SnowballMoveParams;
  };
};

export { movesWithParams };
