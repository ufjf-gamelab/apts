import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForRectangle } from "./getIndexesOfShapeForRectangle.js";

const testGetIndexesOfShapeForRectangleOfSizeThreeByTwo = ({
  expectedIndexesOfShape,
  initialIndexOfColumn,
  initialIndexOfRow,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
}): void => {
  testGetIndexesOfShapeForRectangle({
    expectedIndexesOfShape,
    horizontalSize: 3,
    initialIndexOfColumn,
    initialIndexOfRow,
    verticalSize: 2,
  });
};

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -1,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 9,
  });
})();
