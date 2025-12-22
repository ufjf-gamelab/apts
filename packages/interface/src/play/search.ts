import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { AgentGuidedSearch } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { CommonSearch } from "@repo/search/CommonMonteCarloTree/CommonSearch.js";
import type { ExpandAllSearch } from "@repo/search/ExpandAllMonteCarloTree/ExpandAllSearch.js";
import type { Random } from "@repo/search/Random/Random.js";
import type { ProcessMessage } from "@repo/search/types.js";

import { FIRST_INDEX } from "@repo/core/constants.js";
import { searchQualityOfMoves } from "@repo/search/qualityOfMove.js";

import { getIndexOfMoveViaUserInput } from "./input.js";
import { printInformationAboutCurrentTurn } from "./printInformationAboutCurrentTurn.js";

const getIndexOfMoveUsingSearch = <
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
  indexesOfValidMoves,
  processMessage,
  random,
  search,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringItsQuality"]>[0],
  "softeningCoefficient"
> & {
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
  processMessage: ProcessMessage;
  random: Random;
  search:
    | AgentGuidedSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    | CommonSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    | ExpandAllSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >;
  state: GenericState;
}) => {
  const game = state.getGame();

  const qualitiesOfMoves = searchQualityOfMoves({
    search,
    state,
  });

  const indexOfPickedMove = random.pickIndexOfValidMoveConsideringItsQuality({
    indexesOfValidMoves,
    qualitiesOfMoves,
    softeningCoefficient,
  });
  const pickedMove = game.getMove({ indexOfMove: indexOfPickedMove });

  processMessage(
    `Played move: ${pickedMove?.getTitle()}. ${pickedMove?.getDescription()}`,
  );
  return indexOfPickedMove;
};

const playMatchInTheModeComputerVersusComputer = <
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
  processMessage,
  random,
  search,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    typeof getIndexOfMoveUsingSearch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  "processMessage" | "random" | "search" | "softeningCoefficient" | "state"
>) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;

  while (!gameHasEnded) {
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    const indexOfMove = getIndexOfMoveUsingSearch({
      indexesOfValidMoves,
      processMessage,
      random,
      search,
      softeningCoefficient,
      state: currentState,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = currentState.isFinal();
  }

  return currentState;
};

const getIndexOfMove = async <
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
  currentPlayerIsUser,
  getInput,
  indexesOfValidMoves,
  processMessage,
  random,
  search,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    typeof getIndexOfMoveUsingSearch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  | "indexesOfValidMoves"
  | "processMessage"
  | "random"
  | "search"
  | "softeningCoefficient"
  | "state"
> &
  Pick<
    Parameters<
      typeof getIndexOfMoveViaUserInput<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    >[0],
    "getInput" | "indexesOfValidMoves"
  > & {
    currentPlayerIsUser: boolean;
  }) => {
  if (currentPlayerIsUser) {
    return await getIndexOfMoveViaUserInput({
      game: state.getGame(),
      getInput,
      indexesOfValidMoves,
    });
  }
  return getIndexOfMoveUsingSearch({
    indexesOfValidMoves,
    processMessage,
    random,
    search,
    softeningCoefficient,
    state,
  });
};

const playMatchInTheModePlayerVersusComputer = async <
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
  getInput,
  processMessage,
  random,
  search,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    typeof getIndexOfMove<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  | "getInput"
  | "processMessage"
  | "random"
  | "search"
  | "softeningCoefficient"
  | "state"
>) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;
  // eslint-disable-next-line init-declarations
  let currentPlayerIsUser;

  while (!gameHasEnded) {
    currentPlayerIsUser = currentState.getIndexOfPlayer() === FIRST_INDEX;
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    // eslint-disable-next-line no-await-in-loop
    const indexOfMove = await getIndexOfMove({
      currentPlayerIsUser,
      getInput,
      indexesOfValidMoves,
      processMessage,
      random,
      search,
      softeningCoefficient,
      state: currentState,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = currentState.isFinal();
  }

  return currentState;
};

export {
  getIndexOfMoveUsingSearch,
  playMatchInTheModeComputerVersusComputer,
  playMatchInTheModePlayerVersusComputer,
};
