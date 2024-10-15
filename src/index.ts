import TicTacToeGame from "./games/TicTacToe/Game";

const ROWS = 3;
const COLUMNS = 3;

const hello = () => {
  const ticTacToe = new TicTacToeGame(ROWS, COLUMNS);
  const state = ticTacToe.getInitialState();
  console.log(state);
  state.performAction(0, 1);
  console.log(state);
};

hello();
