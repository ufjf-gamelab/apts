// import { createId } from "@paralleldrive/cuid2";
// import { EncodedState } from "@repo/engine/engine/Game/Game";
// import Player from "@repo/engine/engine/Game/Player";
// import State from "@repo/engine/engine/Game/State";
// import { INCREMENT_ONE } from "@repo/engine/types";
// import * as tf from "@tensorflow/tfjs";
// import Game from "../games/TicTacToe/Game";
// import MonteCarloTreeSearch from "./MonteCarloTree/Search";
// import { actionFromProbabilities } from "./ResNet/predict";
// import ResNet from "./ResNet/ResNet";
// import { LogMessage } from "./types";

// const ADJUST_INDEX = 1;
// const DEFAULT_PROGRESS_STEP = 25;

// interface GameMemoryBlock<G extends Game> {
//   state: State<G>;
//   actionProbabilities: number[];
//   player: Player;
// }
// type GameMemory<G extends Game> = GameMemoryBlock<G>[];

// export interface TrainingMemory {
//   encodedStates: EncodedState[];
//   policyTargets: number[][];
//   valueTargets: ActionOutcome["value"][];
// }

// export default class Trainer<G extends Game> {
//   private game: G;
//   private resNet: ResNet;
//   private mcts: MonteCarloTreeSearch<G>;

//   constructor({
//     game,
//     resNet,
//     numSearches,
//     explorationConstant,
//   }: {
//     game: G;
//     resNet: ResNet;
//     numSearches: number;
//     explorationConstant: number;
//   }) {
//     this.game = game;
//     this.resNet = resNet;
//     this.mcts = new MonteCarloTreeSearch<G>({
//       explorationConstant,
//       game: this.game,
//       numSearches,
//       resNet: this.resNet,
//     });
//   }

//   /* Methods */

//   /**
//    * Performs self-play to generate training data for the Trainer algorithm.
//    * @returns A promise that resolves to a TrainingMemory object containing the generated training data, composed by encoded states, policy targets, and value targets.
//    */
//   private selfPlay(): TrainingMemory {
//     let player = Player.X;
//     const state = this.game.getInitialState();
//     const gameMemory: GameMemory<G> = [];

//     for (;;) {
//       // Get the state from the perspective of the current player and save it in the game memory
//       const neutralState = state.clone();
//       neutralState.changePerspective(player, this.game.getOpponent(player));
//       const actionProbabilities = this.mcts.search(neutralState);
//       gameMemory.push({
//         actionProbabilities,
//         player,
//         state: neutralState,
//       });

//       // Pick an action based on the probabilities from the MCTS
//       const probabilitiesTensor = tf.tensor(actionProbabilities) as tf.Tensor1D;
//       const pickedAction = actionFromProbabilities(probabilitiesTensor);
//       tf.dispose(probabilitiesTensor);
//       const validActions = state.getValidActions();
//       if (!validActions[pickedAction]) {
//         throw new Error("Invalid action picked");
//       }

//       // Perform the action and check if the game is over
//       state.performAction(pickedAction, player);
//       const actionOutcome = Game.getActionOutcome(state, pickedAction);
//       if (actionOutcome.isTerminal) {
//         // When the game is over, construct the training memory from the perspective of the current player
//         return this.convertGameMemoryToTrainingMemory(
//           gameMemory,
//           player,
//           actionOutcome.value,
//         );
//       }

//       // If the game is not over, switch the player and continue
//       player = this.game.getOpponent(player);
//     }
//   }

//   /// Transpose the game memory to a format that can be used to train the model.
//   private convertGameMemoryToTrainingMemory(
//     gameMemory: GameMemory<G>,
//     lastPlayer: Player,
//     lastActionValue: ActionOutcome["value"],
//   ): TrainingMemory {
//     const trainingMemory: TrainingMemory = {
//       encodedStates: [],
//       policyTargets: [],
//       valueTargets: [],
//     };
//     for (const memoryBlock of gameMemory) {
//       // Get the outcome value from the perspective of the current player
//       const memoryOutcomeValue =
//         memoryBlock.player === lastPlayer
//           ? lastActionValue
//           : this.game.getOpponentValue(lastActionValue);
//       trainingMemory.encodedStates.push(memoryBlock.state.getEncodedState());
//       trainingMemory.policyTargets.push(memoryBlock.actionProbabilities);
//       trainingMemory.valueTargets.push(memoryOutcomeValue);
//     }
//     return trainingMemory;
//   }

