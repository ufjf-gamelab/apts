import { Player } from "@repo/game/Player.js";

class SnowballPlayer extends Player<SnowballPlayer> {
  public override clone() {
    return new SnowballPlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export { SnowballPlayer };
