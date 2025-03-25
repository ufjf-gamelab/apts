import { expect, test } from "vitest";

import Game, { type GameParams } from "./Game.js";
import { type MockMove, moves } from "./Move.test.js";
import type { PlayerKey } from "./Player.js";
import { type MockPlayer, players } from "./Player.test.js";
import type { MockState } from "./State.test.js";

type MockGameParams = GameParams<MockPlayer, MockMove, MockState, MockGame>;

class MockGame extends Game<MockPlayer, MockMove, MockState, MockGame> {
  public override clone(): MockGame {
    return new MockGame({
      moves: this.getMoves(),
      name: this.getName(),
      players: this.getPlayers(),
      quantityOfSlots: this.getQuantityOfSlots(),
    });
  }

  public override getEndOfGameMessage(state: MockState): string {
    throw new Error("Method not implemented.");
  }

  public override getInitialState(): MockState {
    throw new Error("Method not implemented.");
  }

  protected override getNextPlayerKey(playerKey: PlayerKey): PlayerKey {
    throw new Error("Method not implemented.");
  }
}

const testGame = (): MockGame => {
  const name = "Single pile Nim";
  const quantityOfSlots = 5;
  const game = new MockGame({
    moves,
    name,
    players,
    quantityOfSlots,
  });

  test("game should be an instance of MockGame", () => {
    expect(game).toBeInstanceOf(MockGame);
  });

  test("game name should be {Single pile Nim}", () => {
    expect(game.getName()).toBe("Single pile Nim");
  });

  return game;
};

const game = testGame();

export { game, MockGame };
