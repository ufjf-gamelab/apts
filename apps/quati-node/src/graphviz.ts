import { toFile } from "ts-graphviz/adapter";

export const generateGraphvizImage = async ({
  filePath,
  graphvizDotString,
}: {
  filePath: string;
  graphvizDotString: string;
}): Promise<void> => {
  try {
    await toFile(graphvizDotString, filePath, {
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
