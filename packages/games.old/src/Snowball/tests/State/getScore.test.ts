import type { Integer } from "@repo/engine_core/types.js";
import { expect, test } from "vitest";

import type TestingState from "../../State.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { ONE_POINT } from "../Shape/setup.js";
import { encodeScore } from "./encode.js";
import { createInitialState, type TestStateParams } from "./setup.js";

const getScoreShouldReturn = ({
  expectedScore,
  state,
  testDescriptor,
}: TestStateParams & {
  expectedScore: ReturnType<TestingState["getScore"]>;
}): void => {
  test(`${testDescriptor}: getScore should return {${encodeScore({
    score: expectedScore,
    surround: true,
  })}}`, () => {
    expect(state.getScore()).not.toBe(expectedScore);
    expect(state.getScore()).toStrictEqual(expectedScore);
  });

  test(`${testDescriptor}: modifying the object score received by the getter should not change the internal attribute`, () => {
    const scoreBeforeUpdate = state.getScore();

    const updatedScore = state.getScore() as Integer[];
    updatedScore[IndexOfTestingPlayer.One] = ONE_POINT;

    expect(state.getScore()).not.toBe(scoreBeforeUpdate);
    expect(state.getScore()).toStrictEqual(scoreBeforeUpdate);
    expect(state.getScore()).not.toBe(updatedScore);
    expect(state.getScore()).not.toEqual(updatedScore);
  });
};

const testGetScoreForInitialState = (): void => {
  const { state } = createInitialState();
  const expectedScore = state.getScore();
  getScoreShouldReturn({
    expectedScore,
    state,
    testDescriptor: "initial",
  });
};

testGetScoreForInitialState();
