import path from "path";
import { toFile } from "ts-graphviz/adapter";

import { createDirectory } from "./file.js";

export const generateGraphvizImage = async ({
  directoryPath: directoryPathOrUndefined,
  fileName,
  graphvizDotString,
}: {
  directoryPath: string | undefined;
  fileName: string;
  graphvizDotString: string;
}): Promise<void> => {
  const directoryPath = directoryPathOrUndefined ?? "./";
  await createDirectory({ directoryPath });
  const fullPath = path.join(directoryPath, fileName);

  try {
    await toFile(graphvizDotString, fullPath, {
      format: "svg",
    });
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
