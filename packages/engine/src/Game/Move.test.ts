import { expect, test } from "vitest";

import type { MockGame } from "./Game.test.js";
import Move, { type MoveParams } from "./Move.js";
import type { MockPlayer } from "./Player.test.js";
import type { MockState } from "./State.test.js";

enum MoveKey {
  Fifth = 4,
  First = 0,
  Fourth = 3,
  Second = 1,
  Third = 2,
}

type MockMoveParams = MoveParams<MockPlayer, MockMove, MockState, MockGame>;

class MockMove extends Move<MockPlayer, MockMove, MockState, MockGame> {
  public override play(state: MockState): MockState {
    throw new Error("Method not implemented.");
  }
}

const descriptionShouldBe = (move: MockMove, description: string): void => {
  test(`description of move should be {${description}}.`, {}, () => {
    expect(move.getDescription()).toBe(description);
  });
};

const titleShouldBe = (move: MockMove, title: string): void => {
  test(`title of move should be {${title}}`, {}, () => {
    expect(move.getTitle()).toBe(title);
  });
};

const testMoveFirst = (): MockMove => {
  const description = "Place a stone on the first slot.";
  const title = "First";
  const move = new MockMove({
    description,
    title,
  });

  test("move should be an instance of MockMove", () => {
    expect(move).toBeInstanceOf(MockMove);
  });

  descriptionShouldBe(move, description);
  titleShouldBe(move, title);

  return move;
};

const moves = new Map<MoveKey, MockMove>([
  [
    MoveKey.Fifth,
    new MockMove({
      description: "Place a stone on the fifth slot.",
      title: "Fifth",
    }),
  ],
  [MoveKey.First, testMoveFirst()],
  [
    MoveKey.Fourth,
    new MockMove({
      description: "Place a stone on the fourth slot.",
      title: "Fourth",
    }),
  ],
  [
    MoveKey.Second,
    new MockMove({
      description: "Place a stone on the second slot.",
      title: "Second",
    }),
  ],
  [
    MoveKey.Third,
    new MockMove({
      description: "Place a stone on the third slot.",
      title: "Third",
    }),
  ],
]);

export { MockMove, moves };
