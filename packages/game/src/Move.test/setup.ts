import { type Move } from "../Move.js";

type MoveParams = ConstructorParameters<typeof Move>[number];

const createMoveParams = ({
  title,
}: Pick<MoveParams, "title">): MoveParams => ({
  description: `Control the slot on ${title}`,
  title,
});

const createMovesWithParams = <PartialParams, DerivedMoveParams>({
  createMove: create,
  createMoveParams: createParams,
  partialParamsOfMoves,
}: {
  createMove: (params: DerivedMoveParams) => Move;
  createMoveParams: (partialParams: PartialParams) => DerivedMoveParams;
  partialParamsOfMoves: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfMoves).reduce<{
    [K in keyof typeof partialParamsOfMoves]: {
      move: Move;
      params: DerivedMoveParams;
    };
  }>((movesWithParams, [key, partialParams]) => {
    const params = createParams(partialParams);
    movesWithParams[key] = {
      move: create(params),
      params,
    };
    return movesWithParams;
  }, {});

export { createMoveParams, createMovesWithParams };
