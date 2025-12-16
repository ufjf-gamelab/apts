import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import {
  type ParamsOfResidualNeuralNetwork,
  ResidualNeuralNetwork,
} from "@repo/search/ResidualNeuralNetwork/ResidualNeuralNetwork.js";

const constructModel = async <
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
  logMessage,
  nameOfModel,
  path,
  quantityOfHiddenChannels,
  quantityOfResidualBlocks,
  scheme,
  seed,
}: Pick<
  Parameters<
    ResidualNeuralNetwork<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >["save"]
  >[0],
  "path" | "scheme"
> &
  Pick<
    Parameters<
      ResidualNeuralNetwork<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >["summary"]
    >[0],
    "logMessage"
  > &
  Pick<
    ParamsOfResidualNeuralNetwork<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >,
    | "game"
    | "nameOfModel"
    | "quantityOfHiddenChannels"
    | "quantityOfResidualBlocks"
    | "seed"
  >): Promise<void> => {
  const residualNeuralNetwork = ResidualNeuralNetwork.create<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >({
    game,
    nameOfModel,
    quantityOfHiddenChannels,
    quantityOfResidualBlocks,
    seed,
  });

  residualNeuralNetwork.summary({ logMessage });
  await residualNeuralNetwork.save({ path, scheme });
};

export { constructModel };
