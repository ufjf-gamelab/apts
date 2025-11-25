import type { Integer } from "@repo/engine_core/types.js";
import type Game from "@repo/engine_game/Game.js";
import type Player from "@repo/engine_game/Player.js";
import type Slot from "@repo/engine_game/Slot.js";

import {
  EMPTY_LIST,
  INCREMENT_ONE,
  NOT_INCREMENT,
} from "@repo/engine_core/constants.js";
import {
  type IndexOfMove,
  type default as Move,
} from "@repo/engine_game/Move.js";
import { type Score, default as State } from "@repo/engine_game/State.js";

const MINIMUM_VICTORY_QUALITY = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

/**
 * Parameters for constructing a {@link TreeNode} in a Common Monte Carlo Tree.
 *
 * @typeParam G - The game type, extending {@link Game}.
 * @typeParam S - The state type, extending {@link State}.
 * @typeParam M - The move type, extending {@link Move}.
 * @typeParam Sl - The slot type, extending {@link Slot}.
 * @typeParam P - The player type, extending {@link Player}.
 *
 * @property explorationConstant - The constant used to balance exploration and exploitation in tree search algorithms.
 * @property indexOfTakenMove - The index of the move taken to reach this node, or `null` if this node is the root. The index corresponds to the list of moves in the game.
 * @property parent - The parent node in the tree, or `null` if this node is the root.
 * @property state - The game state associated with this node.
 */
interface TreeNodeParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  explorationConstant: number;
  indexOfTakenMove: IndexOfMove | null;
  parent: null | TreeNode<G, S, M, Sl, P>;
  state: S;
}

/**
 * Represents a node in a Common Monte Carlo Tree Search (MCTS) structure.
 *
 * Each `TreeNode` holds a game state, statistics for MCTS (such as visit count and victory quality),
 * references to its parent and children, and methods for expanding, simulating, and backpropagating
 * results through the tree.
 *
 * @typeParam G - The game type, extending {@link Game}.
 * @typeParam S - The state type, extending {@link State}.
 * @typeParam M - The move type, extending {@link Move}.
 * @typeParam Sl - The slot type, extending {@link Slot}.
 * @typeParam P - The player type, extending {@link Player}.
 *
 * @property state - The game state ({@link S}) associated with this node.
 * @property explorationConstant - The constant used to balance exploration and exploitation in tree search algorithms.
 * @property indexOfTakenMove - The index of the move ({@link M}) taken to reach this node, or `null` if this node is the root.
 * @property parent - The parent {@link TreeNode} in the tree, or `null` if this node is the root.
 * @property children - A map of child {@link TreeNode} indexed by the move ({@link M}) index that leads to them.
 * @property quantityOfVisits - The number of times this node has been visited during the search.
 * @property victoryQuality - The accumulated score or quality of victories for this node.
 *
 * @remarks
 * - The node supports expansion (adding a child for a random unexpanded move), simulation (random rollout),
 *   and backpropagation (updating statistics up the tree).
 * - UCB (Upper Confidence Bound) is used for child selection during tree traversal.
 */
