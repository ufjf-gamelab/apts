import { expect, test } from "vitest";

import { COLUMN_LENGTH } from "../Game.js";
import { getIndexesOfShape, type Shape } from "../Shape.js";
import { IndexOfTestingSlot } from "../Slot/setup.js";
import type { TestShapeParams } from "./setup.js";

const getIndexesOfShapeShouldReturn = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  shape,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  shape: Shape;
}): void => {
  test(`${testDescriptor}: getIndexesOfShape() should return {${expectedIndexesOfShape.toString()}}`, () => {
    const indexesOfShape = getIndexesOfShape({
      columnLength: COLUMN_LENGTH,
      initialColumnIndex,
      initialRowIndex,
      shape,
    });

    expect(indexesOfShape).not.toBe(expectedIndexesOfShape);
    expect(indexesOfShape).toStrictEqual(expectedIndexesOfShape);
  });
};

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
    getIndexesOfShapeShouldReturn({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
        IndexOfTestingSlot.NorthwestOfNorth,
        IndexOfTestingSlot.NorthOfNorth,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      shape: {
        direction: "horizontal",
        size: 5,
        type: "line",
      },
      testDescriptor:
        "horizontal line of size 5 beginning on row 0 and column 0",
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
    getIndexesOfShapeShouldReturn({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.SouthwestOfNorthwest,
        IndexOfTestingSlot.NorthwestOfWest,
        IndexOfTestingSlot.WestOfWest,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      shape: {
        direction: "vertical",
        size: 5,
        type: "line",
      },
      testDescriptor: "vertical line of size 5 beginning on row 0 and column 0",
    });
  };
testGetIndexesOfShapeForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
    getIndexesOfShapeShouldReturn({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
        IndexOfTestingSlot.SoutheastOfNorthwest,
        IndexOfTestingSlot.NorthwestOfCenter,
        IndexOfTestingSlot.CenterOfCenter,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      shape: {
        direction: "principalDiagonal",
        size: 5,
        type: "line",
      },
      testDescriptor:
        "principal diagonal of size 5 beginning on row 0 and column 0",
    });
  };
testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowZeroAndColumnFour =
  (): void => {
    getIndexesOfShapeShouldReturn({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthOfNorth,
        IndexOfTestingSlot.WestOfNorth,
        IndexOfTestingSlot.SoutheastOfNorthwest,
        IndexOfTestingSlot.NorthOfWest,
        IndexOfTestingSlot.WestOfWest,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 0,
      shape: {
        direction: "secondaryDiagonal",
        size: 5,
        type: "line",
      },
      testDescriptor:
        "principal diagonal of size 5 beginning on row 0 and column 0",
    });
  };
testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowZeroAndColumnFour();

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowZeroAndColumnZero =
  (): void => {
    getIndexesOfShapeShouldReturn({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      shape: {
        horizontalSize: 2,
        type: "rectangle",
        verticalSize: 2,
      },
      testDescriptor:
        "rectangle of size 2 by 2 beginning on row 0 and column 0",
    });
  };
testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowZeroAndColumnZero =
  (): void => {
    getIndexesOfShapeShouldReturn({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
        IndexOfTestingSlot.EastOfNorthwest,
        IndexOfTestingSlot.SouthwestOfNorthwest,
        IndexOfTestingSlot.SouthOfNorthwest,
        IndexOfTestingSlot.SoutheastOfNorthwest,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      shape: {
        horizontalSize: 3,
        type: "rectangle",
        verticalSize: 3,
      },
      testDescriptor:
        "rectangle of size 3 by 3 beginning on row 0 and column 0",
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowZeroAndColumnZero();
