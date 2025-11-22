import type { StateWithData } from "@repo/game/State.test/setup.js";

import {
  createStatesWithData,
  type DerivedStateParams,
  deriveStateParams,
  type RequiredStateParams,
} from "@repo/game/State.test/setup.js";

import type { SnowballGame } from "../Game.js";
import type { SnowballGameWithData } from "../Game.test/setup.js";
import type { SnowballMove } from "../Move.js";
import type { SnowballMoveWithData } from "../Move.test/setup.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballPlayerWithData } from "../Player.test/setup.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballScoreWithData } from "../Score.test/setup.js";
import type { SnowballSlot } from "../Slot.js";

import { type SnowballSlotWithData } from "../Slot.test/setup.js";
import { SnowballState } from "../State.js";

type DerivedSnowballStateParams = DerivedStateParams<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballState,
  SnowballScore,
  SnowballSlot
>;

type RequiredSnowballStateParams = Pick<
  RequiredStateParams<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballState,
    SnowballScore,
    SnowballSlot,
    SnowballGameWithData,
    SnowballMoveWithData,
    SnowballPlayerWithData,
    SnowballScoreWithData,
    SnowballSlotWithData
  >,
  "game" | "isFinal" | "player" | "score" | "slots" | "validMoves"
>;

type SnowballStateWithData = StateWithData<
  SnowballState,
  DerivedSnowballStateParams
>;

const deriveSnowballStateParams = ({
  game,
  player,
  score,
  slots,
}: RequiredSnowballStateParams): DerivedSnowballStateParams =>
  deriveStateParams({
    game,
    player,
    score,
    slots,
  });

const createSnowballState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: DerivedSnowballStateParams): SnowballState =>
  new SnowballState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const createSnowballStatesWithData = <
  ExtendedRecordOfRequiredSnowballStateParams extends
    RecordOfRequiredSnowballStateParams,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredSnowballStateParams;
}): ExtendedSnowballStatesWithData<ExtendedRecordOfRequiredSnowballStateParams> =>
  createStatesWithData({
    create: createSnowballState,
    deriveParams: deriveSnowballStateParams,
    recordOfRequiredParams,
  });

export type {
  DerivedSnowballStateParams,
  RequiredSnowballStateParams,
  SnowballStateWithData,
};
export { createSnowballState, deriveSnowballStateParams };
