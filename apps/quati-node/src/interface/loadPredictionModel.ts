import type { Seed } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { PredictionModel } from "@repo/search/ResidualNeuralNetwork/PredictionModel.js";
import { ResidualNeuralNetwork } from "@repo/search/ResidualNeuralNetwork/ResidualNeuralNetwork.js";
import { loadLayersModel } from "@tensorflow/tfjs-node";

const loadPredictionModel = async <
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
  pathToResidualNeuralNetworkFolder,
  seed,
}: {
  game: GenericGame;
  pathToResidualNeuralNetworkFolder: string;
  seed: Seed;
}) => {
  const layersModel = await loadLayersModel(
    `file://${pathToResidualNeuralNetworkFolder}/model.json`,
  );

  const residualNeuralNetwork = ResidualNeuralNetwork.load({
    game,
    layersModel,
    seed,
  });

  return new PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({ residualNeuralNetwork });
};

export { loadPredictionModel };
