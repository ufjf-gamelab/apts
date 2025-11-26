import type { IndexOfMove, Move, ParamsOfMove } from "../Move.js";

type DerivedParamsOfMove = ParamsOfMove;

interface MoveWithData<
  GenericMove extends Move<GenericMove>,
  GenericRequiredParamsOfMove,
  GenericKeyOfMove extends string = string,
> {
  keyOfMove: GenericKeyOfMove;
  move: GenericMove;
  requiredParams: GenericRequiredParamsOfMove;
}

interface MoveWithDataAndIndex<
  GenericMove extends Move<GenericMove>,
  GenericRequiredParamsOfMove,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  >,
> {
  indexOfMove: IndexOfMove;
  moveWithData: GenericMoveWithData;
}

type RecordOfMovesWithData<
  GenericMove extends Move<GenericMove>,
  GenericRequiredParamsOfMove,
  GenericRecordOfRequiredParamsOfMoves extends
    RecordOfRequiredParamsOfMoves<GenericRequiredParamsOfMove> = RecordOfRequiredParamsOfMoves<GenericRequiredParamsOfMove>,
> = {
  [GenericKeyOfMove in keyof GenericRecordOfRequiredParamsOfMoves]: MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove,
    GenericKeyOfMove & string
  >;
};

type RecordOfMovesWithDataAndIndex<
  GenericMove extends Move<GenericMove>,
  GenericRequiredParamsOfMove,
  GenericRecordOfRequiredParamsOfMoves extends
    RecordOfRequiredParamsOfMoves<GenericRequiredParamsOfMove> = RecordOfRequiredParamsOfMoves<GenericRequiredParamsOfMove>,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
> = {
  [GenericKeyOfMove in keyof GenericRecordOfRequiredParamsOfMoves]: MoveWithDataAndIndex<
    GenericMove,
    GenericRequiredParamsOfMove,
    GenericMoveWithData
  >;
};

type RecordOfRequiredParamsOfMoves<GenericRequiredParamsOfMove> = Record<
  string,
  GenericRequiredParamsOfMove
>;

type RequiredParamsOfMove = ParamsOfMove;

const deriveParamsOfMove = ({
  description,
  title,
}: RequiredParamsOfMove): DerivedParamsOfMove => ({
  description,
  title,
});

const createRecordOfMovesWithData = <
  GenericMove extends Move<GenericMove>,
  GenericDerivedParamsOfMove extends DerivedParamsOfMove,
  GenericRequiredParamsOfMove,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfMovesWithData extends RecordOfMovesWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfMoves,
}: {
  create: (derivedParams: GenericDerivedParamsOfMove) => GenericMove;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfMove,
  ) => GenericDerivedParamsOfMove;
  recordOfRequiredParamsOfMoves: RecordOfRequiredParamsOfMoves<GenericRequiredParamsOfMove>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfMoves, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfMoves).map(
      ([keyOfMove, requiredParams]) =>
        [
          keyOfMove,
          {
            keyOfMove,
            move: create(deriveParams(requiredParams)),
            requiredParams,
          } satisfies MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
        ] as const,
    ),
  ) as GenericRecordOfMovesWithData;

export type {
  DerivedParamsOfMove,
  MoveWithData,
  MoveWithDataAndIndex,
  RecordOfMovesWithData,
  RecordOfMovesWithDataAndIndex,
  RequiredParamsOfMove,
};
export { createRecordOfMovesWithData, deriveParamsOfMove };
