import Game from "src/engine/Game/Game";
import Move from "src/engine/Game/Move";
import Player from "src/engine/Game/Player";
import State from "src/engine/Game/State";
import Search from "src/engine/MonteCarloTreeCommon/Search";
import TicTacToeGame from "src/games/TicTacToe/Game";
import { TicTacToeMove } from "src/games/TicTacToe/Move";
import { TicTacToePlayer } from "src/games/TicTacToe/Player";
import { TicTacToeState } from "src/games/TicTacToe/State";

const playMove = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  mcts: Search<P, M, S, G>,
  state: S,
  move: M,
): S => {
  const isFinal = state.isFinal();

  if (isFinal) {
    console.log(`The gameplay has already finished!`);
    return state;
  }

  const probabilities = mcts.getProbabilities(state);
  console.log(probabilities, "\n");

  const nextState = move.play(state);
  console.log(nextState.toString());

  if (nextState.isFinal()) {
    console.log("Game has ended.");
    console.log(state.getGame().getGameOverMessage(state));
  }
  return nextState;
};

const predict = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>() => {
  const ticTacToe = new TicTacToeGame({
    quantityOfColumns: 3,
    quantityOfRows: 3,
  });

  const mcts = new Search<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  >({
    explorationConstant: 1.41,
    game: ticTacToe,
    quantityOfSearches: 1000,
  });

  let state = ticTacToe.getInitialState();
  console.log(state.toString());

  const validMoves = state.getValidMoves();
  console.log(validMoves, "\n");

  const [firstValidMove] = validMoves;
  if (typeof firstValidMove === "undefined") {
    console.log("There are no valid moves to play.");
    return;
  }

  state = playMove<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  >(mcts, state, firstValidMove);
  console.log(state.toString());
};

export default predict;
