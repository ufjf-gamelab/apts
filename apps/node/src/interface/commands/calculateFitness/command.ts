import type { Integer } from "@repo/engine_core/types.js";

import { calculateFitness } from "@repo/interface/actions/calculateFitness/action.js";
import { Command, Option } from "commander";

import type { DefinitionOfCommand } from "../commands.js";

import { parseArgumentIntoFloat, parseArgumentIntoInt } from "../../parsing.js";
import { commonOptions } from "../options.js";

const executeAction = ({
  childQuality: qualityOfMatchOfChildNode,
  childVisits: quantityOfVisitsToChildNode,
  exploration: explorationCoefficient,
  parentVisits: quantityOfVisitsToParentNode,
}: {
  childQuality: number;
  childVisits: Integer;
  exploration: number;
  parentVisits: Integer;
}): void => {
  calculateFitness({
    explorationCoefficient,
    processMessage: console.info,
    qualityOfMatchOfChildNode,
    quantityOfVisitsToChildNode,
    quantityOfVisitsToParentNode,
  });
};

const commandToCalculateFitness = {
  command: new Command("calculate-fitness")
    .description("Predict fitness of a Monte-Carlo Tree node.")
    .action(executeAction),
  options: [
    commonOptions.exploration,
    new Option(
      "--parent-visits <quantity-of-visits-to-parent-node>",
      "The quantity of visits to the parent node.",
    )
      .makeOptionMandatory()
      .argParser(parseArgumentIntoInt),
    new Option(
      "--child-visits <quantity-of-visits-to-child-node>",
      "The quantity of visits to the child node.",
    )
      .makeOptionMandatory()
      .argParser(parseArgumentIntoInt),
    new Option(
      "--child-quality <quality-of-child-node>",
      "The quality of the child node.",
    )
      .makeOptionMandatory()
      .argParser(parseArgumentIntoFloat),
  ],
} satisfies DefinitionOfCommand;

export { commandToCalculateFitness };
