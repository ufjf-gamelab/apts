import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import {
  COLUMN_LENGTH,
  getIndexesOfSlots,
  getNameAndFormattedSizeOfShape,
  ROW_LENGTH,
} from "../Shape.js";
import {
  recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
} from "./records.js";
import { type SnowballShapeWithData } from "./setup.js";

const validateGetIndexesOfSlots = ({
  expectedIndexesOfSlots,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: Pick<
  Parameters<typeof getIndexesOfSlots>[0],
  "initialIndexOfColumn" | "initialIndexOfRow" | "shape"
> & {
  expectedIndexesOfSlots: ReturnType<typeof getIndexesOfSlots>;
}) => {
  const indexesOfSlots = getIndexesOfSlots({
    columnLength: COLUMN_LENGTH,
    initialIndexOfColumn,
    initialIndexOfRow,
    rowLength: ROW_LENGTH,
    shape,
  });

  expect(indexesOfSlots).not.toBe(expectedIndexesOfSlots);
  expect(indexesOfSlots).toStrictEqual(expectedIndexesOfSlots);
};

const createDescriptionForTestOfGetIndexesOfSlots = ({
  expectedIndexesOfSlots,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: Pick<
  Parameters<typeof getIndexesOfSlots>[0],
  "initialIndexOfColumn" | "initialIndexOfRow" | "shape"
> & {
  expectedIndexesOfSlots: ReturnType<typeof getIndexesOfSlots>;
}): string => {
  const shapeDescription = getNameAndFormattedSizeOfShape({ shape });
  return createDescriptionForTestsOfGetter({
    methodDescription: `getIndexesOfSlots({ initialIndexOfColumn: ${initialIndexOfColumn}, initialIndexOfRow: ${initialIndexOfRow}, shape: { name: "${shapeDescription.name}", size: ${shapeDescription.size} } })`,
    returnedValue: formatArray({ array: expectedIndexesOfSlots }),
  });
};

const createDescription = ({
  affix,
  expectedIndexesOfSlots,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetIndexesOfSlots>[0],
    | "expectedIndexesOfSlots"
    | "initialIndexOfColumn"
    | "initialIndexOfRow"
    | "shape"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexesOfSlots({
      expectedIndexesOfSlots,
      initialIndexOfColumn,
      initialIndexOfRow,
      shape,
    }),
  });

const testGetIndexesOfSlots = ({
  arrayOfShapesWithData,
}: {
  arrayOfShapesWithData: SnowballShapeWithData[];
}) => {
  arrayOfShapesWithData.forEach(
    ({
      keyOfShape,
      requiredParams: { initialIndexOfColumn, initialIndexOfRow, shape },
      result,
    }) => {
      test(
        createDescription({
          affix: keyOfShape,
          expectedIndexesOfSlots: result.indexesOfSlots,
          initialIndexOfColumn,
          initialIndexOfRow,
          shape,
        }),

        () => {
          validateGetIndexesOfSlots({
            expectedIndexesOfSlots: result.indexesOfSlots,
            initialIndexOfColumn,
            initialIndexOfRow,
            shape,
          });
        },
      );
    },
  );
};

testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfSnowballShapesWithDataInWhichShapesAreHorizontalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfSnowballShapesWithDataInWhichShapesAreVerticalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfSnowballShapesWithDataInWhichShapesArePrincipalDiagonals,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfSnowballShapesWithDataInWhichShapesAreSecondaryDiagonals,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfSnowballShapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  ),
});
