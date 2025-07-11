import { Player } from "@repo/game/Player.js";

class SnowballPlayer extends Player {
  public override clone(): SnowballPlayer {
    return new SnowballPlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export { SnowballPlayer };
