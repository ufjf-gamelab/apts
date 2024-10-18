import State from "src/engine/Game/State";
import TicTacToeGame from "src/games/TicTacToe/Game";
import { Move } from "src/games/TicTacToe/types";

const playMove = (state: State<TicTacToeGame>, move: Move) => {
  if (state.getWinner()) {
    console.log(`Player ${state.getWinner()} has already won!`);
    return state;
  }

  const newState = state.playMove(move);
  console.log(newState);
  if (newState.getWinner()) {
    console.log(`Player ${newState.getWinner()} won!`);
  }
  return newState;
};

const play = () => {
  const ticTacToe = new TicTacToeGame({
    quantityOfColumns: 3,
    quantityOfRows: 3,
  });
  let state = ticTacToe.getInitialState();
  console.log(state);

  state = playMove(state, Move.Northwest);
  state = playMove(state, Move.Center);
  state = playMove(state, Move.North);
  state = playMove(state, Move.West);
  state = playMove(state, Move.Southwest);
  state = playMove(state, Move.East);
  console.log(state);
  console.log(state.getTurnOutcome());
};

export default play;
