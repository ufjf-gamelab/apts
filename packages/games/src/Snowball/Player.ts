import { default as BasePlayer } from "@repo/game/Player.js";

class Player extends BasePlayer {
  public override clone(): Player {
    return new Player({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export { Player as default };
