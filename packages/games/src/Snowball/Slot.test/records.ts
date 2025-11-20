import type { RequiredSnowballSlotParams } from "./setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";

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

const recordOfRequiredParamsOfSlotsForUnitTest = {
  // Center
  centerOfCenter: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  centerOfEast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  centerOfNorth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  centerOfNortheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  centerOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  centerOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  centerOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  centerOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  centerOfWest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },

  // East
  eastOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  eastOfEast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  eastOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  eastOfNortheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  eastOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  eastOfSouth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  eastOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  eastOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  eastOfWest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },

  // Northeast
  northeastOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfEast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northeastOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfNortheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northeastOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northeastOfSouth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northeastOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northeastOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  northeastOfWest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },

  // North
  northOfCenter: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northOfEast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northOfNorth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northOfNortheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  northOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  northOfWest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },

  // Northwest
  northwestOfCenter: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northwestOfEast: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfNorth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northwestOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  northwestOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  northwestOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  northwestOfWest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },

  // Southeast
  southeastOfCenter: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfEast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southeastOfNorth: {
    indexOfOccupyingPlayer: null,
  },
  southeastOfNortheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southeastOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  southeastOfSouth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southeastOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
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
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southOfNorth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  southOfNortheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  southOfSouth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
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
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  southwestOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  southwestOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  southwestOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  southwestOfWest: {
    indexOfOccupyingPlayer: null,
  },

  // West
  westOfCenter: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  westOfEast: {
    indexOfOccupyingPlayer: null,
  },
  westOfNorth: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  westOfNortheast: {
    indexOfOccupyingPlayer: null,
  },
  westOfNorthwest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
  westOfSouth: {
    indexOfOccupyingPlayer: null,
  },
  westOfSoutheast: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "bruno" }),
  },
  westOfSouthwest: {
    indexOfOccupyingPlayer: null,
  },
  westOfWest: {
    indexOfOccupyingPlayer: getIndexOfPlayer({ keyOfPlayer: "alice" }),
  },
} as const satisfies Record<string, RequiredSnowballSlotParams>;

export {
  recordOfRequiredParamsOfSlots,
  recordOfRequiredParamsOfSlotsForUnitTest,
};
