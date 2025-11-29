// import actions from "@repo/interface/actions/actions.js";
// import { Command, Option } from "commander";

// import { generateGraphvizImage } from "../../graphviz.js";

// const action = (): void => {
//   const processGraphvizDotString = (graphvizDotString: string): void => {
//     generateGraphvizImage({
//       directoryPath: "./.images",
//       graphvizDotString,
//     }).catch((error: unknown) => {
//       console.error("Error generating Graphviz image:", error);
//     });
//   };

//   actions.predictProbabilities({ processGraphvizDotString });
// };

// const commandToPredictProbabilities = {
//   command: new Command("predict")
//     .description(
//       "Predict the victory probabilities of each possible next move of a state.",
//     )
//     .action(action),
//   options: [
//     new Option(
//       "-i, --image",
//       "Whether to generate an image of the explored game tree.",
//     ),
//     new Option(
//       "-n, --image-name <image-name>",
//       "The name of the image file to generate (without extension).",
//     ).default("game_tree"),
//   ],
// };

// export default commandToPredictProbabilities;
