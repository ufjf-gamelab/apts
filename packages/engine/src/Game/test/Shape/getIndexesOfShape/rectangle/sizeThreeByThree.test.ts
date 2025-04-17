import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForRectangle } from "./getIndexesOfShapeForRectangle.js";

const testGetIndexesOfShapeForRectangleOfSizeThreeByThree = ({
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
    verticalSize: 3,
  });
};

/* Row -3 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -3,
  });
})();

/* Row -2 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -3,
    initialIndexOfRow: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -2,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -2,
  });
})();

/* Row -1 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -1,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: -1,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: -1,
  });
})();

/* Row 0 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.SouthOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 0,
  });
})();

/* Row 3 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 3,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.NorthOfSouthwest,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.SoutheastOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.NorthOfSouthwest,
      IndexOfTestingSlot.NortheastOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 4,
  });
})();

/* Row 6 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.NorthOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.NorthOfSouthwest,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.EastOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.WestOfSoutheast,
      IndexOfTestingSlot.SouthOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
      IndexOfTestingSlot.SouthwestOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.WestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SouthwestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 6,
  });
})();

/* Row 7 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SouthwestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 7,
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
    initialIndexOfColumn: 7,
    initialIndexOfRow: 7,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
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
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 8,
  });
})();

/* Row 9 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 9,
  });
})();
