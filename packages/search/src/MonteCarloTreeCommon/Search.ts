// import type Game from "../Game/Game.js";
// import type Move from "../Game/Move.js";
// import type Player from "../Game/Player.js";
// import type State from "../Game/State.js";
// import type { Integer } from "../types.js";

// const MINIMUM_PROBABILITY = 0;

// interface GetProbabilitiesReturn {
//   graphvizDotString: null | string;
//   probabilities: number[];
// }

// interface SearchParams<
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// > {
//   explorationConstant: number;
//   game: G;
//   quantityOfSearches: Integer;
// }

// export default class Search<
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// > {
//   private explorationConstant: SearchParams<
//     G,
//     S,
//     M,
//     Sl,
//     P
//   >["explorationConstant"];
//   private game: SearchParams<G, S, M, Sl, P>["game"];
//   private quantityOfSearches: SearchParams<
//     G,
//     S,
//     M,
//     Sl,
//     P
//   >["quantityOfSearches"];

//   constructor({
//     explorationConstant,
//     game,
//     quantityOfSearches,
//   }: SearchParams<G, S, M, Sl, P>) {
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

//     const root = new Node<G, S, M, Sl, P>({
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

//   private buildTree(root: Node<G, S, M, Sl, P>): void {
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
