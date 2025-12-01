const DEFAULT_NUMBER = 0;

const assertNumberIsFinite = (number: number, base?: number) => {
  if (isFinite(number)) {
    return number;
  }
  return base ?? DEFAULT_NUMBER;
};

export { assertNumberIsFinite };
