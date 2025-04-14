import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

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
  testGetIndexesOfShapeForLine({
    direction: "vertical",
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    size,
  });
};

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
