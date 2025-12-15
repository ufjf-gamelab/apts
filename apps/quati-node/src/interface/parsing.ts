// import type { ReadStream, WriteStream } from "fs";

import { InvalidArgumentError } from "commander";

// import { FileOperation, validateFilePath } from "./file.js";

// export const parseJsonFile = (filePath: string): ReadStream | WriteStream => {
//   const hasJsonExtension = filePath.endsWith(".json");
//   const formattedPath = hasJsonExtension ? filePath : `${filePath}.json`;
//   return validateFilePath(formattedPath, FileOperation.Write);
// };

const parseArgumentIntoInt = (value: string) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError("The informed value is not a number.");
  }
  return parsedValue;
};

const parseArgumentIntoFloat = (value: string) => {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError("The informed value is not a number.");
  }
  return parsedValue;
};

export { parseArgumentIntoFloat, parseArgumentIntoInt };
