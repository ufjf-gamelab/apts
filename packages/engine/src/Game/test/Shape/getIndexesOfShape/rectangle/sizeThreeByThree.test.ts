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

/* Row -3 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialColumnIndex: -2,
    initialRowIndex: -3,
  });
})();

/* Row -2 */

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

/* Row -1 */

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

/* Row 0 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialColumnIndex: -2,
    initialRowIndex: 0,
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
    initialColumnIndex: 4,
    initialRowIndex: 0,
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
    initialColumnIndex: 6,
    initialRowIndex: 0,
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
    initialColumnIndex: -2,
    initialRowIndex: 4,
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
    initialColumnIndex: -1,
    initialRowIndex: 4,
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
    initialColumnIndex: 0,
    initialRowIndex: 4,
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
    initialColumnIndex: 6,
    initialRowIndex: 4,
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
    initialColumnIndex: 7,
    initialRowIndex: 4,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 4,
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
    initialColumnIndex: -2,
    initialRowIndex: 6,
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
    initialColumnIndex: -1,
    initialRowIndex: 6,
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
    initialColumnIndex: 0,
    initialRowIndex: 6,
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
    initialColumnIndex: 4,
    initialRowIndex: 6,
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
    initialColumnIndex: 6,
    initialRowIndex: 6,
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
    initialColumnIndex: 7,
    initialRowIndex: 6,
  });
})();

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 6,
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
    initialColumnIndex: 6,
    initialRowIndex: 7,
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

/* Row 8 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 6,
    initialRowIndex: 8,
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

/* Row 9 */

((): void => {
  testGetIndexesOfShapeForRectangleOfSizeThreeByThree({
    expectedIndexesOfShape: [],
    initialColumnIndex: 8,
    initialRowIndex: 9,
  });
})();
