import {
  createMovesWithData,
  type DerivedMoveParams,
  deriveMoveParams,
  type RequiredMoveParams,
} from "@repo/game/Move.test/setup.js";

import { getIndexOfSlot } from "../Game.test/slots.js";
import { SnowballMove, type SnowballMoveParams } from "../Move.js";

type DerivedSnowballMoveParams = Pick<DerivedMoveParams, "description"> &
  RequiredSnowballMoveParams;

type RequiredSnowballMoveParams = Pick<RequiredMoveParams, "title"> &
  Pick<SnowballMoveParams, "indexOfSlotInWhichPlacePiece">;

interface SnowballMoveWithData<
  Params extends RequiredSnowballMoveParams = RequiredSnowballMoveParams,
> {
  keyOfMove: string;
  move: SnowballMove;
  params: Params;
}

const deriveSnowballMoveParams = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: RequiredSnowballMoveParams): DerivedSnowballMoveParams => {
  const moveParams = deriveMoveParams({ title });
  return {
    ...moveParams,
    indexOfSlotInWhichPlacePiece,
  };
};

const createSnowballMove = ({
  description,
  indexOfSlotInWhichPlacePiece,
  title,
}: DerivedSnowballMoveParams): SnowballMove =>
  new SnowballMove({
    description,
    indexOfSlotInWhichPlacePiece,
    title,
  });

const recordOfRequiredParamsOfMoves = {
  // Center
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfCenter",
    }),
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "centerOfEast" }),
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfNorth",
    }),
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfNortheast",
    }),
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfNorthwest",
    }),
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfSouth",
    }),
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfSoutheast",
    }),
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "centerOfSouthwest",
    }),
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "centerOfWest" }),
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "eastOfCenter" }),
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "eastOfEast" }),
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "eastOfNorth" }),
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "eastOfNortheast",
    }),
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "eastOfNorthwest",
    }),
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "eastOfSouth" }),
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "eastOfSoutheast",
    }),
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "eastOfSouthwest",
    }),
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "eastOfWest" }),
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfCenter",
    }),
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfEast",
    }),
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfNorth",
    }),
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfNortheast",
    }),
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfNorthwest",
    }),
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfSouth",
    }),
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfSoutheast",
    }),
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfSouthwest",
    }),
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northeastOfWest",
    }),
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northOfCenter",
    }),
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "northOfEast" }),
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "northOfNorth" }),
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northOfNortheast",
    }),
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northOfNorthwest",
    }),
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "northOfSouth" }),
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northOfSoutheast",
    }),
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northOfSouthwest",
    }),
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "northOfWest" }),
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfCenter",
    }),
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfEast",
    }),
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfNorthwest",
    }),
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfNortheast",
    }),
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfNorthwest",
    }),
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfSouth",
    }),
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfSoutheast",
    }),
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfSouthwest",
    }),
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "northwestOfWest",
    }),
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfCenter",
    }),
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfEast",
    }),
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfNorth",
    }),
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfNortheast",
    }),
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfNorthwest",
    }),
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfSouth",
    }),
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfSoutheast",
    }),
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfSouthwest",
    }),
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southeastOfWest",
    }),
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southOfCenter",
    }),
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "southOfEast" }),
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "southOfNorth" }),
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southOfNortheast",
    }),
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southOfNorthwest",
    }),
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "southOfSouth" }),
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southOfSoutheast",
    }),
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southOfSouthwest",
    }),
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "southOfWest" }),
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfCenter",
    }),
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfEast",
    }),
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfNorth",
    }),
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfNortheast",
    }),
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfNorthwest",
    }),
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfSouth",
    }),
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfSoutheast",
    }),
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfSouthwest",
    }),
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "southwestOfWest",
    }),
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "westOfCenter" }),
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "westOfEast" }),
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "westOfNorth" }),
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "westOfNortheast",
    }),
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "westOfNorthwest",
    }),
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "westOfSouth" }),
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "westOfSoutheast",
    }),
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({
      keyOfSlot: "westOfSouthwest",
    }),
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: getIndexOfSlot({ keyOfSlot: "westOfWest" }),
    title: "West of West",
  },
} as const satisfies Record<string, RequiredSnowballMoveParams>;

const movesWithData = createMovesWithData<
  SnowballMove,
  RequiredSnowballMoveParams,
  DerivedSnowballMoveParams,
  typeof recordOfRequiredParamsOfMoves
>({
  create: createSnowballMove,
  deriveParams: deriveSnowballMoveParams,
  recordOfRequiredParams: recordOfRequiredParamsOfMoves,
});

export type {
  DerivedSnowballMoveParams,
  RequiredSnowballMoveParams,
  SnowballMoveWithData,
};
export { createSnowballMove, deriveSnowballMoveParams, movesWithData };
