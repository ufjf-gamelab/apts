import { expect, test } from "vitest";
import Game from "./Game.js";
import { MockMove, moves } from "./Move.test.js";
import { PlayerKey } from "./Player.js";
import { MockPlayer, players } from "./Player.test.js";
import { MockState } from "./State.test.js";

// type MockGameParams = GameParams<MockPlayer, MockMove, MockState, MockGame>;

class MockGame extends Game<MockPlayer, MockMove, MockState, MockGame> {
  public override getInitialState(): MockState {
    throw new Error("Method not implemented.");
  }

  public override getGameOverMessage(state: MockState): string {
    throw new Error("Method not implemented.");
  }

  protected override getNextPlayerKey(playerKey: PlayerKey): PlayerKey {
    throw new Error("Method not implemented.");
  }
}

const game = new MockGame({
  moves,
  name: "Mock Game",
  players,
  quantityOfSlots: 9,
});

test("game name should be {Mock Game}", () => {
  expect(game.getName()).toBe("Mock Game");
});

export { game, MockGame };
