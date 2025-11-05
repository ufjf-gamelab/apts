import type { Integer } from "@repo/engine_core/types.js";
import { Move, type MoveParams } from "@repo/game/Move.js";

type SnowballMoveParams = MoveParams & {
  indexOfSlotInWhichPlacePiece: Integer;
};

class SnowballMove extends Move {
  private readonly indexOfSlotInWhichPlacePiece: SnowballMoveParams["indexOfSlotInWhichPlacePiece"];

  constructor({ indexOfSlotInWhichPlacePiece, ...params }: SnowballMoveParams) {
    super(params);
    this.indexOfSlotInWhichPlacePiece = indexOfSlotInWhichPlacePiece;
  }

  public override clone(): this {
    return new SnowballMove({
      description: this.getDescription(),
      indexOfSlotInWhichPlacePiece: this.indexOfSlotInWhichPlacePiece,
      title: this.getTitle(),
    }) as this;
  }

  public getIndexOfSlotInWhichPlacePiece(): typeof this.indexOfSlotInWhichPlacePiece {
    return this.indexOfSlotInWhichPlacePiece;
  }
}

export { SnowballMove };
