import TestingMove from "../Move.js";

enum IndexOfTestingMove {
  NorthwestOfNorthwest,
  NorthOfNorthwest,
  NortheastOfNorthwest,
  WestOfNorthwest,
  CenterOfNorthwest,
  EastOfNorthwest,
  SouthwestOfNorthwest,
  SouthOfNorthwest,
  SoutheastOfNorthwest,

  NorthwestOfNorth,
  NorthOfNorth,
  NortheastOfNorth,
  WestOfNorth,
  CenterOfNorth,
  EastOfNorth,
  SouthwestOfNorth,
  SouthOfNorth,
  SoutheastOfNorth,

  NorthwestOfNortheast,
  NorthOfNortheast,
  NortheastOfNortheast,
  WestOfNortheast,
  CenterOfNortheast,
  EastOfNortheast,
  SouthwestOfNortheast,
  SouthOfNortheast,
  SoutheastOfNortheast,

  NorthwestOfWest,
  NorthOfWest,
  NortheastOfWest,
  WestOfWest,
  CenterOfWest,
  EastOfWest,
  SouthwestOfWest,
  SouthOfWest,
  SoutheastOfWest,

  NorthwestOfCenter,
  NorthOfCenter,
  NortheastOfCenter,
  WestOfCenter,
  CenterOfCenter,
  EastOfCenter,
  SouthwestOfCenter,
  SouthOfCenter,
  SoutheastOfCenter,

  NorthwestOfEast,
  NorthOfEast,
  NortheastOfEast,
  WestOfEast,
  CenterOfEast,
  EastOfEast,
  SouthwestOfEast,
  SouthOfEast,
  SoutheastOfEast,

  NorthwestOfSouthwest,
  NorthOfSouthwest,
  NortheastOfSouthwest,
  WestOfSouthwest,
  CenterOfSouthwest,
  EastOfSouthwest,
  SouthwestOfSouthwest,
  SouthOfSouthwest,
  SoutheastOfSouthwest,

  NorthwestOfSouth,
  NorthOfSouth,
  NortheastOfSouth,
  WestOfSouth,
  CenterOfSouth,
  EastOfSouth,
  SouthwestOfSouth,
  SouthOfSouth,
  SoutheastOfSouth,

  NorthwestOfSoutheast,
  NorthOfSoutheast,
  NortheastOfSoutheast,
  WestOfSoutheast,
  CenterOfSoutheast,
  EastOfSoutheast,
  SouthwestOfSoutheast,
  SouthOfSoutheast,
  SoutheastOfSoutheast,
}

type NameOfIndexOfTestingMove = keyof typeof IndexOfTestingMove;

