import {
  type IndexOfPlayer,
  type ParamsOfPlayer,
  type Player,
} from "../Player.js";

type DerivedParamsOfPlayer = ParamsOfPlayer;

interface PlayerWithData<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
  GenericKeyOfPlayer extends string = string,
> {
  keyOfPlayer: GenericKeyOfPlayer;
  player: GenericPlayer;
  requiredParams: GenericRequiredParamsOfPlayer;
}

interface PlayerWithDataAndIndex<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
  GenericPlayerWithData extends PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  >,
> {
  indexOfPlayer: IndexOfPlayer;
  playerWithData: GenericPlayerWithData;
}

type RecordOfPlayersWithData<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
  GenericRecordOfRequiredParamsOfPlayers extends
    RecordOfRequiredParamsOfPlayers<GenericRequiredParamsOfPlayer> = RecordOfRequiredParamsOfPlayers<GenericRequiredParamsOfPlayer>,
> = {
  [GenericKeyOfPlayer in keyof GenericRecordOfRequiredParamsOfPlayers]: PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer,
    GenericKeyOfPlayer & string
  >;
};

type RecordOfPlayersWithDataAndIndex<
  GenericPlayer extends Player<GenericPlayer>,
  GenericRequiredParamsOfPlayer,
  GenericRecordOfRequiredParamsOfPlayers extends
    RecordOfRequiredParamsOfPlayers<GenericRequiredParamsOfPlayer> = RecordOfRequiredParamsOfPlayers<GenericRequiredParamsOfPlayer>,
  GenericPlayerWithData extends PlayerWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  > = PlayerWithData<GenericPlayer, GenericRequiredParamsOfPlayer>,
> = {
  [GenericKeyOfPlayer in keyof GenericRecordOfRequiredParamsOfPlayers]: PlayerWithDataAndIndex<
    GenericPlayer,
    GenericRequiredParamsOfPlayer,
    GenericPlayerWithData
  >;
};

type RecordOfRequiredParamsOfPlayers<GenericRequiredParamsOfPlayer> = Record<
  string,
  GenericRequiredParamsOfPlayer
>;

type RequiredParamsOfPlayer = ParamsOfPlayer;

const deriveParamsOfPlayer = ({
  name,
  symbol,
}: RequiredParamsOfPlayer): DerivedParamsOfPlayer => ({
  name,
  symbol,
});

const createRecordOfPlayersWithData = <
  GenericPlayer extends Player<GenericPlayer>,
  GenericDerivedParamsOfPlayer extends DerivedParamsOfPlayer,
  GenericRequiredParamsOfPlayer,
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  GenericRecordOfPlayersWithData extends RecordOfPlayersWithData<
    GenericPlayer,
    GenericRequiredParamsOfPlayer
  >,
>({
  create,
  deriveParams,
  recordOfRequiredParamsOfPlayers,
}: {
  create: (derivedParams: GenericDerivedParamsOfPlayer) => GenericPlayer;
  deriveParams: (
    requiredParams: GenericRequiredParamsOfPlayer,
  ) => GenericDerivedParamsOfPlayer;
  recordOfRequiredParamsOfPlayers: RecordOfRequiredParamsOfPlayers<GenericRequiredParamsOfPlayer>;
}) =>
  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParamsOfPlayers, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  Object.fromEntries(
    Object.entries(recordOfRequiredParamsOfPlayers).map(
      ([keyOfPlayer, requiredParams]) =>
        [
          keyOfPlayer,
          {
            keyOfPlayer,
            player: create(deriveParams(requiredParams)),
            requiredParams,
          } satisfies PlayerWithData<
            GenericPlayer,
            GenericRequiredParamsOfPlayer
          >,
        ] as const,
    ),
  ) as GenericRecordOfPlayersWithData;

export type {
  DerivedParamsOfPlayer,
  PlayerWithData,
  PlayerWithDataAndIndex,
  RecordOfPlayersWithData,
  RecordOfPlayersWithDataAndIndex,
  RequiredParamsOfPlayer,
};
export { createRecordOfPlayersWithData, deriveParamsOfPlayer };
