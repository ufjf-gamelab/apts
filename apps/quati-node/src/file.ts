import type { Integer } from "@repo/core/types.js";

import { FIRST_INDEX } from "@repo/core/constants.js";
import { InvalidArgumentError } from "commander";
import {
  createReadStream as createReadStreamFromFs,
  createWriteStream as createWriteStreamFromFs,
  existsSync as existsSyncFromFs,
  promises as promisesFromFs,
  type ReadStream,
  type WriteStream,
} from "fs";
import path from "path";

const createDirectory = async ({
  directoryPath,
}: {
  directoryPath: string;
}) => {
  try {
    await promisesFromFs.mkdir(directoryPath, { recursive: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to create directory.", {
        cause: error,
      });
    }
    throw new Error("An unknown error occurred while creating directory.", {
      cause: error,
    });
  }
};

const MAXIMUM_CHARACTERS_OF_FILE_NAME = 255;
const QUANTITY_OF_CHARACTERS_TO_REDUCE = 0;

const truncateFileName = ({
  prefix = "",
  reduceQuantityOfMaximumCharacters = QUANTITY_OF_CHARACTERS_TO_REDUCE,
  suffix = "",
  truncatableSlice,
}: {
  prefix?: string;
  reduceQuantityOfMaximumCharacters?: Integer;
  suffix?: string;
  truncatableSlice: string;
}) => {
  const maximumCharacters =
    MAXIMUM_CHARACTERS_OF_FILE_NAME - reduceQuantityOfMaximumCharacters;
  const fullFileName = `${prefix}${truncatableSlice}${suffix}`;

  const lengthOfFullFileName = fullFileName.length;
  const lengthOfFileNameWithoutTruncatableSlice =
    lengthOfFullFileName - truncatableSlice.length;
  const maximumCharactersForState =
    maximumCharacters - lengthOfFileNameWithoutTruncatableSlice;

  if (lengthOfFullFileName > maximumCharacters) {
    const truncatedSlice = truncatableSlice.slice(
      FIRST_INDEX,
      Math.max(FIRST_INDEX, maximumCharactersForState),
    );
    return `${prefix}${truncatedSlice}${suffix}`;
  }

  return fullFileName;
};

const fileOperations = {
  overwrite: "w+",
  read: "r",
  write: "wx",
} as const;
type FileOperation = (typeof fileOperations)[keyof typeof fileOperations];

const createReadStream = ({ filePath }: { filePath: string }): ReadStream => {
  try {
    return createReadStreamFromFs(filePath, {
      encoding: "utf8",
      flags: fileOperations.read,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new InvalidArgumentError(
        `Failed to create read stream: ${error.message}.`,
      );
    }
    throw new InvalidArgumentError(
      "An unknown error occurred while creating read stream.",
    );
  }
};

const createWriteStream = ({
  canOverwrite = false,
  filePath,
}: {
  canOverwrite?: boolean | undefined;
  filePath: string;
}): WriteStream => {
  try {
    return createWriteStreamFromFs(filePath, {
      flags: canOverwrite ? fileOperations.overwrite : fileOperations.write,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new InvalidArgumentError(
        `Failed to create write stream: ${error.message}.`,
      );
    }
    throw new InvalidArgumentError(
      "An unknown error occurred while creating write stream.",
    );
  }
};

const assertFileExists = ({ filePath }: { filePath: string }) => {
  const resolvedPath = path.resolve(filePath);
  if (!existsSyncFromFs(resolvedPath)) {
    throw new InvalidArgumentError("The file path does not exist.");
  }
};

const assertFileNotExists = ({ filePath }: { filePath: string }) => {
  const resolvedPath = path.resolve(filePath);
  if (existsSyncFromFs(resolvedPath)) {
    throw new InvalidArgumentError("The file path exists.");
  }
};

export type { FileOperation };
export {
  assertFileExists,
  assertFileNotExists,
  createDirectory,
  createReadStream,
  createWriteStream,
  fileOperations,
  truncateFileName,
};
