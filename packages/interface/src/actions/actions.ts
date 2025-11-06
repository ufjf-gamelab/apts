import predictProbabilities from "./predictProbabilities/action.js";
import sayHello from "./sayHello/action.js";

export type ProcessGraphvizDotString = (dotString: string) => void;

const actions = {
  // generateGameDescription,
  predictProbabilities,
  sayHello,
  // startGameplay,
};

export default actions;
