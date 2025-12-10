import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { FIRST_INDEX, INCREMENT_ONE } from "@repo/engine_core/constants.js";
import * as tf from "@tensorflow/tfjs";

import type { TreeNode } from "../MonteCarloTree/TreeNode.js";

const QUANTITY_OF_INPUT_CHANNELS = 3;
const QUANTITY_OF_INPUT_CHANNELS_ON_POLICY_HEAD = 32;
const SIZE_OF_CONVOLUTIONAL_WINDOW = 3;
const WEIGHT_DECAY = 1e-4;

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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return startBlock.apply(inputTensor) as tf.SymbolicTensor;
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

  let outputTensor = firstConvolution.apply(currentBackboneTensor);
  outputTensor = firstNormalization.apply(outputTensor);
  outputTensor = firstActivation.apply(outputTensor);
  outputTensor = secondConvolution.apply(outputTensor);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  outputTensor = secondNormalization.apply(outputTensor) as tf.SymbolicTensor;
  outputTensor = residualSum.apply([outputTensor, currentBackboneTensor]);
  outputTensor = secondActivation.apply(outputTensor);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return outputTensor as tf.SymbolicTensor;
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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const valueOutput = valueHead.apply(
    currentBackboneTensor,
  ) as tf.SymbolicTensor;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const policyOutput = policyHead.apply(
    currentBackboneTensor,
  ) as tf.SymbolicTensor;

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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
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
    this.game = game;
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

  public getGame() {
    return this.game;
  }

  public getLayersModel() {
    return this.layersModel;
  }
}

export type { ParamsOfResidualNeuralNetwork };
export { ResidualNeuralNetwork };
