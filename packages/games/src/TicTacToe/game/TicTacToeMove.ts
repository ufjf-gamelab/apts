import type { Integer } from "@repo/core/types.js";

import { Move, type ParamsOfMove } from "@repo/game/Move.js";

type ParamsOfTicTacToeMove = ParamsOfMove & {
  indexOfSlotInWhichPlacePiece: Integer;
};

class TicTacToeMove extends Move<TicTacToeMove> {
  private readonly indexOfSlotInWhichPlacePiece: ParamsOfTicTacToeMove["indexOfSlotInWhichPlacePiece"];

  public constructor({
    indexOfSlotInWhichPlacePiece,
    ...params
  }: ParamsOfTicTacToeMove) {
    super(params);
    this.indexOfSlotInWhichPlacePiece = indexOfSlotInWhichPlacePiece;
  }

  public override clone() {
    return new TicTacToeMove({
      description: this.getDescription(),
      indexOfSlotInWhichPlacePiece: this.indexOfSlotInWhichPlacePiece,
      title: this.getTitle(),
    });
  }

  public getIndexOfSlotInWhichPlacePiece() {
    return this.indexOfSlotInWhichPlacePiece;
  }
}

export type { ParamsOfTicTacToeMove };
export { TicTacToeMove };
