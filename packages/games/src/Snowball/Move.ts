import type { Integer } from "@repo/engine_core/types.js";
import { type MoveParams as BaseMoveParams, Move } from "@repo/game/Move.js";

type SnowballMoveParams = BaseMoveParams & {
  indexOfSlotInWhichPlacePiece: Integer;
};

class SnowballMove extends Move {
  private readonly indexOfSlotInWhichPlacePiece: SnowballMoveParams["indexOfSlotInWhichPlacePiece"];

  constructor({ indexOfSlotInWhichPlacePiece, ...params }: SnowballMoveParams) {
    super(params);
    this.indexOfSlotInWhichPlacePiece = indexOfSlotInWhichPlacePiece;
  }

  public override clone(): SnowballMove {
    return new SnowballMove({
      description: this.getDescription(),
      indexOfSlotInWhichPlacePiece: this.indexOfSlotInWhichPlacePiece,
      title: this.getTitle(),
    });
  }

  public getIndexOfSlotInWhichPlacePiece(): typeof this.indexOfSlotInWhichPlacePiece {
    return this.indexOfSlotInWhichPlacePiece;
  }
}

export { SnowballMove };
