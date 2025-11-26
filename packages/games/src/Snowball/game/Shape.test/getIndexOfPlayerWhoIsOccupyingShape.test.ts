import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { SnowballShapeWithData } from "./setup.js";

import {
  COLUMN_LENGTH,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  ROW_LENGTH,
} from "../Shape.js";
import { indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno } from "../Slot.test/indexedRecords.js";
import {
  recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
} from "./records.js";

const validateGetIndexOfPlayerWhoIsOccupyingShape = ({
  expectedIndexOfPlayerWhoIsOccupyingShape,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
  slots,
}: Pick<
  Parameters<typeof getIndexOfPlayerWhoIsOccupyingShape>[0],
  "initialIndexOfColumn" | "initialIndexOfRow" | "shape" | "slots"
> & {
  expectedIndexOfPlayerWhoIsOccupyingShape: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingShape
  >;
}) => {
  const indexOfPlayerWhoIsOccupyingShape = getIndexOfPlayerWhoIsOccupyingShape({
    columnLength: COLUMN_LENGTH,
    initialIndexOfColumn,
    initialIndexOfRow,
    rowLength: ROW_LENGTH,
    shape,
    slots,
  });

  expect(indexOfPlayerWhoIsOccupyingShape).toBe(
    expectedIndexOfPlayerWhoIsOccupyingShape,
  );
};

const createDescriptionForTestOfGetIndexOfPlayerWhoIsOccupyingShape = ({
  expectedIndexOfPlayerWhoIsOccupyingShape,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: Pick<
  Parameters<typeof getIndexOfPlayerWhoIsOccupyingShape>[0],
  "initialIndexOfColumn" | "initialIndexOfRow" | "shape"
> & {
  expectedIndexOfPlayerWhoIsOccupyingShape: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingShape
  >;
}): string => {
  const shapeDescription = getNameAndFormattedSizeOfShape({ shape });
  return createDescriptionForTestsOfGetter({
    methodDescription: `getIndexOfPlayerWhoIsOccupyingShape({ initialIndexOfColumn: ${initialIndexOfColumn}, initialIndexOfRow: ${initialIndexOfRow}, shape: { name: "${shapeDescription.name}", size: ${shapeDescription.size} } })`,
    returnedValue: expectedIndexOfPlayerWhoIsOccupyingShape,
  });
};

const createDescription = ({
  affix,
  expectedIndexOfPlayerWhoIsOccupyingShape,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfGetIndexOfPlayerWhoIsOccupyingShape
    >[0],
    | "expectedIndexOfPlayerWhoIsOccupyingShape"
    | "initialIndexOfColumn"
    | "initialIndexOfRow"
    | "shape"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexOfPlayerWhoIsOccupyingShape({
      expectedIndexOfPlayerWhoIsOccupyingShape,
      initialIndexOfColumn,
      initialIndexOfRow,
      shape,
    }),
  });

const constructTestGetIndexOfPlayerWhoIsOccupyingShape = ({
  affix,
  expectedIndexOfPlayerWhoIsOccupyingShape,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
  slots,
}: Pick<Parameters<typeof createDescription>[0], "affix"> &
  Pick<
    Parameters<typeof validateGetIndexOfPlayerWhoIsOccupyingShape>[0],
    | "expectedIndexOfPlayerWhoIsOccupyingShape"
    | "initialIndexOfColumn"
    | "initialIndexOfRow"
    | "shape"
    | "slots"
  >) => {
  test(
    createDescription({
      affix,
      expectedIndexOfPlayerWhoIsOccupyingShape,
      initialIndexOfColumn,
      initialIndexOfRow,
      shape,
    }),

    () => {
      validateGetIndexOfPlayerWhoIsOccupyingShape({
        expectedIndexOfPlayerWhoIsOccupyingShape,
        initialIndexOfColumn,
        initialIndexOfRow,
        shape,
        slots,
      });
    },
  );
};

const testGetIndexOfPlayerWhoIsOccupyingShape = ({
  arrayOfShapesWithData,
  slots,
}: Pick<
  Parameters<typeof constructTestGetIndexOfPlayerWhoIsOccupyingShape>[0],
  "slots"
> & {
  arrayOfShapesWithData: SnowballShapeWithData[];
}) => {
  arrayOfShapesWithData.forEach(
    ({
      keyOfShape,
      requiredParams: {
        indexOfPlayerWhoIsOccupyingShape,
        initialIndexOfColumn,
        initialIndexOfRow,
        shape,
      },
    }) => {
      constructTestGetIndexOfPlayerWhoIsOccupyingShape({
        affix: keyOfShape,
        expectedIndexOfPlayerWhoIsOccupyingShape:
          indexOfPlayerWhoIsOccupyingShape,
        initialIndexOfColumn,
        initialIndexOfRow,
        shape,
        slots,
      });
    },
  );
};

const testGetIndexOfPlayerWhoIsOccupyingShapeForAllShapes = ({
  slots,
}: Pick<
  Parameters<typeof testGetIndexOfPlayerWhoIsOccupyingShape>[0],
  "slots"
>) => {
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
    ),
    slots,
  });
};

testGetIndexOfPlayerWhoIsOccupyingShapeForAllShapes({
  slots:
    indexedSnowballSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno.map(
      (slot) => slot.slot,
    ),
});
