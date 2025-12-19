import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import * as tf from "@tensorflow/tfjs";

import type { QualityOfMatch } from "../MonteCarloTree/TreeNode.js";
import type { QualityOfMove } from "../qualityOfMove.js";
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

class PredictionModel<
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

  public getGame() {
    return this.residualNeuralNetwork.getGame();
  }

  public getName() {
    return this.residualNeuralNetwork.getName();
  }

  public getResidualNeuralNetwork() {
    return this.residualNeuralNetwork;
  }

  public predict({ state }: { state: GenericState }): {
    qualitiesOfMoves: QualityOfMove[];
    qualityOfMatch: QualityOfMatch;
  } {
    return tf.tidy(() => {
      const encodedState = state.getEncodedState();
      const stateAsTensor: tf.Tensor3D = tf.tensor(encodedState);

      const batchOfStatesAsTensor = stateAsTensor.expandDims();
      const [policy, value] = this.residualNeuralNetwork.predict({
        batchOfStatesAsTensor,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      const qualitiesOfMoves = policy.squeeze().arraySync() as QualityOfMove[];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      const qualityOfMatch = value.squeeze().arraySync() as QualityOfMatch;

      return {
        qualitiesOfMoves,
        qualityOfMatch,
      };
    });
  }
}

export { PredictionModel };
