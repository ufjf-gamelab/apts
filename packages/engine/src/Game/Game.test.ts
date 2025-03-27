import { expect, test } from "vitest";

import Game, { type GameParams } from "./Game.js";
import { type TestingMove, moves } from "./Move.test.js";
import type { PlayerKey } from "./Player.js";
import { type TestingPlayer, players } from "./Player.test.js";
import type { TestingState } from "./State.test.js";

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
      moves: this.getMoves(),
      name: this.getName(),
      players: this.getPlayers(),
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

const testGame = (): TestingGame => {
  const name = "Single pile Testing";
  const quantityOfSlots = 5;
  const game = new TestingGame({
    moves,
    name,
    players,
    quantityOfSlots,
  });

  test("game should be an instance of TestingGame", () => {
    expect(game).toBeInstanceOf(TestingGame);
  });

  test("game name should be {Single pile Testing}", () => {
    expect(game.getName()).toBe("Single pile Testing");
  });

  return game;
};

const game = testGame();

export { game, TestingGame };
