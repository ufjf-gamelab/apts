import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import type TestingState from "../State.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getIndexOfNextPlayerShouldReturn = ({
  expectedIndexOfPlayer,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedIndexOfPlayer: ReturnType<TestingGame["getIndexOfNextPlayer"]>;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: getIndexOfNextPlayer() should return {${expectedIndexOfPlayer}}`, () => {
    const nextIndexOfPlayer = game.getIndexOfNextPlayer(state);
    expect(nextIndexOfPlayer).toBe(expectedIndexOfPlayer);
  });
};

const testGetNextIndexOfPlayer = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  getIndexOfNextPlayerShouldReturn({
    expectedIndexOfPlayer: IndexOfTestingPlayer.Two,
    game,
    state: game.getInitialState(),
    testDescriptor,
  });
};

const testGetNextIndexOfPlayerForCommonGame = (): void => {
  const { game } = setupGame();
  testGetNextIndexOfPlayer({ game, testDescriptor: "common" });
};

testGetNextIndexOfPlayerForCommonGame();
