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

type TitleOfIndexOfTestingMove = keyof typeof IndexOfTestingMove;

const movesDTOs = {
  [IndexOfTestingMove.CenterOfCenter]: {
    indexOfSlotInWhichPlacePiece: 40,
    title: "Center of Center",
  },
  [IndexOfTestingMove.CenterOfEast]: {
    indexOfSlotInWhichPlacePiece: 43,
    title: "Center of East",
  },
  [IndexOfTestingMove.CenterOfNorth]: {
    indexOfSlotInWhichPlacePiece: 13,
    title: "Center of North",
  },
  [IndexOfTestingMove.CenterOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 16,
    title: "Center of Northeast",
  },
  [IndexOfTestingMove.CenterOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 10,
    title: "Center of Northwest",
  },
  [IndexOfTestingMove.CenterOfSouth]: {
    indexOfSlotInWhichPlacePiece: 67,
    title: "Center of South",
  },
  [IndexOfTestingMove.CenterOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 70,
    title: "Center of Southeast",
  },
  [IndexOfTestingMove.CenterOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 64,
    title: "Center of Southwest",
  },
  [IndexOfTestingMove.CenterOfWest]: {
    indexOfSlotInWhichPlacePiece: 37,
    title: "Center of West",
  },

  [IndexOfTestingMove.EastOfCenter]: {
    indexOfSlotInWhichPlacePiece: 41,
    title: "East of Center",
  },
  [IndexOfTestingMove.EastOfEast]: {
    indexOfSlotInWhichPlacePiece: 44,
    title: "East of East",
  },
  [IndexOfTestingMove.EastOfNorth]: {
    indexOfSlotInWhichPlacePiece: 14,
    title: "East of North",
  },
  [IndexOfTestingMove.EastOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 17,
    title: "East of Northeast",
  },
  [IndexOfTestingMove.EastOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 11,
    title: "East of Northwest",
  },
  [IndexOfTestingMove.EastOfSouth]: {
    indexOfSlotInWhichPlacePiece: 68,
    title: "East of South",
  },
  [IndexOfTestingMove.EastOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 71,
    title: "East of Southeast",
  },
  [IndexOfTestingMove.EastOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 65,
    title: "East of Southwest",
  },
  [IndexOfTestingMove.EastOfWest]: {
    indexOfSlotInWhichPlacePiece: 38,
    title: "East of West",
  },

  [IndexOfTestingMove.NortheastOfCenter]: {
    indexOfSlotInWhichPlacePiece: 32,
    title: "Northeast of Center",
  },
  [IndexOfTestingMove.NortheastOfEast]: {
    indexOfSlotInWhichPlacePiece: 35,
    title: "Northeast of East",
  },
  [IndexOfTestingMove.NortheastOfNorth]: {
    indexOfSlotInWhichPlacePiece: 5,
    title: "Northeast of North",
  },
  [IndexOfTestingMove.NortheastOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 8,
    title: "Northeast of Northeast",
  },
  [IndexOfTestingMove.NortheastOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 2,
    title: "Northeast of Northwest",
  },
  [IndexOfTestingMove.NortheastOfSouth]: {
    indexOfSlotInWhichPlacePiece: 59,
    title: "Northeast of South",
  },
  [IndexOfTestingMove.NortheastOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 62,
    title: "Northeast of Southeast",
  },
  [IndexOfTestingMove.NortheastOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 56,
    title: "Northeast of Southwest",
  },
  [IndexOfTestingMove.NortheastOfWest]: {
    indexOfSlotInWhichPlacePiece: 29,
    title: "Northeast of West",
  },

  [IndexOfTestingMove.NorthOfCenter]: {
    indexOfSlotInWhichPlacePiece: 31,
    title: "North of Center",
  },
  [IndexOfTestingMove.NorthOfEast]: {
    indexOfSlotInWhichPlacePiece: 34,
    title: "North of East",
  },
  [IndexOfTestingMove.NorthOfNorth]: {
    indexOfSlotInWhichPlacePiece: 4,
    title: "North of North",
  },
  [IndexOfTestingMove.NorthOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 7,
    title: "North of Northeast",
  },
  [IndexOfTestingMove.NorthOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 1,
    title: "North of Northwest",
  },
  [IndexOfTestingMove.NorthOfSouth]: {
    indexOfSlotInWhichPlacePiece: 58,
    title: "North of South",
  },
  [IndexOfTestingMove.NorthOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 61,
    title: "North of Southeast",
  },
  [IndexOfTestingMove.NorthOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 55,
    title: "North of Southwest",
  },
  [IndexOfTestingMove.NorthOfWest]: {
    indexOfSlotInWhichPlacePiece: 28,
    title: "North of West",
  },

  [IndexOfTestingMove.NorthwestOfCenter]: {
    indexOfSlotInWhichPlacePiece: 30,
    title: "Northwest of Center",
  },
  [IndexOfTestingMove.NorthwestOfEast]: {
    indexOfSlotInWhichPlacePiece: 33,
    title: "Northwest of East",
  },
  [IndexOfTestingMove.NorthwestOfNorth]: {
    indexOfSlotInWhichPlacePiece: 3,
    title: "Northwest of North",
  },
  [IndexOfTestingMove.NorthwestOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 6,
    title: "Northwest of Northeast",
  },
  [IndexOfTestingMove.NorthwestOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 0,
    title: "Northwest of Northwest",
  },
  [IndexOfTestingMove.NorthwestOfSouth]: {
    indexOfSlotInWhichPlacePiece: 57,
    title: "Northwest of South",
  },
  [IndexOfTestingMove.NorthwestOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 60,
    title: "Northwest of Southeast",
  },
  [IndexOfTestingMove.NorthwestOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 54,
    title: "Northwest of Southwest",
  },
  [IndexOfTestingMove.NorthwestOfWest]: {
    indexOfSlotInWhichPlacePiece: 27,
    title: "Northwest of West",
  },

  [IndexOfTestingMove.SoutheastOfCenter]: {
    indexOfSlotInWhichPlacePiece: 50,
    title: "Southeast of Center",
  },
  [IndexOfTestingMove.SoutheastOfEast]: {
    indexOfSlotInWhichPlacePiece: 53,
    title: "Southeast of East",
  },
  [IndexOfTestingMove.SoutheastOfNorth]: {
    indexOfSlotInWhichPlacePiece: 23,
    title: "Southeast of North",
  },
  [IndexOfTestingMove.SoutheastOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 26,
    title: "Southeast of Northeast",
  },
  [IndexOfTestingMove.SoutheastOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 20,
    title: "Southeast of Northwest",
  },
  [IndexOfTestingMove.SoutheastOfSouth]: {
    indexOfSlotInWhichPlacePiece: 77,
    title: "Southeast of South",
  },
  [IndexOfTestingMove.SoutheastOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 80,
    title: "Southeast of Southeast",
  },
  [IndexOfTestingMove.SoutheastOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 74,
    title: "Southeast of Southwest",
  },
  [IndexOfTestingMove.SoutheastOfWest]: {
    indexOfSlotInWhichPlacePiece: 47,
    title: "Southeast of West",
  },

  [IndexOfTestingMove.SouthOfCenter]: {
    indexOfSlotInWhichPlacePiece: 49,
    title: "South of Center",
  },
  [IndexOfTestingMove.SouthOfEast]: {
    indexOfSlotInWhichPlacePiece: 52,
    title: "South of East",
  },
  [IndexOfTestingMove.SouthOfNorth]: {
    indexOfSlotInWhichPlacePiece: 22,
    title: "South of North",
  },
  [IndexOfTestingMove.SouthOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 25,
    title: "South of Northeast",
  },
  [IndexOfTestingMove.SouthOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 19,
    title: "South of Northwest",
  },
  [IndexOfTestingMove.SouthOfSouth]: {
    indexOfSlotInWhichPlacePiece: 76,
    title: "South of South",
  },
  [IndexOfTestingMove.SouthOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 79,
    title: "South of Southeast",
  },
  [IndexOfTestingMove.SouthOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 73,
    title: "South of Southwest",
  },
  [IndexOfTestingMove.SouthOfWest]: {
    indexOfSlotInWhichPlacePiece: 46,
    title: "South of West",
  },

  [IndexOfTestingMove.SouthwestOfCenter]: {
    indexOfSlotInWhichPlacePiece: 48,
    title: "Southwest of Center",
  },
  [IndexOfTestingMove.SouthwestOfEast]: {
    indexOfSlotInWhichPlacePiece: 51,
    title: "Southwest of East",
  },
  [IndexOfTestingMove.SouthwestOfNorth]: {
    indexOfSlotInWhichPlacePiece: 21,
    title: "Southwest of North",
  },
  [IndexOfTestingMove.SouthwestOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 24,
    title: "Southwest of Northeast",
  },
  [IndexOfTestingMove.SouthwestOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 18,
    title: "Southwest of Northwest",
  },
  [IndexOfTestingMove.SouthwestOfSouth]: {
    indexOfSlotInWhichPlacePiece: 75,
    title: "Southwest of South",
  },
  [IndexOfTestingMove.SouthwestOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 78,
    title: "Southwest of Southeast",
  },
  [IndexOfTestingMove.SouthwestOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 72,
    title: "Southwest of Southwest",
  },
  [IndexOfTestingMove.SouthwestOfWest]: {
    indexOfSlotInWhichPlacePiece: 45,
    title: "Southwest of West",
  },

  [IndexOfTestingMove.WestOfCenter]: {
    indexOfSlotInWhichPlacePiece: 39,
    title: "West of Center",
  },
  [IndexOfTestingMove.WestOfEast]: {
    indexOfSlotInWhichPlacePiece: 42,
    title: "West of East",
  },
  [IndexOfTestingMove.WestOfNorth]: {
    indexOfSlotInWhichPlacePiece: 12,
    title: "West of North",
  },
  [IndexOfTestingMove.WestOfNortheast]: {
    indexOfSlotInWhichPlacePiece: 15,
    title: "West of Northeast",
  },
  [IndexOfTestingMove.WestOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: 9,
    title: "West of Northwest",
  },
  [IndexOfTestingMove.WestOfSouth]: {
    indexOfSlotInWhichPlacePiece: 66,
    title: "West of South",
  },
  [IndexOfTestingMove.WestOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: 69,
    title: "West of Southeast",
  },
  [IndexOfTestingMove.WestOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: 63,
    title: "West of Southwest",
  },
  [IndexOfTestingMove.WestOfWest]: {
    indexOfSlotInWhichPlacePiece: 36,
    title: "West of West",
  },
} as const;

const getTitleOfTestingMove = (
  indexOfTestingMove: IndexOfTestingMove,
): MoveDTO["title"] => {
  const moveDTO = movesDTOs[indexOfTestingMove];
  return moveDTO.title;
};

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
  indexOfSlotInWhichPlacePiece: TestingMove["indexOfSlotInWhichPlacePiece"];
  nameOfIndex: TitleOfIndexOfTestingMove;
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
    data: { indexOfSlotInWhichPlacePiece, title },
    index: indexOfMoveDTO,
  } = recordOfMoveDTO;

  const description = `Control the slot on ${title}`;
  const move = new TestingMove({
    description,
    indexOfSlotInWhichPlacePiece,
    title,
  });

  return {
    dataRelatedToCreatedMove: {
      description,
      index: indexOfMoveDTO,
      indexOfSlotInWhichPlacePiece,
      nameOfIndex: IndexOfTestingMove[
        indexOfMoveDTO
      ] as TitleOfIndexOfTestingMove,
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
  TitleOfIndexOfTestingMove,
};
export { createMove, createMoves, getTitleOfTestingMove, IndexOfTestingMove };
