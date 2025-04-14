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
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
    size: 5,
  });
})();
