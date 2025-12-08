import type { IndexOfPlayer } from "@repo/game/Player.js";

import { type ParamsOfSlot, Slot } from "@repo/game/Slot.js";

 
type ParamsOfTicTacToeSlot = ParamsOfSlot & {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
};

class TicTacToeSlot extends Slot<TicTacToeSlot> {
  private readonly indexOfOccupyingPlayer: ParamsOfTicTacToeSlot["indexOfOccupyingPlayer"];

  public constructor({ indexOfOccupyingPlayer }: ParamsOfTicTacToeSlot) {
    super();
    this.indexOfOccupyingPlayer = indexOfOccupyingPlayer;
  }

  public override clone() {
    return new TicTacToeSlot({
      indexOfOccupyingPlayer: this.indexOfOccupyingPlayer,
    });
  }

  public getIndexOfOccupyingPlayer(): typeof this.indexOfOccupyingPlayer {
    return this.indexOfOccupyingPlayer;
  }
}

export type { ParamsOfTicTacToeSlot };
export { TicTacToeSlot };
