import type { getIndexesOfShape } from "../Shape.js";

const encodeIndexesOfShape = ({
  indexesOfShape,
  surround = true,
}: {
  indexesOfShape: ReturnType<typeof getIndexesOfShape>;
  surround?: boolean;
}): string => {
  const encodedIndexesOfShape = indexesOfShape.join(", ");
  return surround ? `[${encodedIndexesOfShape}]` : encodedIndexesOfShape;
};

export { encodeIndexesOfShape };
