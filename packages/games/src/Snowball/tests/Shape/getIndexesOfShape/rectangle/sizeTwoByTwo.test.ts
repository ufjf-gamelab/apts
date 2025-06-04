import type { Integer } from "@repo/engine/types.js";

import type { getIndexesOfShape } from "../../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForRectangle } from "./getIndexesOfShapeForRectangle.js";

const testGetIndexesOfShapeForRectangleOfSizeTwoByTwo = ({
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
    horizontalSize: 2,
    initialIndexOfColumn,
    initialIndexOfRow,
    verticalSize: 2,
  });
};

/* Row -2 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -2,
  });
})();

/* Row -1 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -1,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -1,
  });
})();

/* Row 0 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 0,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.SouthOfWest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 4,
  });
})();

/* Row 7 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 7,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 7,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 7,
  });
})();

/* Row 8 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 8,
  });
})();

/* Row 9 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeTwoByTwo({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 9,
  });
})();
