import { Player } from "@repo/game/Player.js";

class TicTacToePlayer extends Player<TicTacToePlayer> {
  public override clone() {
    return new TicTacToePlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export { TicTacToePlayer };
