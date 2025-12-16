import type {
  Integer,
  Nullable,
  Seed,
  TensorLikeArray,
} from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type * as tfjs from "@tensorflow/tfjs";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { LogMessage } from "../types.js";

import { deriveNumericSeed } from "./deriveNumericSeed.js";
import {
  loadTensorFlowModule,
  type TensorFlowModule,
} from "./loadTensforFlowModule.js";

const tf: TensorFlowModule = await loadTensorFlowModule();

const QUANTITY_OF_INPUT_CHANNELS = 3;
const QUANTITY_OF_INPUT_CHANNELS_ON_POLICY_HEAD = 32;

const SIZE_OF_CONVOLUTIONAL_WINDOW = 3;

const WEIGHT_DECAY = 1e-4;
const LEARNING_WEIGHT = 0.001;

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
  nameOfModel: string;
  quantityOfHiddenChannels: Integer;
  quantityOfResidualBlocks: Integer;
  seed: Seed;
}

/// Construct adapter from the input tensor to the first tensor of the backbone
const constructAdapterBlockFromInputTensorToBackbone = <
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
  const initialBlock = tf.sequential({
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
    name: "initialBlock",
  });
  return assertTensorIsSymbolic(initialBlock.apply(inputTensor));
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
  currentBackboneTensor: ReturnType<
    typeof constructAdapterBlockFromInputTensorToBackbone
  >;
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
    name: `residualBlock_${idNumber}_convolution1`,
  });
  const secondConvolution = tf.layers.conv2d({
    ...paramsOfConvolution,
    name: `residualBlock_${idNumber}_convolution2`,
  });

  const firstNormalization = tf.layers.batchNormalization({
    ...paramsOfBatchNormalization,
    name: `residualBlock_${idNumber}_normalization1`,
  });
  const secondNormalization = tf.layers.batchNormalization({
    ...paramsOfBatchNormalization,
    name: `residualBlock_${idNumber}_normalization2`,
  });

  const firstActivation = tf.layers.activation({
    ...paramsOfReluActivation,
    name: `residualBlock_${idNumber}_activation1`,
  });
  const secondActivation = tf.layers.activation({
    ...paramsOfReluActivation,
    name: `residualBlock_${idNumber}_activation2`,
  });

  const residualSum = tf.layers.add({
    name: `residualBlock_${idNumber}_residualSum`,
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
  nameOfModel,
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
  | "game"
  | "nameOfModel"
  | "quantityOfHiddenChannels"
  | "quantityOfResidualBlocks"
  | "seed"
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

  let currentBackboneTensor = constructAdapterBlockFromInputTensorToBackbone({
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
    name: nameOfModel,
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
  private readonly game: ParamsOfResidualNeuralNetwork<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["game"];
  private readonly layersModel: tfjs.LayersModel;

  private constructor({
    game,
    layersModel,
    nameOfModel,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
    seed,
  }: Nullable<
    Pick<
      ParamsOfResidualNeuralNetwork<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >,
      "nameOfModel" | "quantityOfHiddenChannels" | "quantityOfResidualBlocks"
    >
  > &
    Pick<
      ParamsOfResidualNeuralNetwork<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >,
      "game" | "seed"
    > & {
      layersModel: null | tfjs.LayersModel;
    }) {
    this.game = game;

    if (
      nameOfModel !== null &&
      quantityOfHiddenChannels !== null &&
      quantityOfResidualBlocks !== null
    ) {
      this.layersModel = constructResidualNeuralNetworkModel<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >({
        game,
        nameOfModel,
        quantityOfHiddenChannels,
        quantityOfResidualBlocks,
        seed,
      });
    } else if (layersModel === null) {
      throw new Error(
        "Could not create ResidualNeuralNetwork, because not sufficient parameters were set.",
      );
    } else {
      this.layersModel = layersModel;
    }

    this.compile({ learningRate: LEARNING_WEIGHT });
  }

  public static create<
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
    nameOfModel,
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
    return new ResidualNeuralNetwork<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      game,
      layersModel: null,
      nameOfModel,
      quantityOfHiddenChannels,
      quantityOfResidualBlocks,
      seed,
    });
  }

  public static load<
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
    layersModel,
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
    "game" | "seed"
  > & { layersModel: tfjs.LayersModel }) {
    return new ResidualNeuralNetwork<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      game,
      layersModel,
      nameOfModel: null,
      quantityOfHiddenChannels: null,
      quantityOfResidualBlocks: null,
      seed,
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

  public getGame() {
    return this.game;
  }

  // public dispose() {
  //   this.layersModel.dispose();
  // }

  // public getWeights(): TensorLikeArray[] {
  //   return this.layersModel
  //     .getWeights()
  //     .map((weight: tfjs.Tensor) => weight.arraySync());
  // }

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

  public setWeights({ weights }: { weights: TensorLikeArray[] }) {
    const tensors = weights.map((weight) => tf.tensor(weight));
    this.layersModel.setWeights(tensors);
  }

  public summary({ logMessage }: { logMessage: LogMessage }) {
    const LINE_LENGTH = 0;
    const FIRST_POSITION = 0;
    this.layersModel.summary(LINE_LENGTH, [FIRST_POSITION], logMessage);
  }

  public async train({
    batchOfInputs,
    batchOfPolicyOutputs,
    batchOfValueOutputs,
    logMessage,
    quantityOfEpochs,
    sizeOfBatch,
    validationSplit,
  }: {
    batchOfInputs: tfjs.Tensor4D;
    batchOfPolicyOutputs: tfjs.Tensor2D;
    batchOfValueOutputs: tfjs.Tensor1D;
    logMessage: LogMessage;
    quantityOfEpochs: number;
    sizeOfBatch: number;
    validationSplit: number;
  }): Promise<tfjs.Logs[]> {
    const trainingLog: tfjs.Logs[] = [];

    await this.layersModel.fit(
      batchOfInputs,
      [batchOfPolicyOutputs, batchOfValueOutputs],
      {
        // Update weights after every N examples.
        batchSize: sizeOfBatch,
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
        epochs: quantityOfEpochs,
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
  // private evaluate({ batchOfInputs }: { batchOfInputs: tfjs.Tensor4D }) {
  //   const DIMENSION = 1;
  //   const FIRST_POSITION = 0;
  //   tf.tidy(() => {
  //     const [policy] = this.predict({ batchOfInputs });
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
