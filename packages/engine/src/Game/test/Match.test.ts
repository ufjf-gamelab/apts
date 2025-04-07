import { test } from "vitest";

import { createGame } from "./Game.test.js";
import { createMoves } from "./Move.test.js";
import { createPlayers } from "./Player.test.js";
import type TestingState from "./State.js";

const playTurn = ({ state }: { state: TestingState }): void => {
  const game = state.getGame();
  const validMoves = game.getValidMoves({ state });
};

const testMatch = (): void => {
  const players = createPlayers();
  const moves = createMoves();
  const game = createGame({
    movesList: moves,
    playersList: players,
  });
  const state = game.getInitialState();

  playTurn({ state });
};

testMatch();
