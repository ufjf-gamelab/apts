import type { Shape } from "../Shape.js";

import { recordOfTicTacToePlayersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { recordOfTicTacToeScoresWithData } from "../Score.test/records.js";
import { recordOfTicTacToeSlotsWithDataAndIndexInWhichAllSlotsAreEmpty as recordOfTicTacToeSlotsWithDataAndIndex } from "../Slot.test/indexedRecords.js";
import {
  createTicTacToeShapesWithData,
  type RecordOfRequiredParamsAndResultOfTicTacToeShapes,
} from "./setup.js";

const horizontalLine = {
  direction: "horizontal",
  size: 3,
} satisfies Shape;

const verticalLine = {
  direction: "vertical",
  size: 3,
} satisfies Shape;

const principalDiagonal = {
  direction: "principalDiagonal",
  size: 3,
} satisfies Shape;

const secondaryDiagonal = {
  direction: "secondaryDiagonal",
  size: 3,
} satisfies Shape;

const recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesAreHorizontalLines =
  {
    /* Row 0 */
    horizontalLineOfLength3OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow0AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    horizontalLineOfLength3OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow1AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 1,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow1AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 1,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow1AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 1,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 2 */
    horizontalLineOfLength3OnRow2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow2AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 2,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow2AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow2AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 2,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    horizontalLineOfLength3OnRow2AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 2,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfTicTacToeShapes;

const recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesAreVerticalLines =
  {
    /* Row 0 */
    verticalLineOfLength3OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength3OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength3OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    verticalLineOfLength3OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength3OnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength3OnRow1AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 2 */
    verticalLineOfLength3OnRow2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength3OnRow2AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    verticalLineOfLength3OnRow2AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -1 */
    verticalLineOfLength3OnRowNegative1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row -2 */
    verticalLineOfLength3OnRowNegative2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: -2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfTicTacToeShapes;

const recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesArePrincipalDiagonals =
  {
    /* Row 0 */
    principalDiagonalOfLength3OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfTicTacToePlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith1PointAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow0AndColumnNegative1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -1,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow0AndColumnNegative2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: -2,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    principalDiagonalOfLength3OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow1AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 1,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 2 */
    principalDiagonalOfLength3OnRow2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow2AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    principalDiagonalOfLength3OnRow2AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfTicTacToeShapes;

const recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesAreSecondaryDiagonals =
  {
    /* Row 0 */
    secondaryDiagonalOfLength3OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength3OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.north.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength3OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.northeast.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 1 */
    secondaryDiagonalOfLength3OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.west.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength3OnRow1AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.center.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength3OnRow1AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 1,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.east.indexOfSlot,
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },

    /* Row 2 */
    secondaryDiagonalOfLength3OnRow2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southwest.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength3OnRow2AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.south.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
    secondaryDiagonalOfLength3OnRow2AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 2,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfTicTacToeSlotsWithDataAndIndex.southeast.indexOfSlot,
        ],
        score:
          recordOfTicTacToeScoresWithData.aliceWith0PointsAndBrunoWith0Points
            .score,
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfTicTacToeShapes;

const recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines =
  createTicTacToeShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesAreHorizontalLines,
  });

const recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines =
  createTicTacToeShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesAreVerticalLines,
  });

const recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals =
  createTicTacToeShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesArePrincipalDiagonals,
  });

const recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals =
  createTicTacToeShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfTicTacToeShapesInWhichShapesAreSecondaryDiagonals,
  });

export type { RecordOfRequiredParamsAndResultOfTicTacToeShapes };
export {
  recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
};
