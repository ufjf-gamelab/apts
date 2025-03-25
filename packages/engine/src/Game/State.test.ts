import type { MockGame } from "./Game.test.js";
import type { MockMove } from "./Move.test.js";
import type { PlayerKey } from "./Player.js";
import type { MockPlayer } from "./Player.test.js";
import State from "./State.js";

// type MockStateParams = StateParams<MockPlayer, MockMove, MockState, MockGame>;

class MockState extends State<MockPlayer, MockMove, MockState, MockGame> {
  public override changePerspective(playerKey: PlayerKey): MockState {
    throw new Error("Method not implemented.");
  }
  public override toString(): string {
    throw new Error("Method not implemented.");
  }
}

// const playerKey = 0;
// const score = [0, 0];
// const slots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// const validMovesKeys = [0, 1];

// const state = new MockState({
//   game,
//   playerKey,
//   score,
//   slots,
//   validMovesKeys,
// });

// test("state game should be {game}", () => {
//   expect(state.getGame()).toBe(game);
// });

// test("state playerKey should be {0}", () => {
//   expect(state.getPlayerKey()).toBe(playerKey);
// });

// test("state score should be {[0, 0]}", () => {
//   expect(state.getScore()).toStrictEqual([0, 0]);
//   expect(state.getScore()).not.toBe(score);
// });

// test("state slots should be {[0, 0, 0, 0, 0, 0, 0, 0, 0]}", () => {
//   expect(state.getSlots()).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
//   expect(state.getSlots()).not.toBe(slots);
// });

// test("state validMovesKeys should be {[0, 1]}", () => {
//   expect(state.getValidMovesKeys()).toStrictEqual([0, 1]);
//   expect(state.getValidMovesKeys()).not.toBe(validMovesKeys);
// });

export { MockState };
