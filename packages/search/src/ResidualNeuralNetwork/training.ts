import type { Integer, TensorLikeArray } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type * as tfjs from "@tensorflow/tfjs";

import { INCREMENT_ONE } from "@repo/core/constants.js";

import type { TreeNode } from "../MonteCarloTree/TreeNode.js";
import type { Random } from "../Random/Random.js";
import type { ProcessMessage } from "../types.js";
import type { ResidualNeuralNetwork } from "./ResidualNeuralNetwork.js";

import { getQualityOfMatchFromScore } from "../qualityOfMatch.js";
import { type QualityOfMove, searchQualityOfMoves } from "../qualityOfMove.js";
import {
  loadTensorFlowModule,
  type TensorFlowModule,
} from "./loadTensorFlowModule.js";

const tf: TensorFlowModule = await loadTensorFlowModule();

const SHOULD_ANNOUNCE_PROGRESS = 0;

export interface TrainingMemory {
  encodedStates: TensorLikeArray[];
  policies: number[][];
  values: number[];
}

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
  gameMemory,
}: {
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
      const score = state.getScore();
      const qualityOfMatch = getQualityOfMatchFromScore({
        indexOfPlayerWhoPlayedMove,
        score,
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
      return convertGameMemoryToTrainingMemory({ gameMemory });
    }

    indexOfPlayerWhoPlayedMove = currentState.getIndexOfPlayer();
    currentState = nextState;
  }
};

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

type Logs = tfjs.Logs;

const train = async <
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
  quantityOfEpochs,
  residualNeuralNetwork,
  sizeOfBatch,
  trainingMemory,
}: Pick<
  Parameters<
    ResidualNeuralNetwork<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >["train"]
  >[0],
  "processMessage" | "quantityOfEpochs" | "sizeOfBatch"
> & {
  residualNeuralNetwork: ResidualNeuralNetwork<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  trainingMemory: TrainingMemory;
}): Promise<Logs[]> => {
  const { encodedStates, policies, values } = trainingMemory;
  const batchOfInputs = tf.tensor(encodedStates) as tfjs.Tensor4D;
  const batchOfPolicyOutputs = tf.tensor(policies) as tfjs.Tensor2D;
  const batchOfValueOutputs = tf.tensor(values) as tfjs.Tensor1D;

  const trainingLog = await residualNeuralNetwork.train({
    batchOfInputs,
    batchOfPolicyOutputs,
    batchOfValueOutputs,
    processMessage,
    quantityOfEpochs,
    sizeOfBatch,
  });

  tf.dispose([batchOfInputs, batchOfPolicyOutputs, batchOfValueOutputs]);
  return trainingLog;
};

export type { Logs };
export { buildTrainingMemory, train };
