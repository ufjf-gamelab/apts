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
      indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.northOfNorthwest.index,
        slotsWithDataAndIndex.northeastOfNorthwest.index,
        slotsWithDataAndIndex.northwestOfNorth.index,
        slotsWithDataAndIndex.northOfNorth.index,
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
        slotsWithDataAndIndex.northOfNorth.index,
        slotsWithDataAndIndex.northeastOfNorth.index,
        slotsWithDataAndIndex.northwestOfNortheast.index,
        slotsWithDataAndIndex.northOfNortheast.index,
        slotsWithDataAndIndex.northeastOfNortheast.index,
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
        slotsWithDataAndIndex.northeastOfNorth.index,
        slotsWithDataAndIndex.northwestOfNortheast.index,
        slotsWithDataAndIndex.northOfNortheast.index,
        slotsWithDataAndIndex.northeastOfNortheast.index,
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
        slotsWithDataAndIndex.northwestOfNortheast.index,
        slotsWithDataAndIndex.northOfNortheast.index,
        slotsWithDataAndIndex.northeastOfNortheast.index,
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
        slotsWithDataAndIndex.northOfNortheast.index,
        slotsWithDataAndIndex.northeastOfNortheast.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.index],
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
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.northOfNorthwest.index,
        slotsWithDataAndIndex.northeastOfNorthwest.index,
        slotsWithDataAndIndex.northwestOfNorth.index,
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
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.northOfNorthwest.index,
        slotsWithDataAndIndex.northeastOfNorthwest.index,
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
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.northOfNorthwest.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
      indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.westOfWest.index,
        slotsWithDataAndIndex.centerOfWest.index,
        slotsWithDataAndIndex.eastOfWest.index,
        slotsWithDataAndIndex.westOfCenter.index,
        slotsWithDataAndIndex.centerOfCenter.index,
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
        slotsWithDataAndIndex.centerOfCenter.index,
        slotsWithDataAndIndex.eastOfCenter.index,
        slotsWithDataAndIndex.westOfEast.index,
        slotsWithDataAndIndex.centerOfEast.index,
        slotsWithDataAndIndex.eastOfEast.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.eastOfEast.index],
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
        slotsWithDataAndIndex.westOfWest.index,
        slotsWithDataAndIndex.centerOfWest.index,
        slotsWithDataAndIndex.eastOfWest.index,
        slotsWithDataAndIndex.westOfCenter.index,
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
        slotsWithDataAndIndex.westOfWest.index,
        slotsWithDataAndIndex.centerOfWest.index,
        slotsWithDataAndIndex.eastOfWest.index,
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
        slotsWithDataAndIndex.westOfWest.index,
        slotsWithDataAndIndex.centerOfWest.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.westOfWest.index],
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
        slotsWithDataAndIndex.southwestOfSouthwest.index,
        slotsWithDataAndIndex.southOfSouthwest.index,
        slotsWithDataAndIndex.southeastOfSouthwest.index,
        slotsWithDataAndIndex.southwestOfSouth.index,
        slotsWithDataAndIndex.southOfSouth.index,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  horizontalLineOfLength5OnRow8AndColumn4: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.southOfSouth.index,
        slotsWithDataAndIndex.southeastOfSouth.index,
        slotsWithDataAndIndex.southwestOfSoutheast.index,
        slotsWithDataAndIndex.southOfSoutheast.index,
        slotsWithDataAndIndex.southeastOfSoutheast.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
        slotsWithDataAndIndex.southwestOfSouthwest.index,
        slotsWithDataAndIndex.southOfSouthwest.index,
        slotsWithDataAndIndex.southeastOfSouthwest.index,
        slotsWithDataAndIndex.southwestOfSouth.index,
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
        slotsWithDataAndIndex.southwestOfSouthwest.index,
        slotsWithDataAndIndex.southOfSouthwest.index,
        slotsWithDataAndIndex.southeastOfSouthwest.index,
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
        slotsWithDataAndIndex.southwestOfSouthwest.index,
        slotsWithDataAndIndex.southOfSouthwest.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.index],
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
      indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.northOfNorth.index,
        slotsWithDataAndIndex.centerOfNorth.index,
        slotsWithDataAndIndex.southOfNorth.index,
        slotsWithDataAndIndex.northOfCenter.index,
        slotsWithDataAndIndex.centerOfCenter.index,
      ],
      score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow0AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.northeastOfNortheast.index,
        slotsWithDataAndIndex.eastOfNortheast.index,
        slotsWithDataAndIndex.southeastOfNortheast.index,
        slotsWithDataAndIndex.northeastOfEast.index,
        slotsWithDataAndIndex.eastOfEast.index,
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
        slotsWithDataAndIndex.westOfWest.index,
        slotsWithDataAndIndex.southwestOfWest.index,
        slotsWithDataAndIndex.northwestOfSouthwest.index,
        slotsWithDataAndIndex.westOfSouthwest.index,
        slotsWithDataAndIndex.southwestOfSouthwest.index,
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
        slotsWithDataAndIndex.centerOfCenter.index,
        slotsWithDataAndIndex.southOfCenter.index,
        slotsWithDataAndIndex.northOfSouth.index,
        slotsWithDataAndIndex.centerOfSouth.index,
        slotsWithDataAndIndex.southOfSouth.index,
      ],
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
    },
  },
  verticalLineOfLength5OnRow4AndColumn8: {
    params: {
      indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: verticalLine,
    },
    result: {
      indexesOfSlots: [
        slotsWithDataAndIndex.eastOfEast.index,
        slotsWithDataAndIndex.southeastOfEast.index,
        slotsWithDataAndIndex.northeastOfSoutheast.index,
        slotsWithDataAndIndex.eastOfSoutheast.index,
        slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        slotsWithDataAndIndex.southwestOfWest.index,
        slotsWithDataAndIndex.northwestOfSouthwest.index,
        slotsWithDataAndIndex.westOfSouthwest.index,
        slotsWithDataAndIndex.southwestOfSouthwest.index,
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
        slotsWithDataAndIndex.southOfCenter.index,
        slotsWithDataAndIndex.northOfSouth.index,
        slotsWithDataAndIndex.centerOfSouth.index,
        slotsWithDataAndIndex.southOfSouth.index,
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
        slotsWithDataAndIndex.southeastOfEast.index,
        slotsWithDataAndIndex.northeastOfSoutheast.index,
        slotsWithDataAndIndex.eastOfSoutheast.index,
        slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        slotsWithDataAndIndex.northwestOfSouthwest.index,
        slotsWithDataAndIndex.westOfSouthwest.index,
        slotsWithDataAndIndex.southwestOfSouthwest.index,
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
        slotsWithDataAndIndex.northOfSouth.index,
        slotsWithDataAndIndex.centerOfSouth.index,
        slotsWithDataAndIndex.southOfSouth.index,
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
        slotsWithDataAndIndex.northeastOfSoutheast.index,
        slotsWithDataAndIndex.eastOfSoutheast.index,
        slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        slotsWithDataAndIndex.westOfSouthwest.index,
        slotsWithDataAndIndex.southwestOfSouthwest.index,
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
        slotsWithDataAndIndex.centerOfSouth.index,
        slotsWithDataAndIndex.southOfSouth.index,
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
        slotsWithDataAndIndex.eastOfSoutheast.index,
        slotsWithDataAndIndex.southeastOfSoutheast.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.index],
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
      indexesOfSlots: [slotsWithDataAndIndex.southOfSouth.index],
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
      indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.westOfNorthwest.index,
        slotsWithDataAndIndex.southwestOfNorthwest.index,
        slotsWithDataAndIndex.northwestOfWest.index,
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
        slotsWithDataAndIndex.northOfNorth.index,
        slotsWithDataAndIndex.centerOfNorth.index,
        slotsWithDataAndIndex.southOfNorth.index,
        slotsWithDataAndIndex.northOfCenter.index,
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
        slotsWithDataAndIndex.northeastOfNortheast.index,
        slotsWithDataAndIndex.eastOfNortheast.index,
        slotsWithDataAndIndex.southeastOfNortheast.index,
        slotsWithDataAndIndex.northeastOfEast.index,
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
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.westOfNorthwest.index,
        slotsWithDataAndIndex.southwestOfNorthwest.index,
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
        slotsWithDataAndIndex.northOfNorth.index,
        slotsWithDataAndIndex.centerOfNorth.index,
        slotsWithDataAndIndex.southOfNorth.index,
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
        slotsWithDataAndIndex.northeastOfNortheast.index,
        slotsWithDataAndIndex.eastOfNortheast.index,
        slotsWithDataAndIndex.southeastOfNortheast.index,
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
        slotsWithDataAndIndex.northwestOfNorthwest.index,
        slotsWithDataAndIndex.westOfNorthwest.index,
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
        slotsWithDataAndIndex.northOfNorth.index,
        slotsWithDataAndIndex.centerOfNorth.index,
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
        slotsWithDataAndIndex.northeastOfNortheast.index,
        slotsWithDataAndIndex.eastOfNortheast.index,
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
      indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
      indexesOfSlots: [slotsWithDataAndIndex.northOfNorth.index],
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
      indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.index],
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
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
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
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorth.index,
          slotsWithDataAndIndex.northOfCenter.index,
          slotsWithDataAndIndex.eastOfCenter.index,
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
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorth.index,
          slotsWithDataAndIndex.southOfNorth.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.westOfEast.index,
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
          slotsWithDataAndIndex.northwestOfNorth.index,
          slotsWithDataAndIndex.centerOfNorth.index,
          slotsWithDataAndIndex.southeastOfNorth.index,
          slotsWithDataAndIndex.northwestOfEast.index,
          slotsWithDataAndIndex.centerOfEast.index,
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
          slotsWithDataAndIndex.northOfNorth.index,
          slotsWithDataAndIndex.eastOfNorth.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northOfEast.index,
          slotsWithDataAndIndex.eastOfEast.index,
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
          slotsWithDataAndIndex.northeastOfNorth.index,
          slotsWithDataAndIndex.westOfNortheast.index,
          slotsWithDataAndIndex.southOfNortheast.index,
          slotsWithDataAndIndex.northeastOfEast.index,
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
          slotsWithDataAndIndex.northwestOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNortheast.index,
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
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.eastOfNortheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.index],
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
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
          slotsWithDataAndIndex.northeastOfWest.index,
          slotsWithDataAndIndex.westOfCenter.index,
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
          slotsWithDataAndIndex.southwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfWest.index,
          slotsWithDataAndIndex.eastOfWest.index,
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
          slotsWithDataAndIndex.northwestOfWest.index,
          slotsWithDataAndIndex.centerOfWest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfWest.index],
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
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
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
          slotsWithDataAndIndex.centerOfNorth.index,
          slotsWithDataAndIndex.southeastOfNorth.index,
          slotsWithDataAndIndex.northwestOfEast.index,
          slotsWithDataAndIndex.centerOfEast.index,
          slotsWithDataAndIndex.southeastOfEast.index,
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
          slotsWithDataAndIndex.eastOfNorth.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northOfEast.index,
          slotsWithDataAndIndex.eastOfEast.index,
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
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNortheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfWest.index],
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
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
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
          slotsWithDataAndIndex.southOfNorth.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.westOfEast.index,
          slotsWithDataAndIndex.southOfEast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
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
          slotsWithDataAndIndex.southeastOfNorth.index,
          slotsWithDataAndIndex.northwestOfEast.index,
          slotsWithDataAndIndex.centerOfEast.index,
          slotsWithDataAndIndex.southeastOfEast.index,
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
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northOfEast.index,
          slotsWithDataAndIndex.eastOfEast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfSouthwest.index],
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
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
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
          slotsWithDataAndIndex.northOfCenter.index,
          slotsWithDataAndIndex.eastOfCenter.index,
          slotsWithDataAndIndex.southwestOfEast.index,
          slotsWithDataAndIndex.northOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
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
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.westOfEast.index,
          slotsWithDataAndIndex.southOfEast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfSouthwest.index],
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
          slotsWithDataAndIndex.westOfWest.index,
          slotsWithDataAndIndex.southOfWest.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.westOfSouth.index,
          slotsWithDataAndIndex.southOfSouth.index,
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
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.index],
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
          slotsWithDataAndIndex.southwestOfCenter.index,
          slotsWithDataAndIndex.northOfSouth.index,
          slotsWithDataAndIndex.eastOfSouth.index,
          slotsWithDataAndIndex.southwestOfSoutheast.index,
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
          slotsWithDataAndIndex.southOfCenter.index,
          slotsWithDataAndIndex.northeastOfSouth.index,
          slotsWithDataAndIndex.westOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
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
          slotsWithDataAndIndex.southeastOfCenter.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.westOfSouth.index,
          slotsWithDataAndIndex.southOfSouth.index,
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
          slotsWithDataAndIndex.northOfSouth.index,
          slotsWithDataAndIndex.eastOfSouth.index,
          slotsWithDataAndIndex.southwestOfSoutheast.index,
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
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southeastOfSouthwest.index,
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
          slotsWithDataAndIndex.centerOfSouth.index,
          slotsWithDataAndIndex.southeastOfSouth.index,
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
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.southOfSouth.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorth.index,
          slotsWithDataAndIndex.northOfCenter.index,
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
          slotsWithDataAndIndex.northOfNorth.index,
          slotsWithDataAndIndex.eastOfNorth.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northOfEast.index,
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
          slotsWithDataAndIndex.northeastOfNorth.index,
          slotsWithDataAndIndex.westOfNortheast.index,
          slotsWithDataAndIndex.southOfNortheast.index,
          slotsWithDataAndIndex.northeastOfEast.index,
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
          slotsWithDataAndIndex.northwestOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNortheast.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northwestOfCenter.index,
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
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
          slotsWithDataAndIndex.northeastOfWest.index,
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
          slotsWithDataAndIndex.southwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfWest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfWest.index],
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
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorth.index,
          slotsWithDataAndIndex.southOfNorth.index,
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
          slotsWithDataAndIndex.northwestOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNortheast.index,
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
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.eastOfNortheast.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfNorthwest.index],
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
          slotsWithDataAndIndex.northwestOfNorth.index,
          slotsWithDataAndIndex.centerOfNorth.index,
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
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.eastOfNortheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.index],
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfNorthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northOfNorth.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNorth.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNortheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northOfNortheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorth.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNorthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northOfNorthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
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
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
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
          slotsWithDataAndIndex.northwestOfNorth.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
          slotsWithDataAndIndex.northwestOfWest.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn4: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNorth.index,
          slotsWithDataAndIndex.westOfNorth.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northOfWest.index,
          slotsWithDataAndIndex.westOfWest.index,
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
          slotsWithDataAndIndex.northeastOfNorth.index,
          slotsWithDataAndIndex.centerOfNorth.index,
          slotsWithDataAndIndex.southwestOfNorth.index,
          slotsWithDataAndIndex.northeastOfWest.index,
          slotsWithDataAndIndex.centerOfWest.index,
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
          slotsWithDataAndIndex.northwestOfNortheast.index,
          slotsWithDataAndIndex.eastOfNorth.index,
          slotsWithDataAndIndex.southOfNorth.index,
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.eastOfWest.index,
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
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.westOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNorth.index,
          slotsWithDataAndIndex.northOfCenter.index,
          slotsWithDataAndIndex.westOfCenter.index,
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
          slotsWithDataAndIndex.northeastOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
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
          slotsWithDataAndIndex.eastOfNortheast.index,
          slotsWithDataAndIndex.southOfNortheast.index,
          slotsWithDataAndIndex.northwestOfEast.index,
          slotsWithDataAndIndex.eastOfCenter.index,
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
          slotsWithDataAndIndex.southeastOfNortheast.index,
          slotsWithDataAndIndex.northOfEast.index,
          slotsWithDataAndIndex.westOfEast.index,
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
          slotsWithDataAndIndex.northeastOfEast.index,
          slotsWithDataAndIndex.centerOfEast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.eastOfEast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfNorthwest.index],
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
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
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
          slotsWithDataAndIndex.centerOfNorth.index,
          slotsWithDataAndIndex.southwestOfNorth.index,
          slotsWithDataAndIndex.northeastOfWest.index,
          slotsWithDataAndIndex.centerOfWest.index,
          slotsWithDataAndIndex.southwestOfWest.index,
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
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southwestOfCenter.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfEast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfNorthwest.index],
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
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northOfWest.index,
          slotsWithDataAndIndex.westOfWest.index,
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
          slotsWithDataAndIndex.southOfNorth.index,
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.eastOfWest.index,
          slotsWithDataAndIndex.southOfWest.index,
          slotsWithDataAndIndex.northwestOfSouthwest.index,
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
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southwestOfCenter.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfSoutheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfWest.index],
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
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.eastOfWest.index,
          slotsWithDataAndIndex.southOfWest.index,
          slotsWithDataAndIndex.northwestOfSouthwest.index,
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
          slotsWithDataAndIndex.northOfCenter.index,
          slotsWithDataAndIndex.westOfCenter.index,
          slotsWithDataAndIndex.southeastOfWest.index,
          slotsWithDataAndIndex.northOfSouthwest.index,
          slotsWithDataAndIndex.westOfSouthwest.index,
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
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southwestOfCenter.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.eastOfSoutheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfWest.index],
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
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.southwestOfCenter.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    secondaryDiagonalOfLength5OnRow4AndColumn8: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.eastOfEast.index,
          slotsWithDataAndIndex.southOfEast.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSouth.index,
          slotsWithDataAndIndex.southOfSouth.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfWest.index],
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
          slotsWithDataAndIndex.southwestOfCenter.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
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
          slotsWithDataAndIndex.southOfCenter.index,
          slotsWithDataAndIndex.northwestOfSouth.index,
          slotsWithDataAndIndex.eastOfSouthwest.index,
          slotsWithDataAndIndex.southOfSouthwest.index,
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
          slotsWithDataAndIndex.southeastOfCenter.index,
          slotsWithDataAndIndex.northOfSouth.index,
          slotsWithDataAndIndex.westOfSouth.index,
          slotsWithDataAndIndex.southeastOfSouthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfSouthwest.index],
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
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
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
          slotsWithDataAndIndex.northOfSouth.index,
          slotsWithDataAndIndex.westOfSouth.index,
          slotsWithDataAndIndex.southeastOfSouthwest.index,
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
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSouth.index,
          slotsWithDataAndIndex.southOfSouth.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.westOfSouthwest.index],
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
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
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
          slotsWithDataAndIndex.centerOfSouth.index,
          slotsWithDataAndIndex.southwestOfSouth.index,
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
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.southwestOfSoutheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southwestOfSouthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.southOfSouth.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
          slotsWithDataAndIndex.northwestOfNorth.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
          slotsWithDataAndIndex.northwestOfWest.index,
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
          slotsWithDataAndIndex.northOfNorth.index,
          slotsWithDataAndIndex.westOfNorth.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
          slotsWithDataAndIndex.northOfWest.index,
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
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.westOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNorth.index,
          slotsWithDataAndIndex.northOfCenter.index,
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
          slotsWithDataAndIndex.northeastOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfEast.index],
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
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
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
          slotsWithDataAndIndex.northeastOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfNortheast.index],
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
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
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
          slotsWithDataAndIndex.northeastOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.eastOfNortheast.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
        indexesOfSlots: [slotsWithDataAndIndex.northeastOfNortheast.index],
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
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
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
          slotsWithDataAndIndex.northOfNorth.index,
          slotsWithDataAndIndex.northeastOfNorth.index,
          slotsWithDataAndIndex.centerOfNorth.index,
          slotsWithDataAndIndex.eastOfNorth.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.northeastOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.eastOfNortheast.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },

    /* Row 1 */
    rectangleOf2RowsAnd2ColumnsOnRow1AndColumn0: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
        ],
        score: scoresWithData.aliceWith1PointAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow1AndColumn1: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
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
          slotsWithDataAndIndex.westOfWest.index,
          slotsWithDataAndIndex.centerOfWest.index,
          slotsWithDataAndIndex.southwestOfWest.index,
          slotsWithDataAndIndex.southOfWest.index,
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
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.eastOfCenter.index,
          slotsWithDataAndIndex.southOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow4AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 4,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfEast.index,
          slotsWithDataAndIndex.eastOfEast.index,
          slotsWithDataAndIndex.southOfEast.index,
          slotsWithDataAndIndex.southeastOfEast.index,
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
          slotsWithDataAndIndex.westOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
          slotsWithDataAndIndex.southOfSouthwest.index,
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
          slotsWithDataAndIndex.centerOfSouth.index,
          slotsWithDataAndIndex.eastOfSouth.index,
          slotsWithDataAndIndex.southOfSouth.index,
          slotsWithDataAndIndex.southeastOfSouth.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn7: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.alice.index,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
          slotsWithDataAndIndex.southeastOfNorthwest.index,
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
          slotsWithDataAndIndex.northOfNorth.index,
          slotsWithDataAndIndex.northeastOfNorth.index,
          slotsWithDataAndIndex.northwestOfNortheast.index,
          slotsWithDataAndIndex.centerOfNorth.index,
          slotsWithDataAndIndex.eastOfNorth.index,
          slotsWithDataAndIndex.westOfNortheast.index,
          slotsWithDataAndIndex.southOfNorth.index,
          slotsWithDataAndIndex.southeastOfNorth.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
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
          slotsWithDataAndIndex.northwestOfNortheast.index,
          slotsWithDataAndIndex.northOfNortheast.index,
          slotsWithDataAndIndex.northeastOfNortheast.index,
          slotsWithDataAndIndex.westOfNortheast.index,
          slotsWithDataAndIndex.centerOfNortheast.index,
          slotsWithDataAndIndex.eastOfNortheast.index,
          slotsWithDataAndIndex.southwestOfNortheast.index,
          slotsWithDataAndIndex.southOfNortheast.index,
          slotsWithDataAndIndex.southeastOfNortheast.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
          slotsWithDataAndIndex.southOfNorthwest.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.southwestOfNorthwest.index,
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
          slotsWithDataAndIndex.northwestOfCenter.index,
          slotsWithDataAndIndex.northOfCenter.index,
          slotsWithDataAndIndex.northeastOfCenter.index,
          slotsWithDataAndIndex.westOfCenter.index,
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.eastOfCenter.index,
          slotsWithDataAndIndex.southwestOfCenter.index,
          slotsWithDataAndIndex.southOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
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
          slotsWithDataAndIndex.westOfWest.index,
          slotsWithDataAndIndex.centerOfWest.index,
          slotsWithDataAndIndex.eastOfWest.index,
          slotsWithDataAndIndex.southwestOfWest.index,
          slotsWithDataAndIndex.southOfWest.index,
          slotsWithDataAndIndex.southeastOfWest.index,
          slotsWithDataAndIndex.northwestOfSouthwest.index,
          slotsWithDataAndIndex.northOfSouthwest.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
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
          slotsWithDataAndIndex.centerOfCenter.index,
          slotsWithDataAndIndex.eastOfCenter.index,
          slotsWithDataAndIndex.westOfEast.index,
          slotsWithDataAndIndex.southOfCenter.index,
          slotsWithDataAndIndex.southeastOfCenter.index,
          slotsWithDataAndIndex.southwestOfEast.index,
          slotsWithDataAndIndex.northOfSouth.index,
          slotsWithDataAndIndex.northeastOfSouth.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
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
          slotsWithDataAndIndex.westOfEast.index,
          slotsWithDataAndIndex.centerOfEast.index,
          slotsWithDataAndIndex.eastOfEast.index,
          slotsWithDataAndIndex.southwestOfEast.index,
          slotsWithDataAndIndex.southOfEast.index,
          slotsWithDataAndIndex.southeastOfEast.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.northOfSoutheast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
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
          slotsWithDataAndIndex.centerOfEast.index,
          slotsWithDataAndIndex.eastOfEast.index,
          slotsWithDataAndIndex.southOfEast.index,
          slotsWithDataAndIndex.southeastOfEast.index,
          slotsWithDataAndIndex.northOfSoutheast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
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
          slotsWithDataAndIndex.eastOfEast.index,
          slotsWithDataAndIndex.southeastOfEast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
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
          slotsWithDataAndIndex.westOfWest.index,
          slotsWithDataAndIndex.centerOfWest.index,
          slotsWithDataAndIndex.southwestOfWest.index,
          slotsWithDataAndIndex.southOfWest.index,
          slotsWithDataAndIndex.northwestOfSouthwest.index,
          slotsWithDataAndIndex.northOfSouthwest.index,
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
          slotsWithDataAndIndex.westOfWest.index,
          slotsWithDataAndIndex.southwestOfWest.index,
          slotsWithDataAndIndex.northwestOfSouthwest.index,
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
          slotsWithDataAndIndex.northwestOfSouthwest.index,
          slotsWithDataAndIndex.northOfSouthwest.index,
          slotsWithDataAndIndex.northeastOfSouthwest.index,
          slotsWithDataAndIndex.westOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.eastOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
          slotsWithDataAndIndex.southOfSouthwest.index,
          slotsWithDataAndIndex.southeastOfSouthwest.index,
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
          slotsWithDataAndIndex.northOfSouth.index,
          slotsWithDataAndIndex.northeastOfSouth.index,
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSouth.index,
          slotsWithDataAndIndex.eastOfSouth.index,
          slotsWithDataAndIndex.westOfSoutheast.index,
          slotsWithDataAndIndex.southOfSouth.index,
          slotsWithDataAndIndex.southeastOfSouth.index,
          slotsWithDataAndIndex.southwestOfSoutheast.index,
        ],
        score: scoresWithData.aliceWith0PointsAndBrunoWith0Points.score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn6: {
      params: {
        indexOfPlayerWhoIsOccupyingShape: playersWithDataAndIndex.bruno.index,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          slotsWithDataAndIndex.northwestOfSoutheast.index,
          slotsWithDataAndIndex.northOfSoutheast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
          slotsWithDataAndIndex.westOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southwestOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.northOfSoutheast.index,
          slotsWithDataAndIndex.northeastOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.northeastOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.northwestOfSouthwest.index,
          slotsWithDataAndIndex.northOfSouthwest.index,
          slotsWithDataAndIndex.westOfSouthwest.index,
          slotsWithDataAndIndex.centerOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
          slotsWithDataAndIndex.southOfSouthwest.index,
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
          slotsWithDataAndIndex.northwestOfSouthwest.index,
          slotsWithDataAndIndex.westOfSouthwest.index,
          slotsWithDataAndIndex.southwestOfSouthwest.index,
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
          slotsWithDataAndIndex.westOfSoutheast.index,
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southwestOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.centerOfSoutheast.index,
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.eastOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.southwestOfSoutheast.index,
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
          slotsWithDataAndIndex.southOfSoutheast.index,
          slotsWithDataAndIndex.southeastOfSoutheast.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.southeastOfSoutheast.index],
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.northeastOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
          slotsWithDataAndIndex.eastOfNorthwest.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
          slotsWithDataAndIndex.centerOfNorthwest.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.westOfNorthwest.index,
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
          slotsWithDataAndIndex.northwestOfNorthwest.index,
          slotsWithDataAndIndex.northOfNorthwest.index,
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
        indexesOfSlots: [slotsWithDataAndIndex.northwestOfNorthwest.index],
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
