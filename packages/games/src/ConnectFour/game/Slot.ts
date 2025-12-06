import type { IndexOfPlayer } from "@repo/game/Player.js";

import { type ParamsOfSlot, Slot } from "@repo/game/Slot.js";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type ParamsOfConnectFourSlot = ParamsOfSlot & {
  indexOfOccupyingPlayer: IndexOfPlayer | null;
};

class ConnectFourSlot extends Slot<ConnectFourSlot> {
  private readonly indexOfOccupyingPlayer: ParamsOfConnectFourSlot["indexOfOccupyingPlayer"];

  public constructor({ indexOfOccupyingPlayer }: ParamsOfConnectFourSlot) {
    super();
    this.indexOfOccupyingPlayer = indexOfOccupyingPlayer;
  }

  public override clone() {
    return new ConnectFourSlot({
      indexOfOccupyingPlayer: this.indexOfOccupyingPlayer,
    });
  }

  public getIndexOfOccupyingPlayer(): typeof this.indexOfOccupyingPlayer {
    return this.indexOfOccupyingPlayer;
  }
}

export type { ParamsOfConnectFourSlot };
export { ConnectFourSlot };
