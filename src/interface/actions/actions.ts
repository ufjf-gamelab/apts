import generateGameDescription from "./generateGameDescription/action";
import predictProbabilities from "./predictProbabilities/action";
import startGameplay from "./startGameplay/action";

export type ProcessGraphvizDotString = (dotString: string) => void;

const actions = {
  generateGameDescription,
  predictProbabilities,
  startGameplay,
};

export default actions;
