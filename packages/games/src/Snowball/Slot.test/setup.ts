import type { IndexOfSlot } from "@repo/game/Slot.js";

import { createSlotsWithData } from "@repo/game/Slot.test/setup.js";

import { playersWithData } from "../Player.test/setup.js";
import { SnowballSlot, type SnowballSlotParams } from "../Slot.js";

type DerivedSnowballSlotParams = RequiredSnowballSlotParams;

type RequiredSnowballSlotParams = Pick<
  SnowballSlotParams,
  "indexOfOccupyingPlayer"
>;

interface SnowballSlotWithData<
  Params extends RequiredSnowballSlotParams = RequiredSnowballSlotParams,
> {
  indexOfSlot: IndexOfSlot;
  keyOfSlot: string;
  params: Params;
  slot: SnowballSlot;
}

const deriveSnowballSlotParams = ({
  indexOfOccupyingPlayer,
}: RequiredSnowballSlotParams): DerivedSnowballSlotParams => ({
  indexOfOccupyingPlayer,
});

const createSnowballSlot = ({
  indexOfOccupyingPlayer,
}: DerivedSnowballSlotParams): SnowballSlot =>
  new SnowballSlot({
    indexOfOccupyingPlayer,
  });

const recordOfRequiredParamsOfSlots = {
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
} as const satisfies Record<string, RequiredSnowballSlotParams>;

const slotsWithData = createSlotsWithData({
  create: createSnowballSlot,
  deriveParams: deriveSnowballSlotParams,
  recordOfRequiredParams: recordOfRequiredParamsOfSlots,
});

const slotsWithDataForUnitTest = createSlotsWithData({
  create: createSnowballSlot,
  deriveParams: deriveSnowballSlotParams,
  recordOfRequiredParams: {
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
});

const editSlotOnSnowballSlotsWithData = ({
  indexOfOccupyingPlayer,
  keyOfSlot,
  slots,
}: Pick<Parameters<typeof createSnowballSlot>[0], "indexOfOccupyingPlayer"> & {
  keyOfSlot: keyof typeof slots;
  slots: Record<string, SnowballSlotWithData>;
}) => {
  const slotToUpdate = slots[keyOfSlot];
  if (typeof slotToUpdate === "undefined") {
    throw new Error(
      "the inputted keyOfSlot is not in the inputted record of slots.",
    );
  }

  const newSlot: SnowballSlotWithData = {
    indexOfSlot: slotToUpdate.indexOfSlot,
    keyOfSlot: slotToUpdate.keyOfSlot,
    params: {
      indexOfOccupyingPlayer,
    },
    slot: createSnowballSlot({
      indexOfOccupyingPlayer,
    }),
  };

  return {
    ...slots,
    [keyOfSlot]: newSlot,
  };
};

export type {
  DerivedSnowballSlotParams,
  RequiredSnowballSlotParams,
  SnowballSlotWithData,
};
export {
  createSnowballSlot,
  deriveSnowballSlotParams,
  editSlotOnSnowballSlotsWithData,
  slotsWithData,
  slotsWithDataForUnitTest,
};
