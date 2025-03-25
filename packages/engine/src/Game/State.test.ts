/* eslint-disable @typescript-eslint/no-magic-numbers */
import { expect, test } from "vitest";

import { game, type MockGame } from "./Game.test.js";
import type { MockMove } from "./Move.test.js";
import type { PlayerKey } from "./Player.js";
import { type MockPlayer, PlayerKey as MockPlayerKey } from "./Player.test.js";
import State, { type StateParams } from "./State.js";

type MockStateParams = StateParams<MockPlayer, MockMove, MockState, MockGame>;

class MockState extends State<MockPlayer, MockMove, MockState, MockGame> {
  public override changePerspective(playerKey: PlayerKey): MockState {
    throw new Error("Method not implemented.");
  }

  public override isFinal(): boolean {
    throw new Error("Method not implemented.");
  }

  public override toString(): string {
    return `| ${this.getSlots().join(" | ")} |`;
  }
}

const testState = (): MockState => {
  const state = new MockState({
    game,
    playerKey: MockPlayerKey.Alice,
    score: new Map([
      [MockPlayerKey.Alice, 0],
      [MockPlayerKey.Bruno, 0],
    ]),
    slots: [0, 0, 0, 0, 0],
  });

  test("state should be an instance of MockState", () => {
    expect(state).toBeInstanceOf(MockState);
  });

  test("game of state should be {game}", () => {
    expect(state.getGame()).not.toBe(game);
    expect(state.getGame()).toEqual(game);
  });

  test("playerKey of state should be {MockPlayerKey.Alice}", () => {
    expect(state.getPlayerKey()).toBe(MockPlayerKey.Alice);
  });

  test("score of state should be {[[MockPlayerKey.Alice, 0], [MockPlayerKey.Bruno, 0]]}", () => {
    const score = new Map([
      [MockPlayerKey.Alice, 0],
      [MockPlayerKey.Bruno, 0],
    ]);

    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).toStrictEqual(score);

    const oldScore = new Map(score);
    score.set(MockPlayerKey.Alice, 1);

    expect(state.getScore()).not.toBe(oldScore);
    expect(state.getScore()).toStrictEqual(oldScore);
    expect(state.getScore()).not.toBe(score);
    expect(state.getScore()).not.toEqual(score);
  });

  test("slots of state should be {[0, 0, 0, 0, 0]}", () => {
    const slots = [0, 0, 0, 0, 0];

    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).toStrictEqual(slots);

    const oldSlots = [...slots];
    slots[0] = 1;

    expect(state.getSlots()).not.toBe(oldSlots);
    expect(state.getSlots()).toStrictEqual(oldSlots);
    expect(state.getSlots()).not.toBe(slots);
    expect(state.getSlots()).not.toEqual(slots);
  });

  test('toString() should return {"| 0 | 0 | 0 | 0 | 0 |"}', () => {
    expect(state.toString()).toBe("| 0 | 0 | 0 | 0 | 0 |");
  });

  return state;
};

const state = testState();

export { MockState, state };
