import { expect, test } from "vitest";

import type TestingGame from "../../Game.js";
import type TestingState from "../../State.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const getIndexOfNextPlayerShouldReturn = ({
  expectedIndexOfPlayer,
  game,
  state,
  stateDescriptor,
  testDescriptor,
}: TestGameParams & {
  expectedIndexOfPlayer: ReturnType<TestingGame["getIndexOfNextPlayer"]>;
  state: TestingState;
  stateDescriptor: string;
}): void => {
  test(`${testDescriptor}: getIndexOfNextPlayer(${stateDescriptor}) should return {${expectedIndexOfPlayer}}`, () => {
    const nextIndexOfPlayer = game.getIndexOfNextPlayer(state);
    expect(nextIndexOfPlayer).toBe(expectedIndexOfPlayer);
  });
};

const testGetNextIndexOfPlayerForCommonGameAndInitialState = (): void => {
  const { game } = createCommonGame();
  getIndexOfNextPlayerShouldReturn({
    expectedIndexOfPlayer: IndexOfTestingPlayer.Two,
    game,
    state: game.getInitialState(),
    stateDescriptor: "initial state",
    testDescriptor: "common",
  });
};

testGetNextIndexOfPlayerForCommonGameAndInitialState();
