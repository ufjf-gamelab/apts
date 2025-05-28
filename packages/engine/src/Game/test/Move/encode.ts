import {
  type DefinitionsForEncodingField,
  type DefinitionsForEncodingObject,
  encodeObject,
  encodeObjects,
  type FieldsAndDefinitionsForEncodingThem,
  type GetObjectAsRecord,
} from "../encode.js";
import type { EncodedTestingMove, default as TestingMove } from "../Move.js";

type DefinitionsForEncodingMove = DefinitionsForEncodingObject & {
  fieldsAndDefinitionsForEncodingThem: FieldsOfMoveAndDefinitionsForEncodingThem;
};

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

const defaultDefinitionsForEncodingMove: DefinitionsForEncodingMove = {
  fieldsAndDefinitionsForEncodingThem:
    fieldsOfMoveAndDefaultDefinitionsForEncodingThem,
  surround: true,
};

const getMoveAsRecord: GetObjectAsRecord<TestingMove> = move => ({
  indexOfSlotInWhichPlacePiece: move.getIndexOfSlotInWhichPlacePiece(),
  title: move.getTitle(),
});

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

export { encodeMove, encodeMoves };
