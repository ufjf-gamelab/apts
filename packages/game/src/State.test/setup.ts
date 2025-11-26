import type { Game } from "../Game.js";
import type { GameWithData } from "../Game.test/setup.js";
import type { IndexOfMove, Move } from "../Move.js";
import type { MoveWithData } from "../Move.test/setup.js";
import type { Player } from "../Player.js";
import type {
  PlayerWithData,
  PlayerWithDataAndIndex,
} from "../Player.test/setup.js";
import type { Score } from "../Score.js";
import type { ScoreWithData } from "../Score.test/setup.js";
import type { Slot } from "../Slot.js";
import type { SlotWithData } from "../Slot.test/setup.js";

import { type ParamsOfState, type State } from "../State.js";

type DerivedParamsOfState<
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
> = ParamsOfState<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
>;

type RecordOfRequiredParamsOfStates<GenericRequiredParamsOfState> = Record<
  string,
  GenericRequiredParamsOfState
>;

type RecordOfStatesWithData<
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
  GenericRequiredParamsOfState,
  GenericRecordOfRequiredParamsOfStates extends
    RecordOfRequiredParamsOfStates<GenericRequiredParamsOfState> = RecordOfRequiredParamsOfStates<GenericRequiredParamsOfState>,
> = {
  [GenericKeyOfState in keyof GenericRecordOfRequiredParamsOfStates]: StateWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfState,
    GenericKeyOfState & string
  >;
};

interface RequiredParamsOfState<
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
  GenericRequiredParamsOfGame,
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfPlayer,
  GenericRequiredParamsOfScore,
  GenericRequiredParamsOfSlot,
  GenericGameWithData extends GameWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame
  > = GameWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame
  >,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
  GenericPlayerWithData extends PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  > = PlayerWithData<GenericPlayer, GenericRequiredParamsOfPlayer>,
  GenericScoreWithData extends ScoreWithData<
    GenericPlayer,
    GenericScore,
    GenericRequiredParamsOfScore
  > = ScoreWithData<GenericPlayer, GenericScore, GenericRequiredParamsOfScore>,
  GenericSlotWithData extends SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  > = SlotWithData<GenericSlot, GenericRequiredParamsOfSlot>,
> {
  gameWithData: GenericGameWithData;
  isFinal: boolean;
  nextPlayerWithDataAndIndex: PlayerWithDataAndIndex<
    GenericPlayer,
    GenericRequiredParamsOfPlayer,
    GenericPlayerWithData
  >;
  playerWithDataAndIndex: PlayerWithDataAndIndex<
    GenericPlayer,
    GenericRequiredParamsOfPlayer,
    GenericPlayerWithData
  >;
  scoreWithData: GenericScoreWithData;
  slotsWithData: readonly GenericSlotWithData[];
  validMovesWithData: ReadonlyMap<IndexOfMove, GenericMoveWithData>;
}

interface StateWithData<
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
  GenericRequiredParamsOfState,
  GenericKeyOfState extends string = string,
> {
  keyOfState: GenericKeyOfState;
  requiredParams: GenericRequiredParamsOfState;
  state: GenericState;
}

const deriveParamsOfState = <
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
  GenericRequiredParamsOfGame,
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfPlayer,
  GenericRequiredParamsOfScore,
  GenericRequiredParamsOfSlot,
  GenericGameWithData extends GameWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame
  > = GameWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame
  >,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
  GenericPlayerWithData extends PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  > = PlayerWithData<GenericPlayer, GenericRequiredParamsOfPlayer>,
  GenericScoreWithData extends ScoreWithData<
    GenericPlayer,
    GenericScore,
    GenericRequiredParamsOfScore
  > = ScoreWithData<GenericPlayer, GenericScore, GenericRequiredParamsOfScore>,
  GenericSlotWithData extends SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  > = SlotWithData<GenericSlot, GenericRequiredParamsOfSlot>,
>({
  gameWithData,
  playerWithDataAndIndex,
  scoreWithData,
  slotsWithData,
}: Pick<
  RequiredParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame,
    GenericRequiredParamsOfMove,
    GenericRequiredParamsOfPlayer,
    GenericRequiredParamsOfScore,
    GenericRequiredParamsOfSlot,
    GenericGameWithData,
    GenericMoveWithData,
    GenericPlayerWithData,
    GenericScoreWithData,
    GenericSlotWithData
  >,
  "gameWithData" | "playerWithDataAndIndex" | "scoreWithData" | "slotsWithData"
>): DerivedParamsOfState<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> => ({
  game: gameWithData.game,
  indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
  score: scoreWithData.score,
  slots: slotsWithData.map((slotWithData) => slotWithData.slot),
});

const createRecordOfStatesWithData = <
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
  GenericDerivedParamsOfState extends DerivedParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericRequiredParamsOfState,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfStatesWithData extends RecordOfStatesWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfState
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfStates,
}: {
  create: (derivedParams: GenericDerivedParamsOfState) => GenericState;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfState,
  ) => GenericDerivedParamsOfState;
  recordOfRequiredParamsOfStates: RecordOfRequiredParamsOfStates<GenericRequiredParamsOfState>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfStates, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfStates).map(
      ([keyOfState, requiredParams]) =>
        [
          keyOfState,
          {
            keyOfState,
            requiredParams,
            state: create(deriveParams(requiredParams)),
          } satisfies StateWithData<
            GenericGame,
            GenericMove,
            GenericPlayer,
            GenericScore,
            GenericSlot,
            GenericState,
            GenericRequiredParamsOfState
          >,
        ] as const,
    ),
  ) as GenericRecordOfStatesWithData;

export type {
  DerivedParamsOfState,
  RecordOfRequiredParamsOfStates,
  RecordOfStatesWithData,
  RequiredParamsOfState,
  StateWithData,
};
export { createRecordOfStatesWithData, deriveParamsOfState };
