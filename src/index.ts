import TicTacToeGame from "./games/TicTacToe/Game";
import { Move } from "./games/TicTacToe/State";

const hello = () => {
  const ticTacToe = new TicTacToeGame({
    quantityOfColumns: 3,
    quantityOfRows: 3,
  });
  let state = ticTacToe.getInitialState();
  console.log(state);

  state = state.playMove(Move.Northwest);
  console.log(state);
};

hello();
