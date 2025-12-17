import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { ensureError } from "@repo/engine_core/ensure.js";
import path from "path";

import { createReadStream } from "../../file.js";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
const assertIsObject: <GenericObject extends object>(
  metadata: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
) => asserts metadata is GenericObject = <GenericObject extends object>(
  metadata: unknown,
): asserts metadata is GenericObject => {
  if (typeof metadata !== "object" || metadata === null) {
    throw new Error("Metadata must be a non-null object.");
  }
};

const loadObject = async <
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
  GenericObject extends object,
>({
  pathToFile,
  reviver,
}: {
  pathToFile: string;
  reviver?: Parameters<JSON["parse"]>[1];
}) => {
  const readStream = createReadStream({
    filePath: path.join(pathToFile),
  });

  const object = await new Promise<GenericObject>((resolve, reject) => {
    let buffer = "";
    readStream.on("data", chunk => {
      buffer += typeof chunk === "string" ? chunk : chunk.toString("utf8");
    });
    readStream.on("end", () => {
      try {
        const parsedObject: unknown = JSON.parse(buffer, reviver);
        assertIsObject<GenericObject>(parsedObject);
        resolve(parsedObject);
      } catch (error) {
        reject(ensureError(error));
      }
    });
    readStream.on("error", streamError => {
      reject(ensureError(streamError));
    });
  });

  return object;
};

export { loadObject };
