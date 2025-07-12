import { createSlotsWithData } from "@repo/game/Slot.test/setup.js";

import { SnowballSlot } from "../Slot.js";

type SnowballSlotParams = ConstructorParameters<typeof SnowballSlot>[number];

const createSnowballSlotParams = ({
  indexOfOccupyingPlayer,
}: Pick<SnowballSlotParams, "indexOfOccupyingPlayer">): SnowballSlotParams => ({
  indexOfOccupyingPlayer,
});

const createSlot = ({
  indexOfOccupyingPlayer,
}: SnowballSlotParams): SnowballSlot =>
  new SnowballSlot({
    indexOfOccupyingPlayer,
  });

enum IndexesOfSlots {
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

const paramsOfSlots = {
  // Center
  centerOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  centerOfEast: {
    indexOfOccupyingPlayer: null,
  },
  centerOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  centerOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  centerOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  centerOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  centerOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  centerOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  centerOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // East
  eastOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  eastOfEast: {
    indexOfOccupyingPlayer: null,
  },
  eastOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  eastOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  eastOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  eastOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  eastOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  eastOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  eastOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // Northeast
  northeastOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfEast: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // North
  northOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  northOfEast: {
    indexOfOccupyingPlayer: null,
  },
  northOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  northOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  northOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  northOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  northOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  northOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  northOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // Northwest
  northwestOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfEast: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // Southeast
  southeastOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfEast: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // South
  southOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  southOfEast: {
    indexOfOccupyingPlayer: null,
  },
  southOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  southOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  southOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  southOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  southOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  southOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  southOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // Southwest
  southwestOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfEast: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // West
  westOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  westOfEast: {
    indexOfOccupyingPlayer: null,
  },
  westOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  westOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  westOfNorthwest: {
    indexOfOccupyingPlayer: null,
  },
  westOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  westOfSoutheast: {
    indexOfOccupyingPlayer: null,
  },
  westOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  westOfWest: {
    indexOfOccupyingPlayer: null,
  },
} as const satisfies Record<string, SnowballSlotParams>;

const slotsWithParams = createSlotsWithData({
  createSlot,
  createSlotParams: createSnowballSlotParams,
  partialParamsOfSlots: paramsOfSlots,
}) as {
  [K in keyof typeof paramsOfSlots]: {
    indexOfSlot: IndexesOfSlots;
    params: SnowballSlotParams;
    slot: SnowballSlot;
  };
};

export { IndexesOfSlots, slotsWithParams };
