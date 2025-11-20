import {
  createDescriptionForTest,
  createDescriptionForTestsOfGetter,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import { getIndexedSnowballSlotsWithDataForUnitTest } from "../Game.test/slots.js";
import {
  COLUMN_LENGTH,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  ROW_LENGTH,
} from "../Shape.js";
import {
  shapesWithDataForUnitTest,
  type SnowballShapeWithData,
} from "./setup.js";

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
}: Pick<
  Parameters<
    typeof createDescriptionForTestOfGetIndexOfPlayerWhoIsOccupyingShape
  >[0],
  | "expectedIndexOfPlayerWhoIsOccupyingShape"
  | "initialIndexOfColumn"
  | "initialIndexOfRow"
  | "shape"
> & {
  affix: string;
}) =>
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
  shapesWithDataToTest,
  slots,
}: Pick<
  Parameters<typeof constructTestGetIndexOfPlayerWhoIsOccupyingShape>[0],
  "slots"
> & {
  shapesWithDataToTest: Record<string, SnowballShapeWithData>;
}) => {
  Object.values(shapesWithDataToTest).forEach(
    ({
      keyOfShape,
      params: {
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

testGetIndexOfPlayerWhoIsOccupyingShape({
  shapesWithDataToTest: shapesWithDataForUnitTest,
  slots: getIndexedSnowballSlotsWithDataForUnitTest().map((slot) => slot.slot),
});
