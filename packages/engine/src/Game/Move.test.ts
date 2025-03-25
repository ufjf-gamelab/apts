import { expect, test } from "vitest";

import type { MockGame } from "./Game.test.js";
import type { MockPlayer } from "./Player.test.js";
import type { MockState } from "./State.test.js";

import Move, { MoveParams } from "./Move.js";

enum MoveKey {
  Add = 0,
  Steal = 1,
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

const testMoveAdd = (): MockMove => {
  let description = "Add one point to the player's score.";
  let title = "Add";
  const move = new MockMove({
    description,
    title,
  });

  test("move should be an instance of MockMove", () => {
    expect(move).toBeInstanceOf(MockMove);
  });

  descriptionShouldBe(move, description);
  titleShouldBe(move, title);

  test("description of player should not change if the external object that defined its name changes", () => {
    description = "Modified description";
    expect(move.getDescription()).toBe("Add one point to the player's score.");
  });

  test("title of player should not change if the external object that defined its symbol changes", () => {
    title = "Modified title";
    expect(move.getTitle()).toBe("Add");
  });

  return move;
};

const testMoveSteal = (): MockMove => {
  let description = "Subtract two points from the opponent's score.";
  let title = "Steal";
  const move = new MockMove({
    description,
    title,
  });

  test("move should be an instance of MockMove", () => {
    expect(move).toBeInstanceOf(MockMove);
  });

  descriptionShouldBe(move, description);
  titleShouldBe(move, title);

  test("description of player should not change if the external object that defined its name changes", () => {
    description = "Modified description";
    expect(move.getDescription()).toBe(
      "Subtract two points from the opponent's score.",
    );
  });

  test("title of player should not change if the external object that defined its symbol changes", () => {
    title = "Modified title";
    expect(move.getTitle()).toBe("Steal");
  });

  return move;
};

const moves = new Map<MoveKey, MockMove>([
  [MoveKey.Add, testMoveAdd()],
  [MoveKey.Steal, testMoveSteal()],
]);

export { MockMove, moves };
