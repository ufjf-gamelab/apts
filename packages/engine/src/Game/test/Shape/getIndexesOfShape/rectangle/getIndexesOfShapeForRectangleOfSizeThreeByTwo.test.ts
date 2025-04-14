import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForRectangle } from "./getIndexesOfShapeForRectangle.js";

const testGetIndexesOfShapeForRectangleOfSizeThreeByTwo = ({
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
    verticalSize: 2,
  });
};

const testGetIndexesOfShapeForRectangleOfSizeThreeByTwoBeginningOnRowZeroAndColumnZero =
  (): void => {
    testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
      expectedIndexesOfShape: [
        IndexOfTestingSlot.NorthwestOfNorthwest,
        IndexOfTestingSlot.NorthOfNorthwest,
        IndexOfTestingSlot.NortheastOfNorthwest,
        IndexOfTestingSlot.WestOfNorthwest,
        IndexOfTestingSlot.CenterOfNorthwest,
        IndexOfTestingSlot.EastOfNorthwest,
      ],
      initialColumnIndex: 0,
      initialRowIndex: 0,
    });
  };
testGetIndexesOfShapeForRectangleOfSizeThreeByTwoBeginningOnRowZeroAndColumnZero();
