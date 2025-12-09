import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfSearch } from "@repo/search/MonteCarloTree/Search.js";

import { CommonSearch } from "@repo/search/CommonMonteCarloTree/CommonSearch.js";
import { ExpandAllSearch } from "@repo/search/ExpandAllMonteCarloTree/ExpandAllSearch.js";

import type { StrategyToSearch } from "./constants.js";

const constructSearchBasedOnStrategy = <
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
  explorationCoefficient,
  quantityOfExpansions,
  random,
  strategyToSearch,
}: Pick<
  ParamsOfSearch,
  "explorationCoefficient" | "quantityOfExpansions" | "random"
> & {
  strategyToSearch: StrategyToSearch;
}) => {
  switch (strategyToSearch) {
    case "common": {
      return new CommonSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >({ explorationCoefficient, quantityOfExpansions, random });
    }
    case "expandAll": {
      return new ExpandAllSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >({ explorationCoefficient, quantityOfExpansions, random });
    }
    default: {
      throw new Error("The selected strategy to search is invalid.");
    }
  }
};

export { constructSearchBasedOnStrategy };
