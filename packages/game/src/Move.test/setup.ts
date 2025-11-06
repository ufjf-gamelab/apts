import { type IndexOfMove, type Move, type MoveParams } from "../Move.js";

interface MoveWithData<
  M extends Move<M>,
  PartialParams,
  DerivedMoveParams,
  ParamsRecord extends Record<string, PartialParams>,
> {
  indexOfMove: IndexOfMove;
  keyOfMove: keyof ParamsRecord;
  move: M;
  params: DerivedMoveParams;
}

const createMoveParams = ({
  title,
}: Pick<MoveParams, "title">): MoveParams => ({
  description: `Control the move on ${title}`,
  title,
});

const createMovesWithData = <
  M extends Move<M>,
  PartialParams,
  DerivedMoveParams,
  ParamsRecord extends Record<string, PartialParams>,
>({
  createMove: create,
  createMoveParams: createParams,
  partialParamsOfMoves,
}: {
  createMove: (params: DerivedMoveParams) => M;
  createMoveParams: (partialParams: PartialParams) => DerivedMoveParams;
  partialParamsOfMoves: ParamsRecord;
}): {
  [K in keyof ParamsRecord]: MoveWithData<
    M,
    PartialParams,
    DerivedMoveParams,
    ParamsRecord
  >;
} => {
  type ResultType = {
    [K in keyof ParamsRecord]: MoveWithData<
      M,
      PartialParams,
      DerivedMoveParams,
      ParamsRecord
    >;
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from partialParamsOfMoves, which ParamsRecord is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(partialParamsOfMoves).map(([key, partialParams], index) => {
      const params = createParams(partialParams);
      return [
        key,
        {
          indexOfMove: index,
          keyOfMove: key,
          move: create(params),
          params,
        },
      ] as const;
    }),
  ) as ResultType;
};

export type { MoveWithData };
export { createMoveParams, createMovesWithData };
