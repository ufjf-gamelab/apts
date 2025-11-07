import { type Move, type MoveParams } from "../Move.js";

type DerivedMoveParams = Pick<MoveParams, "description"> & RequiredMoveParams;

interface MoveWithData<
  M extends Move<M>,
  Params extends RequiredMoveParams = RequiredMoveParams,
> {
  keyOfMove: string;
  move: M;
  params: Params;
}

type RequiredMoveParams = Pick<MoveParams, "title">;

const deriveMoveParams = ({
  title,
}: RequiredMoveParams): DerivedMoveParams => ({
  description: `Control the move on ${title}`,
  title,
});

const createMovesWithData = <
  M extends Move<M>,
  RequiredParams extends RequiredMoveParams,
  DerivedParams extends DerivedMoveParams,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => M;
  deriveParams: (params: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    keyOfMove: K;
    move: M;
    params: RequiredParams;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      keyOfMove: K;
      move: M;
      params: RequiredParams;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParams, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfRequiredParams).map(
      ([key, requiredParams]) =>
        [
          key,
          {
            keyOfMove: key,
            move: create(deriveParams(requiredParams)),
            params: requiredParams,
          } satisfies MoveWithData<M, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedMoveParams, MoveWithData, RequiredMoveParams };
export { createMovesWithData, deriveMoveParams };
