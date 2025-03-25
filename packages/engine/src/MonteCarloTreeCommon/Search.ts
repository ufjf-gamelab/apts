// import Game from "../Game/Game.js";
// import Move from "../Game/Move.js";
// import Player from "../Game/Player.js";
// import State from "../Game/State.js";
// import { INCREMENT_ONE, Integer } from "../types.js";
// import { Node } from "./Node.js";
// import { generateGraphvizDotStringFromTree } from "./graphviz.js";

// const MINIMUM_PROBABILITY = 0;

// interface GetProbabilitiesReturn {
//   probabilities: number[];
//   graphvizDotString: string | null;
// }

// interface SearchParams<
//   P extends Player<P, M, S, G>,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// > {
//   game: G;
//   explorationConstant: number;
//   quantityOfSearches: Integer;
// }

// export default class Search<
//   P extends Player<P, M, S, G>,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// > {
//   private game: SearchParams<P, M, S, G>["game"];
//   private explorationConstant: SearchParams<P, M, S, G>["explorationConstant"];
//   private quantityOfSearches: SearchParams<P, M, S, G>["quantityOfSearches"];

//   constructor({
//     game,
//     explorationConstant,
//     quantityOfSearches,
//   }: SearchParams<P, M, S, G>) {
//     this.game = game;
//     this.explorationConstant = explorationConstant;
//     this.quantityOfSearches = quantityOfSearches;
//   }

//   /* Methods */

//   public getProbabilities(
//     state: S,
//     generateGraphvizDotString = false,
//   ): GetProbabilitiesReturn {
//     const returnObject: GetProbabilitiesReturn = {
//       graphvizDotString: null,
//       probabilities: [],
//     };

//     const root = new Node<P, M, S, G>({
//       explorationConstant: this.explorationConstant,
//       keyOfTheTakenMove: null,
//       parent: null,
//       state,
//     });

//     this.buildTree(root);
//     if (generateGraphvizDotString) {
//       returnObject.graphvizDotString = generateGraphvizDotStringFromTree(
//         this.game,
//         root,
//       );
//     }

//     let probabilityOfPlayingEachMove = new Array<number>(
//       this.game.getQuantityOfMoves(),
//     ).fill(MINIMUM_PROBABILITY);

//     for (const child of root.getChildren()) {
//       const keyOfTheTakenMove = child.getKeyOfTheTakenMove();
//       if (keyOfTheTakenMove === null) {
//         continue;
//       }

//       probabilityOfPlayingEachMove[keyOfTheTakenMove] =
//         child.getQuantityOfVisits();
//     }

//     const sum = probabilityOfPlayingEachMove.reduce(
//       (currentSum, value) => currentSum + value,
//       MINIMUM_PROBABILITY,
//     );

//     probabilityOfPlayingEachMove = probabilityOfPlayingEachMove.map(
//       value => value / sum,
//     );

//     returnObject.probabilities = probabilityOfPlayingEachMove;
//     return returnObject;
//   }

//   private buildTree(root: Node<P, M, S, G>): void {
//     for (
//       let currentSearchIndex = 0;
//       currentSearchIndex < this.quantityOfSearches;
//       currentSearchIndex += INCREMENT_ONE
//     ) {
//       let currentNode = root;

//       // Goes all the way down to a node that is not fully expanded at the bottom of the tree.
//       while (currentNode.isFullyExpanded()) {
//         const bestChild = currentNode.selectBestChild();

//         if (bestChild === null) {
//           // All the possible moves have been explored in this branch.
//           break;
//         }
//         currentNode = bestChild;
//       }

//       const state = currentNode.getState();
//       let score = state.getScore();
//       const isFinal = state.isFinal();

//       if (!isFinal) {
//         currentNode = currentNode.expand();
//         score = currentNode.simulate();
//       }

//       currentNode.backpropagate(score);
//     }
//   }
// }
