import {
  createMoveParams,
  createMovesWithParams,
} from "@repo/game/Move.test/setup.js";

import { SnowballMove } from "../Move.js";

type SnowballMoveParams = ConstructorParameters<typeof SnowballMove>[number];

const createSnowballMoveParams = ({
  indexOfSlotInWhichPlacePiece,
  title,
}: Pick<
  SnowballMoveParams,
  "indexOfSlotInWhichPlacePiece" | "title"
>): SnowballMoveParams => {
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

enum IndexesOfMoves {
  // Row 0
  NorthwestOfNorthwest,
  NorthOfNorthwest,
  NortheastOfNorthwest,
  NorthwestOfNorth,
  NorthOfNorth,
  NortheastOfNorth,
  NorthwestOfNortheast,
  NorthOfNortheast,
  NortheastOfNortheast,

  // Row 1
  WestOfNorthwest,
  CenterOfNorthwest,
  EastOfNorthwest,
  WestOfNorth,
  CenterOfNorth,
  EastOfNorth,
  WestOfNortheast,
  CenterOfNortheast,
  EastOfNortheast,

  // Row 2
  SouthwestOfNorthwest,
  SouthOfNorthwest,
  SoutheastOfNorthwest,
  SouthwestOfNorth,
  SouthOfNorth,
  SoutheastOfNorth,
  SouthwestOfNortheast,
  SouthOfNortheast,
  SoutheastOfNortheast,

  // Row 3
  NorthwestOfWest,
  NorthOfWest,
  NortheastOfWest,
  NorthwestOfCenter,
  NorthOfCenter,
  NortheastOfCenter,
  NorthwestOfEast,
  NorthOfEast,
  NortheastOfEast,

  // Row 4
  WestOfWest,
  CenterOfWest,
  EastOfWest,
  WestOfCenter,
  CenterOfCenter,
  EastOfCenter,
  WestOfEast,
  CenterOfEast,
  EastOfEast,

  // Row 5
  SouthwestOfWest,
  SouthOfWest,
  SoutheastOfWest,
  SouthwestOfCenter,
  SouthOfCenter,
  SoutheastOfCenter,
  SouthwestOfEast,
  SouthOfEast,
  SoutheastOfEast,

  // Row 6
  NorthwestOfSouthwest,
  NorthOfSouthwest,
  NortheastOfSouthwest,
  NorthwestOfSouth,
  NorthOfSouth,
  NortheastOfSouth,
  NorthwestOfSoutheast,
  NorthOfSoutheast,
  NortheastOfSoutheast,

  // Row 7
  WestOfSouthwest,
  CenterOfSouthwest,
  EastOfSouthwest,
  WestOfSouth,
  CenterOfSouth,
  EastOfSouth,
  WestOfSoutheast,
  CenterOfSoutheast,
  EastOfSoutheast,

  // Row 8
  SouthwestOfSouthwest,
  SouthOfSouthwest,
  SoutheastOfSouthwest,
  SouthwestOfSouth,
  SouthOfSouth,
  SoutheastOfSouth,
  SouthwestOfSoutheast,
  SouthOfSoutheast,
  SoutheastOfSoutheast,
}

const paramsOfMoves = {
  // Center
  centerOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfCenter,
    title: "Center of Center",
  },
  centerOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfEast,
    title: "Center of East",
  },
  centerOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfNorth,
    title: "Center of North",
  },
  centerOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfNortheast,
    title: "Center of Northeast",
  },
  centerOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfNorthwest,
    title: "Center of Northwest",
  },
  centerOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfSouth,
    title: "Center of South",
  },
  centerOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfSoutheast,
    title: "Center of Southeast",
  },
  centerOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfSouthwest,
    title: "Center of Southwest",
  },
  centerOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.CenterOfWest,
    title: "Center of West",
  },

  // East
  eastOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfCenter,
    title: "East of Center",
  },
  eastOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfEast,
    title: "East of East",
  },
  eastOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfNorth,
    title: "East of North",
  },
  eastOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfNortheast,
    title: "East of Northeast",
  },
  eastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfNorthwest,
    title: "East of Northwest",
  },
  eastOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfSouth,
    title: "East of South",
  },
  eastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfSoutheast,
    title: "East of Southeast",
  },
  eastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfSouthwest,
    title: "East of Southwest",
  },
  eastOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.EastOfWest,
    title: "East of West",
  },

  // Northeast
  northeastOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfCenter,
    title: "Northeast of Center",
  },
  northeastOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfEast,
    title: "Northeast of East",
  },
  northeastOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfNorth,
    title: "Northeast of North",
  },
  northeastOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfNortheast,
    title: "Northeast of Northeast",
  },
  northeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfNorthwest,
    title: "Northeast of Northwest",
  },
  northeastOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfSouth,
    title: "Northeast of South",
  },
  northeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfSoutheast,
    title: "Northeast of Southeast",
  },
  northeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfSouthwest,
    title: "Northeast of Southwest",
  },
  northeastOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NortheastOfWest,
    title: "Northeast of West",
  },

  // North
  northOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfCenter,
    title: "North of Center",
  },
  northOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfEast,
    title: "North of East",
  },
  northOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfNorth,
    title: "North of North",
  },
  northOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfNortheast,
    title: "North of Northeast",
  },
  northOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfNorthwest,
    title: "North of Northwest",
  },
  northOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfSouth,
    title: "North of South",
  },
  northOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfSoutheast,
    title: "North of Southeast",
  },
  northOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfSouthwest,
    title: "North of Southwest",
  },
  northOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthOfWest,
    title: "North of West",
  },

  // Northwest
  northwestOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfCenter,
    title: "Northwest of Center",
  },
  northwestOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfEast,
    title: "Northwest of East",
  },
  northwestOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfNorthwest,
    title: "Northwest of North",
  },
  northwestOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfNortheast,
    title: "Northwest of Northeast",
  },
  northwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfNorthwest,
    title: "Northwest of Northwest",
  },
  northwestOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfSouth,
    title: "Northwest of South",
  },
  northwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfSoutheast,
    title: "Northwest of Southeast",
  },
  northwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfSouthwest,
    title: "Northwest of Southwest",
  },
  northwestOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.NorthwestOfWest,
    title: "Northwest of West",
  },

  // Southeast
  southeastOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfCenter,
    title: "Southeast of Center",
  },
  southeastOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfEast,
    title: "Southeast of East",
  },
  southeastOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfNorth,
    title: "Southeast of North",
  },
  southeastOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfNortheast,
    title: "Southeast of Northeast",
  },
  southeastOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfNorthwest,
    title: "Southeast of Northwest",
  },
  southeastOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfSouth,
    title: "Southeast of South",
  },
  southeastOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfSoutheast,
    title: "Southeast of Southeast",
  },
  southeastOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfSouthwest,
    title: "Southeast of Southwest",
  },
  southeastOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SoutheastOfWest,
    title: "Southeast of West",
  },

  // South
  southOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfCenter,
    title: "South of Center",
  },
  southOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfEast,
    title: "South of East",
  },
  southOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfNorth,
    title: "South of North",
  },
  southOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfNortheast,
    title: "South of Northeast",
  },
  southOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfNorthwest,
    title: "South of Northwest",
  },
  southOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfSouth,
    title: "South of South",
  },
  southOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfSoutheast,
    title: "South of Southeast",
  },
  southOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfSouthwest,
    title: "South of Southwest",
  },
  southOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthOfWest,
    title: "South of West",
  },

  // Southwest
  southwestOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfCenter,
    title: "Southwest of Center",
  },
  southwestOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfEast,
    title: "Southwest of East",
  },
  southwestOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfNorth,
    title: "Southwest of North",
  },
  southwestOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfNortheast,
    title: "Southwest of Northeast",
  },
  southwestOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfNorthwest,
    title: "Southwest of Northwest",
  },
  southwestOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfSouth,
    title: "Southwest of South",
  },
  southwestOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfSoutheast,
    title: "Southwest of Southeast",
  },
  southwestOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfSouthwest,
    title: "Southwest of Southwest",
  },
  southwestOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.SouthwestOfWest,
    title: "Southwest of West",
  },

  // West
  westOfCenter: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfCenter,
    title: "West of Center",
  },
  westOfEast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfEast,
    title: "West of East",
  },
  westOfNorth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfNorth,
    title: "West of North",
  },
  westOfNortheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfNortheast,
    title: "West of Northeast",
  },
  westOfNorthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfNorthwest,
    title: "West of Northwest",
  },
  westOfSouth: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfSouth,
    title: "West of South",
  },
  westOfSoutheast: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfSoutheast,
    title: "West of Southeast",
  },
  westOfSouthwest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfSouthwest,
    title: "West of Southwest",
  },
  westOfWest: {
    indexOfSlotInWhichPlacePiece: IndexesOfMoves.WestOfWest,
    title: "West of West",
  },
} as const;

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
