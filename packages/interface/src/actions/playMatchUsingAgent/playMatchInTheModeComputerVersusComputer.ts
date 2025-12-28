import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { printInformationAboutCurrentTurn } from "../../play/printInformationAboutCurrentTurn.js";
import { getIndexOfMoveUsingAgent } from "./getIndexOfMoveUsingAgent.js";

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
  predictionModel,
  processMessage,
  random,
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
  | "predictionModel"
  | "processMessage"
  | "random"
  | "softeningCoefficient"
  | "state"
>) => {
  const game = state.getGame();

  let gameHasEnded = false;
  let currentState = state;

  while (!gameHasEnded) {
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    const indexOfMove = getIndexOfMoveUsingAgent({
      indexesOfValidMoves,
      predictionModel,
      processMessage,
      random,
      softeningCoefficient,
      state: currentState,
    });

    currentState = game.play({ indexOfMove, state: currentState });
    gameHasEnded = currentState.isFinal();
  }

  return currentState;
};

export { playMatchInTheModeComputerVersusComputer };
