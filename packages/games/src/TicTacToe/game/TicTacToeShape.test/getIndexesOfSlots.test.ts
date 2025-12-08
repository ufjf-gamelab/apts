import { formatArray } from "@repo/engine_core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import {
  getIndexesOfSlots,
  getNameAndFormattedSizeOfShape,
} from "../TicTacToeShape.js";
import {
  recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
} from "./records.js";
import { type TicTacToeShapeWithData } from "./setup.js";

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
    initialIndexOfColumn,
    initialIndexOfRow,
    shape,
  });
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
  return createDescriptionForTestsOfMethod({
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
  arrayOfShapesWithData: TicTacToeShapeWithData[];
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
    recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
  ),
});
