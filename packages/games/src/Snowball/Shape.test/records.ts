import type { Shape } from "../Shape.js";
import type { SnowballShapeParams, SnowballShapeResult } from "./setup.js";

import { getIndexOfPlayer } from "../Game.test/players.js";
import { getIndexOfSlotOnUnitTestSlots } from "../Game.test/slots.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";
import { slotsWithDataForUnitTest } from "../Slot.test/setup.js";

const horizontalLine = {
  direction: "horizontal",
  size: 5,
  type: "line",
} satisfies Shape;

const verticalLine = {
  direction: "vertical",
  size: 5,
  type: "line",
} satisfies Shape;

const principalDiagonal = {
  direction: "principalDiagonal",
  size: 5,
  type: "line",
} satisfies Shape;

const secondaryDiagonal = {
  direction: "secondaryDiagonal",
  size: 5,
  type: "line",
} satisfies Shape;

const rectangleOf2RowsAnd2Columns = {
  horizontalSize: 2,
  type: "rectangle",
  verticalSize: 2,
} satisfies Shape;

const rectangleOf3RowsAnd3Columns = {
  horizontalSize: 3,
  type: "rectangle",
  verticalSize: 3,
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
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  horizontalLineOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
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
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow0AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow0AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow0AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow0AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow0AndColumnNegative5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -5,
      initialIndexOfRow: 0,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow1AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 1,
      initialIndexOfRow: 1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow1AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow1AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow1AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow1AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow2AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: 2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow2AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow2AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  principalDiagonalOfLength5OnRow2AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow2AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow3AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow3AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow3AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow3AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow4AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow5AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 5,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow5AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow5AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 5,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow5AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: 5,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow6AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: 6,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow6AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 6,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow6AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 6,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow7AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 7,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow7AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 7,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow7AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 7,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow8AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 8,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow8AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow9AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 9,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRow9AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 9,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative1AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: -1,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative2AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative2AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative2AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: -2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative2AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative2AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: -2,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative3AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative3AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative3AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: -3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative3AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: -3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative3AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: -3,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 1,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  principalDiagonalOfLength5OnRowNegative4AndColumnNegative4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -4,
      initialIndexOfRow: -4,
      shape: principalDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow0AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: rectangleOf2RowsAnd2Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow0AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: rectangleOf2RowsAnd2Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow0AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 7,
      initialIndexOfRow: 0,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow0AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow1AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 0,
      initialIndexOfRow: 1,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow1AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 1,
      initialIndexOfRow: 1,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: rectangleOf2RowsAnd2Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: rectangleOf2RowsAnd2Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow4AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 7,
      initialIndexOfRow: 4,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow7AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 7,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow7AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 7,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow7AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 7,
      initialIndexOfRow: 7,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow7AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 7,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow8AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 8,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow8AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow8AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 8,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRow9AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 9,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -1,
      shape: rectangleOf2RowsAnd2Columns,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: -1,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -1,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf2RowsAnd2ColumnsOnRowNegative2AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: -2,
      shape: rectangleOf2RowsAnd2Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow0AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow0AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 0,
      shape: rectangleOf3RowsAnd3Columns,
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
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow0AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow0AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 0,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow3AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 3,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow4AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 4,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouthwest.keyOfSlot,
        }),
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 6,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
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
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow6AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: 6,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow7AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 7,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow7AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 7,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow7AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 7,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow8AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 8,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow8AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 8,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow8AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow8AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 8,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRow9AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 9,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -1,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: -1,
      shape: rectangleOf3RowsAnd3Columns,
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
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -1,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: -2,
      shape: rectangleOf3RowsAnd3Columns,
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
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -2,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -3,
      initialIndexOfRow: -2,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  rectangleOf3RowsAnd3ColumnsOnRowNegative3AndColumnNegative2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -2,
      initialIndexOfRow: -3,
      shape: rectangleOf3RowsAnd3Columns,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow0AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow0AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow0AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn10: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 10,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow0AndColumn11: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 11,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumn13: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 13,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow0AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow1AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow1AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow1AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow1AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow1AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: 1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow2AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow2AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: 2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow2AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow2AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow2AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: 2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow3AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow3AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow3AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow3AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow3AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: 3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  secondaryDiagonalOfLength5OnRow4AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: 4,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow5AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow5AndColumn3: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 3,
      initialIndexOfRow: 5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow5AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow5AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: 5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow5AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: 5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow6AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 6,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow6AndColumn2: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 2,
      initialIndexOfRow: 6,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow6AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 6,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow6AndColumn6: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 6,
      initialIndexOfRow: 6,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow7AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 7,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow7AndColumn1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 1,
      initialIndexOfRow: 7,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow7AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 7,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow7AndColumn7: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 7,
      initialIndexOfRow: 7,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow8AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 8,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow8AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRow9AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 9,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRow9AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 9,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative1AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative1AndColumn5: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 5,
      initialIndexOfRow: -1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative1AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: -1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative1AndColumn9: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 9,
      initialIndexOfRow: -1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative1AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: -1,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative2AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRowNegative2AndColumn10: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 10,
      initialIndexOfRow: -2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative2AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: -2,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative3AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRowNegative3AndColumn11: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 11,
      initialIndexOfRow: -3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative3AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: -3,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  secondaryDiagonalOfLength5OnRowNegative4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -4,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative4AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: -4,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative5AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  secondaryDiagonalOfLength5OnRowNegative5AndColumn12: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 12,
      initialIndexOfRow: -5,
      shape: secondaryDiagonal,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "alice",
      }),
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow0AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  verticalLineOfLength5OnRow0AndColumnNegative1: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: getIndexOfPlayer({
        keyOfPlayer: "bruno",
      }),
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith1Point.score,
    },
  },
  verticalLineOfLength5OnRow5AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 5,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfWest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow5AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 5,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfCenter.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow5AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 5,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfEast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow6AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 6,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow6AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 6,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow6AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 6,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow7AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 7,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow7AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 7,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfSouth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow7AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 7,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow8AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 8,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfSouthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfSouth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow8AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfSoutheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow9AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 9,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow9AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 9,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow9AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 9,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative1AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -1,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfWest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative1AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -1,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfCenter.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative1AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: -1,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfEast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative2AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -2,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative2AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -2,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative2AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: -2,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.southeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative3AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -3,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.westOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative3AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -3,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.centerOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative3AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: -3,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.eastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northwestOfNorthwest.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative4AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northOfNorth.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: -4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlotOnUnitTestSlots({
          keyOfSlot: slotsWithDataForUnitTest.northeastOfNortheast.keyOfSlot,
        }),
      ],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative5AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: -5,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative5AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 4,
      initialIndexOfRow: -5,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRowNegative5AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 8,
      initialIndexOfRow: -5,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [],
      score:
        scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
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
