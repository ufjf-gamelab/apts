import type { Shape } from "../ConnectFourShape.js";

import { recordOfConnectFourPlayersWithDataAndIndex } from "../ConnectFourPlayer.test/indexedRecords.js";
import { recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty as recordOfConnectFourSlotsWithDataAndIndex } from "../ConnectFourSlot.test/indexedRecords.js";
import {
  createConnectFourShapesWithData,
  type RecordOfRequiredParamsAndResultOfConnectFourShapes,
} from "./setup.js";

const horizontalLine = {
  direction: "horizontal",
  size: 4,
} satisfies Shape;

const verticalLine = {
  direction: "vertical",
  size: 4,
} satisfies Shape;

const principalDiagonal = {
  direction: "principalDiagonal",
  size: 4,
} satisfies Shape;

const secondaryDiagonal = {
  direction: "secondaryDiagonal",
  size: 4,
} satisfies Shape;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreHorizontalLines =
  {
    /* Row 0 */
    horizontalLineOfLength4OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r0c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c1.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c2.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c3.indexOfSlot,
        ],
      },
    },
    horizontalLineOfLength4OnRow0AndColumn1: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 1,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r0c1.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c2.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c3.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c4.indexOfSlot,
        ],
      },
    },
    horizontalLineOfLength4OnRow0AndColumn2: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 2,
        initialIndexOfRow: 0,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r0c2.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c3.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c4.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r0c5.indexOfSlot,
        ],
      },
    },

    /* Row 1 */
    horizontalLineOfLength4OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: horizontalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r1c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r1c1.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r1c2.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r1c3.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreVerticalLines =
  {
    /* Row 0 */
    verticalLineOfLength4OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r0c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r1c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r2c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r3c0.indexOfSlot,
        ],
      },
    },

    /* Row 1 */
    verticalLineOfLength4OnRow1AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 1,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r1c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r2c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r3c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r4c0.indexOfSlot,
        ],
      },
    },

    /* Row 2 */
    verticalLineOfLength4OnRow2AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape:
          recordOfConnectFourPlayersWithDataAndIndex.alice.indexOfPlayer,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 2,
        shape: verticalLine,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r2c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r3c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r4c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r5c0.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesArePrincipalDiagonals =
  {
    /* Row 0 */
    principalDiagonalOfLength4OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 0,
        initialIndexOfRow: 0,
        shape: principalDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r0c0.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r1c1.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r2c2.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r3c3.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreSecondaryDiagonals =
  {
    /* Row 0 */
    secondaryDiagonalOfLength4OnRow0AndColumn0: {
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape: null,
        initialIndexOfColumn: 6,
        initialIndexOfRow: 0,
        shape: secondaryDiagonal,
      },
      result: {
        indexesOfSlots: [
          recordOfConnectFourSlotsWithDataAndIndex.r0c6.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r1c5.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r2c4.indexOfSlot,
          recordOfConnectFourSlotsWithDataAndIndex.r3c3.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfConnectFourShapesWithDataInWhichShapesAreHorizontalLines =
  createConnectFourShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreHorizontalLines,
  });

const recordOfConnectFourShapesWithDataInWhichShapesAreVerticalLines =
  createConnectFourShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreVerticalLines,
  });

const recordOfConnectFourShapesWithDataInWhichShapesArePrincipalDiagonals =
  createConnectFourShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesArePrincipalDiagonals,
  });

const recordOfConnectFourShapesWithDataInWhichShapesAreSecondaryDiagonals =
  createConnectFourShapesWithData({
    recordOfRequiredParamsAndResult:
      recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreSecondaryDiagonals,
  });

export type { RecordOfRequiredParamsAndResultOfConnectFourShapes };
export {
  recordOfConnectFourShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfConnectFourShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfConnectFourShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfConnectFourShapesWithDataInWhichShapesAreVerticalLines,
};
