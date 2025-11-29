// import Game from "@repo/engine_game/engine/Game/Game";
// import Move from "@repo/engine_game/engine/Game/Move";
// import State from "@repo/engine_game/engine/Game/State";
// import { INCREMENT_ONE, Integer } from "@repo/engine_game/types";

// const EMPTY_CHILDREN_LIST = 0;
// const MINIMUM_VALUE_SUM = 0;
// const MINIMUM_VISIT_COUNT = 0;
// export const MINIMUM_PROBABILITY = 0;

// interface NodeParams<G extends Game<M>, M extends Move> {
//   explorationCoefficient: number;
//   quantityOfSearches: Integer;
//   state: State<G>;
//   parent?: Node<G>;
//   takenMove?: M;
//   priorProbability?: number;
// }

// export class Node<G extends Game> {
//   // State of the game at this node
//   private state: State<G>;

//   private quantityOfSearches: number;
//   private explorationCoefficient: number;

//   private parent: Node<G> | null;
//   // Move that led to this node
//   private takenMove: Move | null;
//   // Probability of taking the action that led to this node
//   private priorProbability: number;

//   private children: Node<G>[] = [];
//   private visitCount = MINIMUM_VISIT_COUNT;
//   private valueSum = MINIMUM_VALUE_SUM;

//   constructor({
//     state,
//     quantityOfSearches,
//     explorationCoefficient,
//     parent,
//     takenMove,
//     priorProbability,
//   }: NodeParams<G>) {
//     this.state = state;
//     this.quantityOfSearches = quantityOfSearches;
//     this.explorationCoefficient = explorationCoefficient;
//     this.parent = parent ? parent : null;
//     this.takenMove = typeof takenMove === "number" ? takenMove : null;
//     this.priorProbability = priorProbability
//       ? priorProbability
//       : MINIMUM_PROBABILITY;
//   }

//   /* Getters */

//   public getChildren(): Node<G>[] {
//     return this.children;
//   }

//   public getState(): State<G> {
//     return this.state;
//   }

//   public getTakenMove(): Move | null {
//     return this.takenMove;
//   }

//   public getVisitCount(): number {
//     return this.visitCount;
//   }

//   /// Check if the node is fully expanded, i.e. all valid actions have been explored.
//   public isFullyExpanded(): boolean {
//     return this.children.length > EMPTY_CHILDREN_LIST;
//   }

//   /* Methods */

//   /// Get the UCB value of a given child.
//   private getChildUcb(child: Node<G>): number {
//     let exploitation = 0;

//     if (this.visitCount > MINIMUM_VISIT_COUNT) {
//       // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning
//       // eslint-disable-next-line @typescript-eslint/no-magic-numbers
//       exploitation = 1 - child.valueSum / (child.visitCount + 1) / 2;
//     }

//     const exploration =
//       this.explorationCoefficient *
//       child.priorProbability *
//       // eslint-disable-next-line @typescript-eslint/no-magic-numbers
//       (Math.sqrt(this.visitCount) / (child.visitCount + 1));
//     return exploitation + exploration;
//   }

//   /// Select the best node among children, i.e. the one with the highest UCB.
//   public selectBestChild(): Node<G> {
//     if (this.children.length === EMPTY_CHILDREN_LIST) {
//       throw new Error("No children to select from");
//     }

//     let bestChild = this.children[EMPTY_CHILDREN_LIST];
//     if (!bestChild) {
//       throw new Error("No children to select from");
//     }
//     let bestUcb = this.getChildUcb(bestChild);

//     for (
//       let currentChildIndex = 1;
//       currentChildIndex < this.children.length;
//       currentChildIndex += INCREMENT_ONE
//     ) {
//       const child = this.children[currentChildIndex];
//       if (!child) {
//         throw new Error("No children to select from");
//       }

//       const ucb = this.getChildUcb(child);
//       if (ucb > bestUcb) {
//         bestChild = child;
//         bestUcb = ucb;
//       }
//     }
//     return bestChild;
//   }

//   /// Pick a random action and perform it, returning the outcome state as a child node.
//   public expand(policy: number[]) {
//     const initialPlayer = this.state.getGame().getInitialPlayer();
//     const player = this.state.getplayer(initialPlayer);

//     policy.forEach((probability, action) => {
//       if (probability > MINIMUM_PROBABILITY) {
//         // Copy the state and play the action on the copy
//         const childState = this.state;
//         childState.performAction(action, initialPlayer);
//         childState.changePerspective(initialPlayer, player);

//         const child = new Node({
//           takenMove: action,
//           explorationCoefficient: this.explorationCoefficient,
//           game: this.game,
//           quantityOfSearches: this.quantityOfSearches,
//           parent: this,
//           priorProbability: probability,
//           state: childState,
//         });
//         this.children.push(child);
//       }
//     });
//   }

//   /// Backpropagate the outcome value to the root node.
//   public backpropagate(outcomeValue: ActionOutcome["value"]) {
//     this.valueSum += outcomeValue;
//     this.visitCount += INCREMENT_ONE;
//     const opponentValue = this.game.getOpponentValue(outcomeValue);
//     if (this.parent !== null) {
//       this.parent.backpropagate(opponentValue);
//     }
//   }
// }
