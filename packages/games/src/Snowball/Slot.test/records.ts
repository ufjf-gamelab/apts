import { snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "../Player.test/indexedRecords.js";
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
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    centerOfEast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    centerOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    centerOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    centerOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    centerOfWest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // East
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    eastOfSouth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    eastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    eastOfWest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // Northeast
    northeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northeastOfSouth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northeastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfWest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // North
    northOfCenter: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northOfEast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northOfNorth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northOfWest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // Northwest
    northwestOfCenter: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    northwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    northwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfWest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },

    // Southeast
    southeastOfCenter: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southeastOfSouth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southeastOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
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
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southOfNorth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southOfSouth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    southOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
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
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    southwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
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
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .alice.index,
    },
    westOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    westOfSoutheast: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
          .bruno.index,
    },
    westOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    westOfWest: {
      indexOfOccupyingPlayer:
        snowballPlayersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
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
