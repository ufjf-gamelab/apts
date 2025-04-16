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
  initialIndexOfColumn,
  initialIndexOfRow,
  size,
}: {
  direction: Line["direction"];
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  size: Line["size"];
}): void => {
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    shape: {
      direction,
      size,
      type: "line",
    },
    testDescriptor: `${formatDirection(direction)} of size ${size} beginning on row ${initialIndexOfRow} and column ${initialIndexOfColumn}`,
  });
};

export { testGetIndexesOfShapeForLine };
