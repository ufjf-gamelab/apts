const formatNotFiniteNumber = ({ value }: { value: unknown }) => {
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

const formatEntry = ([key, value]: [PropertyKey, unknown]) =>
  `${JSON.stringify(key)}: ${JSON.stringify(value, (_, internalValue: number) =>
    formatNotFiniteNumber({ value: internalValue }),
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

const formatObjectWithNotFiniteNumbers = ({ object }: { object: object }) =>
  JSON.stringify(object, (_, value: number) =>
    formatNotFiniteNumber({ value }),
  );

export {
  formatArray,
  formatMap,
  formatObjectWithNotFiniteNumbers,
  formatRecord,
};
