import { expect, test } from "vitest";

import { COLUMN_LENGTH, ROW_LENGTH } from "../../Game.js";
import { getIndexesOfShape, type Shape } from "../../Shape.js";
import type { TestShapeParams } from "../setup.js";

const getIndexesOfShapeShouldReturn = ({
  expectedIndexesOfShape,
  initialColumnIndex,
  initialRowIndex,
  shape,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  shape: Shape;
}): void => {
  test(`${testDescriptor}: getIndexesOfShape() should return {${expectedIndexesOfShape.toString()}}`, () => {
    const indexesOfShape = getIndexesOfShape({
      columnLength: COLUMN_LENGTH,
      initialColumnIndex,
      initialRowIndex,
      rowLength: ROW_LENGTH,
      shape,
    });

    expect(indexesOfShape).not.toBe(expectedIndexesOfShape);
    expect(indexesOfShape).toStrictEqual(expectedIndexesOfShape);
  });
};

export { getIndexesOfShapeShouldReturn };
