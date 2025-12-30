import type { Integer, TensorLikeArray } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/core/constants.js";

import type { TreeNode } from "../MonteCarloTree/TreeNode.js";
import type { Random } from "../Random/Random.js";
import type { ProcessMessage } from "../types.js";

import { getQualityOfMatchFromScore } from "../qualityOfMatch.js";
import { type QualityOfMove, searchQualityOfMoves } from "../qualityOfMove.js";

interface BlockOfGameMemory<
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
  indexOfPlayerWhoPlayedMove: IndexOfPlayer | null;
  qualitiesOfMoves: QualityOfMove[];
  state: State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}

type GameMemory<
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
> = BlockOfGameMemory<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
>[];

interface TrainingMemory {
  encodedStates: TensorLikeArray[];
  policies: number[][];
  values: number[];
}

const convertGameMemoryToTrainingMemory = <
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
  finalScore,
  gameMemory,
}: {
  finalScore: GenericScore;
  gameMemory: GameMemory<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): TrainingMemory => {
  const trainingMemory: TrainingMemory = {
    encodedStates: [],
    policies: [],
    values: [],
  };

  gameMemory.forEach(
    ({ indexOfPlayerWhoPlayedMove, qualitiesOfMoves, state }) => {
      const qualityOfMatch = getQualityOfMatchFromScore({
        indexOfPlayerWhoPlayedMove,
        score: finalScore,
      });

      trainingMemory.encodedStates.push(state.getEncodedState());
      trainingMemory.policies.push(qualitiesOfMoves);
      trainingMemory.values.push(qualityOfMatch);
    },
  );

  return trainingMemory;
};

const selfPlay = <
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  game,
  search,
  softeningCoefficient,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringItsQuality"]>[0],
  "softeningCoefficient"
> &
  Pick<Parameters<typeof searchQualityOfMoves>[0], "search"> & {
    game: GenericGame;
  }): TrainingMemory => {
  const gameMemory: GameMemory<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > = [];
  let indexOfPlayerWhoPlayedMove: IndexOfPlayer | null = null;
  const random = search.getRandom();

  let currentState = game.constructInitialState();
  for (;;) {
    const qualitiesOfMoves = searchQualityOfMoves({
      search,
      state: currentState,
    });
    gameMemory.push({
      indexOfPlayerWhoPlayedMove,
      qualitiesOfMoves,
      state: currentState,
    });

    const indexesOfValidMoves = game.getIndexesOfValidMoves({
      state: currentState,
    });
    const indexOfPickedMove = random.pickIndexOfValidMoveConsideringItsQuality({
      indexesOfValidMoves,
      qualitiesOfMoves,
      softeningCoefficient,
    });

    const nextState = game.play({
      indexOfMove: indexOfPickedMove,
      state: currentState,
    });
    if (nextState.isFinal()) {
      return convertGameMemoryToTrainingMemory({
        finalScore: nextState.getScore(),
        gameMemory,
      });
    }

    indexOfPlayerWhoPlayedMove = currentState.getIndexOfPlayer();
    currentState = nextState;
  }
};

const SHOULD_ANNOUNCE_PROGRESS = 0;

const buildTrainingMemory = ({
  game,
  processMessage,
  quantityOfIterations,
  quantityOfIterationsToAnnounceProgress,
  search,
  softeningCoefficient,
}: Pick<
  Parameters<typeof selfPlay>[0],
  "game" | "search" | "softeningCoefficient"
> & {
  processMessage: ProcessMessage;
  quantityOfIterations: Integer;
  quantityOfIterationsToAnnounceProgress: Integer;
}): TrainingMemory => {
  const trainingMemory: TrainingMemory = {
    encodedStates: [],
    policies: [],
    values: [],
  };

  processMessage(`Building training memory via self-play`);

  for (
    let currentStep = 0;
    currentStep < quantityOfIterations;
    currentStep += INCREMENT_ONE
  ) {
    if (
      currentStep % quantityOfIterationsToAnnounceProgress ===
      SHOULD_ANNOUNCE_PROGRESS
    ) {
      processMessage(
        `Finished iterations: ${currentStep}/${quantityOfIterations}`,
      );
    }

    const selfPlayMemory = selfPlay({ game, search, softeningCoefficient });
    trainingMemory.encodedStates.push(...selfPlayMemory.encodedStates);
    trainingMemory.policies.push(...selfPlayMemory.policies);
    trainingMemory.values.push(...selfPlayMemory.values);
  }
  processMessage(
    `Finished iterations: ${quantityOfIterations}/${quantityOfIterations}`,
  );

  processMessage(`Size of memory: ${trainingMemory.encodedStates.length}`);
  return trainingMemory;
};

export type { TrainingMemory };
export { buildTrainingMemory };
