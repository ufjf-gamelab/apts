const formatArray = ({ array }: { array: unknown[] }) =>
  `[${array.join(", ")}]`;

const formatMap = <Value>({
  map,
}: {
  map: ReadonlyMap<PropertyKey, Value>;
}) => {
  const entries = map
    .entries()
    .map(([key, value]) => `${JSON.stringify(key)}: ${JSON.stringify(value)}`)
    .toArray();
  return formatArray({ array: entries });
};

export { formatArray, formatMap };
