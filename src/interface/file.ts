import { InvalidArgumentError } from "commander";
import fs, { ReadStream, WriteStream } from "fs";
import path from "path";

enum FileOperation {
  Read = "r",
  Write = "wx",
  Overwrite = "w+",
}

const createReadStream = (filePath: string): ReadStream => {
  try {
    return fs.createReadStream(filePath);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new InvalidArgumentError(
        `\n  Failed to create read stream: ${error.message}`,
      );
    }
    throw new InvalidArgumentError(
      "\n  An unknown error occurred while creating read stream.",
    );
  }
};

const createWriteStream = (filePath: string): WriteStream => {
  try {
    return fs.createWriteStream(filePath);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new InvalidArgumentError(
        `\n  Failed to create write stream: ${error.message}`,
      );
    }
    throw new InvalidArgumentError(
      "\n  An unknown error occurred while creating write stream.",
    );
  }
};

const validateFilePath = (
  filePath: string,
  fileOperation: FileOperation,
): ReadStream | WriteStream => {
  const resolvedPath = path.resolve(filePath);

  if (fileOperation === FileOperation.Read) {
    if (!fs.existsSync(resolvedPath)) {
      throw new InvalidArgumentError("\n  The file path does not exist.");
    }
    return createReadStream(resolvedPath);
  }

  // Attempt to create a file to check if it's writable
  try {
    fs.writeFileSync(resolvedPath, "", { flag: FileOperation.Write });
    return createWriteStream(resolvedPath);
  } catch (error: unknown) {
    if (error instanceof Error && "code" in (error as NodeJS.ErrnoException)) {
      if ((error as NodeJS.ErrnoException).code === "EEXIST") {
        throw new InvalidArgumentError(
          `\n  The file already exists and cannot be overwritten.`,
        );
      }

      throw new InvalidArgumentError(
        `\n  Failed to create write stream:\n  ${error.message}`,
      );
    }
    throw new InvalidArgumentError("\n  An unknown error occurred.");
  }
};

export { FileOperation, validateFilePath };
