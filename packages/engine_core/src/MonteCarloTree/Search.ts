// import * as tf from "@tensorflow/tfjs";

// import Game from "@repo/engine_game/engine/Game/Game";
// import State from "@repo/engine_game/engine/Game/State";
// import { INCREMENT_ONE } from "@repo/engine_game/types";
// import { predictPolicyAndValueAndProbabilitiesAndActionFromState } from "../ResNet/predict";
// import ResNet from "../ResNet/ResNet";
// import { MINIMUM_PROBABILITY, Node } from "./Node.js";

// interface SearchParams<G extends Game> {
//   explorationCoefficient: number;
//   game: G;
//   quantityOfSearches: number;
//   resNet: ResNet;
// }

// export default class Search<G extends Game> {
//   private explorationCoefficient: SearchParams<G>["explorationCoefficient"];
//   private game: SearchParams<G>["game"];
//   private quantityOfSearches: SearchParams<G>["quantityOfSearches"];
//   private resNet: SearchParams<G>["resNet"];

//   constructor({
//     explorationCoefficient,
//     game,
//     quantityOfSearches,
//     resNet,
//   }: SearchParams<G>) {
//     this.explorationCoefficient = explorationCoefficient;
//     this.game = game;
//     this.quantityOfSearches = quantityOfSearches;
//     this.resNet = resNet;
//   }

//   /* Methods */

//   private getProbabilityDistribution(validActions: boolean[]): number[] {
//     let sum = MINIMUM_PROBABILITY;
//     const actionProbabilities = new Array(this.game.getActionSize()).fill(
//       MINIMUM_PROBABILITY,
//     );

//     for (
//       let currentAction = 0;
//       currentAction < validActions.length;
//       currentAction += INCREMENT_ONE
//     ) {
//       if (validActions[currentAction]) {
//         actionProbabilities[currentAction] = 1;
//         sum += INCREMENT_ONE;
//       }
//     }
//     return actionProbabilities.map(probability => probability / sum);
//   }

//   private getProbabilitiesFromNode(node: Node<G>): number[] {
//     const actionProbabilities = new Array<number>(
//       this.game.getActionSize(),
//     ).fill(MINIMUM_PROBABILITY);

//     for (const child of node.getChildren()) {
//       const action = child.getActionTaken();
//       if (action === null) {
//         throw new Error("Action is null");
//       }
//       actionProbabilities[action] = child.getVisitCount();
//     }

//     const sum = actionProbabilities.reduce(
//       (currentSum, value) => currentSum + value,
//       MINIMUM_PROBABILITY,
//     );
//     return actionProbabilities.map(value => value / sum);
//   }

//   // Search for the best action to take
//   public search(state: State<G>): number[] {
//     // If no deep search is performed, return a distribution based on the valid actions.
//     const ONLY_ONE_SEARCH = 1;
//     if (this.quantityOfSearches <= ONLY_ONE_SEARCH) {
//       return this.getProbabilityDistribution(state.getValidActions());
//     }

//     // Perform the Monte Carlo Tree Search
//     const neutralState = state;
//     const root = new Node({
//       explorationCoefficient: this.explorationCoefficient,
//       game: this.game,
//       quantityOfSearches: this.quantityOfSearches,
//       state: neutralState,
//     });

//     for (
//       let currentSearchIndex = 0;
//       currentSearchIndex < this.quantityOfSearches;
//       currentSearchIndex += INCREMENT_ONE
//     ) {
//       let node = root;

//       // Selection phase
//       while (node.isFullyExpanded()) {
//         node = node.selectBestChild();
//       }

//       const actionOutcome = Game.getActionOutcome(
//         node.getState(),
//         node.getActionTaken(),
//       );
//       // Flip the value, as the action was taken by the opponent
//       let valueToBackpropagate = this.game.getOpponentValue(
//         actionOutcome.value,
//       );

//       if (!actionOutcome.isTerminal) {
//         // Calculate the policy and value from the neural network
//         const { value, probabilities } =
//           predictPolicyAndValueAndProbabilitiesAndActionFromState(
//             node.getState(),
//             this.resNet,
//           );

//         valueToBackpropagate = value.arraySync();
//         tf.dispose(value);

//         // Expansion phase
//         node.expand(probabilities.arraySync());
//         tf.dispose(probabilities);
//       }

//       // Backpropagation phase
//       node.backpropagate(valueToBackpropagate);
//     }

//     return this.getProbabilitiesFromNode(root);
//   }
// }
