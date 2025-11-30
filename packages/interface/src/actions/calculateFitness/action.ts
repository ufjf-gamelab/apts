import { formatRecord } from "@repo/engine_core/format.js";
import {
  calculateExploitationComponentOfFitness,
  calculateExplorationComponentOfFitness,
  calculateFitness as calculateFitnessFromSearch,
} from "@repo/search/CommonMonteCarloTree/TreeNode.js";

import type { ProcessMessage } from "../../types.js";

const calculateFitness = ({
  explorationCoefficient,
  processMessage,
  qualityOfMatchOfChildNode,
  quantityOfVisitsToChildNode,
  quantityOfVisitsToParentNode,
}: Pick<
  Parameters<typeof calculateFitnessFromSearch>[0],
  | "explorationCoefficient"
  | "qualityOfMatchOfChildNode"
  | "quantityOfVisitsToChildNode"
  | "quantityOfVisitsToParentNode"
> & {
  processMessage: ProcessMessage;
}): void => {
  const exploitation = calculateExploitationComponentOfFitness({
    qualityOfMatchOfChildNode,
    quantityOfVisitsToChildNode,
  });
  const exploration = calculateExplorationComponentOfFitness({
    explorationCoefficient,
    quantityOfVisitsToChildNode,
    quantityOfVisitsToParentNode,
  });
  const fitness = calculateFitnessFromSearch({
    explorationCoefficient,
    qualityOfMatchOfChildNode,
    quantityOfVisitsToChildNode,
    quantityOfVisitsToParentNode,
  });
  processMessage(
    formatRecord({
      record: {
        exploitation,
        exploration,
        fitness,
      },
    }),
  );
};

export { calculateFitness };