const movesDTOs = {
  [IndexOfTestingMove.CenterOfCenter]: {
    positionWherePlacePlayerKey: 40,
    title: "Center of Center",
  },
  [IndexOfTestingMove.CenterOfEast]: {
    positionWherePlacePlayerKey: 43,
    title: "Center of East",
  },
  [IndexOfTestingMove.CenterOfNorth]: {
    positionWherePlacePlayerKey: 13,
    title: "Center of North",
  },
  [IndexOfTestingMove.CenterOfNortheast]: {
    positionWherePlacePlayerKey: 16,
    title: "Center of Northeast",
  },
  [IndexOfTestingMove.CenterOfNorthwest]: {
    positionWherePlacePlayerKey: 10,
    title: "Center of Northwest",
  },
  [IndexOfTestingMove.CenterOfSouth]: {
    positionWherePlacePlayerKey: 67,
    title: "Center of South",
  },
  [IndexOfTestingMove.CenterOfSoutheast]: {
    positionWherePlacePlayerKey: 70,
    title: "Center of Southeast",
  },
  [IndexOfTestingMove.CenterOfSouthwest]: {
    positionWherePlacePlayerKey: 64,
    title: "Center of Southwest",
  },
  [IndexOfTestingMove.CenterOfWest]: {
    positionWherePlacePlayerKey: 37,
    title: "Center of West",
  },

  [IndexOfTestingMove.EastOfCenter]: {
    positionWherePlacePlayerKey: 41,
    title: "East of Center",
  },
  [IndexOfTestingMove.EastOfEast]: {
    positionWherePlacePlayerKey: 44,
    title: "East of East",
  },
  [IndexOfTestingMove.EastOfNorth]: {
    positionWherePlacePlayerKey: 14,
    title: "East of North",
  },
  [IndexOfTestingMove.EastOfNortheast]: {
    positionWherePlacePlayerKey: 17,
    title: "East of Northeast",
  },
  [IndexOfTestingMove.EastOfNorthwest]: {
    positionWherePlacePlayerKey: 11,
    title: "East of Northwest",
  },
  [IndexOfTestingMove.EastOfSouth]: {
    positionWherePlacePlayerKey: 68,
    title: "East of South",
  },
  [IndexOfTestingMove.EastOfSoutheast]: {
    positionWherePlacePlayerKey: 71,
    title: "East of Southeast",
  },
  [IndexOfTestingMove.EastOfSouthwest]: {
    positionWherePlacePlayerKey: 65,
    title: "East of Southwest",
  },
  [IndexOfTestingMove.EastOfWest]: {
    positionWherePlacePlayerKey: 38,
    title: "East of West",
  },

  [IndexOfTestingMove.NortheastOfCenter]: {
    positionWherePlacePlayerKey: 32,
    title: "Northeast of Center",
  },
  [IndexOfTestingMove.NortheastOfEast]: {
    positionWherePlacePlayerKey: 35,
    title: "Northeast of East",
  },
  [IndexOfTestingMove.NortheastOfNorth]: {
    positionWherePlacePlayerKey: 5,
    title: "Northeast of North",
  },
  [IndexOfTestingMove.NortheastOfNortheast]: {
    positionWherePlacePlayerKey: 8,
    title: "Northeast of Northeast",
  },
  [IndexOfTestingMove.NortheastOfNorthwest]: {
    positionWherePlacePlayerKey: 2,
    title: "Northeast of Northwest",
  },
  [IndexOfTestingMove.NortheastOfSouth]: {
    positionWherePlacePlayerKey: 59,
    title: "Northeast of South",
  },
  [IndexOfTestingMove.NortheastOfSoutheast]: {
    positionWherePlacePlayerKey: 62,
    title: "Northeast of Southeast",
  },
  [IndexOfTestingMove.NortheastOfSouthwest]: {
    positionWherePlacePlayerKey: 56,
    title: "Northeast of Southwest",
  },
  [IndexOfTestingMove.NortheastOfWest]: {
    positionWherePlacePlayerKey: 29,
    title: "Northeast of West",
  },

  [IndexOfTestingMove.NorthOfCenter]: {
    positionWherePlacePlayerKey: 31,
    title: "North of Center",
  },
  [IndexOfTestingMove.NorthOfEast]: {
    positionWherePlacePlayerKey: 34,
    title: "North of East",
  },
  [IndexOfTestingMove.NorthOfNorth]: {
    positionWherePlacePlayerKey: 4,
    title: "North of North",
  },
  [IndexOfTestingMove.NorthOfNortheast]: {
    positionWherePlacePlayerKey: 7,
    title: "North of Northeast",
  },
  [IndexOfTestingMove.NorthOfNorthwest]: {
    positionWherePlacePlayerKey: 1,
    title: "North of Northwest",
  },
  [IndexOfTestingMove.NorthOfSouth]: {
    positionWherePlacePlayerKey: 58,
    title: "North of South",
  },
  [IndexOfTestingMove.NorthOfSoutheast]: {
    positionWherePlacePlayerKey: 61,
    title: "North of Southeast",
  },
  [IndexOfTestingMove.NorthOfSouthwest]: {
    positionWherePlacePlayerKey: 55,
    title: "North of Southwest",
  },
  [IndexOfTestingMove.NorthOfWest]: {
    positionWherePlacePlayerKey: 28,
    title: "North of West",
  },

  [IndexOfTestingMove.NorthwestOfCenter]: {
    positionWherePlacePlayerKey: 30,
    title: "Northwest of Center",
  },
  [IndexOfTestingMove.NorthwestOfEast]: {
    positionWherePlacePlayerKey: 33,
    title: "Northwest of East",
  },
  [IndexOfTestingMove.NorthwestOfNorth]: {
    positionWherePlacePlayerKey: 3,
    title: "Northwest of North",
  },
  [IndexOfTestingMove.NorthwestOfNortheast]: {
    positionWherePlacePlayerKey: 6,
    title: "Northwest of Northeast",
  },
  [IndexOfTestingMove.NorthwestOfNorthwest]: {
    positionWherePlacePlayerKey: 0,
    title: "Northwest of Northwest",
  },
  [IndexOfTestingMove.NorthwestOfSouth]: {
    positionWherePlacePlayerKey: 57,
    title: "Northwest of South",
  },
  [IndexOfTestingMove.NorthwestOfSoutheast]: {
    positionWherePlacePlayerKey: 60,
    title: "Northwest of Southeast",
  },
  [IndexOfTestingMove.NorthwestOfSouthwest]: {
    positionWherePlacePlayerKey: 54,
    title: "Northwest of Southwest",
  },
  [IndexOfTestingMove.NorthwestOfWest]: {
    positionWherePlacePlayerKey: 27,
    title: "Northwest of West",
  },

  [IndexOfTestingMove.SoutheastOfCenter]: {
    positionWherePlacePlayerKey: 50,
    title: "Southeast of Center",
  },
  [IndexOfTestingMove.SoutheastOfEast]: {
    positionWherePlacePlayerKey: 53,
    title: "Southeast of East",
  },
  [IndexOfTestingMove.SoutheastOfNorth]: {
    positionWherePlacePlayerKey: 23,
    title: "Southeast of North",
  },
  [IndexOfTestingMove.SoutheastOfNortheast]: {
    positionWherePlacePlayerKey: 26,
    title: "Southeast of Northeast",
  },
  [IndexOfTestingMove.SoutheastOfNorthwest]: {
    positionWherePlacePlayerKey: 20,
    title: "Southeast of Northwest",
  },
  [IndexOfTestingMove.SoutheastOfSouth]: {
    positionWherePlacePlayerKey: 77,
    title: "Southeast of South",
  },
  [IndexOfTestingMove.SoutheastOfSoutheast]: {
    positionWherePlacePlayerKey: 80,
    title: "Southeast of Southeast",
  },
  [IndexOfTestingMove.SoutheastOfSouthwest]: {
    positionWherePlacePlayerKey: 74,
    title: "Southeast of Southwest",
  },
  [IndexOfTestingMove.SoutheastOfWest]: {
    positionWherePlacePlayerKey: 47,
    title: "Southeast of West",
  },

  [IndexOfTestingMove.SouthOfCenter]: {
    positionWherePlacePlayerKey: 49,
    title: "South of Center",
  },
  [IndexOfTestingMove.SouthOfEast]: {
    positionWherePlacePlayerKey: 52,
    title: "South of East",
  },
  [IndexOfTestingMove.SouthOfNorth]: {
    positionWherePlacePlayerKey: 22,
    title: "South of North",
  },
  [IndexOfTestingMove.SouthOfNortheast]: {
    positionWherePlacePlayerKey: 25,
    title: "South of Northeast",
  },
  [IndexOfTestingMove.SouthOfNorthwest]: {
    positionWherePlacePlayerKey: 19,
    title: "South of Northwest",
  },
  [IndexOfTestingMove.SouthOfSouth]: {
    positionWherePlacePlayerKey: 76,
    title: "South of South",
  },
  [IndexOfTestingMove.SouthOfSoutheast]: {
    positionWherePlacePlayerKey: 79,
    title: "South of Southeast",
  },
  [IndexOfTestingMove.SouthOfSouthwest]: {
    positionWherePlacePlayerKey: 73,
    title: "South of Southwest",
  },
  [IndexOfTestingMove.SouthOfWest]: {
    positionWherePlacePlayerKey: 46,
    title: "South of West",
  },

  [IndexOfTestingMove.SouthwestOfCenter]: {
    positionWherePlacePlayerKey: 48,
    title: "Southwest of Center",
  },
  [IndexOfTestingMove.SouthwestOfEast]: {
    positionWherePlacePlayerKey: 51,
    title: "Southwest of East",
  },
  [IndexOfTestingMove.SouthwestOfNorth]: {
    positionWherePlacePlayerKey: 21,
    title: "Southwest of North",
  },
  [IndexOfTestingMove.SouthwestOfNortheast]: {
    positionWherePlacePlayerKey: 24,
    title: "Southwest of Northeast",
  },
  [IndexOfTestingMove.SouthwestOfNorthwest]: {
    positionWherePlacePlayerKey: 18,
    title: "Southwest of Northwest",
  },
  [IndexOfTestingMove.SouthwestOfSouth]: {
    positionWherePlacePlayerKey: 75,
    title: "Southwest of South",
  },
  [IndexOfTestingMove.SouthwestOfSoutheast]: {
    positionWherePlacePlayerKey: 78,
    title: "Southwest of Southeast",
  },
  [IndexOfTestingMove.SouthwestOfSouthwest]: {
    positionWherePlacePlayerKey: 72,
    title: "Southwest of Southwest",
  },
  [IndexOfTestingMove.SouthwestOfWest]: {
    positionWherePlacePlayerKey: 45,
    title: "Southwest of West",
  },

  [IndexOfTestingMove.WestOfCenter]: {
    positionWherePlacePlayerKey: 39,
    title: "West of Center",
  },
  [IndexOfTestingMove.WestOfEast]: {
    positionWherePlacePlayerKey: 42,
    title: "West of East",
  },
  [IndexOfTestingMove.WestOfNorth]: {
    positionWherePlacePlayerKey: 12,
    title: "West of North",
  },
  [IndexOfTestingMove.WestOfNortheast]: {
    positionWherePlacePlayerKey: 15,
    title: "West of Northeast",
  },
  [IndexOfTestingMove.WestOfNorthwest]: {
    positionWherePlacePlayerKey: 9,
    title: "West of Northwest",
  },
  [IndexOfTestingMove.WestOfSouth]: {
    positionWherePlacePlayerKey: 66,
    title: "West of South",
  },
  [IndexOfTestingMove.WestOfSoutheast]: {
    positionWherePlacePlayerKey: 69,
    title: "West of Southeast",
  },
  [IndexOfTestingMove.WestOfSouthwest]: {
    positionWherePlacePlayerKey: 63,
    title: "West of Southwest",
  },
  [IndexOfTestingMove.WestOfWest]: {
    positionWherePlacePlayerKey: 36,
    title: "West of West",
  },
} as const;

