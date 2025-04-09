import type { Integer } from "../../types.js";
import Move, { type MoveParams, type Moves } from "../Move.js";
import type TestingGame from "./Game.js";
import type TestingPlayer from "./Player.js";
import type TestingState from "./State.js";

type TestingMoveParams = MoveParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> & {
  indexOfSlotInWhichPlacePiece: Integer;
};

type TestingMoves = Moves<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingMove extends Move<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
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

export type { TestingMoves };
export { TestingMove as default };
