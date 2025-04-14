import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForRectangle } from "./getIndexesOfShapeForRectangle.js";

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwo = ({
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
    horizontalSize: 2,
    initialColumnIndex,
    initialRowIndex,
    verticalSize: 2,
  });
};

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowFourAndColumnFour =
  (): void => {
    testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.CenterOfCenter,
        IndexOfTestingSlot.EastOfCenter,
        IndexOfTestingSlot.SouthOfCenter,
        IndexOfTestingSlot.SoutheastOfCenter,
      ],
      initialColumnIndex: 4,
      initialRowIndex: 4,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeTwoByTwoBeginningOnRowFourAndColumnFour();
