import type { Seed } from "@repo/core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { SofteningCoefficient } from "@repo/search/qualityOfMove.js";
import type { MemoryOfMatch } from "@repo/search/ResidualNeuralNetwork/memory.js";

import { select } from "@inquirer/prompts";
import { applyAllReplacers } from "@repo/core/replacers.js";
import { playMatchUsingAgent } from "@repo/interface/actions/playMatchUsingAgent/action.js";
import { modesOfPlay } from "@repo/interface/constants.js";
import { constructErrorForWhenPredictionModelHasNotBeenProvided } from "@repo/interface/constructSearchBasedOnStrategy.js";
import { Command, Option } from "commander";
import path from "path";
import stringHash from "string-hash";

import type { DefinitionOfCommand } from "../commands.js";
import type { MetadataOfModel } from "../constructModel/command.js";

import {
  assertFileNotExists,
  createDirectory,
  createWriteStream,
  truncateFileName,
} from "../../../file.js";
import {
  type KeyOfState,
  selectStateUsingKeyOfState,
} from "../../entries/states.js";
import { loadPredictionModel as internalLoadPredictionModel } from "../../load/loadModel.js";
import { commonOptions } from "../options.js";

const loadPredictionModel = async <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  game,
  pathToResidualNeuralNetworkFolderOrUndefined,
}: {
  game: GenericGame;
  pathToResidualNeuralNetworkFolderOrUndefined: string | undefined;
}) => {
  if (typeof pathToResidualNeuralNetworkFolderOrUndefined === "undefined") {
    throw constructErrorForWhenPredictionModelHasNotBeenProvided();
  }
  return await internalLoadPredictionModel({
    game,
    pathToResidualNeuralNetworkFolder:
      pathToResidualNeuralNetworkFolderOrUndefined,
  });
};

interface MetadataOfMatch {
  readonly keyOfState: KeyOfState;
  readonly metadataOfFirstPredictionModel: MetadataOfModel;
  readonly metadataOfSecondPredictionModel: MetadataOfModel | null;
  readonly modeOfPlay:
    | typeof modesOfPlay.computerVersusComputer
    | typeof modesOfPlay.playerVersusComputer;
  readonly seed: Seed;
  readonly softeningCoefficient: SofteningCoefficient;
}

const processMetadata = ({
  canOverwrite,
  filePath,
  keyOfState,
  metadataOfFirstPredictionModel,
  metadataOfSecondPredictionModel,
  modeOfPlay,
  seed,
  softeningCoefficient,
}: MetadataOfMatch &
  Pick<
    Parameters<typeof createWriteStream>[0],
    "canOverwrite" | "filePath"
  >) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  writeStream.write(
    JSON.stringify({
      keyOfState,
      metadataOfFirstPredictionModel,
      metadataOfSecondPredictionModel,
      modeOfPlay,
      seed,
      softeningCoefficient,
    }),
  );
};

const processMemoryOfMatch = ({
  canOverwrite,
  filePath,
  memoryOfMatch,
}: Pick<
  Parameters<typeof createWriteStream>[0],
  "canOverwrite" | "filePath"
> & {
  memoryOfMatch: MemoryOfMatch;
}) => {
  const writeStream = createWriteStream({
    canOverwrite,
    filePath,
  });
  const content = JSON.stringify(memoryOfMatch, applyAllReplacers);
  writeStream.write(content);
};

