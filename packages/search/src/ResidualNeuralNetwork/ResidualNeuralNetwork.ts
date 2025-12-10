import type { Integer, TensorLikeArray } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type * as tfjs from "@tensorflow/tfjs";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
type TensorFlowModule = typeof tfjs;

const TFJS_NODE_SPECIFIER = "@tensorflow/tfjs-node";

const isTensorFlowModule = (value: unknown): value is TensorFlowModule => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const candidate = value as {
    getBackend?: unknown;
    ready?: unknown;
    setBackend?: unknown;
  };
  return (
    typeof candidate.getBackend === "function" &&
    typeof candidate.setBackend === "function" &&
    typeof candidate.ready === "function"
  );
};

const loadTensorFlowModule = async (): Promise<TensorFlowModule> => {
  const runningInNode =
    typeof process !== "undefined" && process.release.name === "node";

  if (runningInNode) {
    try {
      const candidate: unknown = await import(TFJS_NODE_SPECIFIER);
      if (isTensorFlowModule(candidate)) {
        if (candidate.getBackend() !== "tensorflow") {
          await candidate.setBackend("tensorflow");
        }
        await candidate.ready();
        return candidate;
      }
    } catch {
      // Native backend not available; fall back to pure JS
    }
  }

  const tfjsModule = (await import("@tensorflow/tfjs")) as TensorFlowModule;
  await tfjsModule.ready();
  return tfjsModule;
};

const tf: TensorFlowModule = await loadTensorFlowModule();

import type { LogMessage } from "../types.js";

const QUANTITY_OF_INPUT_CHANNELS = 3;
const QUANTITY_OF_INPUT_CHANNELS_ON_POLICY_HEAD = 32;
const SIZE_OF_CONVOLUTIONAL_WINDOW = 3;
const WEIGHT_DECAY = 1e-4;

const FLAG_REPRESENTING_NOT_TO_SET_SEED = 0;
const HASH_FALLBACK_VALUE = 1;
const HASH_INITIAL_VALUE = 0;
const HASH_MODULUS = 4_294_967_296;
const HASH_MULTIPLIER = 31;
const HASH_INCREMENT = 1;

const deriveNumericSeed = ({ seed }: { seed: string }): number => {
  // eslint-disable-next-line init-declarations
  let numericSeed: number;

  const parsedValue = Number(seed);
  if (Number.isFinite(parsedValue)) {
    numericSeed = parsedValue;
  } else {
    let hash = HASH_INITIAL_VALUE;
    for (let index = 0; index < seed.length; index += HASH_INCREMENT) {
      const charCode = seed.charCodeAt(index);
      hash = (Math.imul(hash, HASH_MULTIPLIER) + charCode) % HASH_MODULUS;
    }
    numericSeed = hash === HASH_INITIAL_VALUE ? HASH_FALLBACK_VALUE : hash;
  }

  return numericSeed === FLAG_REPRESENTING_NOT_TO_SET_SEED
    ? HASH_FALLBACK_VALUE
    : numericSeed;
};

const assertTensorIsSymbolic = (
  value:
    | tfjs.SymbolicTensor
    | tfjs.SymbolicTensor[]
    | tfjs.Tensor
    | tfjs.Tensor[],
): tfjs.SymbolicTensor => {
  if (Array.isArray(value)) {
    throw new Error("Expected symbolic tensor but received array of tensors.");
  }
  if (value instanceof tf.Tensor) {
    throw new Error("Expected symbolic tensor but received eager tensor.");
  }
  return value;
};

type KernelInitializer = ReturnType<typeof tf.initializers.heNormal>;

const constructKernelParams = ({
  kernelInitializer,
}: {
  kernelInitializer: KernelInitializer;
}) =>
  ({
    kernelInitializer,
    kernelRegularizer: tf.regularizers.l2({ l2: WEIGHT_DECAY }),
  }) as const;