const listOfMovesDTOs = [
  movesDTOs[IndexOfTestingMove.NorthwestOfNorthwest],
  movesDTOs[IndexOfTestingMove.NorthOfNorthwest],
  movesDTOs[IndexOfTestingMove.NortheastOfNorthwest],
  movesDTOs[IndexOfTestingMove.NorthwestOfNorth],
  movesDTOs[IndexOfTestingMove.NorthOfNorth],
  movesDTOs[IndexOfTestingMove.NortheastOfNorth],
  movesDTOs[IndexOfTestingMove.NorthwestOfNortheast],
  movesDTOs[IndexOfTestingMove.NorthOfNortheast],
  movesDTOs[IndexOfTestingMove.NortheastOfNortheast],

  movesDTOs[IndexOfTestingMove.WestOfNorthwest],
  movesDTOs[IndexOfTestingMove.CenterOfNorthwest],
  movesDTOs[IndexOfTestingMove.EastOfNorthwest],
  movesDTOs[IndexOfTestingMove.WestOfNorth],
  movesDTOs[IndexOfTestingMove.CenterOfNorth],
  movesDTOs[IndexOfTestingMove.EastOfNorth],
  movesDTOs[IndexOfTestingMove.WestOfNortheast],
  movesDTOs[IndexOfTestingMove.CenterOfNortheast],
  movesDTOs[IndexOfTestingMove.EastOfNortheast],

  movesDTOs[IndexOfTestingMove.SouthwestOfNorthwest],
  movesDTOs[IndexOfTestingMove.SouthOfNorthwest],
  movesDTOs[IndexOfTestingMove.SoutheastOfNorthwest],
  movesDTOs[IndexOfTestingMove.SouthwestOfNorth],
  movesDTOs[IndexOfTestingMove.SouthOfNorth],
  movesDTOs[IndexOfTestingMove.SoutheastOfNorth],
  movesDTOs[IndexOfTestingMove.SouthwestOfNortheast],
  movesDTOs[IndexOfTestingMove.SouthOfNortheast],
  movesDTOs[IndexOfTestingMove.SoutheastOfNortheast],

  movesDTOs[IndexOfTestingMove.NorthwestOfWest],
  movesDTOs[IndexOfTestingMove.NorthOfWest],
  movesDTOs[IndexOfTestingMove.NortheastOfWest],
  movesDTOs[IndexOfTestingMove.NorthwestOfCenter],
  movesDTOs[IndexOfTestingMove.NorthOfCenter],
  movesDTOs[IndexOfTestingMove.NortheastOfCenter],
  movesDTOs[IndexOfTestingMove.NorthwestOfEast],
  movesDTOs[IndexOfTestingMove.NorthOfEast],
  movesDTOs[IndexOfTestingMove.NortheastOfEast],

  movesDTOs[IndexOfTestingMove.WestOfWest],
  movesDTOs[IndexOfTestingMove.CenterOfWest],
  movesDTOs[IndexOfTestingMove.EastOfWest],
  movesDTOs[IndexOfTestingMove.WestOfCenter],
  movesDTOs[IndexOfTestingMove.CenterOfCenter],
  movesDTOs[IndexOfTestingMove.EastOfCenter],
  movesDTOs[IndexOfTestingMove.WestOfEast],
  movesDTOs[IndexOfTestingMove.CenterOfEast],
  movesDTOs[IndexOfTestingMove.EastOfEast],

  movesDTOs[IndexOfTestingMove.SouthwestOfWest],
  movesDTOs[IndexOfTestingMove.SouthOfWest],
  movesDTOs[IndexOfTestingMove.SoutheastOfWest],
  movesDTOs[IndexOfTestingMove.SouthwestOfCenter],
  movesDTOs[IndexOfTestingMove.SouthOfCenter],
  movesDTOs[IndexOfTestingMove.SoutheastOfCenter],
  movesDTOs[IndexOfTestingMove.SouthwestOfEast],
  movesDTOs[IndexOfTestingMove.SouthOfEast],
  movesDTOs[IndexOfTestingMove.SoutheastOfEast],

  movesDTOs[IndexOfTestingMove.NorthwestOfSouthwest],
  movesDTOs[IndexOfTestingMove.NorthOfSouthwest],
  movesDTOs[IndexOfTestingMove.NortheastOfSouthwest],
  movesDTOs[IndexOfTestingMove.NorthwestOfSouth],
  movesDTOs[IndexOfTestingMove.NorthOfSouth],
  movesDTOs[IndexOfTestingMove.NortheastOfSouth],
  movesDTOs[IndexOfTestingMove.NorthwestOfSoutheast],
  movesDTOs[IndexOfTestingMove.NorthOfSoutheast],
  movesDTOs[IndexOfTestingMove.NortheastOfSoutheast],

  movesDTOs[IndexOfTestingMove.WestOfSouthwest],
  movesDTOs[IndexOfTestingMove.CenterOfSouthwest],
  movesDTOs[IndexOfTestingMove.EastOfSouthwest],
  movesDTOs[IndexOfTestingMove.WestOfSouth],
  movesDTOs[IndexOfTestingMove.CenterOfSouth],
  movesDTOs[IndexOfTestingMove.EastOfSouth],
  movesDTOs[IndexOfTestingMove.WestOfSoutheast],
  movesDTOs[IndexOfTestingMove.CenterOfSoutheast],
  movesDTOs[IndexOfTestingMove.EastOfSoutheast],

  movesDTOs[IndexOfTestingMove.SouthwestOfSouthwest],
  movesDTOs[IndexOfTestingMove.SouthOfSouthwest],
  movesDTOs[IndexOfTestingMove.SoutheastOfSouthwest],
  movesDTOs[IndexOfTestingMove.SouthwestOfSouth],
  movesDTOs[IndexOfTestingMove.SouthOfSouth],
  movesDTOs[IndexOfTestingMove.SoutheastOfSouth],
  movesDTOs[IndexOfTestingMove.SouthwestOfSoutheast],
  movesDTOs[IndexOfTestingMove.SouthOfSoutheast],
  movesDTOs[IndexOfTestingMove.SoutheastOfSoutheast],
] as const;

