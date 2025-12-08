import { Player } from "@repo/game/Player.js";

class ConnectFourPlayer extends Player<ConnectFourPlayer> {
  public override clone() {
    return new ConnectFourPlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export { ConnectFourPlayer };
