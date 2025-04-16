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

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: -1,
    initialRowIndex: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: -2,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: -1,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 0,
  });
})();

((): void => {
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
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.EastOfNorth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 0,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 0,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.SouthOfWest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 4,
  });
})();

((): void => {
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
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
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
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialColumnIndex: 8,
    initialRowIndex: 9,
  });
})();
