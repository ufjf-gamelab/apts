import type { Integer } from "../../../../../types.js";
import type { getIndexesOfShape, Rectangle } from "../../../Shape.js";
import { getIndexesOfShapeShouldReturn } from "../getIndexesOfShape.js";

const testGetIndexesOfShapeForRectangle = ({
  expectedIndexesOfShape,
  horizontalSize,
  initialColumnIndex,
  initialRowIndex,
  verticalSize,
}: {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  horizontalSize: Rectangle["horizontalSize"];
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  verticalSize: Rectangle["verticalSize"];
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      horizontalSize,
      type: "rectangle",
      verticalSize,
    },
    testDescriptor: `rectangle of size ${horizontalSize}x${verticalSize} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

export { testGetIndexesOfShapeForRectangle };
