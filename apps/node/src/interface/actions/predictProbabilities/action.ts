import { ProcessGraphvizDotString } from "../actions.js";
import predict from "./predict.js";

const predictProbabilities = ({
  processGraphvizDotString,
}: {
  processGraphvizDotString: ProcessGraphvizDotString;
}): void => {
  predict({ processGraphvizDotString });
};

export default predictProbabilities;
