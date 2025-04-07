import type { Integer } from "../../types.js";
import Move, { type MoveParams } from "../Move.js";
import type TestingGame from "./Game.js";
import type TestingPlayer from "./Player.js";
import type TestingState from "./State.js";

// enum TestingMoveKey {
//   NorthwestOfNorthwest = 0,
//   NorthOfNorthwest = 1,
//   NortheastOfNorthwest = 2,
//   WestOfNorthwest = 9,
//   CenterOfNorthwest = 10,
//   EastOfNorthwest = 11,
//   SouthwestOfNorthwest = 18,
//   SouthOfNorthwest = 19,
//   SoutheastOfNorthwest = 20,

//   NorthwestOfNorth = 3,
//   NorthOfNorth = 4,
//   NortheastOfNorth = 5,
//   WestOfNorth = 12,
//   CenterOfNorth = 13,
//   EastOfNorth = 14,
//   SouthwestOfNorth = 21,
//   SouthOfNorth = 22,
//   SoutheastOfNorth = 23,

//   NorthwestOfNortheast = 6,
//   NorthOfNortheast = 7,
//   NortheastOfNortheast = 8,
//   WestOfNortheast = 15,
//   CenterOfNortheast = 16,
//   EastOfNortheast = 17,
//   SouthwestOfNortheast = 24,
//   SouthOfNortheast = 25,
//   SoutheastOfNortheast = 26,

//   NorthwestOfWest = 27,
//   NorthOfWest = 28,
//   NortheastOfWest = 29,
//   WestOfWest = 36,
//   CenterOfWest = 37,
//   EastOfWest = 38,
//   SouthwestOfWest = 45,
//   SouthOfWest = 46,
//   SoutheastOfWest = 47,

//   NorthwestOfCenter = 30,
//   NorthOfCenter = 31,
//   NortheastOfCenter = 32,
//   WestOfCenter = 39,
//   CenterOfCenter = 40,
//   EastOfCenter = 41,
//   SouthwestOfCenter = 48,
//   SouthOfCenter = 49,
//   SoutheastOfCenter = 50,

//   NorthwestOfEast = 33,
//   NorthOfEast = 34,
//   NortheastOfEast = 35,
//   WestOfEast = 42,
//   CenterOfEast = 43,
//   EastOfEast = 44,
//   SouthwestOfEast = 51,
//   SouthOfEast = 52,
//   SoutheastOfEast = 53,

//   NorthwestOfSouthwest = 54,
//   NorthOfSouthwest = 55,
//   NortheastOfSouthwest = 56,
//   WestOfSouthwest = 63,
//   CenterOfSouthwest = 64,
//   EastOfSouthwest = 65,
//   SouthwestOfSouthwest = 72,
//   SouthOfSouthwest = 73,
//   SoutheastOfSouthwest = 74,

//   NorthwestOfSouth = 57,
//   NorthOfSouth = 58,
//   NortheastOfSouth = 59,
//   WestOfSouth = 66,
//   CenterOfSouth = 67,
//   EastOfSouth = 68,
//   SouthwestOfSouth = 75,
//   SouthOfSouth = 76,
//   SoutheastOfSouth = 77,

//   NorthwestOfSoutheast = 60,
//   NorthOfSoutheast = 61,
//   NortheastOfSoutheast = 62,
//   WestOfSoutheast = 69,
//   CenterOfSoutheast = 70,
//   EastOfSoutheast = 71,
//   SouthwestOfSoutheast = 78,
//   SouthOfSoutheast = 79,
//   SoutheastOfSoutheast = 80,
// }

const InformationAboutTestingMoves = {
  CenterOfCenter: {
    positionWherePlacePlayerKey: 40,
  },
  CenterOfEast: {
    positionWherePlacePlayerKey: 43,
  },
  CenterOfNorth: {
    positionWherePlacePlayerKey: 13,
  },
  CenterOfNortheast: {
    positionWherePlacePlayerKey: 16,
  },
  CenterOfNorthwest: {
    positionWherePlacePlayerKey: 10,
  },
  CenterOfSouth: {
    positionWherePlacePlayerKey: 67,
  },
  CenterOfSoutheast: {
    positionWherePlacePlayerKey: 70,
  },
  CenterOfSouthwest: {
    positionWherePlacePlayerKey: 64,
  },
  CenterOfWest: {
    positionWherePlacePlayerKey: 37,
  },
  EastOfEast: {
    positionWherePlacePlayerKey: 44,
  },
  EastOfNorth: {
    positionWherePlacePlayerKey: 14,
  },
  EastOfNortheast: {
    positionWherePlacePlayerKey: 17,
  },
  EastOfNorthwest: {
    positionWherePlacePlayerKey: 11,
  },
  EastOfSouth: {
    positionWherePlacePlayerKey: 68,
  },
  EastOfSoutheast: {
    positionWherePlacePlayerKey: 71,
  },
  EastOfSouthwest: {
    positionWherePlacePlayerKey: 65,
  },
  EastOfWest: {
    positionWherePlacePlayerKey: 38,
  },
  NortheastOfNorth: {
    positionWherePlacePlayerKey: 5,
  },
  NortheastOfNortheast: {
    positionWherePlacePlayerKey: 8,
  },
  NortheastOfNorthwest: {
    positionWherePlacePlayerKey: 2,
  },
  NorthOfNorth: {
    positionWherePlacePlayerKey: 4,
  },
  NorthOfNortheast: {
    positionWherePlacePlayerKey: 7,
  },
  NorthOfNorthwest: {
    positionWherePlacePlayerKey: 1,
  },
  NorthwestOfNorth: {
    positionWherePlacePlayerKey: 3,
  },
  NorthwestOfNortheast: {
    positionWherePlacePlayerKey: 6,
  },
  NorthwestOfNorthwest: {
    positionWherePlacePlayerKey: 0,
  },
  SoutheastOfNorth: {
    positionWherePlacePlayerKey: 23,
  },
  SoutheastOfNorthwest: {
    positionWherePlacePlayerKey: 20,
  },
  SouthOfNorth: {
    positionWherePlacePlayerKey: 22,
  },
  SouthOfNorthwest: {
    positionWherePlacePlayerKey: 19,
  },
  SouthwestOfNorth: {
    positionWherePlacePlayerKey: 21,
  },
  SouthwestOfNorthwest: {
    positionWherePlacePlayerKey: 18,
  },
  WestOfNorth: {
    positionWherePlacePlayerKey: 12,
  },
  WestOfNorth: { positionWherePlacePlayerKey: 12 },
  WestOfNorthwest: {
    positionWherePlacePlayerKey: 9,
  },
} as const;

type TestingMoveParams = MoveParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> & {
  positionWherePlacePlayerKey: Integer;
};

class TestingMove extends Move<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  private readonly positionWherePlacePlayerKey: TestingMoveParams["positionWherePlacePlayerKey"];

  constructor({ positionWherePlacePlayerKey, ...params }: TestingMoveParams) {
    super(params);
    this.positionWherePlacePlayerKey = positionWherePlacePlayerKey;
  }

  public override clone(): TestingMove {
    return new TestingMove({
      description: this.getDescription(),
      positionWherePlacePlayerKey: this.positionWherePlacePlayerKey,
      title: this.getTitle(),
    });
  }

  public getPositionWherePlacePlayerKey(): typeof this.positionWherePlacePlayerKey {
    return this.positionWherePlacePlayerKey;
  }
}

export type { TestingMove as default, TestingMoveKey };
export { informationToBeTransformedIntoTestingMove };
