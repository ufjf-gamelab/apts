// import type { Integer } from "@repo/engine_core/types.js";
// import type { Game } from "@repo/game/Game.js";
// import type { Move } from "@repo/game/Move.js";
// import type { Player } from "@repo/game/Player.js";
// import type { Score } from "@repo/game/Score.js";
// import type { Slot } from "@repo/game/Slot.js";
// import type { State } from "@repo/game/State.js";
// import type { SofteningCoefficient } from "@repo/search/qualityOfMove.js";
// import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/training.js";

// import { trainModel } from "@repo/interface/actions/trainModel/action.js";
// import { constructErrorForWhenAgentGuidedSearchHasNotAPredictionModel } from "@repo/interface/constructSearchBasedOnStrategy.js";
// import { Command, Option } from "commander";
// import path from "path";

// import type { DefinitionOfCommand } from "../commands.js";

// import {
//   assertFileNotExists,
//   createDirectory,
//   createWriteStream,
//   truncateFileName,
// } from "../../../file.js";
// import {
//   type KeyOfGame,
//   selectGameUsingKeyOfGame,
// } from "../../entries/games.js";
// import {
//   loadPredictionModel,
//   loadResidualNeuralNetwork,
// } from "../../loadPredictionModel.js";
// import { parseArgumentIntoInt } from "../../parsing.js";
// import { commonOptions } from "../options.js";

// const QUANTITY_OF_EPOCHS = 4;
// const SIZE_OF_BATCH = 64;

// const processLogs = ({
//   canOverwrite,
//   filePath,
//   logs,
// }: NonNullable<Pick<Parameters<typeof createWriteStream>[0], "filePath">> &
//   Pick<Parameters<typeof createWriteStream>[0], "canOverwrite"> & {
//     logs: Record<string, number>[];
//   }) => {
//   const writeStream = createWriteStream({ canOverwrite, filePath });
//   writeStream.write(
//     JSON.stringify(logs, (_, value: number) => {
//       if (value === Infinity) {
//         return "Infinity";
//       }
//       if (value === -Infinity) {
//         return "-Infinity";
//       }
//       return value;
//     }),
//   );
// };

// const executeAction = async <
//   GenericGame extends Game<
//     GenericGame,
//     GenericMove,
//     GenericPlayer,
//     GenericScore,
//     GenericSlot,
//     GenericState
//   >,
//   GenericMove extends Move<GenericMove>,
//   GenericPlayer extends Player<GenericPlayer>,
//   GenericScore extends Score<GenericScore>,
//   GenericSlot extends Slot<GenericSlot>,
//   GenericState extends State<
//     GenericGame,
//     GenericMove,
//     GenericPlayer,
//     GenericScore,
//     GenericSlot,
//     GenericState
//   >,
// >({
//   directory: directoryPathOrUndefined,
//   expansions: quantityOfExpansions,
//   exploration: explorationCoefficient,
//   file: fileNameOrUndefined,
//   game: keyOfGame,
//   model: pathToResidualNeuralNetworkFolder,
//   overwrite: canOverwrite,
//   seed: seedOrUndefined,
//   softening: softeningCoefficient,
// }: {
//   directory: string | undefined;
//   expansions: Integer;
//   exploration: number;
//   file: string | undefined;
//   game: KeyOfGame;
//   model: string | undefined;
//   overwrite: boolean;
//   seed: string | undefined;
//   softening: SofteningCoefficient;
// }): Promise<void> => {
//   if (typeof pathToResidualNeuralNetworkFolder === "undefined") {
//     throw constructErrorForWhenAgentGuidedSearchHasNotAPredictionModel();
//   }

//   const seed = seedOrUndefined ?? Math.random().toString();
//   const game = selectGameUsingKeyOfGame(keyOfGame);

//   const residualNeuralNetwork = await loadResidualNeuralNetwork({
//     game,
//     pathToResidualNeuralNetworkFolder,
//     seed,
//   });

//   const directoryPath =
//     typeof directoryPathOrUndefined === "undefined"
//       ? path.join(pathToResidualNeuralNetworkFolder, "memories")
//       : directoryPathOrUndefined;
//   await createDirectory({ directoryPath });

//   const fullPath = path.resolve(path.join(directoryPath, fileName));
//   if (!canOverwrite) {
//     assertFileNotExists({
//       filePath: fullPath,
//     });
//   }

//   await trainModel({
//     path,
//     predictionModel,
//     processLogs: logs => {
//       processLogs({
//         canOverwrite,
//         filePath: fullPath,
//         logs,
//       });
//     },
//     processMessage: console.info,
//     quantityOfEpochs,
//     quantityOfExpansions,
//     residualNeuralNetwork,
//     scheme: "file",
//     seed,
//     sizeOfBatch,
//     softeningCoefficient,
//     trainingMemory,
//   });
// };

// const commandToBuildTrainingMemory = {
//   command: new Command("build-training-memory")
//     .description(
//       "Build memory of inputs and outputs for training model via self-play.",
//     )
//     .action(executeAction),
//   options: [
//     commonOptions.game,
//     commonOptions.modelPath,
//     new Option(
//       "--directory <path of directory>",
//       "The path to the directory where the training memory will be created.",
//     ),
//     new Option("--file <file name>", "The name of the training memory file."),
//     commonOptions.expansions,
//     commonOptions.exploration,
//     new Option(
//       "--batch <size of batch>",
//       "Size of batch used on the training process.",
//     )
//       .default(SIZE_OF_BATCH)
//       .argParser(parseArgumentIntoInt),
//     new Option(
//       "--epochs <quantity of epochs>",
//       "The quantity of epochs of the training process.",
//     )
//       .default(QUANTITY_OF_EPOCHS)
//       .argParser(parseArgumentIntoInt),
//     commonOptions.softeningCoefficient,
//     commonOptions.seed,
//     new Option("--overwrite", "Can overwrite the training memory file."),
//   ],
// } satisfies DefinitionOfCommand;

// export { commandToBuildTrainingMemory };
