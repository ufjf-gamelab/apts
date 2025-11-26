import type { Move } from "../Move.js";
import type { MoveWithData } from "../Move.test/setup.js";
import type { Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { SlotWithData } from "../Slot.test/setup.js";
import type { State } from "../State.js";

import { type Game, type ParamsOfGame } from "../Game.js";

type DerivedParamsOfGame<
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericSlot extends Slot<GenericSlot>,
> = ParamsOfGame<GenericMove, GenericPlayer, GenericSlot>;

interface GameWithData<
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
  GenericKeyOfGame extends string = string,
> {
  game: GenericGame;
  keyOfGame: GenericKeyOfGame;
  requiredParams: GenericRequiredParamsOfGame;
}

type RecordOfGamesWithData<
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
  GenericRecordOfRequiredParamsOfGames extends
    RecordOfRequiredParamsOfGames<GenericRequiredParamsOfGame> = RecordOfRequiredParamsOfGames<GenericRequiredParamsOfGame>,
> = {
  [GenericKeyOfGame in keyof GenericRecordOfRequiredParamsOfGames]: GameWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame,
    GenericKeyOfGame & string
  >;
};

type RecordOfRequiredParamsOfGames<GenericRequiredParamsOfGame> = Record<
  string,
  GenericRequiredParamsOfGame
>;

type RequiredParamsOfGame<
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericSlot extends Slot<GenericSlot>,
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfPlayer,
  GenericRequiredParamsOfSlot,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
  GenericPlayerWithData extends PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  > = PlayerWithData<GenericPlayer, GenericRequiredParamsOfPlayer>,
  GenericSlotWithData extends SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  > = SlotWithData<GenericSlot, GenericRequiredParamsOfSlot>,
> = Pick<ParamsOfGame<GenericMove, GenericPlayer, GenericSlot>, "name"> & {
  movesWithData: readonly GenericMoveWithData[];
  playersWithData: readonly GenericPlayerWithData[];
  slotsWithData: readonly GenericSlotWithData[];
};

const deriveParamsOfGame = <
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
  GenericRequiredParamsOfMove,
  GenericRequiredParamsOfPlayer,
  GenericRequiredParamsOfSlot,
  GenericMoveWithData extends MoveWithData<
    GenericMove,
    GenericRequiredParamsOfMove
  > = MoveWithData<GenericMove, GenericRequiredParamsOfMove>,
  GenericPlayerWithData extends PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  > = PlayerWithData<GenericPlayer, GenericRequiredParamsOfPlayer>,
  GenericSlotWithData extends SlotWithData<
    GenericSlot,
    GenericRequiredParamsOfSlot
  > = SlotWithData<GenericSlot, GenericRequiredParamsOfSlot>,
>({
  movesWithData,
  name,
  playersWithData,
  slotsWithData,
}: Pick<
  RequiredParamsOfGame<
    GenericMove,
    GenericPlayer,
    GenericSlot,
    GenericRequiredParamsOfMove,
    GenericRequiredParamsOfPlayer,
    GenericRequiredParamsOfSlot,
    GenericMoveWithData,
    GenericPlayerWithData,
    GenericSlotWithData
  >,
  "movesWithData" | "name" | "playersWithData" | "slotsWithData"
>): DerivedParamsOfGame<GenericMove, GenericPlayer, GenericSlot> => ({
  moves: movesWithData.map((moveWithData) => moveWithData.move),
  name,
  players: playersWithData.map((playerWithData) => playerWithData.player),
  slots: slotsWithData.map((slotWithData) => slotWithData.slot),
});

const createRecordOfGamesWithData = <
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
  GenericDerivedParamsOfGame extends DerivedParamsOfGame<
    GenericMove,
    GenericPlayer,
    GenericSlot
  >,
  GenericRequiredParamsOfGame,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfGamesWithData extends RecordOfGamesWithData<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericRequiredParamsOfGame
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfGames,
}: {
  create: (derivedParams: GenericDerivedParamsOfGame) => GenericGame;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfGame,
  ) => GenericDerivedParamsOfGame;
  recordOfRequiredParamsOfGames: RecordOfRequiredParamsOfGames<GenericRequiredParamsOfGame>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfGames, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfGames).map(
      ([keyOfGame, requiredParams]) =>
        [
          keyOfGame,
          {
            game: create(deriveParams(requiredParams)),
            keyOfGame,
            requiredParams,
          } satisfies GameWithData<
            GenericGame,
            GenericMove,
            GenericPlayer,
            GenericScore,
            GenericSlot,
            GenericState,
            GenericRequiredParamsOfGame
          >,
        ] as const,
    ),
  ) as GenericRecordOfGamesWithData;

export type {
  DerivedParamsOfGame,
  GameWithData,
  RecordOfGamesWithData,
  RecordOfRequiredParamsOfGames,
  RequiredParamsOfGame,
};
export { createRecordOfGamesWithData, deriveParamsOfGame };
