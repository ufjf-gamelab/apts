import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type * as tfjs from "@tensorflow/tfjs";

import type { TrainingMemory } from "./memory.js";
import type { ResidualNeuralNetwork } from "./ResidualNeuralNetwork.js";

import {
  loadTensorFlowModule,
  type TensorFlowModule,
} from "./loadTensorFlowModule.js";

const tf: TensorFlowModule = await loadTensorFlowModule();

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
export { train };
