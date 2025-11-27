import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Score } from "../Score.js";
import { createDescriptionForPlayerAndItsPoints } from "../Score.test/setup.js";

const validateGetScore = <
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
  expectedScore,
  state,
}: {
  expectedScore: ReturnType<GenericState["getScore"]>;
  state: GenericState;
}) => {
  const score = state.getScore();
  expect(score).toBeInstanceOf(Score);
  expect(score).not.toBe(expectedScore);
  expect(score).toStrictEqual(expectedScore);

  // Ensure that the returned object does not keep reference to the internal property
  const otherScore = state.getScore();
  expect(otherScore).not.toBe(score);
};

const createDescriptionForTestOfGetScore = <
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
  expectedScore,
  keyOfPlayer,
}: Pick<
  Parameters<typeof createDescriptionForPlayerAndItsPoints>[0],
  "keyOfPlayer"
> &
  Pick<Parameters<typeof validateGetScore>[0], "expectedScore">): string => {
  const returnedValueOfEachPlayer = expectedScore
    .getPointsOfEachPlayer()
    .values()
    .map((points) =>
      createDescriptionForPlayerAndItsPoints({
        keyOfPlayer,
        points,
      }),
    )
    .toArray();

  return createDescriptionForTestsOfMethod({
    methodDescription: "getScore()",
    returnedValue: formatArray({ array: returnedValueOfEachPlayer }),
  });
};

export { createDescriptionForTestOfGetScore, validateGetScore };
