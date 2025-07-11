import type { Integer } from "@repo/engine_core/types.js";
import {
  default as BaseMove,
  type MoveParams as BaseMoveParams,
} from "@repo/game/Move.js";

type MoveParams = BaseMoveParams & {
  indexOfSlotInWhichPlacePiece: Integer;
};

class Move extends BaseMove {
  private readonly indexOfSlotInWhichPlacePiece: MoveParams["indexOfSlotInWhichPlacePiece"];

  constructor({ indexOfSlotInWhichPlacePiece, ...params }: MoveParams) {
    super(params);
    this.indexOfSlotInWhichPlacePiece = indexOfSlotInWhichPlacePiece;
  }

  public override clone(): Move {
    return new Move({
      description: this.getDescription(),
      indexOfSlotInWhichPlacePiece: this.indexOfSlotInWhichPlacePiece,
      title: this.getTitle(),
    });
  }

  public getIndexOfSlotInWhichPlacePiece(): typeof this.indexOfSlotInWhichPlacePiece {
    return this.indexOfSlotInWhichPlacePiece;
  }
}

export { Move as default };
