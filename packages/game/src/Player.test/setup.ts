import {
  type IndexOfPlayer,
  type ParamsOfPlayer,
  type Player,
} from "../Player.js";

type DerivedParamsOfPlayer = RequiredParamsOfPlayer;

interface PlayerWithData<
  P extends Player<P>,
  Params extends RequiredParamsOfPlayer = RequiredParamsOfPlayer,
> {
  keyOfPlayer: string;
  params: Params;
  player: P;
}

interface PlayerWithDataAndIndex<
  P extends Player<P>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
> {
  indexOfPlayer: IndexOfPlayer;
  player: ExtendedPlayerWithData;
}

type RequiredParamsOfPlayer = Pick<ParamsOfPlayer, "name" | "symbol">;

const deriveParamsOfPlayer = ({
  name,
  symbol,
}: RequiredParamsOfPlayer): DerivedParamsOfPlayer => ({
  name,
  symbol,
});

const createPlayersWithData = <
  P extends Player<P>,
  RequiredParams extends RequiredParamsOfPlayer,
  DerivedParams extends DerivedParamsOfPlayer,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => P;
  deriveParams: (requiredParams: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    keyOfPlayer: K;
    params: RequiredParams;
    player: P;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      keyOfPlayer: K;
      params: RequiredParams;
      player: P;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParams, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfRequiredParams).map(
      ([keyOfPlayer, requiredParams]) =>
        [
          keyOfPlayer,
          {
            keyOfPlayer,
            params: requiredParams,
            player: create(deriveParams(requiredParams)),
          } satisfies PlayerWithData<P, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type {
  DerivedParamsOfPlayer,
  PlayerWithData,
  PlayerWithDataAndIndex,
  RequiredParamsOfPlayer,
};
export { createPlayersWithData, deriveParamsOfPlayer };
