import type { Integer, TensorLikeArray } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import * as tf from "@tensorflow/tfjs";

import type { LogMessage } from "../types.js";

const QUANTITY_OF_INPUT_CHANNELS = 3;
const QUANTITY_OF_INPUT_CHANNELS_ON_POLICY_HEAD = 32;
const SIZE_OF_CONVOLUTIONAL_WINDOW = 3;
const WEIGHT_DECAY = 1e-4;

const assertTensorIsSymbolic = (
  value: tf.SymbolicTensor | tf.SymbolicTensor[] | tf.Tensor | tf.Tensor[],
): tf.SymbolicTensor => {
  if (Array.isArray(value)) {
    throw new Error("Expected symbolic tensor but received array of tensors.");
  }
  if (value instanceof tf.Tensor) {
    throw new Error("Expected symbolic tensor but received eager tensor.");
  }
  return value;
};

const kernelParams = {
  kernelInitializer: "heNormal",
  kernelRegularizer: tf.regularizers.l2({ l2: WEIGHT_DECAY }),
} as const;

const getParamsOfConvolution = ({
  filters,
  kernelSize,
}: Pick<Parameters<typeof tf.layers.conv2d>[0], "filters" | "kernelSize">) =>
  ({
    ...kernelParams,
    filters,
    kernelSize,
    padding: "same",
    useBias: false,
  }) as const satisfies Parameters<typeof tf.layers.conv2d>[0];

const paramsOfBatchNormalization = {
  axis: -1,
  center: true,
  epsilon: 1e-5,
  momentum: 0.1,
  scale: true,
} as const satisfies Parameters<typeof tf.layers.batchNormalization>[0];

const paramsOfReluActivation = {
  activation: "relu",
} satisfies Parameters<typeof tf.layers.activation>[0];

interface ParamsOfResidualNeuralNetwork<
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
  game: GenericGame;
  quantityOfHiddenChannels: Integer;
  quantityOfResidualBlocks: Integer;
}

/// Construct adapter from the input tensor to the first tensor of the backbone
const constructInitialBackboneTensor = <
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
  inputTensor,
  quantityOfColumns,
  quantityOfHiddenChannels,
  quantityOfRows,
}: {
  inputTensor: tf.SymbolicTensor;
  quantityOfColumns: Integer;
  quantityOfHiddenChannels: Integer;
  quantityOfRows: Integer;
}) => {
  const startBlock = tf.sequential({
    layers: [
      tf.layers.conv2d({
        ...getParamsOfConvolution({
          filters: quantityOfHiddenChannels,
          kernelSize: SIZE_OF_CONVOLUTIONAL_WINDOW,
        }),
        inputShape: [
          quantityOfRows,
          quantityOfColumns,
          QUANTITY_OF_INPUT_CHANNELS,
        ],
      }),
      tf.layers.batchNormalization(paramsOfBatchNormalization),
      tf.layers.activation(paramsOfReluActivation),
    ],
    name: "startBlock",
  });
  return assertTensorIsSymbolic(startBlock.apply(inputTensor));
};

/// Construct block that predicts the probability of each action
const constructPolicyHead = <
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
  inputShape,
  quantityOfMoves,
}: {
  inputShape: tf.Shape;
  quantityOfMoves: Integer;
}) =>
  tf.sequential({
    layers: [
      tf.layers.conv2d({
        ...getParamsOfConvolution({
          filters: QUANTITY_OF_INPUT_CHANNELS_ON_POLICY_HEAD,
          kernelSize: SIZE_OF_CONVOLUTIONAL_WINDOW,
        }),
        inputShape,
      }),
      tf.layers.batchNormalization(paramsOfBatchNormalization),
      tf.layers.activation(paramsOfReluActivation),
      tf.layers.flatten(),
      tf.layers.dense({
        kernelInitializer: "heNormal",
        units: quantityOfMoves,
        useBias: true,
      }),
    ],
    name: "policyHead",
  });

/// Construct block that predicts the outcome value of the state, i.e. the probability of winning
const constructValueHead = <
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
  inputShape,
}: {
  inputShape: tf.Shape;
}) =>
  tf.sequential({
    layers: [
      tf.layers.conv2d({
        ...getParamsOfConvolution({
          filters: QUANTITY_OF_INPUT_CHANNELS,
          kernelSize: SIZE_OF_CONVOLUTIONAL_WINDOW,
        }),
        inputShape,
      }),
      tf.layers.batchNormalization(paramsOfBatchNormalization),
      tf.layers.activation(paramsOfReluActivation),
      tf.layers.flatten(),
      tf.layers.dense({
        kernelInitializer: "heNormal",
        units: 1,
        useBias: true,
      }),
      tf.layers.activation({ activation: "tanh" }),
    ],
    name: "valueHead",
  });

