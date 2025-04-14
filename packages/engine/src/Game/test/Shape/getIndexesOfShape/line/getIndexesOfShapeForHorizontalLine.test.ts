import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

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
  testGetIndexesOfShapeForLine({
    direction: "horizontal",
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    size,
  });
};

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeFive =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [],
      initialColumnIndex: -5,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeFive();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeFour =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
      initialColumnIndex: -4,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeFour();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeThree =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
      ],
      initialColumnIndex: -3,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeThree();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeTwo =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
      ],
      initialColumnIndex: -2,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeTwo();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeOne =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
        IndexOfTestingSlot.NorthwestOfNorth,
      ],
      initialColumnIndex: -1,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNegativeOne();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthOfNorth,
        IndexOfTestingSlot.NortheastOfNorth,
        IndexOfTestingSlot.NorthwestOfNortheast,
        IndexOfTestingSlot.NorthOfNortheast,
        IndexOfTestingSlot.NortheastOfNortheast,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnFour();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnFive =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NortheastOfNorth,
        IndexOfTestingSlot.NorthwestOfNortheast,
        IndexOfTestingSlot.NorthOfNortheast,
        IndexOfTestingSlot.NortheastOfNortheast,
      ],
      initialColumnIndex: 5,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnFive();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnSix =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNortheast,
        IndexOfTestingSlot.NorthOfNortheast,
        IndexOfTestingSlot.NortheastOfNortheast,
      ],
      initialColumnIndex: 6,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnSix();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnSeven =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthOfNortheast,
        IndexOfTestingSlot.NortheastOfNortheast,
      ],
      initialColumnIndex: 7,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnSeven();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnEight =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
      initialColumnIndex: 8,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnEight();

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNine =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [],
      initialColumnIndex: 9,
      initialRowIndex: 0,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowZeroAndColumnNine();

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

const testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowEightAndColumnEight =
  (): void => {
    testGetIndexesOfShapeForHorizontalLine({
      expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
      initialColumnIndex: 8,
      initialRowIndex: 8,
      size: 5,
    });
  };
testGetIndexesOfShapeForHorizontalLineOfSizeFiveBeginningOnRowEightAndColumnEight();
