import predictProbabilities from "./predictProbabilities/action.js";
import sayHello from "./sayHello/action.js";

type ProcessGraphvizDotString = (dotString: string) => void;

const actions = {
  // generateGameDescription,
  predictProbabilities,
  sayHello,
  // startGameplay,
};

export type { ProcessGraphvizDotString };
export { actions };
