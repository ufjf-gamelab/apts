import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape } from "../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForHorizontalLine = ({
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
    direction: "horizontal",
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    size,
  });
};

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: -5,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialColumnIndex: -4,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialColumnIndex: -3,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
    ],
    initialColumnIndex: -2,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
      IndexOfTestingSlot.NortheastOfNorthwest,
      IndexOfTestingSlot.NorthwestOfNorth,
      IndexOfTestingSlot.NorthOfNorth,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNorth,
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NortheastOfNorth,
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    initialColumnIndex: 5,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNortheast,
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    initialColumnIndex: 6,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    initialColumnIndex: 7,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialColumnIndex: 8,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: -5,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfWest],
    initialColumnIndex: -4,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
    ],
    initialColumnIndex: -3,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
    ],
    initialColumnIndex: -2,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
      IndexOfTestingSlot.EastOfWest,
      IndexOfTestingSlot.WestOfCenter,
      IndexOfTestingSlot.CenterOfCenter,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.CenterOfCenter,
      IndexOfTestingSlot.EastOfCenter,
      IndexOfTestingSlot.WestOfEast,
      IndexOfTestingSlot.CenterOfEast,
      IndexOfTestingSlot.EastOfEast,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfEast],
    initialColumnIndex: 8,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: -5,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialColumnIndex: -4,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialColumnIndex: -3,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
    ],
    initialColumnIndex: -2,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouth,
    ],
    initialColumnIndex: -1,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
      IndexOfTestingSlot.SoutheastOfSouthwest,
      IndexOfTestingSlot.SouthwestOfSouth,
      IndexOfTestingSlot.SouthOfSouth,
    ],
    initialColumnIndex: 0,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthOfSouth,
      IndexOfTestingSlot.SoutheastOfSouth,
      IndexOfTestingSlot.SouthwestOfSoutheast,
      IndexOfTestingSlot.SouthOfSoutheast,
      IndexOfTestingSlot.SoutheastOfSoutheast,
    ],
    initialColumnIndex: 4,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialColumnIndex: 8,
    initialRowIndex: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialColumnIndex: 9,
    initialRowIndex: 8,
    size: 5,
  });
})();