const applyResidualBlock = ({
  currentBackboneTensor,
  idNumber,
  quantityOfColumns,
  quantityOfHiddenChannels,
  quantityOfRows,
}: {
  currentBackboneTensor: ReturnType<typeof constructInitialBackboneTensor>;
  idNumber: number;
  quantityOfColumns: Integer;
  quantityOfHiddenChannels: Integer;
  quantityOfRows: Integer;
}) => {
  const paramsOfConvolution = {
    ...getParamsOfConvolution({
      filters: quantityOfHiddenChannels,
      kernelSize: SIZE_OF_CONVOLUTIONAL_WINDOW,
    }),
    inputShape: [quantityOfRows, quantityOfColumns, quantityOfHiddenChannels],
  };

  const firstConvolution = tf.layers.conv2d({
    ...paramsOfConvolution,
    name: `ResidualBlock_${idNumber}_convolution1`,
  });
  const secondConvolution = tf.layers.conv2d({
    ...paramsOfConvolution,
    name: `ResidualBlock_${idNumber}_convolution2`,
  });

  const firstNormalization = tf.layers.batchNormalization({
    ...paramsOfBatchNormalization,
    name: `ResidualBlock_${idNumber}_normalization1`,
  });
  const secondNormalization = tf.layers.batchNormalization({
    ...paramsOfBatchNormalization,
    name: `ResidualBlock_${idNumber}_normalization2`,
  });

  const firstActivation = tf.layers.activation({
    ...paramsOfReluActivation,
    name: `ResidualBlock_${idNumber}_activation1`,
  });
  const secondActivation = tf.layers.activation({
    ...paramsOfReluActivation,
    name: `ResidualBlock_${idNumber}_activation2`,
  });

  const residualSum = tf.layers.add({
    name: `ResidualBlock_${idNumber}_residualSum`,
  });

  let outputTensor = assertTensorIsSymbolic(
    firstConvolution.apply(currentBackboneTensor),
  );
  outputTensor = assertTensorIsSymbolic(firstNormalization.apply(outputTensor));
  outputTensor = assertTensorIsSymbolic(firstActivation.apply(outputTensor));
  outputTensor = assertTensorIsSymbolic(secondConvolution.apply(outputTensor));
  outputTensor = assertTensorIsSymbolic(
    secondNormalization.apply(outputTensor),
  );
  outputTensor = assertTensorIsSymbolic(
    residualSum.apply([outputTensor, currentBackboneTensor]),
  );
  outputTensor = assertTensorIsSymbolic(secondActivation.apply(outputTensor));

  return outputTensor;
};

const constructResidualNeuralNetworkModel = <
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
  game,
  quantityOfHiddenChannels,
  quantityOfResidualBlocks,
}: ParamsOfResidualNeuralNetwork<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
>): tf.LayersModel => {
  const quantityOfRows = game.getQuantityOfRows();
  const quantityOfColumns = game.getQuantityOfColumns();
  const quantityOfMoves = game.getQuantityOfMoves();

  const inputTensor = tf.input({
    name: "input",
    shape: [quantityOfRows, quantityOfColumns, QUANTITY_OF_INPUT_CHANNELS],
  });

  let currentBackboneTensor = constructInitialBackboneTensor({
    inputTensor,
    quantityOfColumns,
    quantityOfHiddenChannels,
    quantityOfRows,
  });

  for (
    let indexOfBlock = FIRST_INDEX;
    indexOfBlock < quantityOfResidualBlocks;
    indexOfBlock += INCREMENT_ONE
  ) {
    currentBackboneTensor = applyResidualBlock({
      currentBackboneTensor,
      idNumber: indexOfBlock,
      quantityOfColumns,
      quantityOfHiddenChannels,
      quantityOfRows,
    });
  }

  const inputShapeForHeads = [
    quantityOfRows,
    quantityOfColumns,
    quantityOfHiddenChannels,
  ];

  const policyHead = constructPolicyHead({
    inputShape: inputShapeForHeads,
    quantityOfMoves,
  });
  const valueHead = constructValueHead({
    inputShape: inputShapeForHeads,
  });

  const valueOutput = assertTensorIsSymbolic(
    valueHead.apply(currentBackboneTensor),
  );
  const policyOutput = assertTensorIsSymbolic(
    policyHead.apply(currentBackboneTensor),
  );

  const layersModel = tf.model({
    inputs: inputTensor,
    name: "ResidualNeuralNetwork",
    outputs: [policyOutput, valueOutput],
  });

  return layersModel;
};

