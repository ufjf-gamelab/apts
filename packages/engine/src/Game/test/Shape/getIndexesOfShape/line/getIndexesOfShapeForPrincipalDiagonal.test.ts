import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForPrincipalDiagonal = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  size,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Integer;
}): void => {
  testGetIndexesOfShapeForLine({
    direction: "principalDiagonal",
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    size,
  });
};

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: -4,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNorthwest],
    initialColumnIndex: -3,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNorthwest],
    initialColumnIndex: -2,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorth],
    initialColumnIndex: -1,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNorth],
    initialColumnIndex: 0,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNorth],
    initialColumnIndex: 1,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNortheast],
    initialColumnIndex: 2,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNortheast],
    initialColumnIndex: 3,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialColumnIndex: 4,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 5,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfNorthwest],
    initialColumnIndex: -4,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.CenterOfNorthwest,
    ],
    initialColumnIndex: -3,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
    ],
    initialColumnIndex: 0,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialColumnIndex: 4,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialColumnIndex: 5,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfNorthwest],
    initialColumnIndex: -4,
    initialRowIndex: -2,
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
    initialColumnIndex: -2,
    initialRowIndex: -2,
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
    initialColumnIndex: 0,
    initialRowIndex: -2,
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
    initialColumnIndex: 4,
    initialRowIndex: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialColumnIndex: 5,
    initialRowIndex: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfWest],
    initialColumnIndex: -4,
    initialRowIndex: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfWest,
    ],
    initialColumnIndex: -3,
    initialRowIndex: -1,
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
    initialColumnIndex: -2,
    initialRowIndex: -1,
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
    initialColumnIndex: -1,
    initialRowIndex: -1,
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
    initialColumnIndex: 0,
    initialRowIndex: -1,
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
    initialColumnIndex: 4,
    initialRowIndex: -1,
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
    initialColumnIndex: 5,
    initialRowIndex: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: -5,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfWest],
    initialColumnIndex: -4,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfWest,
      IndexOfTestingSlot.CenterOfWest,
    ],
    initialColumnIndex: -3,
    initialRowIndex: 0,
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
    initialColumnIndex: -2,
    initialRowIndex: 0,
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
    initialColumnIndex: -1,
    initialRowIndex: 0,
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
    initialColumnIndex: 0,
    initialRowIndex: 0,
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
    initialColumnIndex: 1,
    initialRowIndex: 0,
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
    initialColumnIndex: 2,
    initialRowIndex: 0,
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
    initialColumnIndex: 3,
    initialRowIndex: 0,
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
    initialColumnIndex: 4,
    initialRowIndex: 0,
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
    initialColumnIndex: 5,
    initialRowIndex: 0,
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
    initialColumnIndex: 6,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialColumnIndex: 8,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfWest],
    initialColumnIndex: -4,
    initialRowIndex: 1,
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
    initialColumnIndex: 1,
    initialRowIndex: 1,
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
    initialColumnIndex: 4,
    initialRowIndex: 1,
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
    initialColumnIndex: 5,
    initialRowIndex: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNortheast,
      IndexOfTestingSlot.SoutheastOfNortheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfSouthwest],
    initialColumnIndex: -4,
    initialRowIndex: 2,
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
    initialColumnIndex: 2,
    initialRowIndex: 2,
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
    initialColumnIndex: 4,
    initialRowIndex: 2,
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
    initialColumnIndex: 5,
    initialRowIndex: 2,
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
    initialColumnIndex: 6,
    initialRowIndex: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfSouthwest],
    initialColumnIndex: -4,
    initialRowIndex: 3,
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
    initialColumnIndex: 3,
    initialRowIndex: 3,
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
    initialColumnIndex: 4,
    initialRowIndex: 3,
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
    initialColumnIndex: 5,
    initialRowIndex: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialColumnIndex: -4,
    initialRowIndex: 4,
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
    initialColumnIndex: 4,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: -4,
    initialRowIndex: 5,
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
    initialColumnIndex: 4,
    initialRowIndex: 5,
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
    initialColumnIndex: 3,
    initialRowIndex: 5,
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
    initialColumnIndex: 5,
    initialRowIndex: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfSouthwest,
      IndexOfTestingSlot.WestOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialColumnIndex: 2,
    initialRowIndex: 6,
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
    initialColumnIndex: 4,
    initialRowIndex: 6,
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
    initialColumnIndex: 6,
    initialRowIndex: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialColumnIndex: 1,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialColumnIndex: 0,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthOfSouth],
    initialColumnIndex: 4,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 4,
    initialRowIndex: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForPrincipalDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 9,
    size: 5,
  });
})();
