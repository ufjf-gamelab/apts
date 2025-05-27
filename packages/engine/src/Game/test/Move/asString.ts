import {
  type DefinitionsOfObjectAsString,
  getObjectAsString,
} from "../asString.js";
import type TestingMove from "../Move.js";

const defaultDefinitionsOfMoveAsString: DefinitionsOfObjectAsString = {
  fields: [
    {
      definition: {
        visibility: "hideKey",
      },
      key: "title",
    },
    {
      definition: {
        visibility: "hideKey",
      },
      key: "indexOfSlotInWhichPlacePiece",
    },
  ],
  surround: false,
};

const getMoveAsString = (
  move: TestingMove,
  definitions = defaultDefinitionsOfMoveAsString,
): string =>
  getObjectAsString(
    {
      indexOfSlotInWhichPlacePiece: move.getIndexOfSlotInWhichPlacePiece(),
      title: move.getTitle(),
    },
    definitions,
  );

const getMovesAsString = (
  moves: readonly TestingMove[],
  definitions = { ...defaultDefinitionsOfMoveAsString, surround: true },
): string => moves.map(move => getMoveAsString(move, definitions)).join(", ");

export { getMoveAsString, getMovesAsString };
