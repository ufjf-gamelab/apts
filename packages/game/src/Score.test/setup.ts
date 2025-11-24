import type { IndexOfPlayer, Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { Points, Score, ScoreParams } from "../Score.js";

const createDescriptionForPlayerAndItsPoints = <P extends Player<P>>({
  keyOfPlayer,
  points,
}: {
  keyOfPlayer: string;
  points: Points;
}): string => `${keyOfPlayer}: ${points}`;

type DerivedScoreParams<P extends Player<P>> = ScoreParams;

interface RequiredScoreParams<P extends Player<P>> {
  pointsOfEachPlayer: Map<
    IndexOfPlayer,
    {
      player: PlayerWithData<P>;
      points: Points;
    }
  >;
}

interface ScoreWithData<
  P extends Player<P>,
  Sc extends Score<Sc>,
  Params extends RequiredScoreParams<P> = RequiredScoreParams<P>,
> {
  keyOfScore: string;
  params: Params;
  score: Sc;
}
const deriveScoreParams = <P extends Player<P>>({
  pointsOfEachPlayer,
}: RequiredScoreParams<P>): DerivedScoreParams<P> => ({
  pointsOfEachPlayer: new Map(
    pointsOfEachPlayer
      .entries()
      .map(([indexOfPlayer, playerWithData]) => [
        indexOfPlayer,
        playerWithData.points,
      ]),
  ),
});

const createScoresWithData = <
  P extends Player<P>,
  Sc extends Score<Sc>,
  RequiredParams extends RequiredScoreParams<P>,
  DerivedParams extends DerivedScoreParams<P>,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => Sc;
  deriveParams: (partialParams: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    keyOfScore: keyof RecordOfRequiredParams;
    params: RequiredParams;
    score: Sc;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      keyOfScore: keyof RecordOfRequiredParams;
      params: RequiredParams;
      score: Sc;
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
            keyOfScore: key,
            params: requiredParams,
            score: create(deriveParams(requiredParams)),
          } satisfies ScoreWithData<P, Sc, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedScoreParams, RequiredScoreParams, ScoreWithData };
export {
  createDescriptionForPlayerAndItsPoints,
  createScoresWithData,
  deriveScoreParams,
};
