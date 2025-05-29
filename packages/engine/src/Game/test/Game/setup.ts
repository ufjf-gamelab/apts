import TestingGame from "../Game.js";
import type TestingMove from "../Move.js";
import { encodeMove } from "../Move/encode.js";
import {
  type CreatedMovesAndRelatedData,
  createMoves,
  type IndexOfTestingMove,
} from "../Move/setup.js";
import {
  type CreatedPlayersAndRelatedData,
  createPlayers,
} from "../Player/setup.js";
import type TestingState from "../State.js";

interface CreatedGameAndRelatedData {
  dataRelatedToCreatedGame: DataRelatedToCreatedGame;
  game: TestingGame;
}

interface DataRelatedToCreatedGame {
  moves: CreatedMovesAndRelatedData;
  players: CreatedPlayersAndRelatedData;
}

interface TestGameParams {
  game: TestingGame;
  testDescriptor: string;
}

const createGame = ({
  moves,
  players,
}: DataRelatedToCreatedGame): CreatedGameAndRelatedData => {
  const game = new TestingGame({
    moves: Array.from(moves.values().map(({ move }) => move)),
    name: "Testing Game",
    players: Array.from(players.values().map(({ player }) => player)),
  });
  return {
    dataRelatedToCreatedGame: {
      moves,
      players,
    },
    game,
  };
};

const createCommonGame = (): CreatedGameAndRelatedData => {
  const players = createPlayers();
  const moves = createMoves();
  return createGame({
    moves,
    players,
  });
};

const playMoves = ({
  game,
  indexesOfMoves,
  state,
}: {
  game: TestingGame;
  indexesOfMoves: readonly IndexOfTestingMove[];
  state: TestingState;
}): { state: TestingState; validMoves: TestingMove[] } => {
  let currentState = state;
  const playedMoves: IndexOfTestingMove[] = [];

  for (const indexOfMove of indexesOfMoves) {
    if (game.isFinal(currentState)) {
      const move = game.getMove(indexOfMove);
      throw new Error(
        `Match was already finished when tried to play move {${move === null ? "null" : encodeMove({ move })}}. Cannot play more moves.`,
      );
    }

    currentState = game.play(indexOfMove, currentState);
    playedMoves.push(indexOfMove);
  }

  const indexesOfAllMoves = game
    .getMoves()
    .map((_, index) => index as IndexOfTestingMove);

  const indexesOfNotPlayedMoves = indexesOfAllMoves.filter(
    index => !playedMoves.includes(index),
  );

  const validMoves = indexesOfNotPlayedMoves.reduce<TestingMove[]>(
    (moves, index) => {
      const move = game.getMove(index);
      if (move !== null) {
        moves.push(move);
      }
      return moves;
    },
    [],
  );

  return { state: currentState, validMoves };
};

export type { TestGameParams };
export { createCommonGame, createGame, playMoves };
