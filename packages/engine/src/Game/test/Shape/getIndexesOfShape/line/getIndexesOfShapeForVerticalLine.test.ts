import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForVerticalLine = ({
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
    direction: "vertical",
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    size,
  });
};

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 0,
    initialRowIndex: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 4,
    initialRowIndex: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 8,
    initialRowIndex: -5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: 0,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthOfNorth],
    initialColumnIndex: 4,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialColumnIndex: 8,
    initialRowIndex: -4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.CenterOfNorth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNortheast,
      IndexOfTestingSlot.EastOfNortheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: -3,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.WestOfNorthwest,
      IndexOfTestingSlot.SouthwestOfNorthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: -2,
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
    initialColumnIndex: 4,
    initialRowIndex: -2,
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
    initialColumnIndex: 8,
    initialRowIndex: -2,
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
    ],
    initialColumnIndex: 0,
    initialRowIndex: -1,
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
    initialColumnIndex: 4,
    initialRowIndex: -1,
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
    initialColumnIndex: 8,
    initialRowIndex: -1,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: -1,
    initialRowIndex: 0,
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
    initialColumnIndex: 0,
    initialRowIndex: 0,
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
    initialColumnIndex: 4,
    initialRowIndex: 0,
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
    initialColumnIndex: 8,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 4,
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
    initialColumnIndex: 4,
    initialRowIndex: 4,
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
    initialColumnIndex: 8,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfWest,
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 5,
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
    initialColumnIndex: 4,
    initialRowIndex: 5,
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
    initialColumnIndex: 8,
    initialRowIndex: 5,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfSouthwest,
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 6,
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
    initialColumnIndex: 4,
    initialRowIndex: 6,
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
    initialColumnIndex: 8,
    initialRowIndex: 6,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouthwest,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.EastOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 8,
    initialRowIndex: 7,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialColumnIndex: 0,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthOfSouth],
    initialColumnIndex: 4,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 0,
    initialRowIndex: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 4,
    initialRowIndex: 9,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForVerticalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 8,
    initialRowIndex: 9,
    size: 5,
  });
})();
