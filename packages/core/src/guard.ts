const isPropertyKey = (key: unknown): key is PropertyKey =>
  typeof key === "string" || typeof key === "number" || typeof key === "symbol";

export { isPropertyKey };
