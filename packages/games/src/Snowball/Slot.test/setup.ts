import type { IndexOfSlot } from "@repo/game/Slot.js";
import { createSlotsWithData } from "@repo/game/Slot.test/setup.js";

import { playersWithData } from "../Player.test/setup.js";
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

type RecordOfSlotsWithData = {
  [K in keyof typeof paramsOfSlots]: {
    indexOfSlot: IndexOfSlot;
    keyOfSlot: keyof typeof paramsOfSlots;
    params: SnowballSlotParams;
    slot: SnowballSlot;
  };
};

const slotsWithData = createSlotsWithData({
  createSlot,
  createSlotParams: createSnowballSlotParams,
  partialParamsOfSlots: paramsOfSlots,
}) as RecordOfSlotsWithData;

const slotsWithDataForUnitTest = createSlotsWithData({
  createSlot,
  createSlotParams: createSnowballSlotParams,
  partialParamsOfSlots: {
    northeastOfNorthwest: {
      indexOfOccupyingPlayer: null,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer: playersWithData.alice.indexOfPlayer,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithData.bruno.indexOfPlayer,
    },
  },
}) as RecordOfSlotsWithData;

export { slotsWithData, slotsWithDataForUnitTest };
