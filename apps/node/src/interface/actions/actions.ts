import generateGameDescription from "./generateGameDescription/action";
import predictProbabilities from "./predictProbabilities/action";
import sayHello from "./sayHello/action";
import startGameplay from "./startGameplay/action";

export type ProcessGraphvizDotString = (dotString: string) => void;

const actions = {
  generateGameDescription,
  predictProbabilities,
  sayHello,
  startGameplay,
};

export default actions;
