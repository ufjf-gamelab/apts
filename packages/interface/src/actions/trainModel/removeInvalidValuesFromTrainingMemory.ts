import type { TensorLikeArray } from "@repo/core/types.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/memory.js";

const DEFAULT_VALUE_FOR_INFINITE_VALUE = 0;
const DEFAULT_VALUE_FOR_NOT_A_NUMBER = 0;

type TensorArray = Exclude<TensorLikeArray, number>;

const parseIntoValidValue = ({ value }: { value: number }) => {
  if (value === Infinity) {
    return DEFAULT_VALUE_FOR_INFINITE_VALUE;
  }
  if (value === -Infinity) {
    return -DEFAULT_VALUE_FOR_INFINITE_VALUE;
  }
  if (Number.isNaN(value)) {
    return DEFAULT_VALUE_FOR_NOT_A_NUMBER;
  }
  return value;
};

const parseTensorLikeArray = ({
  value,
}: {
  value: TensorLikeArray;
}): TensorLikeArray => {
  if (!Array.isArray(value)) {
    return parseIntoValidValue({ value });
  }

  const root: TensorLikeArray = [];
  const stack: { source: TensorArray; target: unknown[] }[] = [
    { source: value, target: root },
  ];

  for (;;) {
    const sourceAndTarget = stack.pop();
    if (typeof sourceAndTarget === "undefined") {
      break;
    }
    const { source, target } = sourceAndTarget;

    source.forEach((item, index) => {
      if (Array.isArray(item)) {
        const next: TensorArray = [];
        target[index] = next;
        stack.push({ source: item as TensorArray, target: next });
        return;
      }

      target[index] = parseIntoValidValue({ value: item });
    });
  }

  return root;
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
      parseTensorLikeArray({ value: arrayOfEncodedStates }),
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
