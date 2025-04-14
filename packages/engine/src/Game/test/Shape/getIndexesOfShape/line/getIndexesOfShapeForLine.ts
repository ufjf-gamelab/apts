import type { Integer } from "../../../../../types.js";
import {
  formatDirection,
  type getIndexesOfShape,
  type Line,
} from "../../../Shape.js";
import { getIndexesOfShapeShouldReturn } from "../getIndexesOfShape.js";

const testGetIndexesOfShapeForLine = ({
  direction,
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  size,
}: {
  direction: Line["direction"];
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialColumnIndex: Integer;
  initialRowIndex: Integer;
  size: Line["size"];
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialColumnIndex,
    initialRowIndex,
    shape: {
      direction,
      size,
      type: "line",
    },
    testDescriptor: `${formatDirection(direction)} of size ${size} beginning on row ${initialRowIndex} and column ${initialColumnIndex}`,
  });
};

export { testGetIndexesOfShapeForLine };
