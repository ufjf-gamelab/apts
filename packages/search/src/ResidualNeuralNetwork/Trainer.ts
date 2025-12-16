import type { Integer, TensorLikeArray } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { AgentGuidedSearch } from "../AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { Random } from "../Random/Random.js";
import type { LogMessage } from "../types.js";
import type { PredictionModel } from "./PredictionModel.js";

import { getQualityOfMatchFromScore } from "../qualityOfMatch.js";
import {
  predictQualityOfMoves,
  type QualityOfMove,
  type SofteningCoefficient,
} from "../qualityOfMove.js";

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

  // // Train the model multiple times
  // public async learn({
  //   batchSize,
  //   learningRate,
  //   logMessage = console.log,
  //   maxNumIterations,
  //   numEpochs,
  //   trainingMemories,
  // }: {
  //   batchSize: number;
  //   fileSystemProtocol: string;
  //   learningRate: number;
  //   logMessage: LogMessage;
  //   maxNumIterations: number;
  //   numEpochs: number;
  //   trainingMemories: TrainingMemory[];
  // }): Promise<void> {
  //   const baseId = createId();
  //   const maxIterations = Math.min(maxNumIterations, trainingMemories.length);
  //   const trainingPromises = [];
  //   for (
  //     let currentIteration = 0;
  //     currentIteration < maxIterations;
  //     currentIteration += INCREMENT_ONE
  //   ) {
  //     const trainingMemory = trainingMemories[currentIteration];
  //     if (!trainingMemory) {
  //       continue;
  //     }
  //     logMessage(
  //       `ITERATION ${currentIteration + ADJUST_INDEX}/${maxIterations}`,
  //     );
  //     trainingPromises.push(
  //       this.train({
  //         batchSize,
  //         learningRate,
  //         logMessage,
  //         numEpochs,
  //         trainingMemory,
  //       }).then(() =>
  //         this.resNet.save(`/trained/${baseId}/${currentIteration}`),
  //       ),
  //     );
  //   }
  //   await Promise.all(trainingPromises);
  // }

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

  // /**
  //  * Trains the model using the provided training memory.
  //  *
  //  * @param trainingMemory - The training memory containing encoded states, policy targets, and value targets.
  //  * @param batchSize - The size of each training batch.
  //  * @param numEpochs - The number of training epochs.
  //  * @param learningRate - The learning rate for the training.
  //  * @param logMessage - Optional callback function for logging messages during training.
  //  * @returns A promise that resolves to an array of training logs.
  //  */
  // private async train({
  //   batchSize,
  //   learningRate,
  //   logMessage = console.log,
  //   numEpochs,
  //   trainingMemory,
  // }: {
  //   batchSize: number;
  //   learningRate: number;
  //   logMessage?: LogMessage;
  //   numEpochs: number;
  //   trainingMemory: TrainingMemory;
  // }): Promise<tf.Logs[]> {
  //   // Convert the memory to a format that can be used to train the model
  //   const { encodedStates, policyTargets, valueTargets } = trainingMemory;
  //   const encodedStatesTensor = tf.tensor(encodedStates) as tf.Tensor4D;
  //   const policyTargetsTensor = tf.tensor(policyTargets) as tf.Tensor2D;

  //   //TODO: Check if this reshape is necessary
  //   const DIMENSION = 1;
  //   const valueTargetsTensor: tf.Tensor2D = tf
  //     .tensor(valueTargets)
  //     .reshape([-DIMENSION, DIMENSION]);

  //   // Train the model
  //   const trainingLog = await this.resNet.train({
  //     batchSize,
  //     inputsBatch: encodedStatesTensor,
  //     learningRate,
  //     logMessage,
  //     numEpochs,
  //     policyOutputsBatch: policyTargetsTensor,
  //     validationSplit: 0.1,
  //     valueOutputsBatch: valueTargetsTensor,
  //   });

  //   // Dispose the tensors
  //   tf.dispose([encodedStatesTensor, policyTargetsTensor, valueTargetsTensor]);

  //   return trainingLog;
  // }
}

export type { ParamsOfTrainer };
export { Trainer };
