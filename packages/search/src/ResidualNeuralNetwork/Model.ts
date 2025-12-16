import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import * as tf from "@tensorflow/tfjs";

import type { ResidualNeuralNetwork } from "./ResidualNeuralNetwork.js";

interface ParamsOfModel<
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
  residualNeuralNetwork: ResidualNeuralNetwork<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}

class Model<
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
  private readonly residualNeuralNetwork: ParamsOfModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["residualNeuralNetwork"];

  public constructor({
    residualNeuralNetwork,
  }: ParamsOfModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    this.residualNeuralNetwork = residualNeuralNetwork;
  }

  public predict({ state }: { state: GenericState }): {
    policy: tf.Tensor1D;
    value: tf.Scalar;
  } {
    return tf.tidy(() => {
      const encodedState = state.getEncodedState();
      const stateAsTensor: tf.Tensor3D = tf.tensor(encodedState);

      const batchOfStatesAsTensor = stateAsTensor.expandDims();
      const [policy, value] = this.residualNeuralNetwork.predict({
        batchOfStatesAsTensor,
      });

      const squeezedValue: tf.Scalar = value.squeeze();
      const squeezedPolicy: tf.Tensor1D = policy.squeeze();

      return {
        policy: squeezedPolicy,
        value: squeezedValue,
      };
    });
  }
}

export { Model };