// eslint-disable-next-line max-statements
const executeAction = async ({
  directory: directoryPath,
  display: shouldDisplay,
  export: shouldExport,
  firstModel: pathToFirstResidualNeuralNetworkFolderOrUndefined,
  folder: folderNameOrUndefined,
  mode: modeOfPlay,
  overwrite: canOverwrite,
  secondModel: pathToSecondResidualNeuralNetworkFolderOrUndefined,
  seed: seedOrUndefined,
  softening: softeningCoefficient,
  state: keyOfState,
}: {
  directory: string;
  display: string;
  export: boolean;
  firstModel: string | undefined;
  folder: string | undefined;
  mode:
    | typeof modesOfPlay.computerVersusComputer
    | typeof modesOfPlay.playerVersusComputer;
  overwrite: boolean;
  secondModel: string | undefined;
  seed: string | undefined;
  softening: SofteningCoefficient;
  state: KeyOfState;
}): Promise<void> => {
  const seed = seedOrUndefined ?? Math.random().toString();
  const state = selectStateUsingKeyOfState(keyOfState);
  const game = state.getGame();

  const {
    metadata: metadataOfFirstPredictionModel,
    predictionModel: firstPredictionModel,
  } = await loadPredictionModel({
    game,
    pathToResidualNeuralNetworkFolderOrUndefined:
      pathToFirstResidualNeuralNetworkFolderOrUndefined,
  });
  const hashOfFirstPredictionModel = stringHash(
    JSON.stringify(metadataOfFirstPredictionModel),
  );

  const secondPredictionModelAndMetadataOrNull =
    modeOfPlay === modesOfPlay.computerVersusComputer
      ? await loadPredictionModel({
          game,
          pathToResidualNeuralNetworkFolderOrUndefined:
            pathToSecondResidualNeuralNetworkFolderOrUndefined,
        })
      : null;
  const secondPredictionModel =
    secondPredictionModelAndMetadataOrNull?.predictionModel ?? null;
  const metadataOfSecondPredictionModel =
    secondPredictionModelAndMetadataOrNull?.metadata ?? null;
  const hashOfSecondPredictionModel = (() => {
    if (metadataOfSecondPredictionModel === null) {
      return null;
    }
    return stringHash(JSON.stringify(metadataOfSecondPredictionModel));
  })();

  let contentOfProcessMemoryOfMatch: (
    memoryOfMatch: MemoryOfMatch,
  ) => void = () => {
    /* empty */
  };

  if (shouldExport) {
    const folderName =
      folderNameOrUndefined ??
      truncateFileName({
        prefix: `state[${keyOfState}]_mode[${modeOfPlay}]`,
        suffix: `_softening[${softeningCoefficient}]_seed[${seed}]`,
        truncatableSlice: `_firstModel[${hashOfFirstPredictionModel}]_secondModel[${hashOfSecondPredictionModel}]`,
      });
    const sanitizedFolderName = truncateFileName({
      truncatableSlice: folderName,
    });
    const folderPath = path.join(directoryPath, sanitizedFolderName);
    const memoryOfMatchFilePath = path.join(folderPath, "memoryOfMatch.json");
    const metadataFilePath = path.join(folderPath, "metadata.json");
    if (!canOverwrite) {
      assertFileNotExists({ filePath: memoryOfMatchFilePath });
      assertFileNotExists({ filePath: metadataFilePath });
    }
    await createDirectory({ directoryPath: folderPath });

    processMetadata({
      canOverwrite,
      filePath: metadataFilePath,
      keyOfState,
      metadataOfFirstPredictionModel,
      metadataOfSecondPredictionModel,
      modeOfPlay,
      seed,
      softeningCoefficient,
    });

    contentOfProcessMemoryOfMatch = memoryOfMatch => {
      processMemoryOfMatch({
        canOverwrite,
        filePath: memoryOfMatchFilePath,
        memoryOfMatch,
      });
    };
  }

  await playMatchUsingAgent({
    firstPredictionModel,
    modeOfPlay,
    processMemoryOfMatch: contentOfProcessMemoryOfMatch,
    processMessage: shouldDisplay
      ? console.info
      : () => {
          /* empty */
        },
    secondPredictionModel,
    seed,
    select,
    softeningCoefficient,
    state,
  });
};

const commandToPlayMatchUsingAgent = {
  command: new Command("play-match-using-agent")
    .description("Play match using agent trained using ResNet.")
    .action(executeAction),
  options: [
    new Option("--mode <game mode>", "The game mode to play.")
      .choices(
        Object.values([
          modesOfPlay.computerVersusComputer,
          modesOfPlay.playerVersusComputer,
        ]),
      )
      .makeOptionMandatory(),
    commonOptions.state,
    new Option(
      "--first-model <path of model>",
      "The path to the folder that contains the architecture and the weights of the first model.",
    ),
    new Option(
      "--second-model <path of model>",
      "The path to the folder that contains the architecture and the weights of the second model.",
    ),
    commonOptions.softeningCoefficient,
    commonOptions.seed,
    new Option(
      "--no-display",
      "Whether to disable display information about the match on the screen.",
    ).default(true),
    new Option(
      "--export",
      "Whether to output files of the memory of match.",
    ).default(false),
    new Option(
      "--directory <path of directory>",
      "The path to the directory where the memory of match will be created.",
    ).default("./"),
    new Option(
      "--folder <name of folder>",
      "The name of the folder that will be created to contain the memory of match.",
    ),
    commonOptions.canOverwrite,
  ],
} satisfies DefinitionOfCommand;

export { commandToPlayMatchUsingAgent };
