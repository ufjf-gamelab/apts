import * as tf from "@tensorflow/tfjs";
import Game from "../Game/Game.js";
import { GameName, LogMessage, TensorLikeArray } from "../types.js";
import { fullModelPath } from "../util.js";

const INPUT_CHANNELS = 3;
const BACKBONE_CHANNELS = 32;

export interface SaveParams {
  game: GameName;
  name: string;
  innerPath: string;
}

interface retrieveResNetModelParams {
  model: tf.LayersModel;
}
interface BuildResNetParams {
  // Length of the backbone
  numResBlocks: number;
  // Number of channels in the backbone
  numHiddenChannels: number;
}

export type ResNetParams = retrieveResNetModelParams | BuildResNetParams;

// Build and return a residual block
const applyResBlock = ({
  idNumber,
  currentInputTensor,
  originalInputTensor,
  dim1Size,
  dim2Size,
  numHiddenChannels,
}: {
  idNumber: number;
  currentInputTensor: tf.SymbolicTensor;
  originalInputTensor: tf.SymbolicTensor;
  dim1Size: number;
  dim2Size: number;
  numHiddenChannels: number;
}): tf.SymbolicTensor => {
  const convolution1 = tf.layers.conv2d({
    activation: "relu",
    filters: numHiddenChannels,
    inputShape: [dim1Size, dim2Size, numHiddenChannels],
    kernelSize: 3,
    name: `ResBlock_${idNumber}_convolution1`,
    padding: "same",
  });
  const normalization1 = tf.layers.batchNormalization({
    name: `ResBlock_${idNumber}_normalization1`,
  });

  const convolution2 = tf.layers.conv2d({
    activation: "relu",
    filters: numHiddenChannels,
    kernelSize: 3,
    name: `ResBlock_${idNumber}_convolution2`,
    padding: "same",
  });
  const normalization2 = tf.layers.batchNormalization({
    name: `ResBlock_${idNumber}_normalization2`,
  });

  // Apply the common layers
  let outputTensor = normalization2.apply(
    convolution2.apply(
      normalization1.apply(convolution1.apply(currentInputTensor)),
    ),
  ) as tf.SymbolicTensor;

  // Sum the original input to the output of the current residual block
  outputTensor = tf.layers
    .add({
      name: `ResBlock_${idNumber}_residualSum`,
    })
    .apply([outputTensor, originalInputTensor]) as tf.SymbolicTensor;

  return outputTensor;
};

/// Build and return a residual model
// eslint-disable-next-line max-lines-per-function
const buildResNetModel = (
  game: Game,
  // Length of the backbone
  numResBlocks: number,
  // Number of channels in the backbone
  numHiddenChannels: number,
): tf.LayersModel => {
  // Define input tensor
  const inputTensor = tf.input({
    name: "input",
    shape: [game.getRowCount(), game.getColumnCount(), INPUT_CHANNELS],
  });

  // Applies a convolutional layer to the input
  const startBlock = tf.sequential({
    layers: [
      tf.layers.conv2d({
        // Produce as channels as set by numHiddenChannels
        filters: numHiddenChannels,
        inputShape: [game.getRowCount(), game.getColumnCount(), INPUT_CHANNELS],
        // 3x3 filter
        kernelSize: INPUT_CHANNELS,
        padding: "same",
      }),
      tf.layers.batchNormalization(),
      tf.layers.activation({ activation: "relu" }),
    ],
    name: "startBlock",
  });
  const startBlockOutputTensor = startBlock.apply(
    inputTensor,
  ) as tf.SymbolicTensor;

  // Apply the residual blocks to the tensor
  let backboneOutputTensor = startBlockOutputTensor;
  for (let blockIndex = 0; blockIndex < numResBlocks; blockIndex++) {
    backboneOutputTensor = applyResBlock({
      currentInputTensor: backboneOutputTensor,
      dim1Size: game.getRowCount(),
      dim2Size: game.getColumnCount(),
      idNumber: blockIndex,
      numHiddenChannels,
      originalInputTensor: startBlockOutputTensor,
    });
  }

  // Block that predicts the probability of each action
  const policyHead = tf.sequential({
    layers: [
      tf.layers.conv2d({
        // Produce 32 channels
        filters: BACKBONE_CHANNELS,
        // Output of the backbone
        inputShape: [
          game.getRowCount(),
          game.getColumnCount(),
          numHiddenChannels,
        ],
        // 3x3 filter
        kernelSize: INPUT_CHANNELS,
        padding: "same",
      }),
      tf.layers.batchNormalization(),
      tf.layers.activation({ activation: "relu" }),
      tf.layers.flatten(),
      tf.layers.dense({ units: game.getActionSize() * BACKBONE_CHANNELS }),
      // Output of the policy head, i.e. the probability of each action
      tf.layers.dense({ units: game.getActionSize() }),
    ],
    name: "policyHead",
  });

  // Block that predicts the outcome value of the state, i.e. the probability of winning
  const valueHead = tf.sequential({
    layers: [
      tf.layers.conv2d({
        filters: INPUT_CHANNELS,
        // Output of the backbone
        inputShape: [
          game.getRowCount(),
          game.getColumnCount(),
          numHiddenChannels,
        ],
        // 3x3 filter
        kernelSize: INPUT_CHANNELS,
        padding: "same",
      }),
      tf.layers.batchNormalization(),
      tf.layers.activation({ activation: "relu" }),
      tf.layers.flatten(),
      tf.layers.dense({ units: game.getActionSize() * INPUT_CHANNELS }),
      // Output of the value head, i.e. the probability of winning
      tf.layers.dense({ activation: "tanh", units: 1 }),
    ],
    name: "valueHead",
  });

  const valueOutput = valueHead.apply(
    backboneOutputTensor,
  ) as tf.SymbolicTensor;
  const policyOutput = policyHead.apply(
    backboneOutputTensor,
  ) as tf.SymbolicTensor;

  const model = tf.model({
    inputs: inputTensor,
    name: "ResNet",
    outputs: [policyOutput, valueOutput],
  });
  return model;
};

