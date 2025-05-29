import { expect, test } from "vitest";

import { COLUMN_LENGTH, ROW_LENGTH } from "../../Game.js";
import { getIndexesOfShape, type Shape } from "../../Shape.js";
import { encodeIndexesOfShape } from "../encode.js";
import { type TestShapeParams } from "../setup.js";

const getIndexesOfShapeShouldReturn = ({
  expectedIndexesOfShape,
  initialIndexOfColumn,
  initialIndexOfRow,
  shape,
  testDescriptor,
}: TestShapeParams & {
  expectedIndexesOfShape: ReturnType<typeof getIndexesOfShape>;
  shape: Shape;
}): void => {
  test(`${testDescriptor}: getIndexesOfShape() should return {[${encodeIndexesOfShape({ indexesOfShape: expectedIndexesOfShape })}]}`, () => {
    const indexesOfShape = getIndexesOfShape({
      columnLength: COLUMN_LENGTH,
      initialIndexOfColumn,
      initialIndexOfRow,
      rowLength: ROW_LENGTH,
      shape,
    });

    expect(indexesOfShape).not.toBe(expectedIndexesOfShape);
    expect(indexesOfShape).toStrictEqual(expectedIndexesOfShape);
  });
};

export { getIndexesOfShapeShouldReturn };
