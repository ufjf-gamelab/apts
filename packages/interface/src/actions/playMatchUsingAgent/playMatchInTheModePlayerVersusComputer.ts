import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { FIRST_INDEX } from "@repo/core/constants.js";

import { getIndexOfMoveUsingUserInput } from "../../play/getIndexOfMoveUsingUserInput.js";
import { printInformationAboutCurrentTurn } from "../../play/printInformationAboutCurrentTurn.js";
import { getIndexOfMoveUsingAgent } from "./getIndexOfMoveUsingAgent.js";

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
  indexesOfValidMoves,
  predictionModel,
  processMessage,
  random,
  select,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    typeof getIndexOfMoveUsingAgent<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  | "indexesOfValidMoves"
  | "predictionModel"
  | "processMessage"
  | "random"
  | "softeningCoefficient"
  | "state"
> &
  Pick<
    Parameters<
      typeof getIndexOfMoveUsingUserInput<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    >[0],
    "indexesOfValidMoves" | "select"
  > & {
    currentPlayerIsUser: boolean;
  }) => {
  if (currentPlayerIsUser) {
    return await getIndexOfMoveUsingUserInput({
      game: state.getGame(),
      indexesOfValidMoves,
      select,
    });
  }
  return getIndexOfMoveUsingAgent({
    indexesOfValidMoves,
    predictionModel,
    processMessage,
    random,
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
  predictionModel,
  processMessage,
  random,
  select,
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
  | "predictionModel"
  | "processMessage"
  | "random"
  | "select"
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
      indexesOfValidMoves,
      predictionModel,
      processMessage,
      random,
      select,
      softeningCoefficient,
      state: currentState,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = currentState.isFinal();
  }

  return currentState;
};

export { playMatchInTheModePlayerVersusComputer };
