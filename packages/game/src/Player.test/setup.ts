import {
  type IndexOfPlayer,
  type Player,
  type PlayerParams,
} from "../Player.js";

interface PlayerWithData<
  P extends Player<P>,
  PartialParams,
  DerivedPlayerParams,
  ParamsRecord extends Record<string, PartialParams>,
> {
  indexOfPlayer: IndexOfPlayer;
  keyOfPlayer: keyof ParamsRecord;
  params: DerivedPlayerParams;
  player: P;
}

const createPlayerParams = ({
  name,
  symbol,
}: Pick<PlayerParams, "name" | "symbol">): PlayerParams => ({
  name,
  symbol,
});

const createPlayersWithData = <
  P extends Player<P>,
  PartialParams,
  DerivedPlayerParams,
  ParamsRecord extends Record<string, PartialParams>,
>({
  createPlayer: create,
  createPlayerParams: createParams,
  partialParamsOfPlayers,
}: {
  createPlayer: (params: DerivedPlayerParams) => P;
  createPlayerParams: (partialParams: PartialParams) => DerivedPlayerParams;
  partialParamsOfPlayers: ParamsRecord;
}): {
  [K in keyof ParamsRecord]: PlayerWithData<
    P,
    PartialParams,
    DerivedPlayerParams,
    ParamsRecord
  >;
} => {
  type ResultType = {
    [K in keyof ParamsRecord]: PlayerWithData<
      P,
      PartialParams,
      DerivedPlayerParams,
      ParamsRecord
    >;
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from partialParamsOfPlayers, which ParamsRecord is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(partialParamsOfPlayers).map(
      ([key, partialParams], index) => {
        const params = createParams(partialParams);
        return [
          key,
          {
            indexOfPlayer: index,
            keyOfPlayer: key,
            params,
            player: create(params),
          },
        ] as const;
      },
    ),
  ) as ResultType;
};

const getKeyOfPlayer = <
  P extends Player<P>,
  ParamsRecord extends Record<string, unknown>,
>({
  indexOfPlayer,
  players,
}: {
  indexOfPlayer: IndexOfPlayer;
  players: Record<string, PlayerWithData<P, unknown, unknown, ParamsRecord>>;
}) => Object.values(players).at(indexOfPlayer)?.keyOfPlayer;

export type { PlayerWithData };
export { createPlayerParams, createPlayersWithData, getKeyOfPlayer };
