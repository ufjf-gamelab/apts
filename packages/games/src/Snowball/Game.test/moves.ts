import {
  movesWithData,
  type SnowballMoveWithData,
} from "../Move.test/setup.js";

const NOT_FOUND_INDEX = -1;

// eslint-disable-next-line max-lines-per-function
const getIndexedSnowballMovesWithData = () =>
  [
    // Row 0
    movesWithData.northwestOfNorthwest,
    movesWithData.northOfNorthwest,
    movesWithData.northeastOfNorthwest,
    movesWithData.northwestOfNorth,
    movesWithData.northOfNorth,
    movesWithData.northeastOfNorth,
    movesWithData.northwestOfNortheast,
    movesWithData.northOfNortheast,
    movesWithData.northeastOfNortheast,

    // Row 1
    movesWithData.westOfNorthwest,
    movesWithData.centerOfNorthwest,
    movesWithData.eastOfNorthwest,
    movesWithData.westOfNorth,
    movesWithData.centerOfNorth,
    movesWithData.eastOfNorth,
    movesWithData.westOfNortheast,
    movesWithData.centerOfNortheast,
    movesWithData.eastOfNortheast,

    // Row 2
    movesWithData.southwestOfNorthwest,
    movesWithData.southOfNorthwest,
    movesWithData.southeastOfNorthwest,
    movesWithData.southwestOfNorth,
    movesWithData.southOfNorth,
    movesWithData.southeastOfNorth,
    movesWithData.southwestOfNortheast,
    movesWithData.southOfNortheast,
    movesWithData.southeastOfNortheast,

    // Row 3
    movesWithData.northwestOfWest,
    movesWithData.northOfWest,
    movesWithData.northeastOfWest,
    movesWithData.northwestOfCenter,
    movesWithData.northOfCenter,
    movesWithData.northeastOfCenter,
    movesWithData.northwestOfEast,
    movesWithData.northOfEast,
    movesWithData.northeastOfEast,

    // Row 4
    movesWithData.westOfWest,
    movesWithData.centerOfWest,
    movesWithData.eastOfWest,
    movesWithData.westOfCenter,
    movesWithData.centerOfCenter,
    movesWithData.eastOfCenter,
    movesWithData.westOfEast,
    movesWithData.centerOfEast,
    movesWithData.eastOfEast,

    // Row 5
    movesWithData.southwestOfWest,
    movesWithData.southOfWest,
    movesWithData.southeastOfWest,
    movesWithData.southwestOfCenter,
    movesWithData.southOfCenter,
    movesWithData.southeastOfCenter,
    movesWithData.southwestOfEast,
    movesWithData.southOfEast,
    movesWithData.southeastOfEast,

    // Row 6
    movesWithData.northwestOfSouthwest,
    movesWithData.northOfSouthwest,
    movesWithData.northeastOfSouthwest,
    movesWithData.northwestOfSouth,
    movesWithData.northOfSouth,
    movesWithData.northeastOfSouth,
    movesWithData.northwestOfSoutheast,
    movesWithData.northOfSoutheast,
    movesWithData.northeastOfSoutheast,

    // Row 7
    movesWithData.westOfSouthwest,
    movesWithData.centerOfSouthwest,
    movesWithData.eastOfSouthwest,
    movesWithData.westOfSouth,
    movesWithData.centerOfSouth,
    movesWithData.eastOfSouth,
    movesWithData.westOfSoutheast,
    movesWithData.centerOfSoutheast,
    movesWithData.eastOfSoutheast,

    // Row 8
    movesWithData.southwestOfSouthwest,
    movesWithData.southOfSouthwest,
    movesWithData.southeastOfSouthwest,
    movesWithData.southwestOfSouth,
    movesWithData.southOfSouth,
    movesWithData.southeastOfSouth,
    movesWithData.southwestOfSoutheast,
    movesWithData.southOfSoutheast,
    movesWithData.southeastOfSoutheast,
  ] satisfies SnowballMoveWithData[];

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

const getIndexOfMoveOnDefaultMoves = ({
  keyOfMove,
}: Pick<Parameters<typeof getIndexOfMove>[0], "keyOfMove">) =>
  getIndexOfMove({
    indexedMoves: getIndexedSnowballMovesWithData(),
    keyOfMove,
  });

export {
  getIndexedSnowballMovesWithData,
  getIndexOfMove,
  getIndexOfMoveOnDefaultMoves,
};
