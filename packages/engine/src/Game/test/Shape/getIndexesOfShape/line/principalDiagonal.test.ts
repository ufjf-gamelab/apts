import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForPrincipalDiagonal = ({
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
    direction: "principalDiagonal",
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    size,
  });
};

/* Row -4 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNorthwest],
    initialIndexOfColumn: -3,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNorthwest],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorth],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNorth],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNorth],
    initialIndexOfColumn: 1,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNortheast],
    initialIndexOfColumn: 2,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNortheast],
    initialIndexOfColumn: 3,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 5,
    initialIndexOfRow: -4,
    size: 5,
  });
})();

/* Row -3 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfNorthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    initialIndexOfColumn: -3,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialIndexOfColumn: 5,
    initialIndexOfRow: -3,
    size: 5,
  });
})();

/* Row -2 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfNorthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: -2,
    size: 5,
  });
})();

/* Row -1 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfWest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
    ],
    initialIndexOfColumn: -3,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.NortheastOfWest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SouthOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: -1,
    size: 5,
  });
})();

/* Row 0 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -5,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfWest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.CenterOfWest,
    ],
    initialIndexOfColumn: -3,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
      IndexOfTestingSlot.EastOfWest,
    ],
    initialIndexOfColumn: -2,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthOfNorthwest,
      IndexOfTestingSlot.NortheastOfWest,
      IndexOfTestingSlot.WestOfCenter,
    ],
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.EastOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorth,
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.EastOfCenter,
    ],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.WestOfNorth,
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.WestOfEast,
    ],
    initialIndexOfColumn: 2,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.NorthwestOfEast,
      IndexOfTestingSlot.CenterOfEast,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.EastOfEast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.WestOfNortheast,
      IndexOfTestingSlot.SouthOfNortheast,
      IndexOfTestingSlot.NortheastOfEast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

/* Row 1 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfWest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
    ],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNorth,
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.NorthwestOfEast,
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfNorth,
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.EastOfEast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 1,
    size: 5,
  });
})();

/* Row 2 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfSouthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
    ],
    initialIndexOfColumn: 2,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfNorth,
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfNorth,
      IndexOfTestingSlot.NorthwestOfEast,
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.SoutheastOfEast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfNortheast,
      IndexOfTestingSlot.NorthOfEast,
      IndexOfTestingSlot.EastOfEast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 2,
    size: 5,
  });
})();

/* Row 3 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfSouthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.SouthwestOfEast,
      IndexOfTestingSlot.NorthOfSoutheast,
      IndexOfTestingSlot.EastOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.SouthOfEast,
      IndexOfTestingSlot.NortheastOfSoutheast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 3,
    size: 5,
  });
})();

/* Row 4 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthOfWest,
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

/* Row 5 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfCenter,
      IndexOfTestingSlot.NortheastOfSouth,
      IndexOfTestingSlot.WestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfCenter,
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthwestOfSoutheast,
    ],
    initialIndexOfColumn: 3,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SoutheastOfCenter,
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 5,
    initialIndexOfRow: 5,
    size: 5,
  });
})();

/* Row 6 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialIndexOfColumn: 2,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfSouth,
      IndexOfTestingSlot.EastOfSouth,
      IndexOfTestingSlot.SouthwestOfSoutheast,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSoutheast,
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 6,
    initialIndexOfRow: 6,
    size: 5,
  });
})();

/* Row 7 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialIndexOfColumn: 1,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
    ],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 7,
    size: 5,
  });
})();

/* Row 8 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialIndexOfColumn: 0,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthOfSouth],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

/* Row 9 */

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 4,
    initialIndexOfRow: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 9,
    size: 5,
  });
})();
