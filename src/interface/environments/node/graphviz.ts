import { Format, toFile } from "ts-graphviz/adapter";

const exportToFile = async (
  dotString: string,
  imageName: string,
  format: Format,
): Promise<void> => {
  const filePath = `./${imageName}.${format}`;
  
  await toFile(dotString, `./${imageName}.${format}`, { format });
};

const exportGraphvizDotString = async (
  graphvizDotString: string,
): Promise<void> => {
  const now = new Date().toISOString();
  const fileName = `.images/mcts-common-tree-${now}`;
  await exportToFile(graphvizDotString, fileName, "svg");
};
