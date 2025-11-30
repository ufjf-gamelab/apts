const formatArray = ({ array }: { array: unknown[] }) =>
  `[${array.join(", ")}]`;

const formatEntry = ([key, value]: [PropertyKey, unknown]) =>
  `${JSON.stringify(key)}: ${JSON.stringify(value)}`;

const joinEntries = ({ entries }: { entries: string[] }) =>
  `{ ${entries.join(", ")} }`;

const formatMap = ({ map }: { map: ReadonlyMap<PropertyKey, unknown> }) => {
  const entries = map.entries().map(formatEntry).toArray();
  return joinEntries({ entries });
};

const formatRecord = ({ record }: { record: Record<PropertyKey, unknown> }) => {
  const entries = Object.entries(record).map(formatEntry);
  return joinEntries({ entries });
};

export { formatArray, formatMap, formatRecord };
