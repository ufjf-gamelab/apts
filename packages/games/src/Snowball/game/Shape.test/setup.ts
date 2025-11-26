import type { Integer } from "@repo/engine_core/types.js";

import type {
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  Shape,
} from "../Shape.js";

import { type RecordOfRequiredParamsAndResultOfSnowballShapes } from "./records.js";

type ExtendedSnowballShapesWithData<
  ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes extends
    RecordOfRequiredParamsAndResultOfSnowballShapes,
> = {
  [K in keyof ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes]: {
    keyOfShape: keyof ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes;
    params: RequiredParamsOfSnowballShape;
    result: ResultOfSnowballShape;
  };
};

interface RequiredParamsAndResultOfSnowballShape {
  params: RequiredParamsOfSnowballShape;
  result: ResultOfSnowballShape;
}

interface RequiredParamsOfSnowballShape {
  indexOfPlayerWhoIsOccupyingShape: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingShape
  >;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}

interface ResultOfSnowballShape {
  indexesOfSlots: ReturnType<typeof getIndexesOfSlots>;
  score: ReturnType<
    typeof getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots
  >;
}

interface SnowballShapeWithData {
  keyOfShape: string;
  params: RequiredParamsOfSnowballShape;
  result: ResultOfSnowballShape;
}

const createSnowballShapesWithData = <
  ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes extends
    RecordOfRequiredParamsAndResultOfSnowballShapes,
>({
  recordOfRequiredParamsAndResult,
}: {
  recordOfRequiredParamsAndResult: ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes;
}): ExtendedSnowballShapesWithData<ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes> => {
  type ResultType = {
    [K in keyof ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes]: {
      keyOfShape: keyof ExtendedRecordOfRequiredParamsAndResultOfSnowballShapes;
      params: RequiredParamsOfSnowballShape;
      result: ResultOfSnowballShape;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsAndResult, which RecordOfParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfRequiredParamsAndResult).map(
      ([keyOfShape, paramsAndResult]) =>
        [
          keyOfShape,
          {
            keyOfShape,
            params: paramsAndResult.params,
            result: paramsAndResult.result,
          } satisfies SnowballShapeWithData,
        ] as const,
    ),
  ) as ResultType;
};

export type {
  RequiredParamsAndResultOfSnowballShape,
  RequiredParamsOfSnowballShape,
  ResultOfSnowballShape,
  SnowballShapeWithData,
};
export { createSnowballShapesWithData };
