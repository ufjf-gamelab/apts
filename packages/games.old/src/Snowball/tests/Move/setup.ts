import TestingMove from "../../Move.js";
import { IndexOfTestingSlot } from "../Slot/setup.js";

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
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfCenter,
    title: "Center of Center",
  },
  [IndexOfTestingMove.CenterOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfEast,
    title: "Center of East",
  },
  [IndexOfTestingMove.CenterOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfNorth,
    title: "Center of North",
  },
  [IndexOfTestingMove.CenterOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfNortheast,
    title: "Center of Northeast",
  },
  [IndexOfTestingMove.CenterOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfNorthwest,
    title: "Center of Northwest",
  },
  [IndexOfTestingMove.CenterOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfSouth,
    title: "Center of South",
  },
  [IndexOfTestingMove.CenterOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfSoutheast,
    title: "Center of Southeast",
  },
  [IndexOfTestingMove.CenterOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfSouthwest,
    title: "Center of Southwest",
  },
  [IndexOfTestingMove.CenterOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.CenterOfWest,
    title: "Center of West",
  },

  [IndexOfTestingMove.EastOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfCenter,
    title: "East of Center",
  },
  [IndexOfTestingMove.EastOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfEast,
    title: "East of East",
  },
  [IndexOfTestingMove.EastOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfNorth,
    title: "East of North",
  },
  [IndexOfTestingMove.EastOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfNortheast,
    title: "East of Northeast",
  },
  [IndexOfTestingMove.EastOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfNorthwest,
    title: "East of Northwest",
  },
  [IndexOfTestingMove.EastOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfSouth,
    title: "East of South",
  },
  [IndexOfTestingMove.EastOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfSoutheast,
    title: "East of Southeast",
  },
  [IndexOfTestingMove.EastOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfSouthwest,
    title: "East of Southwest",
  },
  [IndexOfTestingMove.EastOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.EastOfWest,
    title: "East of West",
  },

  [IndexOfTestingMove.NortheastOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfCenter,
    title: "Northeast of Center",
  },
  [IndexOfTestingMove.NortheastOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfEast,
    title: "Northeast of East",
  },
  [IndexOfTestingMove.NortheastOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfNorth,
    title: "Northeast of North",
  },
  [IndexOfTestingMove.NortheastOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfNortheast,
    title: "Northeast of Northeast",
  },
  [IndexOfTestingMove.NortheastOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfNorthwest,
    title: "Northeast of Northwest",
  },
  [IndexOfTestingMove.NortheastOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfSouth,
    title: "Northeast of South",
  },
  [IndexOfTestingMove.NortheastOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfSoutheast,
    title: "Northeast of Southeast",
  },
  [IndexOfTestingMove.NortheastOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfSouthwest,
    title: "Northeast of Southwest",
  },
  [IndexOfTestingMove.NortheastOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NortheastOfWest,
    title: "Northeast of West",
  },

  [IndexOfTestingMove.NorthOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfCenter,
    title: "North of Center",
  },
  [IndexOfTestingMove.NorthOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfEast,
    title: "North of East",
  },
  [IndexOfTestingMove.NorthOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfNorth,
    title: "North of North",
  },
  [IndexOfTestingMove.NorthOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfNortheast,
    title: "North of Northeast",
  },
  [IndexOfTestingMove.NorthOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfNorthwest,
    title: "North of Northwest",
  },
  [IndexOfTestingMove.NorthOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfSouth,
    title: "North of South",
  },
  [IndexOfTestingMove.NorthOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfSoutheast,
    title: "North of Southeast",
  },
  [IndexOfTestingMove.NorthOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfSouthwest,
    title: "North of Southwest",
  },
  [IndexOfTestingMove.NorthOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthOfWest,
    title: "North of West",
  },

  [IndexOfTestingMove.NorthwestOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfCenter,
    title: "Northwest of Center",
  },
  [IndexOfTestingMove.NorthwestOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfEast,
    title: "Northwest of East",
  },
  [IndexOfTestingMove.NorthwestOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfNorth,
    title: "Northwest of North",
  },
  [IndexOfTestingMove.NorthwestOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfNortheast,
    title: "Northwest of Northeast",
  },
  [IndexOfTestingMove.NorthwestOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfNorthwest,
    title: "Northwest of Northwest",
  },
  [IndexOfTestingMove.NorthwestOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfSouth,
    title: "Northwest of South",
  },
  [IndexOfTestingMove.NorthwestOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfSoutheast,
    title: "Northwest of Southeast",
  },
  [IndexOfTestingMove.NorthwestOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfSouthwest,
    title: "Northwest of Southwest",
  },
  [IndexOfTestingMove.NorthwestOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.NorthwestOfWest,
    title: "Northwest of West",
  },

  [IndexOfTestingMove.SoutheastOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfCenter,
    title: "Southeast of Center",
  },
  [IndexOfTestingMove.SoutheastOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfEast,
    title: "Southeast of East",
  },
  [IndexOfTestingMove.SoutheastOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfNorth,
    title: "Southeast of North",
  },
  [IndexOfTestingMove.SoutheastOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfNortheast,
    title: "Southeast of Northeast",
  },
  [IndexOfTestingMove.SoutheastOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfNorthwest,
    title: "Southeast of Northwest",
  },
  [IndexOfTestingMove.SoutheastOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfSouth,
    title: "Southeast of South",
  },
  [IndexOfTestingMove.SoutheastOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfSoutheast,
    title: "Southeast of Southeast",
  },
  [IndexOfTestingMove.SoutheastOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfSouthwest,
    title: "Southeast of Southwest",
  },
  [IndexOfTestingMove.SoutheastOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SoutheastOfWest,
    title: "Southeast of West",
  },

  [IndexOfTestingMove.SouthOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfCenter,
    title: "South of Center",
  },
  [IndexOfTestingMove.SouthOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfEast,
    title: "South of East",
  },
  [IndexOfTestingMove.SouthOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfNorth,
    title: "South of North",
  },
  [IndexOfTestingMove.SouthOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfNortheast,
    title: "South of Northeast",
  },
  [IndexOfTestingMove.SouthOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfNorthwest,
    title: "South of Northwest",
  },
  [IndexOfTestingMove.SouthOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfSouth,
    title: "South of South",
  },
  [IndexOfTestingMove.SouthOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfSoutheast,
    title: "South of Southeast",
  },
  [IndexOfTestingMove.SouthOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfSouthwest,
    title: "South of Southwest",
  },
  [IndexOfTestingMove.SouthOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthOfWest,
    title: "South of West",
  },

  [IndexOfTestingMove.SouthwestOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfCenter,
    title: "Southwest of Center",
  },
  [IndexOfTestingMove.SouthwestOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfEast,
    title: "Southwest of East",
  },
  [IndexOfTestingMove.SouthwestOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfNorth,
    title: "Southwest of North",
  },
  [IndexOfTestingMove.SouthwestOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfNortheast,
    title: "Southwest of Northeast",
  },
  [IndexOfTestingMove.SouthwestOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfNorthwest,
    title: "Southwest of Northwest",
  },
  [IndexOfTestingMove.SouthwestOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfSouth,
    title: "Southwest of South",
  },
  [IndexOfTestingMove.SouthwestOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfSoutheast,
    title: "Southwest of Southeast",
  },
  [IndexOfTestingMove.SouthwestOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfSouthwest,
    title: "Southwest of Southwest",
  },
  [IndexOfTestingMove.SouthwestOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.SouthwestOfWest,
    title: "Southwest of West",
  },

  [IndexOfTestingMove.WestOfCenter]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfCenter,
    title: "West of Center",
  },
  [IndexOfTestingMove.WestOfEast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfEast,
    title: "West of East",
  },
  [IndexOfTestingMove.WestOfNorth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfNorth,
    title: "West of North",
  },
  [IndexOfTestingMove.WestOfNortheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfNortheast,
    title: "West of Northeast",
  },
  [IndexOfTestingMove.WestOfNorthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfNorthwest,
    title: "West of Northwest",
  },
  [IndexOfTestingMove.WestOfSouth]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfSouth,
    title: "West of South",
  },
  [IndexOfTestingMove.WestOfSoutheast]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfSoutheast,
    title: "West of Southeast",
  },
  [IndexOfTestingMove.WestOfSouthwest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfSouthwest,
    title: "West of Southwest",
  },
  [IndexOfTestingMove.WestOfWest]: {
    indexOfSlotInWhichPlacePiece: IndexOfTestingSlot.WestOfWest,
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
  movesDTOs[IndexOfTestingMove.WestOfNorthwest],
  movesDTOs[IndexOfTestingMove.CenterOfNorthwest],
  movesDTOs[IndexOfTestingMove.EastOfNorthwest],
  movesDTOs[IndexOfTestingMove.SouthwestOfNorthwest],
  movesDTOs[IndexOfTestingMove.SouthOfNorthwest],
  movesDTOs[IndexOfTestingMove.SoutheastOfNorthwest],

  movesDTOs[IndexOfTestingMove.NorthwestOfNorth],
  movesDTOs[IndexOfTestingMove.NorthOfNorth],
  movesDTOs[IndexOfTestingMove.NortheastOfNorth],
  movesDTOs[IndexOfTestingMove.WestOfNorth],
  movesDTOs[IndexOfTestingMove.CenterOfNorth],
  movesDTOs[IndexOfTestingMove.EastOfNorth],
  movesDTOs[IndexOfTestingMove.SouthwestOfNorth],
  movesDTOs[IndexOfTestingMove.SouthOfNorth],
  movesDTOs[IndexOfTestingMove.SoutheastOfNorth],

  movesDTOs[IndexOfTestingMove.NorthwestOfNortheast],
  movesDTOs[IndexOfTestingMove.NorthOfNortheast],
  movesDTOs[IndexOfTestingMove.NortheastOfNortheast],
  movesDTOs[IndexOfTestingMove.WestOfNortheast],
  movesDTOs[IndexOfTestingMove.CenterOfNortheast],
  movesDTOs[IndexOfTestingMove.EastOfNortheast],
  movesDTOs[IndexOfTestingMove.SouthwestOfNortheast],
  movesDTOs[IndexOfTestingMove.SouthOfNortheast],
  movesDTOs[IndexOfTestingMove.SoutheastOfNortheast],

  movesDTOs[IndexOfTestingMove.NorthwestOfWest],
  movesDTOs[IndexOfTestingMove.NorthOfWest],
  movesDTOs[IndexOfTestingMove.NortheastOfWest],
  movesDTOs[IndexOfTestingMove.WestOfWest],
  movesDTOs[IndexOfTestingMove.CenterOfWest],
  movesDTOs[IndexOfTestingMove.EastOfWest],
  movesDTOs[IndexOfTestingMove.SouthwestOfWest],
  movesDTOs[IndexOfTestingMove.SouthOfWest],
  movesDTOs[IndexOfTestingMove.SoutheastOfWest],

  movesDTOs[IndexOfTestingMove.NorthwestOfCenter],
  movesDTOs[IndexOfTestingMove.NorthOfCenter],
  movesDTOs[IndexOfTestingMove.NortheastOfCenter],
  movesDTOs[IndexOfTestingMove.WestOfCenter],
  movesDTOs[IndexOfTestingMove.CenterOfCenter],
  movesDTOs[IndexOfTestingMove.EastOfCenter],
  movesDTOs[IndexOfTestingMove.SouthwestOfCenter],
  movesDTOs[IndexOfTestingMove.SouthOfCenter],
  movesDTOs[IndexOfTestingMove.SoutheastOfCenter],

  movesDTOs[IndexOfTestingMove.NorthwestOfEast],
  movesDTOs[IndexOfTestingMove.NorthOfEast],
  movesDTOs[IndexOfTestingMove.NortheastOfEast],
  movesDTOs[IndexOfTestingMove.WestOfEast],
  movesDTOs[IndexOfTestingMove.CenterOfEast],
  movesDTOs[IndexOfTestingMove.EastOfEast],
  movesDTOs[IndexOfTestingMove.SouthwestOfEast],
  movesDTOs[IndexOfTestingMove.SouthOfEast],
  movesDTOs[IndexOfTestingMove.SoutheastOfEast],

  movesDTOs[IndexOfTestingMove.NorthwestOfSouthwest],
  movesDTOs[IndexOfTestingMove.NorthOfSouthwest],
  movesDTOs[IndexOfTestingMove.NortheastOfSouthwest],
  movesDTOs[IndexOfTestingMove.WestOfSouthwest],
  movesDTOs[IndexOfTestingMove.CenterOfSouthwest],
  movesDTOs[IndexOfTestingMove.EastOfSouthwest],
  movesDTOs[IndexOfTestingMove.SouthwestOfSouthwest],
  movesDTOs[IndexOfTestingMove.SouthOfSouthwest],
  movesDTOs[IndexOfTestingMove.SoutheastOfSouthwest],

  movesDTOs[IndexOfTestingMove.NorthwestOfSouth],
  movesDTOs[IndexOfTestingMove.NorthOfSouth],
  movesDTOs[IndexOfTestingMove.NortheastOfSouth],
  movesDTOs[IndexOfTestingMove.WestOfSouth],
  movesDTOs[IndexOfTestingMove.CenterOfSouth],
  movesDTOs[IndexOfTestingMove.EastOfSouth],
  movesDTOs[IndexOfTestingMove.SouthwestOfSouth],
  movesDTOs[IndexOfTestingMove.SouthOfSouth],
  movesDTOs[IndexOfTestingMove.SoutheastOfSouth],

  movesDTOs[IndexOfTestingMove.NorthwestOfSoutheast],
  movesDTOs[IndexOfTestingMove.NorthOfSoutheast],
  movesDTOs[IndexOfTestingMove.NortheastOfSoutheast],
  movesDTOs[IndexOfTestingMove.WestOfSoutheast],
  movesDTOs[IndexOfTestingMove.CenterOfSoutheast],
  movesDTOs[IndexOfTestingMove.EastOfSoutheast],
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
