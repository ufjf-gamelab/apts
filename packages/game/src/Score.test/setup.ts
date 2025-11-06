import { type IndexOfScore, type Score, type ScoreParams } from "../Score.js";

type DerivedScoreParams = RequiredScoreParams;

type RequiredScoreParams = Pick<ScoreParams, "pointsOfEachPlayer">;

interface ScoreWithData<
  Sc extends Score<Sc>,
  Params extends DerivedScoreParams = DerivedScoreParams,
> {
  indexOfScore: IndexOfScore;
  keyOfScore: string;
  params: Params;
  score: Sc;
}
const deriveScoreParams = ({
  pointsOfEachPlayer,
}: RequiredScoreParams): DerivedScoreParams => ({
  pointsOfEachPlayer,
});

const createScoresWithData = <
  Sc extends Score<Sc>,
  RequiredParams extends RequiredScoreParams,
  DerivedParams extends DerivedScoreParams,
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
    indexOfScore: IndexOfScore;
    keyOfScore: keyof RecordOfRequiredParams;
    params: RequiredParams;
    score: Sc;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      indexOfScore: IndexOfScore;
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
      ([key, requiredParams], index) =>
        [
          key,
          {
            indexOfScore: index,
            keyOfScore: key,
            params: requiredParams,
            score: create(deriveParams(requiredParams)),
          } satisfies ScoreWithData<Sc, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedScoreParams, RequiredScoreParams, ScoreWithData };
export { createScoresWithData, deriveScoreParams };