/* Class that represents a ResNet model, via a Layers Model from TensorFlow.js.
 * It is important to dispose the model when it is no longer needed.
 */
export default class ResNet {
  private model: tf.LayersModel;
  private game: Game;

  constructor(game: Game, params: ResNetParams) {
    this.game = game;
    if ("model" in params) {
      this.model = params.model;
    } else {
      this.model = buildResNetModel(
        game,
        params.numResBlocks,
        params.numHiddenChannels,
      );
    }
  }

  /* Getters */

  public getModel(): tf.LayersModel {
    return this.model;
  }

  public getWeights(): TensorLikeArray[] {
    return this.model.getWeights().map(weight => weight.arraySync());
  }

  /// Setters
  public setWeights(weights: TensorLikeArray[]) {
    const tensors = weights.map(weight => tf.tensor(weight));
    this.model.setWeights(tensors);
  }

  /// Methods

  // Prints a summary of the model
  public summary(logMessage: LogMessage = console.log) {
    const LINE_LENGTH = 0;
    const FIRST_POSITION = 0;
    this.model.summary(LINE_LENGTH, [FIRST_POSITION], logMessage);
  }

  // Disposes the model
  public dispose() {
    this.model.dispose();
  }

  // Compiles the model with the most proper optimizer and loss functions
  private compile(learningRate: number) {
    this.model.compile({
      loss: {
        policyHead: "categoricalCrossentropy",
        valueHead: "meanSquaredError",
      },
      metrics: ["accuracy"],
      optimizer: tf.train.adam(learningRate),
    });
  }

  // Prints the progress of the training
  private static logProgress({
    logMessage = console.log,
    epoch,
    logs,
    trainingLog,
  }: {
    logMessage: LogMessage;
    epoch: number;
    logs: tf.Logs;
    trainingLog: tf.Logs[];
  }) {
    let logsString = `Epoch ${epoch}\n`;
    logsString += `Total Loss: ${logs.loss}\n`;
    logsString += `Policy Head Loss: ${logs.policyHead_loss}\n`;
    logsString += `Policy Head Accuracy: ${logs.policyHead_acc}\n`;
    logsString += `Value Head Loss: ${logs.valueHead_loss}\n`;
    logsString += `Value Head Accuracy: ${logs.valueHead_acc}\n`;
    logMessage(logsString);
    trainingLog.push(logs);
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
    inputsBatch,
    policyOutputsBatch,
    valueOutputsBatch,
    batchSize,
    numEpochs,
    learningRate,
    validationSplit,
    logMessage = console.log,
  }: {
    inputsBatch: tf.Tensor4D;
    policyOutputsBatch: tf.Tensor2D;
    valueOutputsBatch: tf.Tensor2D;
    batchSize: number;
    numEpochs: number;
    learningRate: number;
    validationSplit: number;
    logMessage?: LogMessage;
  }): Promise<tf.Logs[]> {
    const trainingLog: tf.Logs[] = [];
    this.compile(learningRate);

    // Fit the model using the prepared training data
    await this.model.fit(inputsBatch, [policyOutputsBatch, valueOutputsBatch], {
      // Update weights after every N examples.
      batchSize,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          if (logs)
            ResNet.logProgress({
              epoch,
              logMessage,
              logs,
              trainingLog,
            });
        },
      },
      // Go over the data N times.
      epochs: numEpochs,
      // Ensure data is shuffled again before using each time.
      shuffle: true,
      // Use N% of the data for validation.
      validationSplit,
    });

    return trainingLog;
  }

  // Evaluates the model on the given batch of data
  private evaluate(inputsBatch: tf.Tensor4D) {
    const DIMENSION = 1;
    const FIRST_POSITION = 0;
    tf.tidy(() => {
      const [policy] = this.predict(inputsBatch);
      const softMaxPolicy = tf
        .softmax(policy, DIMENSION)
        .squeeze([FIRST_POSITION]);
      // TODO: const argMaxPolicy = policy.squeeze([0]).argMax();
      return softMaxPolicy;
    });
  }

  // Makes a prediction on the given state, and returns the policy and value
  public predict(encodedState: tf.Tensor4D): [tf.Tensor2D, tf.Tensor2D] {
    return tf.tidy(() => {
      const outputs = this.model.predict(encodedState) as [
        tf.Tensor2D,
        tf.Tensor2D,
      ];
      return outputs;
    });
  }

  public async save(innerPath: string) {
    const protocol = "file";
    const path = fullModelPath(this.game.getName(), innerPath);
    await this.model.save(`${protocol}://${path}`, {});
  }
}