//   /**
//    * Builds the training memory by self-playing the game for a specified number of iterations.
//    * @param numSelfPlayIterations The number of self-play iterations.
//    * @param progressStep The number of iterations between each progress message (default is 25).
//    * @param showMemorySize Whether to show the size of the training memory.
//    * @param logMessage The optional log message function (default is console.log).
//    * @returns A promise that resolves to the TrainingMemory object containing encoded states, policy targets, and value targets.
//    */
//   public buildTrainingMemory({
//     numSelfPlayIterations,
//     progressStep = DEFAULT_PROGRESS_STEP,
//     showMemorySize = false,
//     logMessage = console.log,
//   }: {
//     numSelfPlayIterations: number;
//     progressStep?: number;
//     showMemorySize?: boolean;
//     logMessage?: LogMessage;
//   }): Promise<TrainingMemory> {
//     const encodedStates = [];
//     const policyTargets = [];
//     const valueTargets = [];

//     const MINIMUM_PROGRESS_STEP = 0;
//     const SHOULD_LOG_MESSAGE = 0;

//     // Construct the training memory from self-playing the game
//     for (
//       let currentStep = 0;
//       currentStep < numSelfPlayIterations;
//       currentStep += INCREMENT_ONE
//     ) {
//       if (
//         progressStep > MINIMUM_PROGRESS_STEP &&
//         (currentStep + ADJUST_INDEX) % progressStep === SHOULD_LOG_MESSAGE
//       ) {
//         logMessage(
//           `Self-play iteration ${currentStep + ADJUST_INDEX}/${numSelfPlayIterations}`,
//         );
//       }
//       const selfPlayMemory = this.selfPlay();
//       encodedStates.push(...selfPlayMemory.encodedStates);
//       policyTargets.push(...selfPlayMemory.policyTargets);
//       valueTargets.push(...selfPlayMemory.valueTargets);
//     }
//     if (showMemorySize) {
//       logMessage(`Memory size: ${encodedStates.length}`);
//     }
//     return Promise.resolve({ encodedStates, policyTargets, valueTargets });
//   }

//   /**
//    * Trains the model using the provided training memory.
//    *
//    * @param trainingMemory - The training memory containing encoded states, policy targets, and value targets.
//    * @param batchSize - The size of each training batch.
//    * @param numEpochs - The number of training epochs.
//    * @param learningRate - The learning rate for the training.
//    * @param logMessage - Optional callback function for logging messages during training.
//    * @returns A promise that resolves to an array of training logs.
//    */
//   private async train({
//     trainingMemory,
//     batchSize,
//     numEpochs,
//     learningRate,
//     logMessage = console.log,
//   }: {
//     trainingMemory: TrainingMemory;
//     batchSize: number;
//     numEpochs: number;
//     learningRate: number;
//     logMessage?: LogMessage;
//   }): Promise<tf.Logs[]> {
//     // Convert the memory to a format that can be used to train the model
//     const { encodedStates, policyTargets, valueTargets } = trainingMemory;
//     const encodedStatesTensor = tf.tensor(encodedStates) as tf.Tensor4D;
//     const policyTargetsTensor = tf.tensor(policyTargets) as tf.Tensor2D;

//     //TODO: Check if this reshape is necessary
//     const DIMENSION = 1;
//     const valueTargetsTensor: tf.Tensor2D = tf
//       .tensor(valueTargets)
//       .reshape([-DIMENSION, DIMENSION]);

//     // Train the model
//     const trainingLog = await this.resNet.train({
//       batchSize,
//       inputsBatch: encodedStatesTensor,
//       learningRate,
//       logMessage,
//       numEpochs,
//       policyOutputsBatch: policyTargetsTensor,
//       validationSplit: 0.1,
//       valueOutputsBatch: valueTargetsTensor,
//     });

//     // Dispose the tensors
//     tf.dispose([encodedStatesTensor, policyTargetsTensor, valueTargetsTensor]);

//     return trainingLog;
//   }

//   // Train the model multiple times
//   public async learn({
//     logMessage = console.log,
//     maxNumIterations,
//     numEpochs,
//     batchSize,
//     learningRate,
//     trainingMemories,
//   }: {
//     fileSystemProtocol: string;
//     logMessage: LogMessage;
//     maxNumIterations: number;
//     numEpochs: number;
//     batchSize: number;
//     learningRate: number;
//     trainingMemories: TrainingMemory[];
//   }): Promise<void> {
//     const baseId = createId();
//     const maxIterations = Math.min(maxNumIterations, trainingMemories.length);
//     const trainingPromises = [];
//     for (
//       let currentIteration = 0;
//       currentIteration < maxIterations;
//       currentIteration += INCREMENT_ONE
//     ) {
//       const trainingMemory = trainingMemories[currentIteration];
//       if (!trainingMemory) {
//         continue;
//       }
//       logMessage(
//         `ITERATION ${currentIteration + ADJUST_INDEX}/${maxIterations}`,
//       );
//       trainingPromises.push(
//         this.train({
//           batchSize,
//           learningRate,
//           logMessage,
//           numEpochs,
//           trainingMemory,
//         }).then(() =>
//           this.resNet.save(`/trained/${baseId}/${currentIteration}`),
//         ),
//       );
//     }
//     await Promise.all(trainingPromises);
//   }
// }
