import type { IndexOfMove } from "@repo/game/Move.js";
import type { QualityOfMove } from "@repo/search/CommonMonteCarloTree/Search.js";

import { recordOfSnowballStatesWithData } from "@repo/games/Snowball/game/State.test/records.js";
import { recordOfTicTacToeStatesWithData } from "@repo/games/TicTacToe/game/State.test/records.js";
import { predictQualityOfMoves } from "@repo/interface/actions/predictQualityOfMoves/action.js";
import { Command, Option } from "commander";
import {
  type Digraph as GraphvizDigraph,
  toDot as graphvizToDot,
} from "ts-graphviz";

import type { DefinitionOfCommand } from "../commands.js";

import { generateGraphvizImage } from "../../../graphviz.js";
import { parseArgumentIntoInt } from "../../parsing.js";

const EXPLORATION_CONSTANT = 1.4;
const QUANTITY_OF_EXPANSIONS = 1000;

const keysOfStates = {
  snowball: "snowball",
  ticTacToe: "tic-tac-toe",
} as const;

const executeAction = ({
  directory: directoryPath,
  expansions: quantityOfExpansions,
  exploration: explorationCoefficient,
  file: fileName,
  state: keyOfState,
  tree: shouldConstructGraph,
}: {
  directory: string | undefined;
  expansions: number;
  exploration: number;
  file: string | undefined;
  state: string;
  tree: boolean;
}): void => {
  const processQualityOfMoves = (
    qualityOfMoves: Map<IndexOfMove, QualityOfMove>,
  ): void => {
    console.info(qualityOfMoves);
  };

  const processGraphvizGraph = shouldConstructGraph
    ? (graphvizGraph: GraphvizDigraph): void => {
        const graphvizDotString = graphvizToDot(graphvizGraph);
        generateGraphvizImage({
          directoryPath,
          fileName,
          graphvizDotString,
        }).catch((error: unknown) => {
          console.error("Error generating Graphviz image:", error);
        });
      }
    : null;

  const state =
    keyOfState === keysOfStates.ticTacToe
      ? recordOfTicTacToeStatesWithData
          .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
          .state
      : recordOfSnowballStatesWithData
          .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
          .state;

  predictQualityOfMoves({
    explorationCoefficient,
    processGraphvizGraph,
    processQualityOfMoves,
    quantityOfExpansions,
    state,
  });
};

const commandToPredictQualityOfMoves = {
  command: new Command("predict-quality")
    .description("Predict quality of a Monte-Carlo Tree node.")
    .action(executeAction),
  options: [
    new Option(
      "-s, --state <key-of-state>",
      "The key of a state to use as root of the tree.",
    )
      .choices(Object.values(keysOfStates))
      .makeOptionMandatory(),
    new Option(
      "-x, --exploration <exploration-constant>",
      "The exploration constant for the search.",
    )
      .default(EXPLORATION_CONSTANT)
      .argParser(parseArgumentIntoInt),
    new Option(
      "-e, --expansions <quantity-of-expansions>",
      "The quantity of expansions to perform.",
    )
      .default(QUANTITY_OF_EXPANSIONS)
      .argParser(parseArgumentIntoInt),
    new Option(
      "-t, --tree",
      "Whether to output an image file of the search tree.",
    ).default(false),
    new Option(
      "-d, --directory <output-directory>",
      "The path to the directory where create the image file.",
    ),
    new Option(
      "-f, --file <output-file-name>",
      "The name of the outputted image file (without extension).",
    ),
  ],
} satisfies DefinitionOfCommand;

export { commandToPredictQualityOfMoves };
