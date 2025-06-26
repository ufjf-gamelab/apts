import type { Integer } from "@repo/engine_core/types.js";

import type { getIndexesOfShape } from "../../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForSecondaryDiagonal = ({
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
    direction: "secondaryDiagonal",
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    size,
  });
};

/* Row -5 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 12,
    initialIndexOfRow: -5,
    size: 5,
  });
})();

/* Row -4 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

/* Row -3 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
    ],
    initialIndexOfColumn: 11,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfNortheast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

/* Row -2 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
    ],
    initialIndexOfColumn: 10,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfNortheast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

/* Row -1 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
    ],
    initialIndexOfColumn: 9,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfEast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

/* Row 0 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialIndexOfColumn: 2,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.NorthwestOfWest,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthwestOfNorth,
      IndexOfTestingSlot.NortheastOfWest,
      IndexOfTestingSlot.CenterOfWest,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.EastOfWest,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.WestOfCenter,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfNortheast,
      IndexOfTestingSlot.SouthOfNortheast,
      IndexOfTestingSlot.NorthwestOfEast,
      IndexOfTestingSlot.EastOfCenter,
    ],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.WestOfEast,
    ],
    initialIndexOfColumn: 10,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.CenterOfEast,
    ],
    initialIndexOfColumn: 11,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfEast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 13,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

/* Row 1 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfNorthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SouthwestOfNorth,
      IndexOfTestingSlot.NortheastOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfEast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

/* Row 2 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfNorthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
      IndexOfTestingSlot.WestOfWest,
    ],
    initialIndexOfColumn: 2,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfSoutheast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

/* Row 3 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfWest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.SoutheastOfWest,
      IndexOfTestingSlot.NorthOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfSoutheast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfWest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 12,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

/* Row 5 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfWest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NorthwestOfSouth,
      IndexOfTestingSlot.EastOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 12,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

/* Row 6 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfSouthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 2,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

/* Row 7 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfSouthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthwestOfSouth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SouthwestOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

/* Row 8 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthOfSouth],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

/* Row 9 */

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 9,
    size: 5,
  });
})();
