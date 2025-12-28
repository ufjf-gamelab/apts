const parseIntoInt = (value: string) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new Error("The informed value is not a number.");
  }
  return parsedValue;
};

const parseIntoFloat = (value: string) => {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new Error("The informed value is not a number.");
  }
  return parsedValue;
};

const parseObjectWithNotFiniteNumbers = ({ object }: { object: object }) =>
  JSON.stringify(object, (_, value: number) => {
    if (value === Infinity) {
      return "Infinity";
    }
    if (value === -Infinity) {
      return "-Infinity";
    }
    if (Number.isNaN(value)) {
      return "NaN";
    }
    return value;
  });

export { parseIntoFloat, parseIntoInt, parseObjectWithNotFiniteNumbers };
