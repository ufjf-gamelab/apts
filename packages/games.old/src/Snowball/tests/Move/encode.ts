import type { EncodedTestingMove, default as TestingMove } from "../../Move.js";
import {
  type DefinitionsForEncodingField,
  type DefinitionsForEncodingObject,
  encodeObject,
  encodeObjects,
  type FieldsAndDefinitionsForEncodingThem,
  type GetObjectAsRecord,
} from "../encode.js";
import type { IndexOfTestingMove } from "./setup.js";

type DefinitionsForEncodingIndexedMove = DefinitionsForEncodingObject & {
  fieldsAndDefinitionsForEncodingThem: FieldsOfIndexedMoveAndDefinitionsForEncodingThem;
};

type DefinitionsForEncodingMove = DefinitionsForEncodingObject & {
  fieldsAndDefinitionsForEncodingThem: FieldsOfMoveAndDefinitionsForEncodingThem;
};

type FieldsOfIndexedMoveAndDefinitionsForEncodingThem = [
  {
    definitions: DefinitionsForEncodingField;
    key: "index";
  },
  ...{
    definitions: DefinitionsForEncodingField;
    key: keyof EncodedTestingMove;
  }[],
] &
  FieldsAndDefinitionsForEncodingThem;

type FieldsOfMoveAndDefinitionsForEncodingThem = [
  ...{
    definitions: DefinitionsForEncodingField;
    key: keyof EncodedTestingMove;
  }[],
] &
  FieldsAndDefinitionsForEncodingThem;

const fieldsOfMoveAndDefaultDefinitionsForEncodingThem: FieldsOfMoveAndDefinitionsForEncodingThem =
  [
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "indexOfSlotInWhichPlacePiece",
    },
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "title",
    },
  ];

const fieldsOfIndexedMoveAndDefaultDefinitionsForEncodingThem: FieldsOfIndexedMoveAndDefinitionsForEncodingThem =
  [
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "index",
    },
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "indexOfSlotInWhichPlacePiece",
    },
    {
      definitions: {
        visibility: "hideKey",
      },
      key: "title",
    },
  ];

const defaultDefinitionsForEncodingMove: DefinitionsForEncodingMove = {
  fieldsAndDefinitionsForEncodingThem:
    fieldsOfMoveAndDefaultDefinitionsForEncodingThem,
  surround: true,
};

const defaultDefinitionsForEncodingIndexedMove: DefinitionsForEncodingIndexedMove =
  {
    fieldsAndDefinitionsForEncodingThem:
      fieldsOfIndexedMoveAndDefaultDefinitionsForEncodingThem,
    surround: true,
  };

const getMoveAsRecord: GetObjectAsRecord<TestingMove> = move => ({
  indexOfSlotInWhichPlacePiece: move.getIndexOfSlotInWhichPlacePiece(),
  title: move.getTitle(),
});

const getIndexedMoveAsRecord: GetObjectAsRecord<
  [IndexOfTestingMove, TestingMove]
> = indexedMove => {
  const [index, move] = indexedMove;
  return {
    index,
    indexOfSlotInWhichPlacePiece: move.getIndexOfSlotInWhichPlacePiece(),
    title: move.getTitle(),
  };
};

const encodeMove = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingMove,
  move,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingMove;
  move: TestingMove;
}): string =>
  encodeObject({
    definitionsForEncodingObject,
    object: getMoveAsRecord(move),
  });

const encodeIndexedMove = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingIndexedMove,
  indexedMove,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingIndexedMove;
  indexedMove: [IndexOfTestingMove, TestingMove];
}): string =>
  encodeObject({
    definitionsForEncodingObject,
    object: getIndexedMoveAsRecord(indexedMove),
  });

const encodeMoves = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingMove,
  moves,
  surround = true,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingMove;
  moves: readonly TestingMove[];
  surround?: boolean;
}): string =>
  encodeObjects({
    definitionsForEncodingObject,
    objects: moves.map(move => getMoveAsRecord(move)),
    surround,
  });

const encodeIndexedMoves = ({
  definitionsForEncodingObject = defaultDefinitionsForEncodingIndexedMove,
  indexedMoves,
  surround = true,
}: {
  definitionsForEncodingObject?: DefinitionsForEncodingIndexedMove;
  indexedMoves: readonly [IndexOfTestingMove, TestingMove][];
  surround?: boolean;
}): string =>
  encodeObjects({
    definitionsForEncodingObject,
    objects: indexedMoves.map(indexedMove =>
      getIndexedMoveAsRecord(indexedMove),
    ),
    surround,
  });

export { encodeIndexedMoves, encodeMove, encodeMoves };
