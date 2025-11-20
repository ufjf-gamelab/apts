import type { Integer } from "@repo/engine_core/types.js";

import type {
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  Shape,
} from "../Shape.js";

import { recordOfParamsOfShapesForUnitTest } from "./records.js";

interface SnowballShapeParams {
  indexOfPlayerWhoIsOccupyingShape: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingShape
  >;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}

interface SnowballShapeResult {
  indexesOfSlots: ReturnType<typeof getIndexesOfSlots>;
}

interface SnowballShapeWithData {
  keyOfShape: string;
  params: SnowballShapeParams;
  result: SnowballShapeResult;
}

const createShapesWithData = <
  RecordOfParams extends Record<
    string,
    { params: SnowballShapeParams; result: SnowballShapeResult }
  >,
>({
  recordOfParams,
}: {
  recordOfParams: RecordOfParams;
}): {
  [K in keyof RecordOfParams]: {
    keyOfShape: keyof RecordOfParams;
    params: SnowballShapeParams;
    result: SnowballShapeResult;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfParams]: {
      keyOfShape: keyof RecordOfParams;
      params: SnowballShapeParams;
      result: SnowballShapeResult;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfParams, which RecordOfParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfParams).map(
      ([key, content]) =>
        [
          key,
          {
            keyOfShape: key,
            params: content.params,
            result: content.result,
          } satisfies SnowballShapeWithData,
        ] as const,
    ),
  ) as ResultType;
};

const shapesWithDataForUnitTest = createShapesWithData({
  recordOfParams: recordOfParamsOfShapesForUnitTest,
});

export type { SnowballShapeParams, SnowballShapeResult, SnowballShapeWithData };
export { shapesWithDataForUnitTest };
