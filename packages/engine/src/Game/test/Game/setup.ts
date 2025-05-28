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
    currentState = game.play(indexOfMove, currentState);
    playedMoves.push(indexOfMove);

    if (game.isFinal(currentState)) {
      const move = game.getMove(indexOfMove);

      if (move === null) {
        throw new Error(
          `Move on index ${indexOfMove} is null, but match is finished`,
        );
      }

      throw new Error(
        `Match finished after playing move {${encodeMove({ move })}}. Cannot play more moves.`,
      );
    }
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
