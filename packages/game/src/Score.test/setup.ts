import type { IndexOfPlayer, Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { ParamsOfScore, Points, Score } from "../Score.js";

const createDescriptionForPlayerAndItsPoints = <P extends Player<P>>({
  keyOfPlayer,
  points,
}: {
  keyOfPlayer: string;
  points: Points;
}): string => `${keyOfPlayer}: ${points}`;

type DerivedParamsOfScore = ParamsOfScore;

interface PlayerWithDataAndPoints<P extends Player<P>> {
  player: PlayerWithData<P>;
  points: Points;
}

interface RequiredParamsOfScore<P extends Player<P>> {
  pointsOfEachPlayer: Map<IndexOfPlayer, PlayerWithDataAndPoints<P>>;
}

interface ScoreWithData<
  P extends Player<P>,
  Sc extends Score<Sc>,
  Params extends RequiredParamsOfScore<P> = RequiredParamsOfScore<P>,
> {
  keyOfScore: string;
  params: Params;
  score: Sc;
}
const deriveParamsOfScore = <P extends Player<P>>({
  pointsOfEachPlayer,
}: RequiredParamsOfScore<P>): DerivedParamsOfScore => ({
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
  RequiredParams extends RequiredParamsOfScore<P>,
  DerivedParams extends DerivedParamsOfScore,
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
      ([keyOfScore, requiredParams]) =>
        [
          keyOfScore,
          {
            keyOfScore,
            params: requiredParams,
            score: create(deriveParams(requiredParams)),
          } satisfies ScoreWithData<P, Sc, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type {
  DerivedParamsOfScore,
  PlayerWithDataAndPoints,
  RequiredParamsOfScore,
  ScoreWithData,
};
export {
  createDescriptionForPlayerAndItsPoints,
  createScoresWithData,
  deriveParamsOfScore,
};
