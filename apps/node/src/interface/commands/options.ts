import { Option } from "commander";

import { parseArgumentIntoFloat, parseArgumentIntoInt } from "../parsing.js";
import { keysOfStates } from "../states.js";

const DEFAULT_SEED = String(Math.random());

const EXPLORATION_COEFFICIENT = 1.4;
const QUANTITY_OF_EXPANSIONS = 100000;

const commonOptions = {
  expansions: new Option(
    "-e, --expansions <quantity-of-expansions>",
    "The quantity of expansions to perform on the search.",
  )
    .default(QUANTITY_OF_EXPANSIONS)
    .argParser(parseArgumentIntoInt),
  exploration: new Option(
    "-x, --exploration <exploration-constant>",
    "The exploration constant to use on the search.",
  )
    .default(EXPLORATION_COEFFICIENT)
    .argParser(parseArgumentIntoFloat),
  seed: new Option(
    "--seed <seed>",
    "The seed to use for random actions.",
  ).default(DEFAULT_SEED),
  state: new Option(
    "-s, --state <key-of-state>",
    "The key of a state to use as root of the search tree.",
  )
    .choices(Object.values(keysOfStates))
    .makeOptionMandatory(),
} as const;

export { commonOptions };
