import type { Integer } from "../../types.js";
import Move, { type MoveParams } from "../Move.js";
import type TestingGame from "./Game.js";
import type TestingPlayer from "./Player.js";
import type TestingSlot from "./Slot.js";
import type TestingState from "./State.js";

type TestingMoveParams = MoveParams<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> & {
  indexOfSlotInWhichPlacePiece: Integer;
};

class TestingMove extends Move<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> {
  private readonly indexOfSlotInWhichPlacePiece: TestingMoveParams["indexOfSlotInWhichPlacePiece"];

  constructor({ indexOfSlotInWhichPlacePiece, ...params }: TestingMoveParams) {
    super(params);
    this.indexOfSlotInWhichPlacePiece = indexOfSlotInWhichPlacePiece;
  }

  public override clone(): TestingMove {
    return new TestingMove({
      description: this.getDescription(),
      indexOfSlotInWhichPlacePiece: this.indexOfSlotInWhichPlacePiece,
      title: this.getTitle(),
    });
  }

  public getIndexOfSlotInWhichPlacePiece(): typeof this.indexOfSlotInWhichPlacePiece {
    return this.indexOfSlotInWhichPlacePiece;
  }
}

export { TestingMove as default };
