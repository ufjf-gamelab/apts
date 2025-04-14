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

const testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowZeroAndColumnZero =
  (): void => {
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
  };
testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowZeroAndColumnZero();

const testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour =
  (): void => {
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
  };
testGetIndexesOfShapeForPrincipalDiagonalOfSizeFiveBeginningOnRowFourAndColumnFour();
