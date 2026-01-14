import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type {
  MemoryOfMatch,
  MemoryOfTurn,
} from "@repo/search/ResidualNeuralNetwork/memory.js";
import type { PredictionModel } from "@repo/search/ResidualNeuralNetwork/PredictionModel.js";

import { FIRST_INDEX } from "@repo/core/constants.js";

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
  firstPredictionModel,
  processMessage,
  random,
  secondPredictionModel,
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
  "processMessage" | "random" | "softeningCoefficient" | "state"
> & {
  firstPredictionModel: PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  secondPredictionModel: PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): {
  finalState: GenericState;
  memoryOfMatch: MemoryOfMatch;
} => {
  const game = state.getGame();

  const memoryOfTurns: MemoryOfTurn[] = [];

  let gameHasEnded = false;
  let currentState = state;
  let indexOfPlayerWhoPlayedMove: IndexOfPlayer | null = null;

  while (!gameHasEnded) {
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    const currentPredictionModel =
      currentState.getIndexOfPlayer() === FIRST_INDEX
        ? firstPredictionModel
        : secondPredictionModel;

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    const { qualitiesOfMoves } = currentPredictionModel.predict({
      state: currentState,
    });

    const indexOfMove = getIndexOfMoveUsingAgent({
      indexesOfValidMoves,
      processMessage,
      qualitiesOfMoves,
      random,
      softeningCoefficient,
      state: currentState,
    });

    memoryOfTurns.push({
      encodedState: currentState.getEncodedState(),
      indexOfPickedMove: indexOfMove,
      indexOfPlayer: currentState.getIndexOfPlayer(),
      indexOfPlayerWhoPlayedMove,
      qualitiesOfMoves,
      stateAsString: currentState.toString(),
    });

    currentState = game.play({ indexOfMove, state: currentState });
    indexOfPlayerWhoPlayedMove = currentState.getIndexOfPlayer();
    gameHasEnded = currentState.isFinal();
  }

  return {
    finalState: currentState,
    memoryOfMatch: {
      finalPointsOfEachPlayer: currentState.getScore().getPointsOfEachPlayer(),
      memoryOfTurns,
    },
  };
};

export { playMatchInTheModeComputerVersusComputer };
