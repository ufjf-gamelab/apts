import TestingMove from "../Move.js";

const moveDTOs = {
  CenterOfCenter: { positionWherePlacePlayerKey: 40 },
  CenterOfEast: { positionWherePlacePlayerKey: 43 },
  CenterOfNorth: { positionWherePlacePlayerKey: 13 },
  CenterOfNortheast: { positionWherePlacePlayerKey: 16 },
  CenterOfNorthwest: { positionWherePlacePlayerKey: 10 },
  CenterOfSouth: { positionWherePlacePlayerKey: 67 },
  CenterOfSoutheast: { positionWherePlacePlayerKey: 70 },
  CenterOfSouthwest: { positionWherePlacePlayerKey: 64 },
  CenterOfWest: { positionWherePlacePlayerKey: 37 },

  EastOfCenter: { positionWherePlacePlayerKey: 41 },
  EastOfEast: { positionWherePlacePlayerKey: 44 },
  EastOfNorth: { positionWherePlacePlayerKey: 14 },
  EastOfNortheast: { positionWherePlacePlayerKey: 17 },
  EastOfNorthwest: { positionWherePlacePlayerKey: 11 },
  EastOfSouth: { positionWherePlacePlayerKey: 68 },
  EastOfSoutheast: { positionWherePlacePlayerKey: 71 },
  EastOfSouthwest: { positionWherePlacePlayerKey: 65 },
  EastOfWest: { positionWherePlacePlayerKey: 38 },

  NortheastOfCenter: { positionWherePlacePlayerKey: 32 },
  NortheastOfEast: { positionWherePlacePlayerKey: 35 },
  NortheastOfNorth: { positionWherePlacePlayerKey: 5 },
  NortheastOfNortheast: { positionWherePlacePlayerKey: 8 },
  NortheastOfNorthwest: { positionWherePlacePlayerKey: 2 },
  NortheastOfSouth: { positionWherePlacePlayerKey: 59 },
  NortheastOfSoutheast: { positionWherePlacePlayerKey: 62 },
  NortheastOfSouthwest: { positionWherePlacePlayerKey: 56 },
  NortheastOfWest: { positionWherePlacePlayerKey: 29 },

  NorthOfCenter: { positionWherePlacePlayerKey: 31 },
  NorthOfEast: { positionWherePlacePlayerKey: 34 },
  NorthOfNorth: { positionWherePlacePlayerKey: 4 },
  NorthOfNortheast: { positionWherePlacePlayerKey: 7 },
  NorthOfNorthwest: { positionWherePlacePlayerKey: 1 },
  NorthOfSouth: { positionWherePlacePlayerKey: 58 },
  NorthOfSoutheast: { positionWherePlacePlayerKey: 61 },
  NorthOfSouthwest: { positionWherePlacePlayerKey: 55 },
  NorthOfWest: { positionWherePlacePlayerKey: 28 },

  NorthwestOfCenter: { positionWherePlacePlayerKey: 30 },
  NorthwestOfEast: { positionWherePlacePlayerKey: 33 },
  NorthwestOfNorth: { positionWherePlacePlayerKey: 3 },
  NorthwestOfNortheast: { positionWherePlacePlayerKey: 6 },
  NorthwestOfNorthwest: { positionWherePlacePlayerKey: 0 },
  NorthwestOfSouth: { positionWherePlacePlayerKey: 57 },
  NorthwestOfSoutheast: { positionWherePlacePlayerKey: 60 },
  NorthwestOfSouthwest: { positionWherePlacePlayerKey: 54 },
  NorthwestOfWest: { positionWherePlacePlayerKey: 27 },

  SoutheastOfCenter: { positionWherePlacePlayerKey: 50 },
  SoutheastOfEast: { positionWherePlacePlayerKey: 53 },
  SoutheastOfNorth: { positionWherePlacePlayerKey: 23 },
  SoutheastOfNortheast: { positionWherePlacePlayerKey: 26 },
  SoutheastOfNorthwest: { positionWherePlacePlayerKey: 20 },
  SoutheastOfSouth: { positionWherePlacePlayerKey: 77 },
  SoutheastOfSoutheast: { positionWherePlacePlayerKey: 80 },
  SoutheastOfSouthwest: { positionWherePlacePlayerKey: 74 },
  SoutheastOfWest: { positionWherePlacePlayerKey: 47 },

  SouthOfCenter: { positionWherePlacePlayerKey: 49 },
  SouthOfEast: { positionWherePlacePlayerKey: 52 },
  SouthOfNorth: { positionWherePlacePlayerKey: 22 },
  SouthOfNortheast: { positionWherePlacePlayerKey: 25 },
  SouthOfNorthwest: { positionWherePlacePlayerKey: 19 },
  SouthOfSouth: { positionWherePlacePlayerKey: 76 },
  SouthOfSoutheast: { positionWherePlacePlayerKey: 79 },
  SouthOfSouthwest: { positionWherePlacePlayerKey: 73 },
  SouthOfWest: { positionWherePlacePlayerKey: 46 },

  SouthwestOfCenter: { positionWherePlacePlayerKey: 48 },
  SouthwestOfEast: { positionWherePlacePlayerKey: 51 },
  SouthwestOfNorth: { positionWherePlacePlayerKey: 21 },
  SouthwestOfNortheast: { positionWherePlacePlayerKey: 24 },
  SouthwestOfNorthwest: { positionWherePlacePlayerKey: 18 },
  SouthwestOfSouth: { positionWherePlacePlayerKey: 75 },
  SouthwestOfSoutheast: { positionWherePlacePlayerKey: 78 },
  SouthwestOfSouthwest: { positionWherePlacePlayerKey: 72 },
  SouthwestOfWest: { positionWherePlacePlayerKey: 45 },

  WestOfCenter: { positionWherePlacePlayerKey: 39 },
  WestOfEast: { positionWherePlacePlayerKey: 42 },
  WestOfNorth: { positionWherePlacePlayerKey: 12 },
  WestOfNortheast: { positionWherePlacePlayerKey: 15 },
  WestOfNorthwest: { positionWherePlacePlayerKey: 9 },
  WestOfSouth: { positionWherePlacePlayerKey: 66 },
  WestOfSoutheast: { positionWherePlacePlayerKey: 69 },
  WestOfSouthwest: { positionWherePlacePlayerKey: 63 },
  WestOfWest: { positionWherePlacePlayerKey: 36 },
} as const;

