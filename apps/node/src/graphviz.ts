import { promises as promisesFromFs } from "fs";
import path from "path";
import { toFile } from "ts-graphviz/adapter";

export const generateGraphvizImage = async ({
  directoryPath: directoryPathOrNull,
  fileName: fileNameOrNull,
  graphvizDotString,
}: {
  directoryPath: string | undefined;
  fileName: string | undefined;
  graphvizDotString: string;
}): Promise<void> => {
  const directoryPath = directoryPathOrNull ?? "./";

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

  const fileNameWithExtension = `${fileNameOrNull ?? new Date().toISOString()}.svg`;
  const fullPath = path.join(directoryPath, fileNameWithExtension);

  try {
    await toFile(graphvizDotString, fullPath, { format: "svg" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to generate Graphviz image.", {
        cause: error,
      });
    }
    throw new Error(
      "An unknown error occurred while generating Graphviz image.",
      {
        cause: error,
      },
    );
  }
};
