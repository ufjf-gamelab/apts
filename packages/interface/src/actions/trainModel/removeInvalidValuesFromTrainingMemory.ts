import type { TensorLikeArray } from "@repo/core/types.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/training.js";

const DEFAULT_VALUE_FOR_POSITIVE_INFINITE_VALUE = 2e24;
const DEFAULT_VALUE_FOR_NEGATIVE_INFINITE_VALUE = 2e-24;
const DEFAULT_VALUE_FOR_NOT_A_NUMBER = 0;

const parseIntoValidValue = ({ value }: { value: number }) => {
  if (value === Infinity) {
    return DEFAULT_VALUE_FOR_POSITIVE_INFINITE_VALUE;
  }
  if (value === -Infinity) {
    return DEFAULT_VALUE_FOR_NEGATIVE_INFINITE_VALUE;
  }
  if (Number.isNaN(value)) {
    return DEFAULT_VALUE_FOR_NOT_A_NUMBER;
  }
  return value;
};

const recursivelyParseIntoValidValue = ({
  value,
}: {
  value: TensorLikeArray;
}) => {
  if (Array.isArray(value)) {
    return recursivelyParseIntoValidValue({ value });
  }
  return parseIntoValidValue({ value });
};

const removeInvalidValuesFromTrainingMemory = ({
  trainingMemory: unprocessedTrainingMemory,
}: {
  trainingMemory: TrainingMemory;
}) => {
  const {
    encodedStates: unprocessedEncodedStates,
    policies: unprocessedPolicies,
    values: unprocessedValues,
  } = unprocessedTrainingMemory;

  const processedEncodedStates = unprocessedEncodedStates.map(
    (arrayOfEncodedStates) =>
      recursivelyParseIntoValidValue({ value: arrayOfEncodedStates }),
  );
  const processedPolicies = unprocessedPolicies.map((arrayOfPolicies) =>
    arrayOfPolicies.map((value) => parseIntoValidValue({ value })),
  );
  const processedValues = unprocessedValues.map((value) =>
    parseIntoValidValue({ value }),
  );

  return {
    encodedStates: processedEncodedStates,
    policies: processedPolicies,
    values: processedValues,
  };
};

export { removeInvalidValuesFromTrainingMemory };
