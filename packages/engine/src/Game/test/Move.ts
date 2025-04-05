/* eslint-disable perfectionist/sort-enums */
import Move, { type MoveParams } from "../Move.js";
import type TestingGame from "./Game.js";
import type TestingPlayer from "./Player.js";
import TestingState, { TestingSlot } from "./State.js";

enum TestingMoveKey {
  NorthwestOfNorthwest = 0,
  NorthOfNorthwest = 1,
  NortheastOfNorthwest = 2,
  WestOfNorthwest = 9,
  CenterOfNorthwest = 10,
  EastOfNorthwest = 11,
  SouthwestOfNorthwest = 18,
  SouthOfNorthwest = 19,
  SoutheastOfNorthwest = 20,

  NorthwestOfNorth = 3,
  NorthOfNorth = 4,
  NortheastOfNorth = 5,
  WestOfNorth = 12,
  CenterOfNorth = 13,
  EastOfNorth = 14,
  SouthwestOfNorth = 21,
  SouthOfNorth = 22,
  SoutheastOfNorth = 23,

  NorthwestOfNortheast = 6,
  NorthOfNortheast = 7,
  NortheastOfNortheast = 8,
  WestOfNortheast = 15,
  CenterOfNortheast = 16,
  EastOfNortheast = 17,
  SouthwestOfNortheast = 24,
  SouthOfNortheast = 25,
  SoutheastOfNortheast = 26,

  NorthwestOfWest = 27,
  NorthOfWest = 28,
  NortheastOfWest = 29,
  WestOfWest = 36,
  CenterOfWest = 37,
  EastOfWest = 38,
  SouthwestOfWest = 45,
  SouthOfWest = 46,
  SoutheastOfWest = 47,

  NorthwestOfCenter = 30,
  NorthOfCenter = 31,
  NortheastOfCenter = 32,
  WestOfCenter = 39,
  CenterOfCenter = 40,
  EastOfCenter = 41,
  SouthwestOfCenter = 48,
  SouthOfCenter = 49,
  SoutheastOfCenter = 50,

  NorthwestOfEast = 33,
  NorthOfEast = 34,
  NortheastOfEast = 35,
  WestOfEast = 42,
  CenterOfEast = 43,
  EastOfEast = 44,
  SouthwestOfEast = 51,
  SouthOfEast = 52,
  SoutheastOfEast = 53,

  NorthwestOfSouthwest = 54,
  NorthOfSouthwest = 55,
  NortheastOfSouthwest = 56,
  WestOfSouthwest = 63,
  CenterOfSouthwest = 64,
  EastOfSouthwest = 65,
  SouthwestOfSouthwest = 72,
  SouthOfSouthwest = 73,
  SoutheastOfSouthwest = 74,

  NorthwestOfSouth = 57,
  NorthOfSouth = 58,
  NortheastOfSouth = 59,
  WestOfSouth = 66,
  CenterOfSouth = 67,
  EastOfSouth = 68,
  SouthwestOfSouth = 75,
  SouthOfSouth = 76,
  SoutheastOfSouth = 77,

  NorthwestOfSoutheast = 60,
  NorthOfSoutheast = 61,
  NortheastOfSoutheast = 62,
  WestOfSoutheast = 69,
  CenterOfSoutheast = 70,
  EastOfSoutheast = 71,
  SouthwestOfSoutheast = 78,
  SouthOfSoutheast = 79,
  SoutheastOfSoutheast = 80,
}

type TestingMoveParams = MoveParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> & {
  positionWherePlacePlayerKey: TestingMoveKey;
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

  public override play(state: TestingState): TestingState {
    const game = state.getGame();
    const currentPlayerKey = state.getPlayerKey();
    const nextPlayerKey = game.getNextPlayerKey(currentPlayerKey);

    const updatedSlots: TestingSlot[] = state.getSlots();
    const currentSlot = updatedSlots[this.positionWherePlacePlayerKey];

    if (
      typeof currentSlot !== "undefined" &&
      currentSlot === TestingSlot.Empty
    ) {
      const slotThatRepresentsPlayerKey =
        TestingState.getSlotThatRepresentsPlayerKey(currentPlayerKey);
      updatedSlots[this.positionWherePlacePlayerKey] =
        slotThatRepresentsPlayerKey;
    }

    return new TestingState({
      game,
      playerKey: nextPlayerKey,
      slots: updatedSlots,
    });
  }
}

export { TestingMove as default, TestingMoveKey };