interface CreatedMoveAndRelatedData {
  dataRelatedToCreatedMove: DataRelatedToCreatedMove;
  move: TestingMove;
}

interface DataRelatedToCreatedMove {
  description: TestingMove["description"];
  index: IndexOfTestingMove;
  nameOfIndex: NameOfIndexOfTestingMove;
  positionWherePlacePlayerKey: TestingMove["positionWherePlacePlayerKey"];
  title: TestingMove["title"];
}

type MoveDTO = (typeof movesDTOs)[IndexOfTestingMove];

interface RecordOfMoveDTO {
  data: MoveDTO;
  index: IndexOfTestingMove;
}

const createMove = ({
  recordOfMoveDTO,
}: {
  recordOfMoveDTO: RecordOfMoveDTO;
}): CreatedMoveAndRelatedData => {
  const {
    data: { positionWherePlacePlayerKey, title },
    index: indexOfMoveDTO,
  } = recordOfMoveDTO;

  const description = `Control the slot on ${title}`;
  const move = new TestingMove({
    description,
    indexOfSlotInWhichPlacePiece: positionWherePlacePlayerKey,
    title,
  });

  return {
    dataRelatedToCreatedMove: {
      description,
      index: indexOfMoveDTO,
      nameOfIndex: IndexOfTestingMove[
        indexOfMoveDTO
      ] as NameOfIndexOfTestingMove,
      positionWherePlacePlayerKey,
      title,
    },
    move,
  };
};

type CreatedMovesAndRelatedData = ReadonlyMap<
  IndexOfTestingMove,
  CreatedMoveAndRelatedData
>;

const createMoves = (): CreatedMovesAndRelatedData => {
  const moves = listOfMovesDTOs.map((moveDTO, index) =>
    createMove({
      recordOfMoveDTO: {
        data: moveDTO,
        index,
      },
    }),
  );

  return new Map(
    moves.map(
      ({ dataRelatedToCreatedMove, move }: CreatedMoveAndRelatedData) => [
        dataRelatedToCreatedMove.index,
        {
          dataRelatedToCreatedMove,
          move,
        },
      ],
    ),
  );
};

interface TestMoveParams {
  move: TestingMove;
  testDescriptor: string;
}

export type {
  CreatedMoveAndRelatedData,
  CreatedMovesAndRelatedData,
  TestMoveParams,
};
export { createMove, createMoves, IndexOfTestingMove };
