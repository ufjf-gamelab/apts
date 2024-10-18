import MonteCarloTreeSearch from "src/engine/MonteCarloTreeSearchCommon/Search";
import TicTacToeGame from "src/games/TicTacToe/Game";

const play = () => {
  const ticTacToe = new TicTacToeGame({
    quantityOfColumns: 3,
    quantityOfRows: 3,
  });
  const state = ticTacToe.getInitialState();
  const mcts = new MonteCarloTreeSearch({
    game: ticTacToe,
    
  })
};

export default play;
