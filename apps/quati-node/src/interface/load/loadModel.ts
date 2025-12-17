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
import path from "path";

import type { MetadataOfModel } from "../commands/constructModel/command.js";

import { loadObject } from "./loadObject.js";

const loadResidualNeuralNetwork = async <
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
  const metadata = await loadObject<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    MetadataOfModel
  >({
    pathToFile: path.join(pathToResidualNeuralNetworkFolder, "metadata.json"),
  });

  const layersModel = await loadLayersModel(
    `file://${pathToResidualNeuralNetworkFolder}/model.json`,
  );

  const residualNeuralNetwork = ResidualNeuralNetwork.load({
    game,
    layersModel,
    seed,
  });

  return { metadata, residualNeuralNetwork };
};

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
  const { metadata, residualNeuralNetwork } = await loadResidualNeuralNetwork({
    game,
    pathToResidualNeuralNetworkFolder,
    seed,
  });

  const predictionModel = new PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({ residualNeuralNetwork });

  return { metadata, predictionModel };
};

export { loadPredictionModel, loadResidualNeuralNetwork };
