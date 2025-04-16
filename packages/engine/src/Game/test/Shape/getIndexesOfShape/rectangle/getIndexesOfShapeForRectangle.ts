import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape, Rectangle } from "../../../Shape.js";
import { getIndexesOfShapeShouldReturn } from "../getIndexesOfShape.js";

const testGetIndexesOfShapeForRectangle = ({
  expectedIndexesOfShape,
  horizontalSize,
  initialIndexOfColumn,
  initialIndexOfRow,
  verticalSize,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  horizontalSize: Rectangle["horizontalSize"];
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  verticalSize: Rectangle["verticalSize"];
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    shape: {
      horizontalSize,
      type: "rectangle",
      verticalSize,
    },
    testDescriptor: `rectangle of size ${horizontalSize}x${verticalSize} beginning on row ${initialIndexOfRow} and column ${initialIndexOfColumn}`,
  });
};

export { testGetIndexesOfShapeForRectangle };
