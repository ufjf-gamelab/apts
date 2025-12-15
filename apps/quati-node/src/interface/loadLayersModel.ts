import type { Seed } from "@repo/engine_core/types.js";

import { Model } from "@repo/search/ResidualNeuralNetwork/Model.js";
import { ResidualNeuralNetwork } from "@repo/search/ResidualNeuralNetwork/ResidualNeuralNetwork.js";
import { loadLayersModel } from "@tensorflow/tfjs-node";

import type { selectStateUsingKeyOfState } from "./entries/states.js";

const loadModel = async ({
  pathToResidualNeuralNetworkFolderOrUndefined,
  seed,
  state,
}: {
  pathToResidualNeuralNetworkFolderOrUndefined: string | undefined;
  seed: Seed;
  state: ReturnType<typeof selectStateUsingKeyOfState>;
}) => {
  if (typeof pathToResidualNeuralNetworkFolderOrUndefined === "undefined") {
    return null;
  }

  const game = state.getGame();
  const layersModel = await loadLayersModel(
    `file://${pathToResidualNeuralNetworkFolderOrUndefined}/model.json`,
  );

  const residualNeuralNetwork = ResidualNeuralNetwork.load({
    game,
    layersModel,
    seed,
  });

  return new Model({ residualNeuralNetwork });
};

export { loadModel };
