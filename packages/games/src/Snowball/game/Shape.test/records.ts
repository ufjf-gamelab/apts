import type { Shape } from "../Shape.js";

import { recordOfSnowballPlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { recordOfSnowballScoresWithData } from "../Score.test/records.js";
import { recordOfSnowballSlotsWithDataAndIndexInWhichAllSlotsAreEmpty as recordOfSnowballSlotsWithDataAndIndex } from "../Slot.test/indexedRecords.js";
import {
  createSnowballShapesWithData,
  type RecordOfRequiredParamsAndResultOfSnowballShapes,
} from "./setup.js";

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

const recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreHorizontalLines =
  {
    /* Row 0 */
    horizontalLineOfLength5OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow0AndColumnNegative5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -5,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 4 */
    horizontalLineOfLength5OnRow4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow4AndColumnNegative5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -5,
        initialIndexOfRow: 4,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 8 */
    horizontalLineOfLength5OnRow8AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    horizontalLineOfLength5OnRow8AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength5OnRow8AndColumnNegative5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -5,
        initialIndexOfRow: 8,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreVerticalLines =
  {
    verticalLineOfLength5OnRow0AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow0AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    verticalLineOfLength5OnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 4,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow4AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 4,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    verticalLineOfLength5OnRow5AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 5,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow5AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 5,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow5AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 5,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow6AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 6,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow6AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 6,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow6AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 6,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow7AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 7,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow7AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 7,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow7AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 7,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow8AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 8,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow8AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 8,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow8AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 8,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow9AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 9,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow9AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 9,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRow9AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 9,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative1AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative1AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: -1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative2AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative2AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: -2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative3AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -3,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative3AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -3,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative3AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: -3,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -4,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -4,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative4AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: -4,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative5AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -5,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative5AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -5,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength5OnRowNegative5AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: -5,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesArePrincipalDiagonals =
  {
    /* Row 0 */
    principalDiagonalOfLength5OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow0AndColumnNegative5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -5,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    principalDiagonalOfLength5OnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow1AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow1AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow1AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow1AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 2 */
    principalDiagonalOfLength5OnRow2AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow2AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow2AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow2AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow2AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 3 */
    principalDiagonalOfLength5OnRow3AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow3AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow3AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow3AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 4 */
    principalDiagonalOfLength5OnRow4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow4AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 5 */
    principalDiagonalOfLength5OnRow5AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 5,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow5AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 5,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow5AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 5,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow5AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: 5,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 6 */
    principalDiagonalOfLength5OnRow6AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 6,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow6AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 6,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow6AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 6,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 7 */
    principalDiagonalOfLength5OnRow7AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 7,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow7AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 7,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow7AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 7,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 8 */
    principalDiagonalOfLength5OnRow8AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 8,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow8AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 8,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow8AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 8,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 9 */
    principalDiagonalOfLength5OnRow9AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 9,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRow9AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 9,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -1 */
    principalDiagonalOfLength5OnRowNegative1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative1AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: -1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -2 */
    principalDiagonalOfLength5OnRowNegative2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative2AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative2AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: -2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative2AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative2AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: -2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -3 */
    principalDiagonalOfLength5OnRowNegative3AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative3AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative3AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: -3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative3AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: -3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative3AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: -3,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -4 */
    principalDiagonalOfLength5OnRowNegative4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength5OnRowNegative4AndColumnNegative4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -4,
        initialIndexOfRow: -4,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreSecondaryDiagonals =
  {
    /* Row 0 */
    secondaryDiagonalOfLength5OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn10: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 10,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn11: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 11,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumn13: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 13,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    secondaryDiagonalOfLength5OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow1AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow1AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow1AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 2 */
    secondaryDiagonalOfLength5OnRow2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow2AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow2AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow2AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow2AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 3 */
    secondaryDiagonalOfLength5OnRow3AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow3AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow3AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow3AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow3AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: 3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 4 */
    secondaryDiagonalOfLength5OnRow4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow4AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow4AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: 4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 5 */
    secondaryDiagonalOfLength5OnRow5AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow5AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow5AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow5AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: 5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow5AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: 5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 6 */
    secondaryDiagonalOfLength5OnRow6AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 6,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow6AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 6,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    secondaryDiagonalOfLength5OnRow6AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 6,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow6AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 6,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 7 */
    secondaryDiagonalOfLength5OnRow7AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 7,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow7AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 7,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow7AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 7,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow7AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 7,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 8 */
    secondaryDiagonalOfLength5OnRow8AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 8,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow8AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 8,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow8AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 8,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 9 */
    secondaryDiagonalOfLength5OnRow9AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 9,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRow9AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 9,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -1 */
    secondaryDiagonalOfLength5OnRowNegative1AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative1AndColumn5: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 5,
        initialIndexOfRow: -1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative1AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: -1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative1AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: -1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative1AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: -1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -2 */
    secondaryDiagonalOfLength5OnRowNegative2AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative2AndColumn10: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 10,
        initialIndexOfRow: -2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative2AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: -2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -3 */
    secondaryDiagonalOfLength5OnRowNegative3AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative3AndColumn11: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 11,
        initialIndexOfRow: -3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative3AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: -3,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -4 */
    secondaryDiagonalOfLength5OnRowNegative4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative4AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: -4,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -5 */
    secondaryDiagonalOfLength5OnRowNegative5AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: -5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength5OnRowNegative5AndColumn12: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 12,
        initialIndexOfRow: -5,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreRectanglesOf2RowsAnd2Columns =
  {
    /* Row 0 */
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    rectangleOf2RowsAnd2ColumnsOnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },

    /* Row 4 */
    rectangleOf2RowsAnd2ColumnsOnRow4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 4,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow4AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 4,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },

    /* Row 7 */
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow7AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 7,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 8 */
    rectangleOf2RowsAnd2ColumnsOnRow8AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 8,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow8AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 8,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRow8AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 8,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 9 */
    rectangleOf2RowsAnd2ColumnsOnRow9AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 9,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -1 */
    rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf2RowsAnd2ColumnsOnRowNegative1AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -1,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -2 */
    rectangleOf2RowsAnd2ColumnsOnRowNegative2AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -2,
        shape: rectangleOf2RowsAnd2Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreRectanglesOf3RowsAnd3Columns =
  {
    /* Row 0 */
    rectangleOf3RowsAnd3ColumnsOnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow0AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNorth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow0AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNortheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNortheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfNortheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow0AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 0,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 3 */
    rectangleOf3RowsAnd3ColumnsOnRow3AndColumn3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 3,
        initialIndexOfRow: 3,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 4 */
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfCenter.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfEast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow4AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 4,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfWest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 6 */
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn4: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 4,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSouth.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfSnowballPlayersWithDataAndIndex.bruno.indexOfPlayer,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith1Point
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northeastOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSouthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow6AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 6,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfSouthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfSouthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSouthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 7 */
    rectangleOf3RowsAnd3ColumnsOnRow7AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 7,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.westOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow7AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 7,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.centerOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow7AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 7,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.eastOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 8 */
    rectangleOf3RowsAnd3ColumnsOnRow8AndColumn6: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 8,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southwestOfSoutheast
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow8AndColumn7: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 7,
        initialIndexOfRow: 8,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southOfSoutheast.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow8AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 8,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.southeastOfSoutheast
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRow8AndColumn9: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 9,
        initialIndexOfRow: 8,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 9 */
    rectangleOf3RowsAnd3ColumnsOnRow9AndColumn8: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 8,
        initialIndexOfRow: 9,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -1 */
    rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northeastOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.eastOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -1,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.centerOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRowNegative1AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -1,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.westOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -2 */
    rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: -2,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
          recordOfSnowballSlotsWithDataAndIndex.northOfNorthwest.indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -2,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [
          recordOfSnowballSlotsWithDataAndIndex.northwestOfNorthwest
            .indexOfSlot,
        ],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    rectangleOf3RowsAnd3ColumnsOnRowNegative2AndColumnNegative3: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -3,
        initialIndexOfRow: -2,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -3 */
    rectangleOf3RowsAnd3ColumnsOnRowNegative3AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: -3,
        shape: rectangleOf3RowsAnd3Columns,
      },
      result: {
        indexesOfSlots: [],
        score:
          recordOfSnowballScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfSnowballShapes;

const recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreHorizontalLines,
  });

const recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreVerticalLines,
  });

const recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesArePrincipalDiagonals,
  });

const recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreSecondaryDiagonals,
  });
const recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  });

const recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns =
  createSnowballShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfSnowballShapesInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  });

export type { RecordOfRequiredParamsAndResultOfSnowballShapes };
export {
  recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
};