type KeyOfMoveDTO = keyof typeof moveDTOs;

type MoveDTO = (typeof moveDTOs)[KeyOfMoveDTO];

interface RecordOfMoveDTO {
  data: MoveDTO;
  key: KeyOfMoveDTO;
}

interface TestMoveParams {
  move: TestingMove;
  testDescriptor: string;
}

const formatMoveKeyName = (name: string): string => {
  const [direction, quadrant] = name.split("Of");

  if (typeof direction !== "string" || typeof quadrant !== "string") {
    throw new Error("Invalid move key name");
  }
  const formattedDirection = direction
    .replace(/(?<direction>[A-Z])/gu, " $1")
    .trim();
  const formattedQuadrant = quadrant
    .replace(/(?<quadrant>[A-Z])/gu, " $1")
    .trim();

  return `${formattedDirection} of ${formattedQuadrant} quadrant`;
};

interface CreatedMoveAndRelatedData {
  dataRelatedToCreatedMove: DataRelatedToCreatedMove;
  move: TestingMove;
}

interface DataRelatedToCreatedMove {
  description: TestingMove["description"];
  key: KeyOfMoveDTO;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["title"];
}

const createMove = ({
  recordOfMoveDTO,
}: {
  recordOfMoveDTO: RecordOfMoveDTO;
}): CreatedMoveAndRelatedData => {
  const { data: moveDTO, key: keyOfMoveDTO } = recordOfMoveDTO;

  const formattedNameOfKey = formatMoveKeyName(keyOfMoveDTO);
  const description = `Control the slot on ${formattedNameOfKey}`;
  const title = formattedNameOfKey;
  const { positionWherePlacePlayerKey } = moveDTO;

  const move = new TestingMove({
    description,
    positionWherePlacePlayerKey,
    title,
  });

  return {
    dataRelatedToCreatedMove: {
      description,
      key: keyOfMoveDTO,
      positionWherePlacePlayerKey,
      title,
    },
    move,
  };
};

type CreatedMovesAndRelatedData = ReadonlyMap<
  KeyOfMoveDTO,
  CreatedMoveAndRelatedData
>;

const createMoves = (): CreatedMovesAndRelatedData => {
  const moves = Object.entries(moveDTOs).map(([keyOfMoveDTO, moveDTO]) =>
    createMove({
      recordOfMoveDTO: { data: moveDTO, key: keyOfMoveDTO as KeyOfMoveDTO },
    }),
  );

  return new Map(
    moves.map(({ dataRelatedToCreatedMove, move }) => [
      dataRelatedToCreatedMove.key,
      {
        dataRelatedToCreatedMove,
        move,
      },
    ]),
  );
};

export type {
  CreatedMoveAndRelatedData,
  CreatedMovesAndRelatedData,
  TestMoveParams,
};
export { createMove, createMoves, formatMoveKeyName };
