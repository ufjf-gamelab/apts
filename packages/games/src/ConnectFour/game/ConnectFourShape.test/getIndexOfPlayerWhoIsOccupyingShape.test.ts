import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { ConnectFourShapeWithData } from "./setup.js";

import {
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
} from "../ConnectFourShape.js";
import { indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno } from "../ConnectFourSlot.test/indexedRecords.js";
import {
  recordOfConnectFourShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfConnectFourShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfConnectFourShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfConnectFourShapesWithDataInWhichShapesAreVerticalLines,
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
    initialIndexOfColumn,
    initialIndexOfRow,
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
  return createDescriptionForTestsOfMethod({
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
  arrayOfShapesWithData: ConnectFourShapeWithData[];
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
      recordOfConnectFourShapesWithDataInWhichShapesAreHorizontalLines,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfConnectFourShapesWithDataInWhichShapesAreVerticalLines,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfConnectFourShapesWithDataInWhichShapesArePrincipalDiagonals,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfConnectFourShapesWithDataInWhichShapesAreSecondaryDiagonals,
    ),
    slots,
  });
};

testGetIndexOfPlayerWhoIsOccupyingShapeForAllShapes({
  slots:
    indexedConnectFourSlotsWithDataInWhichSlotsR5C0AndR4C0AndR3C0AndR2C0AreFilledByAliceAndR5C1AndR4C1AndR3C1AreFilledByBruno.map(
      (slot) => slot.slot,
    ),
});
