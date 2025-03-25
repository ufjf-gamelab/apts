// import {
//   Node as NodeFromGraphviz,
//   attribute as attributeFromGraphviz,
// } from "ts-graphviz";
// import Game from "../Game/Game.js";
// import Move, { MoveKey, MovePair } from "../Game/Move.js";
// import Player from "../Game/Player.js";
// import State, { Score } from "../Game/State.js";
// import { INCREMENT_ONE, Integer } from "../types.js";

// const MINIMUM_VICTORY_QUALITY = 0;
// const MINIMUM_QUANTITY_OF_VISITS = 0;
// const EMPTY_LIST = 0;

// interface NodeParams<
//   P extends Player<P, M, S, G>,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// > {
//   state: S;
//   keyOfTheTakenMove: MoveKey | null;
//   explorationConstant: number;
//   parent: Node<P, M, S, G> | null;
// }

// export class Node<
//   P extends Player<P, M, S, G>,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// > {
//   private readonly state: NodeParams<P, M, S, G>["state"];
//   private readonly keyOfTheTakenMove: NodeParams<
//     P,
//     M,
//     S,
//     G
//   >["keyOfTheTakenMove"];
//   private readonly explorationConstant: NodeParams<
//     P,
//     M,
//     S,
//     G
//   >["explorationConstant"];
//   private readonly parent: NodeParams<P, M, S, G>["parent"];

//   private readonly children: Map<MoveKey, Node<P, M, S, G> | null>;

//   private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
//   private victoryQuality: number = MINIMUM_VICTORY_QUALITY;

//   constructor({
//     state,
//     keyOfTheTakenMove,
//     explorationConstant,
//     parent,
//   }: NodeParams<P, M, S, G>) {
//     this.state = state;
//     this.keyOfTheTakenMove = keyOfTheTakenMove;
//     this.explorationConstant = explorationConstant;
//     this.parent = parent ?? null;

//     const validMovesKeys = state.getValidMovesKeys();
//     this.children = new Map(
//       validMovesKeys.map((key: MoveKey): [MoveKey, null] => [key, null]),
//     );
//   }

//   /* Getters */

//   private getQuantityOfExpandedMoves(): Integer {
//     return this.getChildren().length;
//   }

//   public getChildren(): Node<P, M, S, G>[] {
//     return Array.from(this.children.values()).filter(
//       (child): child is Node<P, M, S, G> => child !== null,
//     );
//   }

//   private getKeysOfNonExpandedMoves(): Set<MoveKey> {
//     const nonExpandedMoves = new Set(
//       Array.from(this.children.entries())
//         .filter(([, child]) => child === null)
//         .map(([index]) => index),
//     );
//     return nonExpandedMoves;
//   }

//   public getKeyOfTheTakenMove(): Integer | null {
//     return this.keyOfTheTakenMove;
//   }

//   public getQuantityOfVisits(): Integer {
//     return this.quantityOfVisits;
//   }

//   public getState(): S {
//     return this.state;
//   }

//   /* Methods */

//   /// Check if the node is fully expanded, i.e. all valid actions have been explored.
//   public isFullyExpanded(): boolean {
//     return this.getQuantityOfExpandedMoves() === this.children.size;
//   }

//   /// Get the UCB value of a given child.
//   private getChildUcb(child: Node<P, M, S, G>): number {
//     // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning

//     const exploitation =
//       // eslint-disable-next-line @typescript-eslint/no-magic-numbers
//       1 - (child.victoryQuality / child.quantityOfVisits + 1) / 2;

//     const exploration =
//       this.explorationConstant *
//       Math.sqrt(Math.log(this.quantityOfVisits) / child.quantityOfVisits);

//     return exploitation + exploration;
//   }

//   /// Select the best node among children, i.e. the one with the highest UCB.
//   public selectBestChild(): Node<P, M, S, G> | null {
//     if (this.children.size === EMPTY_LIST) {
//       console.log("No children to select from");
//     }

//     const expandedChildren = Array.from(this.children.values()).filter(
//       (child): child is Node<P, M, S, G> => child !== null,
//     );

//     let bestChild: Node<P, M, S, G> | null = null;
//     let bestUcb = Number.NEGATIVE_INFINITY;

//     for (const child of expandedChildren) {
//       const ucb = this.getChildUcb(child);
//       if (ucb > bestUcb) {
//         bestChild = child;
//         bestUcb = ucb;
//       }
//     }

//     return bestChild;
//   }

//   /// Pick a random move from the list of valid moves.
//   private pickRandomMove(): MovePair<P, M, S, G> {
//     const indexesOfNonExpandedMoves = Array.from(
//       this.getKeysOfNonExpandedMoves(),
//     );

//     const randomIndex = Math.floor(
//       Math.random() * indexesOfNonExpandedMoves.length,
//     );
//     const moveKey = indexesOfNonExpandedMoves[randomIndex];
//     if (typeof moveKey === "undefined") {
//       throw new Error("No indexes of non-expanded moves to pick from");
//     }

//     const move = this.state.getGame().getMove(moveKey);
//     if (typeof move === "undefined") {
//       throw Error("The picked move is invalid");
//     }
//     return {
//       key: moveKey,
//       move,
//     };
//   }

//   /// Pick a random action and perform it, returning the outcome state as a child node.
//   public expand(): Node<P, M, S, G> {
//     const selectedMove = this.pickRandomMove();

//     // Copy the state and play the action on the copy
//     const nextState = selectedMove.move.play(this.state);

//     const child = new Node({
//       explorationConstant: this.explorationConstant,
//       keyOfTheTakenMove: selectedMove.key,
//       parent: this,
//       state: nextState,
//     });
//     this.children.set(selectedMove.key, child);
//     return child;
//   }

//   /// Simulate a game from the current state, returning the outcome value.
//   public simulate(): Score {
//     // Copy the state and play random actions, with alternate players, until the game is over
//     let rolloutState = this.state.clone();
//     for (;;) {
//       const score = rolloutState.getScore();
//       const isFinal = rolloutState.isFinal();
//       if (isFinal) {
//         return score;
//       }

//       const selectedMove = this.pickRandomMove();
//       rolloutState = selectedMove.move.play(rolloutState);
//     }
//   }

//   /// Backpropagate the outcome value to the root node.
//   public backpropagate(score: Score): void {
//     const playerKey = this.state.getPlayerKey();
//     const pointsEarnedByThePlayer = score[playerKey];
//     if (typeof pointsEarnedByThePlayer === "undefined") {
//       throw new Error("Invalid player");
//     }

//     this.victoryQuality += pointsEarnedByThePlayer;
//     this.quantityOfVisits += INCREMENT_ONE;

//     if (this.parent) {
//       this.parent.backpropagate(score);
//     }
//   }

//   public toGraphvizNode(id: Integer): NodeFromGraphviz {
//     const state = this.getState();
//     const playerKey = state.getPlayerKey();
//     const player = state.getPlayer();

//     const label = `${id}: S.${this.quantityOfVisits} Q.${this.victoryQuality}\nP.${playerKey} ${player.getSymbol()} ${player.getName()}\n${state.toString()}`;

//     return new NodeFromGraphviz(id.toString(), {
//       [attributeFromGraphviz.label]: label,
//       fontname: "Monospace",
//     });
//   }
// }
