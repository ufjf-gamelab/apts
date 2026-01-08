import type { TensorLikeArray } from "@repo/core/types.js";
import type { TrainingMemory } from "@repo/search/ResidualNeuralNetwork/memory.js";

const DEFAULT_VALUE_FOR_INFINITE_VALUE = 0;
const DEFAULT_VALUE_FOR_NOT_A_NUMBER = 0;

type TensorArray = Exclude<TensorLikeArray, number>;

const parseIntoValidValue = ({
  value,
  valueToReplaceInfinity = DEFAULT_VALUE_FOR_INFINITE_VALUE,
}: {
  value: number;
  valueToReplaceInfinity?: number | undefined;
}) => {
  if (value === Infinity) {
    return valueToReplaceInfinity;
  }
  if (value === -Infinity) {
    return -valueToReplaceInfinity;
  }
  if (Number.isNaN(value)) {
    return DEFAULT_VALUE_FOR_NOT_A_NUMBER;
  }
  return value;
};

const parseTensorLikeArray = ({
  value,
  valueToReplaceInfinity,
}: Pick<Parameters<typeof parseIntoValidValue>[0], "valueToReplaceInfinity"> & {
  value: TensorLikeArray;
}): TensorLikeArray => {
  if (!Array.isArray(value)) {
    return parseIntoValidValue({ value, valueToReplaceInfinity });
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
  valueToReplaceInfinity,
}: Pick<Parameters<typeof parseIntoValidValue>[0], "valueToReplaceInfinity"> & {
  trainingMemory: TrainingMemory;
}) => {
  const {
    encodedStates: unprocessedEncodedStates,
    policies: unprocessedPolicies,
    values: unprocessedValues,
  } = unprocessedTrainingMemory;

  const processedEncodedStates = unprocessedEncodedStates.map(
    (arrayOfEncodedStates) =>
      parseTensorLikeArray({
        value: arrayOfEncodedStates,
        valueToReplaceInfinity,
      }),
  );
  const processedPolicies = unprocessedPolicies.map((arrayOfPolicies) =>
    arrayOfPolicies.map((value) =>
      parseIntoValidValue({ value, valueToReplaceInfinity }),
    ),
  );
  const processedValues = unprocessedValues.map((value) =>
    parseIntoValidValue({ value, valueToReplaceInfinity }),
  );

  return {
    encodedStates: processedEncodedStates,
    policies: processedPolicies,
    values: processedValues,
  };
};

export {
  DEFAULT_VALUE_FOR_INFINITE_VALUE,
  removeInvalidValuesFromTrainingMemory,
};
