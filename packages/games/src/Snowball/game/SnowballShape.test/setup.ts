import type { Integer } from "@repo/core/types.js";

import type {
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  getScoreIncrementedWhenPlayerOccupiesShapeAtCoordinatesInSlots,
  Shape,
} from "../SnowballShape.js";

type RecordOfRequiredParamsAndResultOfSnowballShapes = Record<
  string,
  RequiredParamsAndResultOfSnowballShape
>;

type RecordOfSnowballShapesWithData<
  GenericRecordOfRequiredParamsAndResultOfSnowballShapes extends
    RecordOfRequiredParamsAndResultOfSnowballShapes,
> = {
  [GenericKeyOfSnowballShape in keyof GenericRecordOfRequiredParamsAndResultOfSnowballShapes]: SnowballShapeWithData<
    GenericKeyOfSnowballShape & string
  >;
};

interface RequiredParamsAndResultOfSnowballShape {
  requiredParams: RequiredParamsOfSnowballShape;
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

interface SnowballShapeWithData<
  GenericKeyOfSnowballShape extends string = string,
> {
  keyOfShape: GenericKeyOfSnowballShape;
  requiredParams: RequiredParamsOfSnowballShape;
  result: ResultOfSnowballShape;
}

const createSnowballShapesWithData = <
  GenericRecordOfRequiredParamsAndResultOfSnowballShapes extends
    RecordOfRequiredParamsAndResultOfSnowballShapes,
>({
  recordOfRequiredParamsAndResult,
}: {
  recordOfRequiredParamsAndResult: GenericRecordOfRequiredParamsAndResultOfSnowballShapes;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsAndResult, which RecordOfParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsAndResult).map(
      ([keyOfShape, paramsAndResult]) =>
        [
          keyOfShape,
          {
            keyOfShape,
            requiredParams: paramsAndResult.requiredParams,
            result: paramsAndResult.result,
          } satisfies SnowballShapeWithData,
        ] as const,
    ),
  ) as RecordOfSnowballShapesWithData<GenericRecordOfRequiredParamsAndResultOfSnowballShapes>;

export type {
  RecordOfRequiredParamsAndResultOfSnowballShapes,
  RequiredParamsAndResultOfSnowballShape,
  RequiredParamsOfSnowballShape,
  ResultOfSnowballShape,
  SnowballShapeWithData,
};
export { createSnowballShapesWithData };
