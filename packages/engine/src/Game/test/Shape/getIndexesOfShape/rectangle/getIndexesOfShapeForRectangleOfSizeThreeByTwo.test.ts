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

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: -2,
    initialRowIndex: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: -1,
    initialRowIndex: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: -2,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 0,
  });
})();

((): void => {
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
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: 8,
    initialRowIndex: 9,
  });
})();
