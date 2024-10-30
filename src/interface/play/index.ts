import Game from "src/engine/Game/Game";
import State from "src/engine/Game/State";
import { Move } from "src/games/TicTacToe/types";
import { GameMode } from "..";

const playMove = <G extends Game>(state: State<G>, move: Move) => {
  if (state.getWinner()) {
    console.log(`Player ${state.getWinner()} has already won!`);
    return state;
  }

  const newState = state.playMove(move);
  console.log(newState.toString());
  if (newState.getWinner()) {
    console.log(`Player ${newState.getWinner()} won!`);
  }
  return newState;
};

const printValidMoves = <G extends Game>(state: State<G>) => {
  const validMovesMask = state.getValidMoves();
  const validMoves = validMovesMask.map((validMove, index) =>
    validMove ? index : null,
  );
  console.log(
    "Valid moves:",
    validMoves.filter(move => move !== null),
  );
};

const printContext = <G extends Game>(state: State<G>) => {
  console.log(state.toString());
  printValidMoves(state);
};

interface PlayParams<G extends Game> {
  game: G;
  gameMode: GameMode;
}

const play = <G extends Game>({ game, gameMode }: PlayParams<G>) => {
  console.log(`Game: ${game.getName()}`);
  console.log(`Mode: ${gameMode}\n`);

  let state = game.getInitialState();
  let player = state.getCurrentPlayer();
  printContext(state);

  // state = playMove(state, Move.Northwest);
  // state = playMove(state, Move.Center);
  // state = playMove(state, Move.North);
  // state = playMove(state, Move.West);
  // state = playMove(state, Move.Southwest);
  // state = playMove(state, Move.East);
  // console.log("\n", state.getTurnOutcome());
};

export default play;
