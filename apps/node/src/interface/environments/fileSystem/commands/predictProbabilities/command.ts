import { Command } from "commander";
import actions from "../../../../actions/actions";
import { generateGraphvizImage } from "../../graphviz";

const action = (): void => {
  const processGraphvizDotString = (graphvizDotString: string): void => {
    generateGraphvizImage({
      directoryPath: "./.images",
      graphvizDotString,
    }).catch((error: unknown) => {
      console.error("Error generating Graphviz image:", error);
    });
  };

  actions.predictProbabilities({ processGraphvizDotString });
};

const commandToPredictProbabilities = {
  command: new Command("predict")
    .description(
      "Predict the victory probabilities of each possible next move of a state.",
    )
    .action(action),
};

export default commandToPredictProbabilities;
