import type { Integer } from "@repo/engine_core/types.js";

import { Move, type ParamsOfMove } from "@repo/game/Move.js";

type ParamsOfSnowballMove = ParamsOfMove & {
  indexOfSlotInWhichPlacePiece: Integer;
};

class SnowballMove extends Move<SnowballMove> {
  private readonly indexOfSlotInWhichPlacePiece: ParamsOfSnowballMove["indexOfSlotInWhichPlacePiece"];

  public constructor({
    indexOfSlotInWhichPlacePiece,
    ...params
  }: ParamsOfSnowballMove) {
    super(params);
    this.indexOfSlotInWhichPlacePiece = indexOfSlotInWhichPlacePiece;
  }

  public override clone() {
    return new SnowballMove({
      description: this.getDescription(),
      indexOfSlotInWhichPlacePiece: this.indexOfSlotInWhichPlacePiece,
      title: this.getTitle(),
    });
  }

  public getIndexOfSlotInWhichPlacePiece() {
    return this.indexOfSlotInWhichPlacePiece;
  }
}

export type { ParamsOfSnowballMove };
export { SnowballMove };
