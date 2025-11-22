import { type SnowballMoveWithData } from "../Move.test/setup.js";

const NOT_FOUND_INDEX = -1;

// TODO: maybe remove this
const getIndexOfMove = ({
  indexedMoves,
  keyOfMove,
}: {
  indexedMoves: SnowballMoveWithData[];
  keyOfMove: string;
}) => {
  const indexOfMove = indexedMoves.findIndex(
    (move) => move.keyOfMove === keyOfMove,
  );
  if (indexOfMove === NOT_FOUND_INDEX) {
    throw new Error(`There is no move with the key ${keyOfMove}.`);
  }
  return indexOfMove;
};

export { getIndexOfMove };
