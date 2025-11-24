import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import {
  createSnowballSlotsWithData,
  type RequiredSnowballSlotParams,
} from "./setup.js";

type RecordOfRequiredSnowballSlotParams = Record<
  string,
  RequiredSnowballSlotParams
>;

const recordOfRequiredParamsOfSlotsInWhichAllSlotsAreEmpty = {
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
} as const satisfies RecordOfRequiredSnowballSlotParams;

const recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  {
    // Center
    centerOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: null,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // Northeast
    northeastOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // North
    northOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // Northwest
    northwestOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // Southeast
    southeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
  } as const satisfies RecordOfRequiredSnowballSlotParams;

const recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  {
    // Center
    centerOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    centerOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    centerOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    centerOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    centerOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // East
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    eastOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    eastOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    eastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    eastOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // Northeast
    northeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northeastOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northeastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // North
    northOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // Northwest
    northwestOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    northwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    northwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },

    // Southeast
    southeastOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southeastOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southeastOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    southwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    southwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfWest: {
      indexOfOccupyingPlayer: null,
    },

    // West
    westOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
    westOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    westOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.index,
    },
    westOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    westOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.index,
    },
  } as const satisfies RecordOfRequiredSnowballSlotParams;

const slotsWithDataInWhichAllSlotsAreEmpty = createSnowballSlotsWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfSlotsInWhichAllSlotsAreEmpty,
});

const slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  createSnowballSlotsWithData({
    recordOfRequiredParams:
      recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  });

const slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  createSnowballSlotsWithData({
    recordOfRequiredParams:
      recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  });

export type { RecordOfRequiredSnowballSlotParams };
export {
  slotsWithDataInWhichAllSlotsAreEmpty,
  slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
