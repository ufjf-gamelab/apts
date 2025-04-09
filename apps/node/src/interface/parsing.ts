import type { ReadStream, WriteStream } from "fs";

import { FileOperation, validateFilePath } from "./file.js";

export const parseJsonFile = (filePath: string): ReadStream | WriteStream => {
  const hasJsonExtension = filePath.endsWith(".json");
  const formattedPath = hasJsonExtension ? filePath : `${filePath}.json`;
  return validateFilePath(formattedPath, FileOperation.Write);
};
