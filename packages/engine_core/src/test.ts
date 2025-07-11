interface ParamsForTesting {
  affix?: string | undefined;
}

const createTestDescription = ({
  affix,
  description,
}: ParamsForTesting & {
  description: string;
}): string => `${affix ? `${affix} — ` : ""}${description}`;

const descriptionOfTestsOfConstructor = ({
  className,
}: {
  className?: string;
}) =>
  `The constructor should return a new object instance ${
    className ? `of class ${className}` : ""
  }.`;

const descriptionOfTestsOfCloneMethod = ({
  className,
}: {
  className?: string;
}) =>
  `The \`clone()\` method should return a new object instance ${
    className ? `of class \`${className}\` ` : ""
  }with attributes that are strictly equal to the original object's attributes. The cloned object must be a distinct instance from the original.`;

export type { ParamsForTesting };
export {
  createTestDescription,
  descriptionOfTestsOfCloneMethod,
  descriptionOfTestsOfConstructor,
};
