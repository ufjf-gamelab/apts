import { isPropertyKey } from "./guard.js";

const replaceMapWithRecord = (_: PropertyKey, value: unknown): unknown => {
  if (value instanceof Map) {
    const entries: [PropertyKey, unknown][] = [];
    for (const [key, internalValue] of value.entries()) {
      if (isPropertyKey(key)) {
        entries.push([key, internalValue]);
      }
    }
    return Object.fromEntries(entries);
  }
  return value;
};

const replaceNotFiniteNumberByItsStringRepresentation = (
  _: PropertyKey,
  value: unknown,
): unknown => {
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
};

const applyAllReplacers = (_: PropertyKey, value: unknown): unknown => {
  let content = value;
  content = replaceMapWithRecord(_, content);
  content = replaceNotFiniteNumberByItsStringRepresentation(_, content);
  return content;
};

export {
  applyAllReplacers,
  replaceMapWithRecord,
  replaceNotFiniteNumberByItsStringRepresentation,
};
