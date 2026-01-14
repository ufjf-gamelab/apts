import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { MemoryOfMatch } from "@repo/search/ResidualNeuralNetwork/memory.js";
import type { PredictionModel } from "@repo/search/ResidualNeuralNetwork/PredictionModel.js";

import { type ParamsOfRandom, Random } from "@repo/search/Random/Random.js";

import { modesOfPlay } from "../../constants.js";
import { printInformationAboutMatch } from "../../play/printInformationAboutMatch.js";
import { playMatchInTheModeComputerVersusComputer } from "./playMatchInTheModeComputerVersusComputer.js";
import { playMatchInTheModePlayerVersusComputer } from "./playMatchInTheModePlayerVersusComputer.js";

const playMatchUsingAgent = async <
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
  firstPredictionModel,
  modeOfPlay,
  processMemoryOfMatch,
  processMessage,
  secondPredictionModel,
  seed,
  select,
  softeningCoefficient,
  state,
}: (Pick<
  Parameters<
    typeof playMatchInTheModePlayerVersusComputer<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >[0],
  "processMessage" | "select" | "softeningCoefficient" | "state"
> &
  Pick<ParamsOfRandom, "seed">) & {
  firstPredictionModel: PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  modeOfPlay:
    | typeof modesOfPlay.computerVersusComputer
    | typeof modesOfPlay.playerVersusComputer;
  processMemoryOfMatch: (memoryOfMatch: MemoryOfMatch) => void;
  secondPredictionModel: null | PredictionModel<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): Promise<void> => {
  const game = state.getGame();
  const random = new Random({ seed });

  processMessage(`Game: ${game.getName()}`);

  const { finalState, memoryOfMatch } = await (async () => {
    switch (modeOfPlay) {
      case modesOfPlay.computerVersusComputer: {
        if (secondPredictionModel === null) {
          throw new Error(
            "The second prediction modal is required for playing in the mode computer versus computer.",
          );
        }
        return playMatchInTheModeComputerVersusComputer({
          firstPredictionModel,
          processMessage,
          random,
          secondPredictionModel,
          softeningCoefficient,
          state,
        });
      }

      case modesOfPlay.playerVersusComputer: {
        return await playMatchInTheModePlayerVersusComputer({
          predictionModel: firstPredictionModel,
          processMessage,
          random,
          select,
          softeningCoefficient,
          state,
        });
      }

      default: {
        throw new Error("Invalid game mode.");
      }
    }
  })();

  printInformationAboutMatch({ finalState, processMessage });
  processMemoryOfMatch(memoryOfMatch);
};

export { playMatchUsingAgent };
