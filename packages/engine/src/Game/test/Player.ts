import Player, { type Players } from "../Player.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingState from "./State.js";

type TestingPlayers = Players<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingPlayer extends Player<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  public override clone(): TestingPlayer {
    return new TestingPlayer({
      name: this.getName(),
      symbol: this.getSymbol(),
    });
  }
}

export type { TestingPlayers };
export { TestingPlayer as default };
