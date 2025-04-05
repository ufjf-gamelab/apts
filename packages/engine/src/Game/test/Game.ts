import Game, { type GameParams } from "../Game.js";
import type { PlayerKey } from "../Player.js";
import type TestingMove from "./Move.test.js";
import type { TestingPlayer } from "./Player.test.js";
import type TestingState from "./State.js";

type TestingGameParams = GameParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingGame extends Game<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  public override clone(): TestingGame {
    return new TestingGame({
      moves: Array.from(this.getMoves().values()),
      name: this.getName(),
      players: Array.from(this.getPlayers().values()),
      quantityOfSlots: this.getQuantityOfSlots(),
    });
  }

  public override getEndOfGameMessage(state: TestingState): string {
    throw new Error("Method not implemented.");
  }

  public override getInitialState(): TestingState {
    throw new Error("Method not implemented.");
  }

  protected override getNextPlayerKey(playerKey: PlayerKey): PlayerKey {
    throw new Error("Method not implemented.");
  }
}

export { TestingGame as default, type TestingGameParams };
