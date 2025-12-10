/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { test } from "vitest";

import { Random } from "../Random.js";

const validatePickIndexOfValidMoveConsideringItsQuality = <
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
  indexesOfValidMoves,
  qualitiesOfMoves,
  random,
  softeningCoefficient,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringItsQuality"]>[0],
  "indexesOfValidMoves" | "qualitiesOfMoves" | "softeningCoefficient"
> & {
  random: Random;
}) => {
  const pickedIndexOfValidMove =
    random.pickIndexOfValidMoveConsideringItsQuality({
      indexesOfValidMoves,
      qualitiesOfMoves,
      softeningCoefficient,
    });
  console.info(pickedIndexOfValidMove);
};

const createDescriptionForTestOfPickIndexOfValidMoveConsideringItsQuality =
  (): string => `pickIndexOfValidMoveConsideringItsQuality({ ... })`;

const testPickIndexOfValidMoveConsideringItsQuality = ({
  indexesOfValidMoves,
  qualitiesOfMoves,
  random,
  softeningCoefficient,
}: Pick<
  Parameters<typeof validatePickIndexOfValidMoveConsideringItsQuality>[0],
  "indexesOfValidMoves" | "qualitiesOfMoves" | "random" | "softeningCoefficient"
>) => {
  test(
    createDescriptionForTestOfPickIndexOfValidMoveConsideringItsQuality(),

    () => {
      validatePickIndexOfValidMoveConsideringItsQuality({
        indexesOfValidMoves,
        qualitiesOfMoves,
        random,
        softeningCoefficient,
      });
    },
  );
};

const DEFAULT_SEED = "0";

testPickIndexOfValidMoveConsideringItsQuality({
  indexesOfValidMoves: new Set([2, 3, 4, 5, 7, 8]),
  qualitiesOfMoves: [
    0, 0, 0.7281553398058253, 0.06796116504854369, 0.06796116504854369,
    0.05501618122977346, 0, 0.06796116504854369, 0.012944983818770227,
  ],
  random: new Random({ seed: DEFAULT_SEED }),
  softeningCoefficient: 0.25,
});
