import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForRectangle } from "./getIndexesOfShapeForRectangle.js";

const testGetIndexesOfShapeForRectangleOfSizeThreeByThree = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
}): void => {
  testGetIndexesOfShapeForRectangle({
    expectedIndexesOfShape,
    horizontalSize: 3,
    initialColumnIndex,
    initialRowIndex,
    verticalSize: 3,
  });
};

const testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
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
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
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
      initialColumnIndex: 4,
      initialRowIndex: 4,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByThreeBeginningOnRowFourAndColumnFour();
