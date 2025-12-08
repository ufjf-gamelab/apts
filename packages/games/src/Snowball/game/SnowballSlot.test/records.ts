import { recordOfSnowballPlayersWithDataAndIndex } from "../SnowballPlayer.test/indexedRecords.js";
import {
  createRecordOfSnowballSlotsWithData,
  type RecordOfRequiredParamsOfSnowballSlots,
} from "./setup.js";

const recordOfRequiredParamsOfSnowballSlotsInWhichAllSlotsAreEmpty = {
  /* Center */
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

  /* East */
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

  /* Northeast */
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

  /* North */
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

  /* Northwest */
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

  /* Southeast */
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

  /* South */
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

  /* Southwest */
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

  /* West */
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
} as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfRequiredParamsOfSnowballSlotsInWhichSlotR0C0IsFilledByAlice = {
  /* Center */
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

  /* East */
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

  /* Northeast */
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

  /* North */
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

  /* Northwest */
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
    indexOfOccupyingPlayer:
      recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

  /* Southeast */
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

  /* South */
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

  /* Southwest */
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

  /* West */
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
} as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  {
    /* Center */
    centerOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: null,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* East */
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* Northeast */
    northeastOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* North */
    northOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northwest */
    northwestOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Southeast */
    southeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* South */
    southOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* Southwest */
    southwestOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* West */
    westOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
  } as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  {
    /* Center */
    centerOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: null,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* East */
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northeast */
    northeastOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* North */
    northOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northwest */
    northwestOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Southeast */
    southeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* South */
    southOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* Southwest */
    southwestOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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

    /* West */
    westOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
  } as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  {
    /* Center */
    centerOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    centerOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    centerOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    centerOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    centerOfWest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* East */
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    eastOfSouth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    eastOfWest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northeast */
    northeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northeastOfSouth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfWest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* North */
    northOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northOfWest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northwest */
    northwestOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfWest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Southeast */
    southeastOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southeastOfSouth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfWest: {
      indexOfOccupyingPlayer: null,
    },

    /* South */
    southOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southOfEast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southOfSouth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    southOfWest: {
      indexOfOccupyingPlayer: null,
    },

    /* Southwest */
    southwestOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfWest: {
      indexOfOccupyingPlayer: null,
    },

    /* West */
    westOfCenter: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    westOfSoutheast: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
    },
    westOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    westOfWest: {
      indexOfOccupyingPlayer:
        recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
    },
  } as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfSnowballSlotsWithDataInWhichAllSlotsAreEmpty =
  createRecordOfSnowballSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfSnowballSlotsInWhichAllSlotsAreEmpty,
  });

const recordOfSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice =
  createRecordOfSnowballSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfSnowballSlotsInWhichSlotR0C0IsFilledByAlice,
  });

const recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  createRecordOfSnowballSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  });

const recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  createRecordOfSnowballSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  });

const recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  createRecordOfSnowballSlotsWithData({
    recordOfRequiredParamsOfSlots:
      recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  });

export {
  recordOfRequiredParamsOfSnowballSlotsInWhichAllSlotsAreEmpty,
  recordOfRequiredParamsOfSnowballSlotsInWhichSlotR0C0IsFilledByAlice,
  recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfRequiredParamsOfSnowballSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataInWhichAllSlotsAreEmpty,
  recordOfSnowballSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  recordOfSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
