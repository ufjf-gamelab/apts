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

const testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowZeroAndColumnFour =
  (): void => {
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
  };
testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowZeroAndColumnFour();

const testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour =
  (): void => {
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
  };
testGetIndexesOfShapeForSecondaryDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour();
