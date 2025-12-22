import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/training.js";

import { parseIntoFloat } from "@repo/core/parse.js";
import path from "path";

import type { MetadataOfTrainingMemory } from "../commands/buildTrainingMemory/command.js";

import { loadObject } from "./loadObject.js";

const DEFAULT_VALUE_FOR_INVALID_OUTPUTS = 2e-24;

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
    pathToFile: path.join(pathToTrainingMemoryFolder, "memory.json"),
    reviver: (_, value: unknown) => {
      if (typeof value === "string") {
        if (value === "Infinity" || value === "-Infinity") {
          return DEFAULT_VALUE_FOR_INVALID_OUTPUTS;
        }
        return parseIntoFloat(value);
      }
      return value;
    },
  });

  return { metadata, trainingMemory };
};

export { loadTrainingMemory };
