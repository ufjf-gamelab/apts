import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "../Player.test/indexedRecords.js";
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

const recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  {
    // Center
    centerOfCenter: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    centerOfEast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    centerOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    centerOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    centerOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    centerOfWest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // East
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    eastOfSouth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    eastOfWest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // Northeast
    northeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northeastOfSouth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfWest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // North
    northOfCenter: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northOfEast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northOfNorth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northOfWest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // Northwest
    northwestOfCenter: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfWest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // Southeast
    southeastOfCenter: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southeastOfSouth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southeastOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
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
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southOfNorth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southOfSouth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
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
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfWest: {
      indexOfOccupyingPlayer: null,
    },

    // West
    westOfCenter: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    westOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    westOfSoutheast: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    westOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    westOfWest: {
      indexOfOccupyingPlayer:
        playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
  } as const satisfies RecordOfRequiredSnowballSlotParams;

const slotsWithDataInWhichAllSlotsAreEmpty = createSnowballSlotsWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfSlotsInWhichAllSlotsAreEmpty,
});

const slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  createSnowballSlotsWithData({
    recordOfRequiredParams:
      recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  });

export type { RecordOfRequiredSnowballSlotParams };
export {
  slotsWithDataInWhichAllSlotsAreEmpty,
  slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
