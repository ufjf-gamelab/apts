const ensureError = (maybeError: unknown): Error =>
  maybeError instanceof Error ? maybeError : new Error(String(maybeError));

export { ensureError };