class TreeNode<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  private readonly children: Map<IndexOfMove, null | TreeNode<G, S, M, Sl, P>>;
  private readonly explorationConstant: TreeNodeParams<
    G,
    S,
    M,
    Sl,
    P
  >["explorationConstant"];
  private readonly indexOfTakenMove: TreeNodeParams<
    G,
    S,
    M,
    Sl,
    P
  >["indexOfTakenMove"];
  private readonly parent: TreeNodeParams<G, S, M, Sl, P>["parent"];
  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private readonly state: TreeNodeParams<G, S, M, Sl, P>["state"];
  private victoryQuality: number = MINIMUM_VICTORY_QUALITY;

  constructor({
    explorationConstant,
    indexOfTakenMove,
    parent,
    state,
  }: TreeNodeParams<G, S, M, Sl, P>) {
    this.state = state;
    this.indexOfTakenMove = indexOfTakenMove;
    this.explorationConstant = explorationConstant;
    this.parent = parent;
    this.children = new Map(
      state
        .getGame()
        .getValidMoves(state)
        .map(([indexOfMove]): [IndexOfMove, null] => [indexOfMove, null]),
    );
  }

  /// Backpropagate the outcome value to the root node.
  public backpropagate(score: Score): void {
    const indexOfPlayer = this.state.getIndexOfPlayer();
    const scoreOfPlayer = State.getScoreOfPlayer(indexOfPlayer, score);

    this.victoryQuality += scoreOfPlayer;
    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parent) {
      this.parent.backpropagate(score);
    }
  }

  /// Pick a random action and perform it, returning the outcome state as a child node.
  public expand(): TreeNode<G, S, M, Sl, P> {
    const game = this.state.getGame();

    const selectedIndexOfMove = this.pickRandomIndexOfMove();
    const nextState = game.play(selectedIndexOfMove, this.state);

    const child = new TreeNode({
      explorationConstant: this.explorationConstant,
      indexOfTakenMove: selectedIndexOfMove,
      parent: this,
      state: nextState,
    });

    this.children.set(selectedIndexOfMove, child);
    return child;
  }

  // public getChildren(): TreeNode<G, S, M, Sl, P>[] {
  //   return Array.from(this.children.values()).filter(
  //     (child): child is TreeNode<G, S, M, Sl, P> => child !== null,
  //   );
  // }

  public getIndexOfTakenMove(): typeof this.indexOfTakenMove {
    return this.indexOfTakenMove;
  }

  public getQuantityOfVisits(): typeof this.quantityOfVisits {
    return this.quantityOfVisits;
  }

  public getState(): typeof this.state {
    return this.state.clone();
  }

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return this.getQuantityOfExpandedMoves() === this.children.size;
  }

  /// Select the best node among children, i.e. the one with the highest UCB.
  public selectBestChild(): null | TreeNode<G, S, M, Sl, P> {
    if (this.children.size === EMPTY_LIST) {
      throw new Error("No children to select from");
    }

    const expandedChildren = Array.from(this.children.values()).filter(
      (child) => child !== null,
    );

    let bestChild: null | TreeNode<G, S, M, Sl, P> = null;
    let bestUcb = Number.NEGATIVE_INFINITY;

    for (const child of expandedChildren) {
      const ucb = this.getChildUcb(child);
      if (ucb > bestUcb) {
        bestChild = child;
        bestUcb = ucb;
      }
    }

    return bestChild;
  }

  /// Simulate a game from the current state, returning the outcome value.
  public simulate(): Score {
    const game = this.state.getGame();

    // Copy the state and play random actions, with alternate players, until the game is over
    let rolloutState = this.state.clone();
    for (;;) {
      const score = rolloutState.getScore();
      const isFinal = game.isFinal(rolloutState);
      if (isFinal) {
        return score;
      }

      const selectedIndexOfMove = this.pickRandomIndexOfMove();
      rolloutState = game.play(selectedIndexOfMove, rolloutState);
    }
  }

  // public toGraphvizNode(id: Integer): NodeFromGraphviz {
  //   const state = this.getState();
  //   const indexOfPlayer = state.getPlayerKey();
  //   const player = state.getPlayer();

  //   const label = `${id}: S.${this.quantityOfVisits} Q.${
  //     this.victoryQuality
  //   }\nP.${indexOfPlayer} ${player.getSymbol()} ${player.getName()}\n${state.toString()}`;

  //   return new NodeFromGraphviz(id.toString(), {
  //     [attributeFromGraphviz.label]: label,
  //     fontname: "Monospace",
  //   });
  // }

  private getChildUcb(child: TreeNode<G, S, M, Sl, P>): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning

    const exploitation =
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      1 - (child.victoryQuality / child.quantityOfVisits + 1) / 2;

    const exploration =
      this.explorationConstant *
      Math.sqrt(Math.log(this.quantityOfVisits) / child.quantityOfVisits);

    return exploitation + exploration;
  }

  private getIndexesOfNotExpandedMoves(): Set<IndexOfMove> {
    const notExpandedMoves = new Set<IndexOfMove>();
    for (const [indexOfMove, child] of this.children.entries()) {
      if (child === null) {
        notExpandedMoves.add(indexOfMove);
      }
    }
    return notExpandedMoves;
  }

  private getQuantityOfExpandedMoves(): Integer {
    return this.children
      .entries()
      .reduce(
        (quantityOfExpandedMoves, [, child]) =>
          quantityOfExpandedMoves +
          (child === null ? NOT_INCREMENT : INCREMENT_ONE),
        EMPTY_LIST,
      );
  }

  private pickRandomIndexOfMove(): IndexOfMove {
    const indexesOfNotExpandedMoves = Array.from(
      this.getIndexesOfNotExpandedMoves(),
    );

    const randomIndex = Math.floor(
      Math.random() * indexesOfNotExpandedMoves.length,
    );
    const indexOfMove = indexesOfNotExpandedMoves[randomIndex];
    if (typeof indexOfMove === "undefined") {
      throw new Error("No indexes of not expanded moves to pick from");
    }

    return indexOfMove;
  }
}

export type { TreeNodeParams };
export { TreeNode as default };
