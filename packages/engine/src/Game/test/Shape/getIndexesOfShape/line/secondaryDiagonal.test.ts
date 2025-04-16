import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForSecondaryDiagonal = ({
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
    direction: "secondaryDiagonal",
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    size,
  });
};

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 4,
    initialRowIndex: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 12,
    initialRowIndex: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: 4,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialColumnIndex: 12,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialColumnIndex: 4,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.CenterOfNortheast,
    ],
    initialColumnIndex: 11,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfNortheast],
    initialColumnIndex: 12,
    initialRowIndex: -3,
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
    initialColumnIndex: 4,
    initialRowIndex: -2,
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
    initialColumnIndex: 10,
    initialRowIndex: -2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfNortheast],
    initialColumnIndex: 12,
    initialRowIndex: -2,
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
    initialColumnIndex: 4,
    initialRowIndex: -1,
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
    initialColumnIndex: 9,
    initialRowIndex: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfEast],
    initialColumnIndex: 12,
    initialRowIndex: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: -1,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: 0,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialColumnIndex: 1,
    initialRowIndex: 0,
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
    initialColumnIndex: 2,
    initialRowIndex: 0,
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
    initialColumnIndex: 3,
    initialRowIndex: 0,
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
    initialColumnIndex: 4,
    initialRowIndex: 0,
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
    initialColumnIndex: 5,
    initialRowIndex: 0,
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
    initialColumnIndex: 6,
    initialRowIndex: 0,
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
    initialColumnIndex: 7,
    initialRowIndex: 0,
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
    initialColumnIndex: 8,
    initialRowIndex: 0,
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
    initialColumnIndex: 9,
    initialRowIndex: 0,
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
    initialColumnIndex: 10,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfEast,
      IndexOfTestingSlot.CenterOfEast,
    ],
    initialColumnIndex: 11,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfEast],
    initialColumnIndex: 12,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 13,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfNorthwest],
    initialColumnIndex: 0,
    initialRowIndex: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialColumnIndex: 1,
    initialRowIndex: 1,
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
    initialColumnIndex: 4,
    initialRowIndex: 1,
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
    initialColumnIndex: 7,
    initialRowIndex: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfEast],
    initialColumnIndex: 12,
    initialRowIndex: 1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfNorthwest],
    initialColumnIndex: 0,
    initialRowIndex: 2,
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
    initialColumnIndex: 2,
    initialRowIndex: 2,
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
    initialColumnIndex: 4,
    initialRowIndex: 2,
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
    initialColumnIndex: 6,
    initialRowIndex: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfSoutheast],
    initialColumnIndex: 12,
    initialRowIndex: 2,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfWest],
    initialColumnIndex: 0,
    initialRowIndex: 3,
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
    initialColumnIndex: 3,
    initialRowIndex: 3,
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
    initialColumnIndex: 5,
    initialRowIndex: 3,
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
    initialColumnIndex: 4,
    initialRowIndex: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfSoutheast],
    initialColumnIndex: 12,
    initialRowIndex: 3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfWest],
    initialColumnIndex: 0,
    initialRowIndex: 4,
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
    initialColumnIndex: 4,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 12,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfWest],
    initialColumnIndex: 0,
    initialRowIndex: 5,
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
    initialColumnIndex: 3,
    initialRowIndex: 5,
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
    initialColumnIndex: 4,
    initialRowIndex: 5,
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
    initialColumnIndex: 5,
    initialRowIndex: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 12,
    initialRowIndex: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfSouthwest],
    initialColumnIndex: 0,
    initialRowIndex: 6,
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
    initialColumnIndex: 2,
    initialRowIndex: 6,
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
    initialColumnIndex: 4,
    initialRowIndex: 6,
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
    initialColumnIndex: 6,
    initialRowIndex: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfSouthwest],
    initialColumnIndex: 0,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialColumnIndex: 1,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthwestOfSouth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSoutheast,
      IndexOfTestingSlot.SouthwestOfSoutheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialColumnIndex: 0,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthOfSouth],
    initialColumnIndex: 4,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 0,
    initialRowIndex: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForSecondaryDiagonal({
    expectedIndexesOfShape: [],
    initialColumnIndex: 4,
    initialRowIndex: 9,
    size: 5,
  });
})();
