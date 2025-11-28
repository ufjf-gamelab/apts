import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { TicTacToeGame } from "@repo/games/TicTacToe/game/Game.js";

import { recordOfTicTacToeGamesWithData } from "@repo/games/TicTacToe/game/Game.test/records.js";
import { recordOfTicTacToeMovesWithDataAndIndex } from "@repo/games/TicTacToe/game/Move.test/indexedRecords.js";
import { recordOfTicTacToeMovesWithData } from "@repo/games/TicTacToe/game/Move.test/records.js";
import { Search } from "@repo/search/CommonMonteCarloTree/Search.js";
import { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";

import type { ProcessGraphvizDotString } from "../actions.js";

interface OutcomeOfMove<
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
> {
  graphvizDotString: string;
  state: GenericState;
}

const playMove = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  indexOfMove,
  mcts,
  state,
}: {
  indexOfMove: IndexOfMove;
  mcts: Search<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  state: GenericState;
}): OutcomeOfMove<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => {
  const game = state.getGame();
  const isFinal = game.isFinal({ state });

  if (isFinal) {
    throw new Error("The gameplay has already finished!");
  }

  const rootNodeOfTree = TreeNode.create<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({
    indexOfPlayedMove: indexOfMove,
    state,
  });
  mcts.expandTree({ rootNodeOfTree });

  const qualityOfMoves = mcts.getQualityOfMoves({ rootNodeOfTree });
  console.log(qualityOfMoves, "\n");

  const nextState = game.play({ indexOfMove, state });
  if (game.isFinal({ state: nextState })) {
    console.log("Game has ended.");
  }

  return { graphvizDotString: "", state: nextState };
};

const processMove = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>(
  processGraphvizDotString: ProcessGraphvizDotString,
  mcts: Search<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  state: GenericState,
): OutcomeOfMove<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => {
  const game = state.getGame();
  const indexOfValidMoves = game.getIndexesOfValidMoves({ state });
  const [indexOFValidMove] = indexOfValidMoves;
  if (typeof indexOFValidMove === "undefined") {
    throw new Error("There are no valid moves to play.");
  }

  const outcomeOfMove = playMove<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({ indexOfMove: indexOFValidMove, mcts, state });

  if (outcomeOfMove.graphvizDotString) {
    processGraphvizDotString(outcomeOfMove.graphvizDotString);
  }

  return outcomeOfMove;
};

const main = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  processGraphvizDotString,
}: {
  processGraphvizDotString: ProcessGraphvizDotString;
}): void => {
  const { game } = recordOfTicTacToeGamesWithData.ticTacToeWith3RowsAnd3Columns;
  const mcts = new Search({
    explorationConstant: 1.41,
    game,
    quantityOfSearches: 10000,
  });

  const state = game.constructInitialState();

  processMove(processGraphvizDotString, mcts, state);
};

export { main };
