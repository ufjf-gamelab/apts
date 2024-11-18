import State from "src/engine/Game/State";
import MonteCarloTreeSearch from "src/engine/MonteCarloTreeCommon/Search";
import TicTacToeGame from "src/games/TicTacToe/Game";
import { Move } from "src/games/TicTacToe/types";

const playMove = (
  mcts: MonteCarloTreeSearch<TicTacToeGame>,
  state: State<TicTacToeGame>,
  move: Move,
) => {
  if (state.getWinner()) {
    console.log(`Player ${state.getWinner()} has already won!`);
    return state;
  }

  const probabilities = mcts.search(state);
  console.log(probabilities, "\n");

  const newState = state.playMove(move);
  console.log(newState.toString());

  if (newState.getWinner()) {
    console.log(`Player ${newState.getWinner()} won!`);
  }
  return newState;
};

const predict = () => {
  const ticTacToe = new TicTacToeGame({
    quantityOfColumns: 3,
    quantityOfRows: 3,
  });
  const mcts = new MonteCarloTreeSearch({
    explorationConstant: 1.41,
    game: ticTacToe,
    quantityOfSearches: 1000,
  });

  let state = ticTacToe.getInitialState();
  console.log(state.toString());

  state = playMove(mcts, state, Move.Northwest);
  state = playMove(mcts, state, Move.Center);
  state = playMove(mcts, state, Move.North);
};

export default predict;
