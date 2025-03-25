import { test } from "vitest";

import type { MockGame } from "./Game.test.js";
import Move from "./Move.js";
import type { MockPlayer } from "./Player.test.js";
import type { MockState } from "./State.test.js";

// type MockMoveParams = MoveParams<MockPlayer, MockMove, MockState, MockGame>;

enum MoveKey {
  East = 0,
  West = 1,
}

class MockMove extends Move<MockPlayer, MockMove, MockState, MockGame> {
  public override play(state: MockState): MockState {
    throw new Error("Method not implemented.");
  }
}

const moveEast = new MockMove({
  description: "Place a stone in the east.",
  title: "East",
});

const moveWest = new MockMove({
  description: "Place a stone in the west.",
  title: "West",
});

const moves = new Map<MoveKey, MockMove>([
  [MoveKey.East, moveEast],
  [MoveKey.West, moveWest],
]);

test("moveEast title should be {East}", () => {
  expect(moveEast.getTitle()).toBe("East");
});

test("moveEast description should be {Place a stone in the east}.", () => {
  expect(moveEast.getDescription()).toBe("Place a stone in the east.");
});

test("moveWest title should be {West}", () => {
  expect(moveWest.getTitle()).toBe("West");
});

test("moveWest description should be {Place a stone in the west}.", () => {
  expect(moveWest.getDescription()).toBe("Place a stone in the west.");
});

export { MockMove };
