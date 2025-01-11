import { ProcessGraphvizDotString } from "../actions";
import predict from "./predict";

const predictProbabilities = ({
  processGraphvizDotString,
}: {
  processGraphvizDotString: ProcessGraphvizDotString;
}): void => {
  predict({ processGraphvizDotString });
};

export default predictProbabilities;
