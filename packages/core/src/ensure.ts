import { parseIntoFloat } from "./parse.js";

const ensureError = (maybeError: unknown): Error =>
  maybeError instanceof Error ? maybeError : new Error(String(maybeError));

const ensureFloat = (value: number | string): number => {
  if (typeof value === "number") {
    return value;
  }
  return parseIntoFloat(value);
};

export { ensureError, ensureFloat };
