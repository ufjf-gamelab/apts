import type { Integer } from "@repo/engine_core/types.js";

import type { getIndexesOfShape } from "../../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForVerticalLine = ({
  expectedIndexesOfShape,
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Integer;
}): void => {
  testGetIndexesOfShapeForLine({
    direction: "vertical",
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    size,
  });
};

/* Row -5 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 8,
    initialIndexOfRow: -5,
    size: 5,
  });
})();

/* Row -4 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNorth],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

/* Row -3 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

/* Row -2 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

/* Row -1 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

/* Row 0 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.EastOfEast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

/* Row 5 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

/* Row 6 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

/* Row 7 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

/* Row 8 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthOfSouth],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

/* Row 9 */

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 9,
    size: 5,
  });
})();
