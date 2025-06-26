import type { Integer } from "@repo/engine_core/types.js";

import type { getIndexesOfShape } from "../../../../Shape.js";
import { IndexOfTestingSlot } from "../../../Slot/setup.js";
import { testGetIndexesOfShapeForLine } from "./getIndexesOfShapeForLine.js";

const testGetIndexesOfShapeForHorizontalLine = ({
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
    direction: "horizontal",
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    size,
  });
};

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -5,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NorthwestOfNorthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthwestOfNorthwest,
      IndexOfTestingSlot.NorthOfNorthwest,
    ],
    initialIndexOfColumn: -3,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: -2,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 5,
    initialIndexOfRow: 0,
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
    initialIndexOfColumn: 6,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.NorthOfNortheast,
      IndexOfTestingSlot.NortheastOfNortheast,
    ],
    initialIndexOfColumn: 7,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.NortheastOfNortheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 0,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -5,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.WestOfWest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.WestOfWest,
      IndexOfTestingSlot.CenterOfWest,
    ],
    initialIndexOfColumn: -3,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: -2,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 4,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.EastOfEast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 4,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: -5,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SouthwestOfSouthwest],
    initialIndexOfColumn: -4,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [
      IndexOfTestingSlot.SouthwestOfSouthwest,
      IndexOfTestingSlot.SouthOfSouthwest,
    ],
    initialIndexOfColumn: -3,
    initialIndexOfRow: 8,
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
    initialIndexOfColumn: -2,
    initialIndexOfRow: 8,
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
    initialIndexOfColumn: -1,
    initialIndexOfRow: 8,
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
    initialIndexOfColumn: 0,
    initialIndexOfRow: 8,
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
    initialIndexOfColumn: 4,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [IndexOfTestingSlot.SoutheastOfSoutheast],
    initialIndexOfColumn: 8,
    initialIndexOfRow: 8,
    size: 5,
  });
})();

((): void => {
  testGetIndexesOfShapeForHorizontalLine({
    expectedIndexesOfShape: [],
    initialIndexOfColumn: 9,
    initialIndexOfRow: 8,
    size: 5,
  });
})();
