import type { Integer } from "@repo/core/types.js";

import type {
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  Shape,
} from "../ConnectFourShape.js";

interface ConnectFourShapeWithData<
  GenericKeyOfConnectFourShape extends string = string,
> {
  keyOfShape: GenericKeyOfConnectFourShape;
  requiredParams: RequiredParamsOfConnectFourShape;
  result: ResultOfConnectFourShape;
}

type RecordOfConnectFourShapesWithData<
  GenericRecordOfRequiredParamsAndResultOfConnectFourShapes extends
    RecordOfRequiredParamsAndResultOfConnectFourShapes,
> = {
  [GenericKeyOfConnectFourShape in keyof GenericRecordOfRequiredParamsAndResultOfConnectFourShapes]: ConnectFourShapeWithData<
    GenericKeyOfConnectFourShape & string
  >;
};

type RecordOfRequiredParamsAndResultOfConnectFourShapes = Record<
  string,
  RequiredParamsAndResultOfConnectFourShape
>;

interface RequiredParamsAndResultOfConnectFourShape {
  requiredParams: RequiredParamsOfConnectFourShape;
  result: ResultOfConnectFourShape;
}

interface RequiredParamsOfConnectFourShape {
  indexOfPlayerWhoIsOccupyingShape: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingShape
  >;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}

interface ResultOfConnectFourShape {
  indexesOfSlots: ReturnType<typeof getIndexesOfSlots>;
}

const createConnectFourShapesWithData = <
  GenericRecordOfRequiredParamsAndResultOfConnectFourShapes extends
    RecordOfRequiredParamsAndResultOfConnectFourShapes,
>({
  recordOfRequiredParamsAndResult,
}: {
  recordOfRequiredParamsAndResult: GenericRecordOfRequiredParamsAndResultOfConnectFourShapes;
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
          } satisfies ConnectFourShapeWithData,
        ] as const,
    ),
  ) as RecordOfConnectFourShapesWithData<GenericRecordOfRequiredParamsAndResultOfConnectFourShapes>;

export type {
  ConnectFourShapeWithData,
  RecordOfRequiredParamsAndResultOfConnectFourShapes,
  RequiredParamsAndResultOfConnectFourShape,
  RequiredParamsOfConnectFourShape,
  ResultOfConnectFourShape,
};
export { createConnectFourShapesWithData };
