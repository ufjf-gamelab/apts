/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { test } from "vitest";

import { pickIndexOfValidMoveConsideringTheirQuality } from "../Search.js";

const validatePickIndexOfValidMoveConsideringTheirQuality = <
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
  qualityOfMoves,
}: Pick<
  Parameters<typeof pickIndexOfValidMoveConsideringTheirQuality>[0],
  "indexesOfValidMoves" | "qualityOfMoves"
>) => {
  const pickedIndexOfValidMove = pickIndexOfValidMoveConsideringTheirQuality({
    indexesOfValidMoves,
    qualityOfMoves,
  });
  console.log(pickedIndexOfValidMove);
};

const createDescriptionForTestOfPickIndexOfValidMoveConsideringTheirQuality =
  (): string => `pickIndexOfValidMoveConsideringTheirQuality({ ... })`;

const testPickIndexOfValidMoveConsideringTheirQuality = ({
  indexesOfValidMoves,
  qualityOfMoves,
}: Pick<
  Parameters<typeof validatePickIndexOfValidMoveConsideringTheirQuality>[0],
  "indexesOfValidMoves" | "qualityOfMoves"
>) => {
  test(
    createDescriptionForTestOfPickIndexOfValidMoveConsideringTheirQuality(),

    () => {
      validatePickIndexOfValidMoveConsideringTheirQuality({
        indexesOfValidMoves,
        qualityOfMoves,
      });
    },
  );
};

testPickIndexOfValidMoveConsideringTheirQuality({
  indexesOfValidMoves: new Set([2, 3, 4, 5, 7, 8]),
  qualityOfMoves: [
    0, 0, 0.7281553398058253, 0.06796116504854369, 0.06796116504854369,
    0.05501618122977346, 0, 0.06796116504854369, 0.012944983818770227,
  ],
});
