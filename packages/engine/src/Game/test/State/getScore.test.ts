import { expect, test } from "vitest";

import type TestingState from "../State.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const ONE_POINT = 1;

const getScoreShouldReturn = ({
  expectedScore,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedScore: TestingState["score"];
}): void => {
  test(`${testDescriptor}: getScore should return {[[TestingPlayerKey.Alice, 0], [TestingPlayerKey.Bruno, 0]]}`, () => {
    expect(state.getScore()).not.toBe(expectedScore);
    expect(state.getScore()).toStrictEqual(expectedScore);
  });

  test("modifying the object score received by the getter should not change the internal attribute", () => {
    const scoreBeforeUpdate = state.getScore();

    const [playerOne] = scoreBeforeUpdate.keys();
    if (typeof playerOne === "undefined") {
      throw new Error("Player one is undefined");
    }

    const updatedScore = state.getScore();
    updatedScore.set(playerOne, ONE_POINT);

    expect(state.getScore()).not.toBe(scoreBeforeUpdate);
    expect(state.getScore()).toStrictEqual(scoreBeforeUpdate);
    expect(state.getScore()).not.toBe(updatedScore);
    expect(state.getScore()).not.toEqual(updatedScore);
  });
};

const testGetScore = ({
  expectedScore,
  state,
  testDescriptor,
}: {
  expectedScore: TestingState["score"];
  state: TestingState;
  testDescriptor: string;
}): void => {
  getScoreShouldReturn({ expectedScore, state, testDescriptor });
};

const testGetScoreForInitialState = (): void => {
  const state = createInitialState();
  const expectedScore = state.getScore();
  testGetScore({ expectedScore, state, testDescriptor: "initial state" });
};

testGetScoreForInitialState();
