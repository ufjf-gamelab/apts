import { strategiesToSearch } from "@repo/interface/constants.js";
import { Option } from "commander";

import { parseArgumentIntoFloat, parseArgumentIntoInt } from "../parsing.js";
import { keysOfStates } from "../states.js";

const DEFAULT_SEED = Math.random().toString();

const EXPLORATION_COEFFICIENT = 0.5;
const QUANTITY_OF_EXPANSIONS = 10000;
const TEMPERATURE_COEFFICIENT = 0.25;

const commonOptions = {
  expansions: new Option(
    "-e, --expansions <quantity-of-expansions>",
    "The quantity of expansions to perform on the search.",
  )
    .default(QUANTITY_OF_EXPANSIONS)
    .argParser(parseArgumentIntoInt),
  exploration: new Option(
    "-x, --exploration <exploration-coefficient>",
    "The exploration coefficient to use on the search.",
  )
    .default(EXPLORATION_COEFFICIENT)
    .argParser(parseArgumentIntoFloat),
  seed: new Option(
    "--seed <seed>",
    "The seed to use for random actions.",
  ).default(DEFAULT_SEED),
  softeningCoefficient: new Option(
    "--softening <softening-coefficient>",
    "The softening coefficient to use on the search.",
  )
    .default(TEMPERATURE_COEFFICIENT)
    .argParser(parseArgumentIntoFloat),
  state: new Option(
    "-s, --state <key-of-state>",
    "The key of a state to use as root of the search tree.",
  )
    .choices(Object.values(keysOfStates))
    .makeOptionMandatory(),
  strategyToSearch: new Option(
    "--strategy <strategy-to-search>",
    "The strategy that will be used by the search algorithm.",
  )
    .choices(Object.values(strategiesToSearch))
    .makeOptionMandatory(),
} as const;

export { commonOptions };
