import type { Integer } from "@repo/engine_core/types.js";

import {
  getFormattedDescriptorOfShape,
  type getIndexesOfShape,
  type Line,
  type Shape,
} from "../../../../Shape.js";
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
  const shape: Shape = {
    direction,
    size,
    type: "line",
  };
  getIndexesOfShapeShouldReturn({
    expectedIndexesOfShape,
    initialIndexOfColumn,
    initialIndexOfRow,
    shape,
    testDescriptor: getFormattedDescriptorOfShape({
      initialIndexOfColumn,
      initialIndexOfRow,
      shape,
    }),
  });
};

export { testGetIndexesOfShapeForLine };
