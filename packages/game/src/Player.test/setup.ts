import { type Player, type PlayerParams } from "../Player.js";

type DerivedPlayerParams = RequiredPlayerParams;

interface PlayerWithData<
  P extends Player<P>,
  Params extends DerivedPlayerParams = DerivedPlayerParams,
> {
  keyOfPlayer: string;
  params: Params;
  player: P;
}

type RequiredPlayerParams = Pick<PlayerParams, "name" | "symbol">;

const derivePlayerParams = ({
  name,
  symbol,
}: RequiredPlayerParams): DerivedPlayerParams => ({
  name,
  symbol,
});

const createPlayersWithData = <
  P extends Player<P>,
  RequiredParams extends RequiredPlayerParams,
  DerivedParams extends DerivedPlayerParams,
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
      ([key, requiredParams]) =>
        [
          key,
          {
            keyOfPlayer: key,
            params: requiredParams,
            player: create(deriveParams(requiredParams)),
          } satisfies PlayerWithData<P, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedPlayerParams, PlayerWithData, RequiredPlayerParams };
export { createPlayersWithData, derivePlayerParams };
