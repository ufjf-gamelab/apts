import { expect, test } from "vitest";

import type { Integer } from "../../../types.js";
import { COLUMN_LENGTH, ROW_LENGTH } from "../Game.js";
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
      rowLength: ROW_LENGTH,
      shape,
    });

    expect(indexesOfShape).not.toBe(expectedIndexesOfShape);
    expect(indexesOfShape).toStrictEqual(expectedIndexesOfShape);
  });
};

const testGetIndexesOfShapeForHorizontalLine = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  size,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      direction: "horizontal",
      size,
      type: "line",
    },
    testDescriptor: `horizontal line of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexesOfShapeForVerticalLine = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  size,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      direction: "vertical",
      size,
      type: "line",
    },
    testDescriptor: `vertical line of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexesOfShapeForPrincipalDiagonal = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  size,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      direction: "principalDiagonal",
      size,
      type: "line",
    },
    testDescriptor: `principal diagonal of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexesOfShapeForSecondaryDiagonal = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  size,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      direction: "secondaryDiagonal",
      size,
      type: "line",
    },
    testDescriptor: `secondary diagonal of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexesOfShapeForRectangle = ({
  expectedIndexesOfShape,
  horizontalSize,
  initialColumnIndex,
  initialRowIndex,
  verticalSize,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  horizontalSize: Integer;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  verticalSize: Integer;
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      horizontalSize,
      type: "rectangle",
      verticalSize,
    },
    testDescriptor: `rectangle of size ${horizontalSize}x${verticalSize} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
        IndexOfTestingSlot.NorthwestOfNorth,
        IndexOfTestingSlot.NorthOfNorth,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.EastOfCenter,
        IndexOfTestingSlot.WestOfEast,
        IndexOfTestingSlot.CenterOfEast,
        IndexOfTestingSlot.EastOfEast,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowFourAndColumnFour();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowNegativeFiveAndColumnNegativeFive =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [],
      initialColumnIndex: -5,
      initialRowIndex: -5,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowNegativeFiveAndColumnNegativeFive();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowEightAndColumnEight =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [],
      initialColumnIndex: 8,
      initialRowIndex: 8,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowEightAndColumnEight();

const testGetIndexesOfShapeForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForVerticalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.SouthwestOfNorthwest,
        IndexOfTestingSlot.NorthwestOfWest,
        IndexOfTestingSlot.WestOfWest,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForVerticalLineOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForVerticalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.SouthOfCenter,
        IndexOfTestingSlot.NorthOfSouth,
        IndexOfTestingSlot.CenterOfSouth,
        IndexOfTestingSlot.SouthOfSouth,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
    });
  };
testGetIndexesOfShapeForVerticalLineOfSizeFiveBeginningOnRowFourAndColumnFour();

const testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForPrincipalDiagonal({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
        IndexOfTestingSlot.SoutheastOfNorthwest,
        IndexOfTestingSlot.NorthwestOfCenter,
        IndexOfTestingSlot.CenterOfCenter,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForPrincipalDiagonal({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.SoutheastOfCenter,
        IndexOfTestingSlot.NorthwestOfSoutheast,
        IndexOfTestingSlot.CenterOfSoutheast,
        IndexOfTestingSlot.SoutheastOfSoutheast,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
    });
  };
testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour();

const testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowZeroAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForSecondaryDiagonal({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthOfNorth,
        IndexOfTestingSlot.WestOfNorth,
        IndexOfTestingSlot.SoutheastOfNorthwest,
        IndexOfTestingSlot.NorthOfWest,
        IndexOfTestingSlot.WestOfWest,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowZeroAndColumnFour();

const testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForSecondaryDiagonal({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.SouthwestOfCenter,
        IndexOfTestingSlot.NortheastOfSouthwest,
        IndexOfTestingSlot.CenterOfSouthwest,
        IndexOfTestingSlot.SouthwestOfSouthwest,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 4,
      size: 5,
    });
  };
testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour();

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForRectangle({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
      ],
      horizontalSize: 2,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      verticalSize: 2,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForRectangle({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.EastOfCenter,
        IndexOfTestingSlot.SouthOfCenter,
        IndexOfTestingSlot.SoutheastOfCenter,
      ],
      horizontalSize: 2,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      verticalSize: 2,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowFourAndColumnFour();

const testGetIndexesOfShapeForRectangleOfSizeThreeByTwoBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForRectangle({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
        IndexOfTestingSlot.EastOfNorthwest,
      ],
      horizontalSize: 3,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      verticalSize: 2,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByTwoBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForRectangle({
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
      horizontalSize: 3,
      initialColumnIndex: 0,
      initialRowIndex: 0,
      verticalSize: 3,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForRectangle({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.EastOfCenter,
        IndexOfTestingSlot.WestOfEast,
        IndexOfTestingSlot.SouthOfCenter,
        IndexOfTestingSlot.SoutheastOfCenter,
        IndexOfTestingSlot.SouthwestOfEast,
        IndexOfTestingSlot.NorthOfSouth,
        IndexOfTestingSlot.NortheastOfSouth,
        IndexOfTestingSlot.NorthwestOfSoutheast,
      ],
      horizontalSize: 3,
      initialColumnIndex: 4,
      initialRowIndex: 4,
      verticalSize: 3,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowFourAndColumnFour();
