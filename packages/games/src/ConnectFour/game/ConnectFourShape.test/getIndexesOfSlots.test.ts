import { formatArray } from "@repo/core/format.js";
import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/core/test.js";
import { expect, test } from "vitest";

import {
  getIndexesOfSlots,
  getNameAndFormattedSizeOfShape,
} from "../ConnectFourShape.js";
import {
  recordOfConnectFourShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfConnectFourShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfConnectFourShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfConnectFourShapesWithDataInWhichShapesAreVerticalLines,
} from "./records.js";
import { type ConnectFourShapeWithData } from "./setup.js";

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
  arrayOfShapesWithData: ConnectFourShapeWithData[];
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
    recordOfConnectFourShapesWithDataInWhichShapesAreHorizontalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfConnectFourShapesWithDataInWhichShapesAreVerticalLines,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfConnectFourShapesWithDataInWhichShapesArePrincipalDiagonals,
  ),
});
testGetIndexesOfSlots({
  arrayOfShapesWithData: Object.values(
    recordOfConnectFourShapesWithDataInWhichShapesAreSecondaryDiagonals,
  ),
});
