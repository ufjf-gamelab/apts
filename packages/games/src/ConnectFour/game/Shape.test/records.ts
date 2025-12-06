import type { Shape } from "../Shape.js";

import { recordOfConnectFourSlotsWithDataAndIndexInWhichAllSlotsAreEmpty as recordOfConnectFourSlotsWithDataAndIndex } from "../Slot.test/indexedRecords.js";
import {
  createConnectFourShapesWithData,
  type RecordOfRequiredParamsAndResultOfConnectFourShapes,
} from "./setup.js";

const horizontalLine = {
  direction: "horizontal",
  size: 5,
} satisfies Shape;

const verticalLine = {
  direction: "vertical",
  size: 5,
} satisfies Shape;

const principalDiagonal = {
  direction: "principalDiagonal",
  size: 5,
} satisfies Shape;

const secondaryDiagonal = {
  direction: "secondaryDiagonal",
  size: 5,
} satisfies Shape;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreHorizontalLines =
  {
    /* Row 0 */
    horizontalLineOfLength5OnRow0AndColumn0: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r0c4.indexOfSlot,
        ],
      },
    },
    horizontalLineOfLength5OnRow0AndColumn1: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r0c5.indexOfSlot,
        ],
      },
    },
    horizontalLineOfLength5OnRow0AndColumn2: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r0c6.indexOfSlot,
        ],
      },
    },

    /* Row 1 */
    horizontalLineOfLength5OnRow1AndColumn0: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r1c4.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreVerticalLines =
  {
    /* Row 0 */
    verticalLineOfLength5OnRow0AndColumn0: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r4c0.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesArePrincipalDiagonals =
  {
    /* Row 0 */
    principalDiagonalOfLength5OnRow0AndColumn0: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r4c4.indexOfSlot,
        ],
      },
    },
  } as const satisfies RecordOfRequiredParamsAndResultOfConnectFourShapes;

const recordOfRequiredParamsAndResultOfConnectFourShapesInWhichShapesAreSecondaryDiagonals =
  {
    /* Row 0 */
    secondaryDiagonalOfLength5OnRow0AndColumn0: {
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
          recordOfConnectFourSlotsWithDataAndIndex.r4c2.indexOfSlot,
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
