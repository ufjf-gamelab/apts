import Player, { type PlayerParams } from "../Player.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.test.js";
import type TestingState from "./State.js";

enum TestingPlayerKey {
  Alice,
  Bruno,
}

type TestingPlayerParams = PlayerParams<
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

export { TestingPlayer as default, TestingPlayerKey };
