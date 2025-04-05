import Game, { type GameParams } from "../Game.js";
import type { PlayerKey } from "../Player.js";
import type TestingMove from "./Move.js";
import { type default as TestingPlayer, TestingPlayerKey } from "./Player.js";
import TestingState, { TestingSlot } from "./State.js";

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
    const firstPlayerKey = this.getPlayers().keys().next().value;
    if (typeof firstPlayerKey === "undefined") {
      throw new Error("No players found");
    }

    const emptySlots = new Array<TestingSlot>(this.getQuantityOfSlots()).fill(
      TestingSlot.Empty,
    );

    return new TestingState({
      game: this,
      playerKey: firstPlayerKey,
      slots: emptySlots,
    });
  }

  public override getNextPlayerKey(state: TestingState): PlayerKey {
    const currentPlayerKey = state.getPlayerKey();
    switch (currentPlayerKey as TestingPlayerKey) {
      case TestingPlayerKey.One:
        return TestingPlayerKey.Two;
      case TestingPlayerKey.Two:
        return TestingPlayerKey.One;
      default:
        throw new Error(
          `Invalid player key: ${currentPlayerKey}. Expected ${TestingPlayerKey.One} or ${TestingPlayerKey.Two}`,
        );
    }
  }
}

export { TestingGame as default, type TestingGameParams };
