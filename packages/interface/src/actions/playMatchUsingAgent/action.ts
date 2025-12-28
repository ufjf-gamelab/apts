import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

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
  modeOfPlay,
  predictionModel,
  processMessage,
  seed,
  select,
  softeningCoefficient,
  state,
}: Pick<
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
  | "predictionModel"
  | "processMessage"
  | "select"
  | "softeningCoefficient"
  | "state"
> &
  Pick<ParamsOfRandom, "seed"> & {
    modeOfPlay:
      | typeof modesOfPlay.computerVersusComputer
      | typeof modesOfPlay.playerVersusComputer;
  }): Promise<void> => {
  const game = state.getGame();
  const random = new Random({ seed });

  processMessage(`Game: ${game.getName()}`);

  const finalState = await (async () => {
    switch (modeOfPlay) {
      case modesOfPlay.computerVersusComputer: {
        return playMatchInTheModeComputerVersusComputer({
          predictionModel,
          processMessage,
          random,
          softeningCoefficient,
          state,
        });
      }
      case modesOfPlay.playerVersusComputer: {
        return await playMatchInTheModePlayerVersusComputer({
          predictionModel,
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
};

export { playMatchUsingAgent };
