import { replaceNotFiniteNumberByItsStringRepresentation } from "./replacers.js";

const formatEntry = ([key, value]: [PropertyKey, unknown]) =>
  `${JSON.stringify(key)}: ${JSON.stringify(value, (_, internalValue: number) =>
    replaceNotFiniteNumberByItsStringRepresentation(_, internalValue),
  )}`;

const joinEntries = ({ entries }: { entries: string[] }) =>
  `{\n  ${entries.join(",\n  ")}\n}`;

const formatArray = ({ array }: { array: unknown[] }) =>
  `[${array.join(", ")}]`;

const formatMap = ({ map }: { map: ReadonlyMap<PropertyKey, unknown> }) => {
  const entries = map.entries().map(formatEntry).toArray();
  return joinEntries({ entries });
};

const formatRecord = ({ record }: { record: Record<PropertyKey, unknown> }) => {
  const entries = Object.entries(record).map(formatEntry);
  return joinEntries({ entries });
};

export { formatArray, formatMap, formatRecord };
