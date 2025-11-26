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
  shapesWithDataInWhichShapesAreHorizontalLines,
  shapesWithDataInWhichShapesArePrincipalDiagonals,
  shapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  shapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  shapesWithDataInWhichShapesAreSecondaryDiagonals,
  shapesWithDataInWhichShapesAreVerticalLines,
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
  arrayOfShapesWithData.forEach(({ keyOfShape, params, result }) => {
    test(
      createDescription({
        affix: keyOfShape,
        expectedIndexesOfSlots: result.indexesOfSlots,
        initialIndexOfColumn: params.initialIndexOfColumn,
        initialIndexOfRow: params.initialIndexOfRow,
        shape: params.shape,
      }),

      () => {
        validateGetIndexesOfSlots({
          expectedIndexesOfSlots: result.indexesOfSlots,
          initialIndexOfColumn: params.initialIndexOfColumn,
          initialIndexOfRow: params.initialIndexOfRow,
          shape: params.shape,
        });
      },
    );
  });
};

testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    shapesWithDataInWhichShapesAreHorizontalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    shapesWithDataInWhichShapesAreVerticalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    shapesWithDataInWhichShapesArePrincipalDiagonals,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    shapesWithDataInWhichShapesAreSecondaryDiagonals,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    shapesWithDataInWhichShapesAreRectanglesOf2RowsAnd2Columns,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    shapesWithDataInWhichShapesAreRectanglesOf3RowsAnd3Columns,
  ),
});
