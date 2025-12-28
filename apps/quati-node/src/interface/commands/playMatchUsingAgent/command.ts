import type { SofteningCoefficient } from "@repo/search/qualityOfMove.js";

import { select } from "@inquirer/prompts";
import { playMatchUsingAgent } from "@repo/interface/actions/playMatchUsingAgent/action.js";
import { modesOfPlay } from "@repo/interface/constants.js";
import { constructErrorForWhenPredictionModelHasNotBeenProvided } from "@repo/interface/constructSearchBasedOnStrategy.js";
import { Command, Option } from "commander";

import type { DefinitionOfCommand } from "../commands.js";

import {
  type KeyOfState,
  selectStateUsingKeyOfState,
} from "../../entries/states.js";
import { loadPredictionModel } from "../../load/loadModel.js";
import { commonOptions } from "../options.js";

const executeAction = async ({
  mode: modeOfPlay,
  model: pathToResidualNeuralNetworkFolderOrUndefined,
  seed: seedOrUndefined,
  softening: softeningCoefficient,
  state: keyOfState,
}: {
  mode:
    | typeof modesOfPlay.computerVersusComputer
    | typeof modesOfPlay.playerVersusComputer;
  model: string;
  seed: string | undefined;
  softening: SofteningCoefficient;
  state: KeyOfState;
}): Promise<void> => {
  const seed = seedOrUndefined ?? Math.random().toString();
  const state = selectStateUsingKeyOfState(keyOfState);
  const game = state.getGame();

  const predictionModel = await (async () => {
    if (typeof pathToResidualNeuralNetworkFolderOrUndefined === "undefined") {
      throw constructErrorForWhenPredictionModelHasNotBeenProvided();
    }
    const { predictionModel: internalPredictionModel } =
      await loadPredictionModel({
        game,
        pathToResidualNeuralNetworkFolder:
          pathToResidualNeuralNetworkFolderOrUndefined,
      });
    return internalPredictionModel;
  })();

  await playMatchUsingAgent({
    modeOfPlay,
    predictionModel,
    processMessage: console.info,
    seed,
    select,
    softeningCoefficient,
    state,
  });
};

const commandToPlayMatchUsingAgent = {
  command: new Command("play-match-using-agent")
    .description("Play match using agent trained using ResNet.")
    .action(executeAction),
  options: [
    new Option("--mode <game mode>", "The game mode to play.")
      .choices(
        Object.values([
          modesOfPlay.computerVersusComputer,
          modesOfPlay.playerVersusComputer,
        ]),
      )
      .makeOptionMandatory(),
    commonOptions.state,
    commonOptions.modelPath,
    commonOptions.softeningCoefficient,
    commonOptions.seed,
  ],
} satisfies DefinitionOfCommand;

export { commandToPlayMatchUsingAgent };
