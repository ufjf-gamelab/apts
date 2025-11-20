import type { Shape } from "../Shape.js";
import type { SnowballShapeParams, SnowballShapeResult } from "./setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
import {
  getIndexedSnowballSlotsWithDataForUnitTest,
  getIndexOfSlot,
} from "../Game.test/slots.js";
import { slotsWithDataForUnitTest } from "../Slot.test/setup.js";

const getIndexOfSlotOnUnitTestSlots = ({
  keyOfSlot,
}: Pick<Parameters<typeof getIndexOfSlot>[0], "keyOfSlot">) =>
  getIndexOfSlot({
    indexedSlots: getIndexedSnowballSlotsWithDataForUnitTest(),
    keyOfSlot,
  });

const horizontalLine = {
  direction: "horizontal",
  size: 5,
  type: "line",
} satisfies Shape;

const recordOfParamsOfShapesForUnitTest = {
  horizontalLineOfLength5OnRow0AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -5,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfCenter.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -5,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouth.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -5,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
} as const satisfies Record<
  string,
  {
    params: SnowballShapeParams;
    result: SnowballShapeResult;
  }
>;

export { recordOfParamsOfShapesForUnitTest };
