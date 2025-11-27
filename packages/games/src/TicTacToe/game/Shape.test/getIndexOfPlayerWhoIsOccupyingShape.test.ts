import {
  createDescriptionForTest,
  createDescriptionForTestsOfMethod,
} from "@repo/engine_core/test.js";
import { expect, test } from "vitest";

import type { TicTacToeShapeWithData } from "./setup.js";

import {
  COLUMN_LENGTH,
  getIndexOfPlayerWhoIsOccupyingShape,
  getNameAndFormattedSizeOfShape,
  ROW_LENGTH,
} from "../Shape.js";
import { indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno } from "../Slot.test/indexedRecords.js";
import {
  recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
  recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
  recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
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
  arrayOfShapesWithData: TicTacToeShapeWithData[];
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
      recordOfTicTacToeShapesWithDataInWhichShapesAreHorizontalLines,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfTicTacToeShapesWithDataInWhichShapesAreVerticalLines,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfTicTacToeShapesWithDataInWhichShapesArePrincipalDiagonals,
    ),
    slots,
  });
  testGetIndexOfPlayerWhoIsOccupyingShape({
    arrayOfShapesWithData: Object.values(
      recordOfTicTacToeShapesWithDataInWhichShapesAreSecondaryDiagonals,
    ),
    slots,
  });
};

testGetIndexOfPlayerWhoIsOccupyingShapeForAllShapes({
  slots:
    indexedTicTacToeSlotsWithDataInWhichSlotR0C0AndR0C2AndR1C1AndR2C1AndR2C2AreFilledByAliceAndR0C1AndR1C0AndR1C2AndR2C0AreFilledByBruno.map(
      (slot) => slot.slot,
    ),
});
