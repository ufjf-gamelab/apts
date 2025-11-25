import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import {
  createSnowballSlotsWithData,
  type RequiredParamsOfSnowballSlot,
} from "./setup.js";

type RecordOfRequiredParamsOfSnowballSlots = Record<
  string,
  RequiredParamsOfSnowballSlot
>;

const recordOfRequiredParamsOfSlotsInWhichAllSlotsAreEmpty = {
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

const recordOfRequiredParamsOfSlotsInWhichSlotR0C0IsFilledByAlice = {
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
    indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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

const recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  {
    /* Center */
    centerOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: null,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* North */
    northOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northwest */
    northwestOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Southeast */
    southeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
  } as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  {
    /* Center */
    centerOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: null,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northeast */
    northeastOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* North */
    northOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northwest */
    northwestOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Southeast */
    southeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
  } as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno =
  {
    /* Center */
    centerOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    centerOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    centerOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    centerOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    centerOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    centerOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    centerOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* East */
    eastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    eastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    eastOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    eastOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    eastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    eastOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northeast */
    northeastOfCenter: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northeastOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northeastOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northeastOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* North */
    northOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Northwest */
    northwestOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfEast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    northwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    northwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    northwestOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },

    /* Southeast */
    southeastOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southeastOfEast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNorth: {
      indexOfOccupyingPlayer: null,
    },
    southeastOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southeastOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southeastOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southOfNortheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southOfSouth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
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
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    southwestOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    southwestOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    southwestOfWest: {
      indexOfOccupyingPlayer: null,
    },

    /* West */
    westOfCenter: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfEast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorth: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfNortheast: {
      indexOfOccupyingPlayer: null,
    },
    westOfNorthwest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
    westOfSouth: {
      indexOfOccupyingPlayer: null,
    },
    westOfSoutheast: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.bruno.indexOfPlayer,
    },
    westOfSouthwest: {
      indexOfOccupyingPlayer: null,
    },
    westOfWest: {
      indexOfOccupyingPlayer: playersWithDataAndIndex.alice.indexOfPlayer,
    },
  } as const satisfies RecordOfRequiredParamsOfSnowballSlots;

const slotsWithDataInWhichAllSlotsAreEmpty = createSnowballSlotsWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfSlotsInWhichAllSlotsAreEmpty,
});

const slotsWithDataInWhichSlotR0C0IsFilledByAlice = createSnowballSlotsWithData(
  {
    recordOfRequiredParams:
      recordOfRequiredParamsOfSlotsInWhichSlotR0C0IsFilledByAlice,
  },
);

const slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno =
  createSnowballSlotsWithData({
    recordOfRequiredParams:
      recordOfRequiredParamsOfSlotsInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
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

export type { RecordOfRequiredParamsOfSnowballSlots };
export {
  slotsWithDataInWhichAllSlotsAreEmpty,
  slotsWithDataInWhichSlotR0C0IsFilledByAlice,
  slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  slotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
};
