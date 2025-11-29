import type { Integer } from "@repo/engine_core/types.js";

import type {
  getIndexesOfSlots,
  getIndexOfPlayerWhoIsOccupyingShape,
  Shape,
} from "../Shape.js";

type RecordOfRequiredParamsAndResultOfTicTacToeShapes = Record<
  string,
  RequiredParamsAndResultOfTicTacToeShape
>;

type RecordOfTicTacToeShapesWithData<
  GenericRecordOfRequiredParamsAndResultOfTicTacToeShapes extends
    RecordOfRequiredParamsAndResultOfTicTacToeShapes,
> = {
  [GenericKeyOfTicTacToeShape in keyof GenericRecordOfRequiredParamsAndResultOfTicTacToeShapes]: TicTacToeShapeWithData<
    GenericKeyOfTicTacToeShape & string
  >;
};

interface RequiredParamsAndResultOfTicTacToeShape {
  requiredParams: RequiredParamsOfTicTacToeShape;
  result: ResultOfTicTacToeShape;
}

interface RequiredParamsOfTicTacToeShape {
  indexOfPlayerWhoIsOccupyingShape: ReturnType<
    typeof getIndexOfPlayerWhoIsOccupyingShape
  >;
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}

interface ResultOfTicTacToeShape {
  indexesOfSlots: ReturnType<typeof getIndexesOfSlots>;
}

interface TicTacToeShapeWithData<
  GenericKeyOfTicTacToeShape extends string = string,
> {
  keyOfShape: GenericKeyOfTicTacToeShape;
  requiredParams: RequiredParamsOfTicTacToeShape;
  result: ResultOfTicTacToeShape;
}

const createTicTacToeShapesWithData = <
  GenericRecordOfRequiredParamsAndResultOfTicTacToeShapes extends
    RecordOfRequiredParamsAndResultOfTicTacToeShapes,
>({
  recordOfRequiredParamsAndResult,
}: {
  recordOfRequiredParamsAndResult: GenericRecordOfRequiredParamsAndResultOfTicTacToeShapes;
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
          } satisfies TicTacToeShapeWithData,
        ] as const,
    ),
  ) as RecordOfTicTacToeShapesWithData<GenericRecordOfRequiredParamsAndResultOfTicTacToeShapes>;

export type {
  RecordOfRequiredParamsAndResultOfTicTacToeShapes,
  RequiredParamsAndResultOfTicTacToeShape,
  RequiredParamsOfTicTacToeShape,
  ResultOfTicTacToeShape,
  TicTacToeShapeWithData,
};
export { createTicTacToeShapesWithData };
