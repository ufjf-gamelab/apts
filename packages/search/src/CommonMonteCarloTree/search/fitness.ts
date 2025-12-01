import type { Integer } from "@repo/engine_core/types.js";

import type { ExplorationCoefficient } from "./search.js";

const BASE_EXPLOITATION = 0;
const BASE_EXPLORATION = 0;

const calculateExploitationComponentOfFitness = ({
  qualityOfMatchOfChildNode,
  quantityOfVisitsToChildNode,
}: {
  qualityOfMatchOfChildNode: number;
  quantityOfVisitsToChildNode: Integer;
}): number => {
  let exploitation = qualityOfMatchOfChildNode / quantityOfVisitsToChildNode;
  if (!Number.isFinite(exploitation)) {
    exploitation = BASE_EXPLOITATION;
  }
  return exploitation;
};

const calculateExplorationComponentOfFitness = ({
  explorationCoefficient,
  quantityOfVisitsToChildNode,
  quantityOfVisitsToParentNode,
}: {
  explorationCoefficient: ExplorationCoefficient;
  quantityOfVisitsToChildNode: Integer;
  quantityOfVisitsToParentNode: Integer;
}): number => {
  let exploration =
    explorationCoefficient *
    Math.sqrt(
      Math.log(quantityOfVisitsToParentNode) / quantityOfVisitsToChildNode,
    );
  if (!Number.isFinite(exploration)) {
    exploration = BASE_EXPLORATION;
  }
  return exploration;
};

const calculateFitness = ({
  explorationCoefficient,
  qualityOfMatchOfChildNode,
  quantityOfVisitsToChildNode,
  quantityOfVisitsToParentNode,
}: {
  explorationCoefficient: ExplorationCoefficient;
  qualityOfMatchOfChildNode: number;
  quantityOfVisitsToChildNode: Integer;
  quantityOfVisitsToParentNode: Integer;
}): number =>
  calculateExploitationComponentOfFitness({
    qualityOfMatchOfChildNode,
    quantityOfVisitsToChildNode,
  }) +
  calculateExplorationComponentOfFitness({
    explorationCoefficient,
    quantityOfVisitsToChildNode,
    quantityOfVisitsToParentNode,
  });

export {
  calculateExploitationComponentOfFitness,
  calculateExplorationComponentOfFitness,
  calculateFitness,
};
