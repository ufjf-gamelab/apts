import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { QualityOfMove } from "@repo/search/qualityOfMove.js";
import type {
  MemoryOfMatch,
  MemoryOfTurn,
} from "@repo/search/ResidualNeuralNetwork/memory.js";
import type { PredictionModel } from "@repo/search/ResidualNeuralNetwork/PredictionModel.js";

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
    predictionModel: PredictionModel<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
  }): Promise<{
  indexOfMove: IndexOfMove;
  qualitiesOfMoves: QualityOfMove[];
}> => {
  const { qualitiesOfMoves } = predictionModel.predict({
    state,
  });

  // eslint-disable-next-line init-declarations
  let indexOfMove: IndexOfMove;

  if (currentPlayerIsUser) {
    indexOfMove = await getIndexOfMoveUsingUserInput({
      game: state.getGame(),
      indexesOfValidMoves,
      select,
    });
  } else {
    indexOfMove = getIndexOfMoveUsingAgent({
      indexesOfValidMoves,
      processMessage,
      qualitiesOfMoves,
      random,
      softeningCoefficient,
      state,
    });
  }

  return {
    indexOfMove,
    qualitiesOfMoves,
  };
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
>): Promise<{
  finalState: GenericState;
  memoryOfMatch: MemoryOfMatch;
}> => {
  const game = state.getGame();

  const memoryOfTurns: MemoryOfTurn[] = [];

  let gameHasEnded = false;
  let currentState = state;
  let indexOfPlayerWhoPlayedMove: IndexOfPlayer | null = null;
  // eslint-disable-next-line init-declarations
  let currentPlayerIsUser;

  while (!gameHasEnded) {
    printInformationAboutCurrentTurn({ processMessage, state: currentState });

    currentPlayerIsUser = currentState.getIndexOfPlayer() === FIRST_INDEX;

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });

    // eslint-disable-next-line no-await-in-loop
    const { indexOfMove, qualitiesOfMoves } = await getIndexOfMove({
      currentPlayerIsUser,
      indexesOfValidMoves,
      predictionModel,
      processMessage,
      random,
      select,
      softeningCoefficient,
      state: currentState,
    });

    memoryOfTurns.push({
      encodedState: currentState.getEncodedState(),
      indexOfPickedMove: indexOfMove,
      indexOfPlayer: currentState.getIndexOfPlayer(),
      indexOfPlayerWhoPlayedMove,
      qualitiesOfMoves,
      stateAsString: state.toString(),
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

export { playMatchInTheModePlayerVersusComputer };
