import type Game from "../../../../game.old/src/Game.js";
import type Move from "../../../../game.old/src/Move.js";
import type Player from "../../../../game.old/src/Player.js";
import type State from "../../../../game.old/src/State.js";
import type { ProcessGraphvizDotString } from "../actions.js";

interface MoveOutcome<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  graphvizDotString: null | string;
  state: S;
}

// const playMove = <
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// >(
//   mcts: Search<G, S, M, Sl, P>,
//   state: S,
//   move: M,
// ): MoveOutcome<G, S, M, Sl, P> => {
//   const isFinal = state.isFinal();

//   if (isFinal) {
//     console.log(`The gameplay has already finished!`);
//     return { graphvizDotString: null, state };
//   }

//   const { graphvizDotString, probabilities } = mcts.getProbabilities(
//     state,
//     true,
//   );
//   console.log(probabilities, "\n");

//   const nextState = move.play(state);
//   if (nextState.isFinal()) {
//     console.log("Game has ended.");
//     console.log(state.getGame().getEndOfGameMessage(state));
//   }
//   return { graphvizDotString, state: nextState };
// };

// const processMove = <
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// >(
//   processGraphvizDotString: ProcessGraphvizDotString,
//   mcts: Search<G, S, M, Sl, P>,
//   state: S,
// ): MoveOutcome<G, S, M, Sl, P> => {
//   const validMoves = state.getValidMoves();
//   const [validMove] = validMoves;
//   if (typeof validMove === "undefined") {
//     console.log("There are no valid moves to play.");
//     return { graphvizDotString: null, state };
//   }

//   const moveOutcome = playMove<G, S, M, Sl, P>(mcts, state, validMove);

//   if (moveOutcome.graphvizDotString) {
//     processGraphvizDotString(moveOutcome.graphvizDotString);
//   }
//   console.log(moveOutcome.state.toString());

//   return moveOutcome;
// };

const main = <
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
>({
  processGraphvizDotString,
}: {
  processGraphvizDotString: ProcessGraphvizDotString;
}): void => {
  // const game = new TicTacToeGame({
  //   quantityOfColumns: 3,
  //   quantityOfRows: 3,
  // });
  // const mcts = new Search<
  //   TicTacToePlayer,
  //   TicTacToeMove,
  //   TicTacToeState,
  //   TicTacToeGame
  // >({
  //   explorationConstant: 1.41,
  //   game,
  //   quantityOfSearches: 10000,
  // });
  // let state = game.getInitialState();
  // let move = game.getMove(MoveKey.Northwest);
  // state = move.play(state);
  // move = game.getMove(MoveKey.North);
  // state = move.play(state);
  // move = game.getMove(MoveKey.Center);
  // state = move.play(state);
  // move = game.getMove(MoveKey.East);
  // state = move.play(state);
  // move = game.getMove(MoveKey.Southeast);
  // state = move.play(state);
  // console.log(state.toString());
  // processMove<TicTacToePlayer, TicTacToeMove, TicTacToeState, TicTacToeGame>(
  //   processGraphvizDotString,
  //   mcts,
  //   state,
  // );
};

export default main;