const getParamsOfConvolution = ({
  filters,
  kernelInitializer,
  kernelSize,
}: Pick<Parameters<typeof tf.layers.conv2d>[0], "filters" | "kernelSize"> & {
  kernelInitializer: KernelInitializer;
}) =>
  ({
    ...constructKernelParams({ kernelInitializer }),
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
  seed: string;
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
  kernelInitializer,
  quantityOfColumns,
  quantityOfHiddenChannels,
  quantityOfRows,
}: {
  inputTensor: tfjs.SymbolicTensor;
  kernelInitializer: KernelInitializer;
  quantityOfColumns: Integer;
  quantityOfHiddenChannels: Integer;
  quantityOfRows: Integer;
}) => {
  const startBlock = tf.sequential({
    layers: [
      tf.layers.conv2d({
        ...getParamsOfConvolution({
          filters: quantityOfHiddenChannels,
          kernelInitializer,
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
  kernelInitializer,
  quantityOfMoves,
}: {
  inputShape: tfjs.Shape;
  kernelInitializer: KernelInitializer;
  quantityOfMoves: Integer;
}) =>
  tf.sequential({
    layers: [
      tf.layers.conv2d({
        ...getParamsOfConvolution({
          filters: QUANTITY_OF_INPUT_CHANNELS_ON_POLICY_HEAD,
          kernelInitializer,
          kernelSize: SIZE_OF_CONVOLUTIONAL_WINDOW,
        }),
        inputShape,
      }),
      tf.layers.batchNormalization(paramsOfBatchNormalization),
      tf.layers.activation(paramsOfReluActivation),
      tf.layers.flatten(),
      tf.layers.dense({
        kernelInitializer,
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
  kernelInitializer,
}: {
  inputShape: tfjs.Shape;
  kernelInitializer: KernelInitializer;
}) =>
  tf.sequential({
    layers: [
      tf.layers.conv2d({
        ...getParamsOfConvolution({
          filters: QUANTITY_OF_INPUT_CHANNELS,
          kernelInitializer,
          kernelSize: SIZE_OF_CONVOLUTIONAL_WINDOW,
        }),
        inputShape,
      }),
      tf.layers.batchNormalization(paramsOfBatchNormalization),
      tf.layers.activation(paramsOfReluActivation),
      tf.layers.flatten(),
      tf.layers.dense({
        kernelInitializer,
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
  kernelInitializer,
  quantityOfColumns,
  quantityOfHiddenChannels,
  quantityOfRows,
}: {
  currentBackboneTensor: ReturnType<typeof constructInitialBackboneTensor>;
  idNumber: number;
  kernelInitializer: KernelInitializer;
  quantityOfColumns: Integer;
  quantityOfHiddenChannels: Integer;
  quantityOfRows: Integer;
}) => {
  const paramsOfConvolution = {
    ...getParamsOfConvolution({
      filters: quantityOfHiddenChannels,
      kernelInitializer,
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
  seed,
}: Pick<
  ParamsOfResidualNeuralNetwork<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  "game" | "quantityOfHiddenChannels" | "quantityOfResidualBlocks" | "seed"
>): tfjs.LayersModel => {
  const numericSeed = deriveNumericSeed({ seed });
  const heNormalInitializer = tf.initializers.heNormal({
    seed: numericSeed,
  });

  const quantityOfRows = game.getQuantityOfRows();
  const quantityOfColumns = game.getQuantityOfColumns();
  const quantityOfMoves = game.getQuantityOfMoves();

  const inputTensor = tf.input({
    name: "input",
    shape: [quantityOfRows, quantityOfColumns, QUANTITY_OF_INPUT_CHANNELS],
  });

  let currentBackboneTensor = constructInitialBackboneTensor({
    inputTensor,
    kernelInitializer: heNormalInitializer,
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
      kernelInitializer: heNormalInitializer,
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
    kernelInitializer: heNormalInitializer,
    quantityOfMoves,
  });
  const valueHead = constructValueHead({
    inputShape: inputShapeForHeads,
    kernelInitializer: heNormalInitializer,
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
  private readonly layersModel: tfjs.LayersModel;

  public constructor({
    game,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
    seed,
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
      seed,
    });
    this.compile({ learningRate: 0.001 });
  }

  private static logProgress({
    epoch,
    logMessage,
    logs,
    trainingLog,
  }: {
    epoch: number;
    logMessage: LogMessage;
    logs: tfjs.Logs;
    trainingLog: tfjs.Logs[];
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
    return this.layersModel
      .getWeights()
      .map((weight: tfjs.Tensor) => weight.arraySync());
  }

  public predict({
    batchOfStatesAsTensor,
  }: {
    batchOfStatesAsTensor: tfjs.Tensor;
  }) {
    return tf.tidy(() => {
      const outputs = this.layersModel.predict(batchOfStatesAsTensor);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return outputs as [tfjs.Tensor2D, tfjs.Tensor1D];
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

  // public setWeights({ weights }: { weights: TensorLikeArray[] }) {
  //   const tensors = weights.map((weight) => tf.tensor(weight));
  //   this.layersModel.setWeights(tensors);
  // }

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
    logMessage,
    numEpochs,
    policyOutputsBatch,
    validationSplit,
    valueOutputsBatch,
  }: {
    batchSize: number;
    inputsBatch: tfjs.Tensor4D;
    logMessage: LogMessage;
    numEpochs: number;
    policyOutputsBatch: tfjs.Tensor2D;
    validationSplit: number;
    valueOutputsBatch: tfjs.Tensor1D;
  }): Promise<tfjs.Logs[]> {
    const trainingLog: tfjs.Logs[] = [];

    // Fit the model using the prepared training data.
    await this.layersModel.fit(
      inputsBatch,
      [policyOutputsBatch, valueOutputsBatch],
      {
        // Update weights after every N examples.
        batchSize,
        callbacks: {
          onEpochEnd: (epoch: number, logs?: tfjs.Logs) => {
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
        // TODO: This needs to be separated and to set the seed on the called shuffle
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
  // private evaluate({ inputsBatch }: { inputsBatch: tfjs.Tensor4D }) {
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
