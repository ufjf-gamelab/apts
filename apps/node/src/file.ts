// import { InvalidArgumentError } from "commander";
// import type { ReadStream, WriteStream } from "fs";
// import {
//   createReadStream as createReadStreamFromFs,
//   existsSync as existsSyncFromFs,
//   writeFileSync as writeFileSyncFromFs,
// } from "fs";
// import * as path from "path";

import { promises as promisesFromFs } from "fs";

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

// enum FileOperation {
//   Overwrite = "w+",
//   Read = "r",
//   Write = "wx",
// }

// const createReadStream = (filePath: string): ReadStream => {
//   try {
//     return createReadStreamFromFs(filePath);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       throw new InvalidArgumentError(
//         `\n  Failed to create read stream: ${error.message}`,
//       );
//     }
//     throw new InvalidArgumentError(
//       "\n  An unknown error occurred while creating read stream.",
//     );
//   }
// };

// const createWriteStream = (filePath: string): WriteStream => {
//   try {
//     return createWriteStream(filePath);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       throw new InvalidArgumentError(
//         `\n  Failed to create write stream: ${error.message}`,
//       );
//     }
//     throw new InvalidArgumentError(
//       "\n  An unknown error occurred while creating write stream.",
//     );
//   }
// };

// const validateFilePath = (
//   filePath: string,
//   fileOperation: FileOperation,
// ): ReadStream | WriteStream => {
//   const resolvedPath = path.resolve(filePath);

//   if (fileOperation === FileOperation.Read) {
//     if (!existsSyncFromFs(resolvedPath)) {
//       throw new InvalidArgumentError("\n  The file path does not exist.");
//     }
//     return createReadStream(resolvedPath);
//   }

//   // Attempt to create a file to check if it's writable
//   try {
//     writeFileSyncFromFs(resolvedPath, "", { flag: FileOperation.Write });
//     return createWriteStream(resolvedPath);
//   } catch (error: unknown) {
//     if (error instanceof Error && "code" in (error as NodeJS.ErrnoException)) {
//       if ((error as NodeJS.ErrnoException).code === "EEXIST") {
//         throw new InvalidArgumentError(
//           `\n  The file already exists and cannot be overwritten.`,
//         );
//       }

//       throw new InvalidArgumentError(
//         `\n  Failed to create write stream:\n  ${error.message}`,
//       );
//     }
//     throw new InvalidArgumentError("\n  An unknown error occurred.");
//   }
// };

export {
  createDirectory,
  // FileOperation, validateFilePath
};
