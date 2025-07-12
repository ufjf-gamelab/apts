import { type IndexOfMove, type Move } from "../Move.js";

type MoveParams = ConstructorParameters<typeof Move>[number];

const createMoveParams = ({
  title,
}: Pick<MoveParams, "title">): MoveParams => ({
  description: `Control the slot on ${title}`,
  title,
});

const createMovesWithData = <PartialParams, DerivedMoveParams>({
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
      indexOfMove: IndexOfMove;
      keyOfMove: string;
      move: Move;
      params: DerivedMoveParams;
    };
  }>((movesWithData, [key, partialParams], index) => {
    const params = createParams(partialParams);
    movesWithData[key] = {
      indexOfMove: index,
      keyOfMove: key,
      move: create(params),
      params,
    };
    return movesWithData;
  }, {});

export { createMoveParams, createMovesWithData };