class ResidualNeuralNetwork<
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
  private readonly layersModel: tf.LayersModel;

  public constructor({
    game,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
  }: ParamsOfResidualNeuralNetwork<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    this.layersModel = constructResidualNeuralNetworkModel<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      game,
      quantityOfHiddenChannels,
      quantityOfResidualBlocks,
    });
  }

  private static logProgress({
    epoch,
    logMessage,
    logs,
    trainingLog,
  }: {
    epoch: number;
    logMessage: LogMessage;
    logs: tf.Logs;
    trainingLog: tf.Logs[];
  }) {
    let logsString = `Epoch ${epoch}\n`;
    logsString += `Total Loss: ${logs["loss"]}\n`;
    logsString += `Policy Head Loss: ${logs["policyHead_loss"]}\n`;
    logsString += `Policy Head Accuracy: ${logs["policyHead_acc"]}\n`;
    logsString += `Value Head Loss: ${logs["valueHead_loss"]}\n`;
    logsString += `Value Head Accuracy: ${logs["valueHead_acc"]}\n`;
    logMessage(logsString);
    trainingLog.push(logs);
  }

  // public dispose() {
  //   this.layersModel.dispose();
  // }

  public getWeights(): TensorLikeArray[] {
    return this.layersModel.getWeights().map((weight) => weight.arraySync());
  }

  public predict({
    batchOfStatesAsTensor,
  }: {
    batchOfStatesAsTensor: tf.Tensor;
  }) {
    return tf.tidy(() => {
      const outputs = this.layersModel.predict(batchOfStatesAsTensor);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return outputs as [tf.Tensor2D, tf.Tensor1D];
    });
  }

  public async save({
    path,
    scheme,
  }: {
    path: string;
    scheme:
      | "downloads"
      | "file"
      | "http"
      | "https"
      | "indexeddb"
      | "localstorage";
  }) {
    await this.layersModel.save(`${scheme}://${path}`, {});
  }

  public setWeights({ weights }: { weights: TensorLikeArray[] }) {
    const tensors = weights.map((weight) => tf.tensor(weight));
    this.layersModel.setWeights(tensors);
  }

  public summary({ logMessage }: { logMessage: LogMessage }) {
    const LINE_LENGTH = 0;
    const FIRST_POSITION = 0;
    this.layersModel.summary(LINE_LENGTH, [FIRST_POSITION], logMessage);
  }

  /**
   * Trains the model using the provided batch of data.
   * @param inputsBatch - The batch of input tensors.
   * @param policyOutputsBatch - The batch of policy output tensors.
   * @param valueOutputsBatch - The batch of value output tensors.
   * @param batchSize - The size of each training batch.
   * @param numEpochs - The number of training epochs.
   * @param learningRate - The learning rate for the optimizer.
   * @param validationSplit - The percentage of data to use for validation.
   * @param logMessage - The function to use for logging progress (optional, default is console.log).
   * @returns A promise that resolves to an array of training logs.
   */
  public async train({
    batchSize,
    inputsBatch,
    learningRate,
    logMessage,
    numEpochs,
    policyOutputsBatch,
    validationSplit,
    valueOutputsBatch,
  }: {
    batchSize: number;
    inputsBatch: tf.Tensor4D;
    learningRate: number;
    logMessage: LogMessage;
    numEpochs: number;
    policyOutputsBatch: tf.Tensor2D;
    validationSplit: number;
    valueOutputsBatch: tf.Tensor1D;
  }): Promise<tf.Logs[]> {
    const trainingLog: tf.Logs[] = [];
    this.compile({ learningRate });

    // Fit the model using the prepared training data.
    await this.layersModel.fit(
      inputsBatch,
      [policyOutputsBatch, valueOutputsBatch],
      {
        // Update weights after every N examples.
        batchSize,
        callbacks: {
          onEpochEnd: (epoch, logs) => {
            if (logs) {
              ResidualNeuralNetwork.logProgress({
                epoch,
                logMessage,
                logs,
                trainingLog,
              });
            }
          },
        },
        // Go over the data N times.
        epochs: numEpochs,
        // Ensure data is shuffled again before using each time.
        shuffle: true,
        // Use N% of the data for validation.
        validationSplit,
      },
    );

    return trainingLog;
  }

  private compile({ learningRate }: { learningRate: number }) {
    this.layersModel.compile({
      loss: {
        policyHead: "categoricalCrossentropy",
        valueHead: "meanSquaredError",
      },
      metrics: ["accuracy"],
      optimizer: tf.train.adam(learningRate),
    });
  }

  // /// Evaluates the model on the given batch of data
  // private evaluate({ inputsBatch }: { inputsBatch: tf.Tensor4D }) {
  //   const DIMENSION = 1;
  //   const FIRST_POSITION = 0;
  //   tf.tidy(() => {
  //     const [policy] = this.predict({ inputsBatch });
  //     const softMaxPolicy = tf
  //       .softmax(policy, DIMENSION)
  //       .squeeze([FIRST_POSITION]);
  //     // TODO: const argMaxPolicy = policy.squeeze([0]).argMax();
  //     return softMaxPolicy;
  //   });
  // }
}

export type { ParamsOfResidualNeuralNetwork };
export { ResidualNeuralNetwork };
