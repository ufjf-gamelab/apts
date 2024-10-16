import * as tf from "@tensorflow/tfjs";
import { predictValueAndProbabilitiesFromState } from "./engine/ResNet/predict";
import ResNet from "./engine/ResNet/ResNet";
import TicTacToeGame from "./games/TicTacToe/Game";

const ROWS = 3;
const COLUMNS = 3;

const hello = () => {
  const ticTacToe = new TicTacToeGame(ROWS, COLUMNS);
  const state = ticTacToe.getInitialState();

  console.log(state);
  state.performAction(0, 1);
  console.log(state);
  state.performAction(1, -1);
  console.log(state);

  const resNet = new ResNet(ticTacToe, {
    numHiddenChannels: 3,
    numResBlocks: 4,
  });

  const encodedState = state.getEncodedState();
  console.log(encodedState);

  const data = predictValueAndProbabilitiesFromState(state, resNet);
  const policy = data.probabilities.arraySync();
  const value = data.value.arraySync();

  console.log(policy);
  console.log(value);

  tf.dispose([data.probabilities, data.value]);
};

hello();
