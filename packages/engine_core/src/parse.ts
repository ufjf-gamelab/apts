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

export { parseIntoFloat, parseIntoInt };
