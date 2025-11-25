import type { Shape } from "../Shape.js";

import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { scoresWithData } from "../Score.test/records.js";
import { slotsWithDataAndIndexInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno as slotsWithDataAndIndex } from "../Slot.test/indexedRecords.js";
import {
  createSnowballShapesWithData,
  type RequiredParamsAndResultOfSnowballShape,
} from "./setup.js";

type RecordOfRequiredParamsAndResultOfSnowballShapes = Record<
  string,
  RequiredParamsAndResultOfSnowballShape
>;

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

const recordOfRequiredParamsAndResultOfShapesInWhichShapesAreHorizontalLines = {
  /* Row 0 */
  horizontalLineOfLength5OnRow0AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape:
        playersWithDataAndIndex.alice.indexOfPlayer,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
        slotsWithDataAndIndex.northOfNorth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northOfNorth.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
        slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
        slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  /* Row 4 */
  horizontalLineOfLength5OnRow4AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape:
        playersWithDataAndIndex.alice.indexOfPlayer,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.westOfWest.indexOfSlot,
        slotsWithDataAndIndex.centerOfWest.indexOfSlot,
        slotsWithDataAndIndex.eastOfWest.indexOfSlot,
        slotsWithDataAndIndex.westOfCenter.indexOfSlot,
        slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
      ],
      score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
        slotsWithDataAndIndex.westOfEast.indexOfSlot,
        slotsWithDataAndIndex.centerOfEast.indexOfSlot,
        slotsWithDataAndIndex.eastOfEast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.eastOfEast.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.westOfWest.indexOfSlot,
        slotsWithDataAndIndex.centerOfWest.indexOfSlot,
        slotsWithDataAndIndex.eastOfWest.indexOfSlot,
        slotsWithDataAndIndex.westOfCenter.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.westOfWest.indexOfSlot,
        slotsWithDataAndIndex.centerOfWest.indexOfSlot,
        slotsWithDataAndIndex.eastOfWest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.westOfWest.indexOfSlot,
        slotsWithDataAndIndex.centerOfWest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.westOfWest.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },

  /* Row 8 */
  horizontalLineOfLength5OnRow8AndColumn0: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: null,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southOfSouth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  horizontalLineOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape:
        playersWithDataAndIndex.bruno.indexOfPlayer,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.southOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
} as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfShapesInWhichShapesAreVerticalLines = {
  verticalLineOfLength5OnRow0AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape:
        playersWithDataAndIndex.alice.indexOfPlayer,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.northOfNorth.indexOfSlot,
        slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
        slotsWithDataAndIndex.southOfNorth.indexOfSlot,
        slotsWithDataAndIndex.northOfCenter.indexOfSlot,
        slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
      ],
      score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow0AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape:
        playersWithDataAndIndex.bruno.indexOfPlayer,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        slotsWithDataAndIndex.eastOfEast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.westOfWest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
        slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        slotsWithDataAndIndex.southOfCenter.indexOfSlot,
        slotsWithDataAndIndex.northOfSouth.indexOfSlot,
        slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southOfSouth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape:
        playersWithDataAndIndex.bruno.indexOfPlayer,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.eastOfEast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
        slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
        slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.southOfCenter.indexOfSlot,
        slotsWithDataAndIndex.northOfSouth.indexOfSlot,
        slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southOfSouth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northOfSouth.indexOfSlot,
        slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southOfSouth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
        slotsWithDataAndIndex.southOfSouth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.southOfSouth.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.northwestOfWest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northOfNorth.indexOfSlot,
        slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
        slotsWithDataAndIndex.southOfNorth.indexOfSlot,
        slotsWithDataAndIndex.northOfCenter.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.northeastOfEast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northOfNorth.indexOfSlot,
        slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
        slotsWithDataAndIndex.southOfNorth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northOfNorth.indexOfSlot,
        slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.northOfNorth.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
} as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfShapesInWhichShapesArePrincipalDiagonals =
  {
    /* Row 0 */
    principalDiagonalOfLength5OnRow0AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorth.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfWest.indexOfSlot,
          slotsWithDataAndIndex.westOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfWest.indexOfSlot,
          slotsWithDataAndIndex.eastOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfWest.indexOfSlot,
          slotsWithDataAndIndex.centerOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfWest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 1 */
    principalDiagonalOfLength5OnRow1AndColumn1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfWest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 2 */
    principalDiagonalOfLength5OnRow2AndColumn2: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfEast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 3 */
    principalDiagonalOfLength5OnRow3AndColumn3: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfEast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfSouthwest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 4 */
    principalDiagonalOfLength5OnRow4AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
          slotsWithDataAndIndex.southOfWest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 5 */
    principalDiagonalOfLength5OnRow5AndColumn3: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 5,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northOfSouth.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 6 */
    principalDiagonalOfLength5OnRow6AndColumn2: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 6,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfSouth.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 7 */
    principalDiagonalOfLength5OnRow7AndColumn1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 7,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 8 */
    principalDiagonalOfLength5OnRow8AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 8,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.southOfSouth.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 9 */
    principalDiagonalOfLength5OnRow9AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 9,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -1 */
    principalDiagonalOfLength5OnRowNegative1AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorth.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfWest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -2 */
    principalDiagonalOfLength5OnRowNegative2AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southOfNorth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -3 */
    principalDiagonalOfLength5OnRowNegative3AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfNorthwest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -4 */
    principalDiagonalOfLength5OnRowNegative4AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [slotsWithDataAndIndex.northOfNorth.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNorth.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.northOfNortheast.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorth.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.northOfNorthwest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfShapesInWhichShapesAreSecondaryDiagonals =
  {
    /* Row 0 */
    secondaryDiagonalOfLength5OnRow0AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNorth.indexOfSlot,
          slotsWithDataAndIndex.westOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfWest.indexOfSlot,
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfWest.indexOfSlot,
          slotsWithDataAndIndex.centerOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northOfEast.indexOfSlot,
          slotsWithDataAndIndex.westOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfEast.indexOfSlot,
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.eastOfEast.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 1 */
    secondaryDiagonalOfLength5OnRow1AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [slotsWithDataAndIndex.westOfNorthwest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfWest.indexOfSlot,
          slotsWithDataAndIndex.centerOfWest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfEast.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 2 */
    secondaryDiagonalOfLength5OnRow2AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfWest.indexOfSlot,
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfWest.indexOfSlot,
          slotsWithDataAndIndex.southOfWest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 3 */
    secondaryDiagonalOfLength5OnRow3AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfWest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfWest.indexOfSlot,
          slotsWithDataAndIndex.southOfWest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfWest.indexOfSlot,
          slotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 4 */
    secondaryDiagonalOfLength5OnRow4AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [slotsWithDataAndIndex.westOfWest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    secondaryDiagonalOfLength5OnRow4AndColumn8: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfEast.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 5 */
    secondaryDiagonalOfLength5OnRow5AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfWest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSouth.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northOfSouth.indexOfSlot,
          slotsWithDataAndIndex.westOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 6 */
    secondaryDiagonalOfLength5OnRow6AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 6,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfSouth.indexOfSlot,
          slotsWithDataAndIndex.westOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 7 */
    secondaryDiagonalOfLength5OnRow7AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 7,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [slotsWithDataAndIndex.westOfSouthwest.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 8 */
    secondaryDiagonalOfLength5OnRow8AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 8,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.southOfSouth.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 9 */
    secondaryDiagonalOfLength5OnRow9AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 9,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -1 */
    secondaryDiagonalOfLength5OnRowNegative1AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorth.indexOfSlot,
          slotsWithDataAndIndex.westOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfEast.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -2 */
    secondaryDiagonalOfLength5OnRowNegative2AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -3 */
    secondaryDiagonalOfLength5OnRowNegative3AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        indexesOfSlots: [slotsWithDataAndIndex.eastOfNortheast.indexOfSlot],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -4 */
    secondaryDiagonalOfLength5OnRowNegative4AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -5 */
    secondaryDiagonalOfLength5OnRowNegative5AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfShapesInWhichShapesAreRectanglesOf2RowsAnd2Columns =
  {
    /* Row 0 */
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 1 */
    rectangleOf2RowsAnd2ColumnsOnRow1AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow1AndColumn1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
      },
    },

    /* Row 4 */
    rectangleOf2RowsAnd2ColumnsOnRow4AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
          slotsWithDataAndIndex.centerOfWest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          slotsWithDataAndIndex.southOfWest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow4AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 4,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfEast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
      },
    },

    /* Row 7 */
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 8 */
    rectangleOf2RowsAnd2ColumnsOnRow8AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 8,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 9 */
    rectangleOf2RowsAnd2ColumnsOnRow9AndColumn8: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 9,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -1 */
    rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -2 */
    rectangleOf2RowsAnd2ColumnsOnRowNegative2AndColumnNegative1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -2,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfShapesInWhichShapesAreRectanglesOf3RowsAnd3Columns =
  {
    /* Row 0 */
    rectangleOf3RowsAnd3ColumnsOnRow0AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfNortheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 3 */
    rectangleOf3RowsAnd3ColumnsOnRow3AndColumn3: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 3,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northOfCenter.indexOfSlot,
          slotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfCenter.indexOfSlot,
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 4 */
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
          slotsWithDataAndIndex.centerOfWest.indexOfSlot,
          slotsWithDataAndIndex.eastOfWest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          slotsWithDataAndIndex.southOfWest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfWest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          slotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.westOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          slotsWithDataAndIndex.southwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.northOfSouth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.westOfEast.indexOfSlot,
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfEast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfEast.indexOfSlot,
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
          slotsWithDataAndIndex.southOfEast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          slotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.eastOfEast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
          slotsWithDataAndIndex.centerOfWest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          slotsWithDataAndIndex.southOfWest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.westOfWest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 6 */
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northOfSouth.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          slotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn6: {
      params: {
        indexOfPlayerWhoIsOccupyingShape:
          playersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith1Point.score,
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
          slotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northeastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSouthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 7 */
    rectangleOf3RowsAnd3ColumnsOnRow7AndColumn6: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 7,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 8 */
    rectangleOf3RowsAnd3ColumnsOnRow8AndColumn6: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 8,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.southwestOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.southeastOfSoutheast.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 9 */
    rectangleOf3RowsAnd3ColumnsOnRow9AndColumn8: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 9,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -1 */
    rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northeastOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -2 */
    rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -2,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
          slotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
          slotsWithDataAndIndex.northwestOfNorthwest.indexOfSlot,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
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
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row -3 */
    rectangleOf3RowsAnd3ColumnsOnRowNegative3AndColumnNegative2: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -3,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const shapesWithDataInWhichShapesAreHorizontalLines =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfShapesInWhichShapesAreHorizontalLines,
  });
const shapesWithDataInWhichShapesAreVerticalLines =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfShapesInWhichShapesAreVerticalLines,
  });
const shapesWithDataInWhichShapesArePrincipalDiagonals =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfShapesInWhichShapesArePrincipalDiagonals,
  });
const shapesWithDataInWhichShapesAreSecondaryDiagonals =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfShapesInWhichShapesAreSecondaryDiagonals,
  });
const shapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfShapesInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  });
const shapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfShapesInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  });

export type { RecordOfRequiredParamsAndResultOfSnowballShapes };
export {
  shapesWithDataInWhichShapesAreHorizontalLines,
  shapesWithDataInWhichShapesArePrincipalDiagonals,
  shapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  shapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  shapesWithDataInWhichShapesAreSecondaryDiagonals,
  shapesWithDataInWhichShapesAreVerticalLines,
};
