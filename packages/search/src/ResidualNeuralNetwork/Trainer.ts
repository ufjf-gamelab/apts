import type { Integer, TensorLikeArray } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type * as tfjs from "@tensorflow/tfjs";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { AgentGuidedSearch } from "../AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { Random } from "../Random/Random.js";
import type { LogMessage } from "../types.js";
import type { PredictionModel } from "./PredictionModel.js";
import type { ResidualNeuralNetwork } from "./ResidualNeuralNetwork.js";

import { getQualityOfMatchFromScore } from "../qualityOfMatch.js";
import {
  predictQualityOfMoves,
  type QualityOfMove,
  type SofteningCoefficient,
} from "../qualityOfMove.js";
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

interface ParamsOfTrainer<
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
  readonly search: AgentGuidedSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  readonly softeningCoefficient: SofteningCoefficient;
}

class Trainer<
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
  private readonly game: GenericGame;
  private readonly predictionModel: PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  private readonly random: Random;
  private readonly residualNeuralNetwork: ResidualNeuralNetwork<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  private readonly search: ParamsOfTrainer<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["search"];
  private readonly softeningCoefficient: ParamsOfTrainer<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["softeningCoefficient"];

  public constructor({
    search,
    softeningCoefficient,
  }: ParamsOfTrainer<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    this.softeningCoefficient = softeningCoefficient;
    this.search = search;
    this.random = search.getRandom();
    this.predictionModel = this.search.getPredictionModel();
    this.game = this.predictionModel.getGame();
    this.residualNeuralNetwork =
      this.predictionModel.getResidualNeuralNetwork();
  }

  private static convertGameMemoryToTrainingMemory<
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
  }): TrainingMemory {
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
  }

  public buildTrainingMemory({
    logMessage,
    quantityOfIterations,
    quantityOfIterationsToAnnounceProgress,
  }: {
    logMessage: LogMessage;
    quantityOfIterations: Integer;
    quantityOfIterationsToAnnounceProgress: Integer;
  }): TrainingMemory {
    const trainingMemory: TrainingMemory = {
      encodedStates: [],
      policies: [],
      values: [],
    };

    logMessage(`Building training memory via self-play`);

    for (
      let currentStep = 0;
      currentStep < quantityOfIterations;
      currentStep += INCREMENT_ONE
    ) {
      if (
        currentStep % quantityOfIterationsToAnnounceProgress ===
        SHOULD_ANNOUNCE_PROGRESS
      ) {
        logMessage(
          `Finished iterations: ${currentStep}/${quantityOfIterations}`,
        );
      }

      const selfPlayMemory = this.selfPlay();
      trainingMemory.encodedStates.push(...selfPlayMemory.encodedStates);
      trainingMemory.policies.push(...selfPlayMemory.policies);
      trainingMemory.values.push(...selfPlayMemory.values);
    }
    logMessage(
      `Finished iterations: ${quantityOfIterations}/${quantityOfIterations}`,
    );

    logMessage(`Size of memory: ${trainingMemory.encodedStates.length}`);
    return trainingMemory;
  }

  public async train({
    logMessage,
    quantityOfEpochs,
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
    "logMessage" | "quantityOfEpochs" | "sizeOfBatch"
  > & {
    trainingMemory: TrainingMemory;
  }): Promise<tfjs.Logs[]> {
    const { encodedStates, policies, values } = trainingMemory;
    const batchOfInputs = tf.tensor(encodedStates) as tfjs.Tensor4D;
    const batchOfPolicyOutputs = tf.tensor(policies) as tfjs.Tensor2D;
    const batchOfValueOutputs = tf.tensor(values) as tfjs.Tensor1D;

    const trainingLog = await this.residualNeuralNetwork.train({
      batchOfInputs,
      batchOfPolicyOutputs,
      batchOfValueOutputs,
      logMessage,
      quantityOfEpochs,
      sizeOfBatch,
    });

    tf.dispose([batchOfInputs, batchOfPolicyOutputs, batchOfValueOutputs]);
    return trainingLog;
  }

  private selfPlay(): TrainingMemory {
    const gameMemory: GameMemory<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    > = [];
    let indexOfPlayerWhoPlayedMove: IndexOfPlayer | null = null;

    let currentState = this.game.constructInitialState();
    for (;;) {
      const qualitiesOfMoves = predictQualityOfMoves({
        search: this.search,
        state: currentState,
      });
      gameMemory.push({
        indexOfPlayerWhoPlayedMove,
        qualitiesOfMoves,
        state: currentState,
      });

      const indexesOfValidMoves = this.game.getIndexesOfValidMoves({
        state: currentState,
      });
      const indexOfPickedMove =
        this.random.pickIndexOfValidMoveConsideringItsQuality({
          indexesOfValidMoves,
          qualitiesOfMoves,
          softeningCoefficient: this.softeningCoefficient,
        });

      const nextState = this.game.play({
        indexOfMove: indexOfPickedMove,
        state: currentState,
      });
      if (nextState.isFinal()) {
        return Trainer.convertGameMemoryToTrainingMemory({ gameMemory });
      }

      indexOfPlayerWhoPlayedMove = currentState.getIndexOfPlayer();
      currentState = nextState;
    }
  }
}

export type { ParamsOfTrainer };
export { Trainer };
