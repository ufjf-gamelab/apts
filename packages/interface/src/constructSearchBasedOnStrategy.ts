import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfSearch } from "@repo/search/MonteCarloTree/Search.js";

import {
  AgentGuidedSearch,
  type ParamsOfAgentGuidedSearch,
} from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import { CommonSearch } from "@repo/search/CommonMonteCarloTree/CommonSearch.js";
import { ExpandAllSearch } from "@repo/search/ExpandAllMonteCarloTree/ExpandAllSearch.js";

import type { StrategyToSearch } from "./constants.js";

const constructErrorForWhenPredictionModelHasNotBeenProvided = () =>
  new Error("A prediction model has not been provided.");

type ParamsOfConstructSearchBasedOnStrategy<
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
> = Pick<
  ParamsOfSearch,
  "explorationCoefficient" | "quantityOfExpansions" | "random"
> & {
  predictionModel:
    | null
    | ParamsOfAgentGuidedSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >["predictionModel"];
  strategyToSearch: StrategyToSearch;
};

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
  predictionModel,
  quantityOfExpansions,
  random,
  strategyToSearch,
}: ParamsOfConstructSearchBasedOnStrategy<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
>) => {
  switch (strategyToSearch) {
    case "agentGuided": {
      if (predictionModel === null) {
        throw constructErrorForWhenPredictionModelHasNotBeenProvided();
      }
      return new AgentGuidedSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >({
        explorationCoefficient,
        predictionModel,
        quantityOfExpansions,
        random,
      });
    }
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

export {
  constructErrorForWhenPredictionModelHasNotBeenProvided,
  constructSearchBasedOnStrategy,
};
