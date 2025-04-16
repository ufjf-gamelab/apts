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

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialColumnIndex: -2,
    initialRowIndex: -3,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialColumnIndex: -3,
    initialRowIndex: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: -2,
    initialRowIndex: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialColumnIndex: -2,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 0,
  });
})();

((): void => {
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
})();

((): void => {
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
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
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
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialColumnIndex: 8,
    initialRowIndex: 9,
  });
})();
