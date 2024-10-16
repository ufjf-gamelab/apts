import MonteCarloTreeSearch from "./engine/MonteCarloTreeSearchCommon/Search";
import TicTacToeGame from "./games/TicTacToe/Game";

const ROWS = 3;
const COLUMNS = 3;

const hello = () => {
  const ticTacToe = new TicTacToeGame(ROWS, COLUMNS);
  const state = ticTacToe.getInitialState();

  console.log(state);
  state.performAction(0, 1);
  console.log(state);
  state.performAction(1, -1);
  console.log(state);

  const mcts = new MonteCarloTreeSearch({
    game: ticTacToe,
    params: {
      explorationConstant: 2,
      searches: 100,
    },
  });

  const probabilities = mcts.search(state);

  console.log(probabilities);
};

hello();
