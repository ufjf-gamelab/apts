import { parseIntoFloat, parseIntoInt } from "@repo/engine_core/parse.js";
import { strategiesToSearch } from "@repo/interface/constants.js";
import { Option } from "commander";

import { keysOfGames } from "../entries/games.js";
import { keysOfStates } from "../entries/states.js";

const EXPLORATION_COEFFICIENT = 0.5;
const QUANTITY_OF_EXPANSIONS = 10000;
const SOFTENING_COEFFICIENT = 0.25;

const commonOptions = {
  canOverwrite: new Option(
    "--overwrite",
    "Can overwrite the training memory file.",
  ),
  expansions: new Option(
    "-e, --expansions <quantity of expansions>",
    "The quantity of expansions to perform on the search.",
  )
    .default(QUANTITY_OF_EXPANSIONS)
    .argParser(parseIntoInt),
  exploration: new Option(
    "-x, --exploration <exploration coefficient>",
    "The exploration coefficient to use on the search.",
  )
    .default(EXPLORATION_COEFFICIENT)
    .argParser(parseIntoFloat),
  game: new Option(
    "--game <identifier of game>",
    "The identifier name of a game that will be used to architect the model.",
  )
    .choices(Object.values(keysOfGames))
    .makeOptionMandatory(),
  modelPath: new Option(
    "--model <path of model>",
    "The path to the folder that contains the architecture and the weights of the model.",
  ),
  seed: new Option(
    "--seed <seed>",
    "The seed to use for random actions. (default: <random>)",
  ),
  softeningCoefficient: new Option(
    "--softening <softening coefficient>",
    "The softening coefficient to calculate the probabilities of each move after the search has completed.",
  )
    .default(SOFTENING_COEFFICIENT)
    .argParser(parseIntoFloat),
  state: new Option(
    "--state <identifier of state>",
    "The identifier of a state to use as root of the search tree.",
  )
    .choices(Object.values(keysOfStates))
    .makeOptionMandatory(),
  strategyToSearch: new Option(
    "--strategy <strategy to search>",
    "The strategy that will be used by the search algorithm.",
  )
    .choices(Object.values(strategiesToSearch))
    .makeOptionMandatory(),
} as const;

export { commonOptions };
