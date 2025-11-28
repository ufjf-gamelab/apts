import type { ProcessGraphvizDotString } from "../actions.js";

import { main } from "./predict.js";

const predictProbabilities = ({
  processGraphvizDotString,
}: {
  processGraphvizDotString: ProcessGraphvizDotString;
}): void => {
  main({ processGraphvizDotString });
};

export default predictProbabilities;
