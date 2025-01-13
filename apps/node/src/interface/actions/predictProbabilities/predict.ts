import Game from "@repo/engine/engine/Game/Game.js";
import Move from "@repo/engine/engine/Game/Move.js";
import Player from "@repo/engine/engine/Game/Player.js";
import State from "@repo/engine/engine/Game/State.js";
import Search from "@repo/engine/engine/MonteCarloTreeCommon/Search.js";
import TicTacToeGame from "../../../games/TicTacToe/Game.js";
import { TicTacToeMove } from "../../../games/TicTacToe/Move.js";
import { TicTacToePlayer } from "../../../games/TicTacToe/Player.js";
import { TicTacToeState } from "../../../games/TicTacToe/State.js";
import { MoveKey } from "../../../games/TicTacToe/types.js";
import { ProcessGraphvizDotString } from "../actions.js";

interface MoveOutcome<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  graphvizDotString: string | null;
  state: S;
}

const playMove = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  mcts: Search<P, M, S, G>,
  state: S,
  move: M,
): MoveOutcome<P, M, S, G> => {
  const isFinal = state.isFinal();

  if (isFinal) {
    console.log(`The gameplay has already finished!`);
    return { graphvizDotString: null, state };
  }

  const { graphvizDotString, probabilities } = mcts.getProbabilities(
    state,
    true,
  );
  console.log(probabilities, "\n");

  const nextState = move.play(state);
  if (nextState.isFinal()) {
    console.log("Game has ended.");
    console.log(state.getGame().getGameOverMessage(state));
  }
  return { graphvizDotString, state: nextState };
};

const processMove = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  processGraphvizDotString: ProcessGraphvizDotString,
  mcts: Search<P, M, S, G>,
  state: S,
): MoveOutcome<P, M, S, G> => {
  const validMoves = state.getValidMoves();
  const [validMove] = validMoves;
  if (typeof validMove === "undefined") {
    console.log("There are no valid moves to play.");
    return { graphvizDotString: null, state };
  }

  const moveOutcome = playMove<P, M, S, G>(mcts, state, validMove);

  if (moveOutcome.graphvizDotString) {
    processGraphvizDotString(moveOutcome.graphvizDotString);
  }
  console.log(moveOutcome.state.toString());

  return moveOutcome;
};

const main = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>({
  processGraphvizDotString,
}: {
  processGraphvizDotString: ProcessGraphvizDotString;
}): void => {
  const game = new TicTacToeGame({
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
    game,
    quantityOfSearches: 10000,
  });

  let state = game.getInitialState();

  let move = game.getMove(MoveKey.Northwest);
  state = move.play(state);

  move = game.getMove(MoveKey.North);
  state = move.play(state);

  move = game.getMove(MoveKey.Center);
  state = move.play(state);

  move = game.getMove(MoveKey.East);
  state = move.play(state);

  move = game.getMove(MoveKey.Southeast);
  state = move.play(state);

  console.log(state.toString());

  processMove<TicTacToePlayer, TicTacToeMove, TicTacToeState, TicTacToeGame>(
    processGraphvizDotString,
    mcts,
    state,
  );
};

export default main;
