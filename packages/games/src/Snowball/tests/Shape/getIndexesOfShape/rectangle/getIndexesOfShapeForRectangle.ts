import type { Integer } from "@repo/engine/types.js";

import {
  getFormattedDescriptorOfShape,
  type getIndexesOfShape,
  type Rectangle,
  type Shape,
} from "../../../../Shape.js";
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
  const shape: Shape = {
    horizontalSize,
    type: "rectangle",
    verticalSize,
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

export { testGetIndexesOfShapeForRectangle };
