import { Player } from "@repo/game/Player.js";

class SnowballPlayer extends Player {
  public override clone(): this {
    return new SnowballPlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    }) as this;
  }
}

export { SnowballPlayer };
