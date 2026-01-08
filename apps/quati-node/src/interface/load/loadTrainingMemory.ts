import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/memory.js";

import { parseIntoFloat } from "@repo/core/parse.js";
import path from "path";

import type { MetadataOfTrainingMemory } from "../commands/buildTrainingMemory/command.js";

import { loadObject } from "./loadObject.js";

const loadTrainingMemory = async <
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
  pathToTrainingMemoryFolder,
}: {
  pathToTrainingMemoryFolder: string;
}) => {
  try {
    const metadata = await loadObject<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState,
      MetadataOfTrainingMemory
    >({
      pathToFile: path.join(pathToTrainingMemoryFolder, "metadata.json"),
    });

    const trainingMemory = await loadObject<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState,
      TrainingMemory
    >({
      pathToFile: path.join(pathToTrainingMemoryFolder, "trainingMemory.json"),
      reviver: (_, value: unknown) => {
        if (typeof value === "string") {
          if (value === "Infinity") {
            return Infinity;
          }
          if (value === "-Infinity") {
            return -Infinity;
          }
          if (value === "NaN") {
            return Number.NaN;
          }
          return parseIntoFloat(value);
        }
        return value;
      },
    });

    return { metadata, trainingMemory };
  } catch (error) {
    throw new Error("Could not load the training memory.", {
      cause: error,
    });
  }
};

export { loadTrainingMemory };
