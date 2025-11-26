import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import {
  INCREMENT_ONE,
  LENGTH_OF_EMPTY_LIST,
  NOT_INCREMENT,
} from "@repo/engine_core/constants.js";

const MINIMUM_QUALITY_OF_MATCH = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

interface ParamsOfTreeNode<
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
> {
  readonly explorationConstant: number;
  readonly indexOfPlayedMove: IndexOfMove | null;
  readonly parent: null | TreeNode<G, M, P, Sc, Sl, St>;
  readonly state: St;
}

class TreeNode<
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
> {
  private readonly children: Map<
    IndexOfMove,
    null | TreeNode<G, M, P, Sc, Sl, St>
  >;
  private readonly explorationConstant: ParamsOfTreeNode<
    G,
    M,
    P,
    Sc,
    Sl,
    St
  >["explorationConstant"];
  private readonly game: G;
  private readonly indexOfPlayedMove: ParamsOfTreeNode<
    G,
    M,
    P,
    Sc,
    Sl,
    St
  >["indexOfPlayedMove"];
  private readonly parent: ParamsOfTreeNode<G, M, P, Sc, Sl, St>["parent"];
  private qualityOfMatch: number = MINIMUM_QUALITY_OF_MATCH;
  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private readonly state: ParamsOfTreeNode<G, M, P, Sc, Sl, St>["state"];

  public constructor({
    explorationConstant,
    indexOfPlayedMove,
    parent,
    state,
  }: ParamsOfTreeNode<G, M, P, Sc, Sl, St>) {
    this.state = state.clone();
    this.game = state.getGame();
    this.indexOfPlayedMove = indexOfPlayedMove;
    this.explorationConstant = explorationConstant;
    this.parent = parent;
    this.children = new Map(
      state
        .getGame()
        .getIndexesOfValidMoves({ state })
        .values()
        .map((indexOfMove) => [indexOfMove, null]),
    );
  }

  /// Pick a random action and perform it, returning the outcome state as a child node.
  public expand(): TreeNode<G, M, P, Sc, Sl, St> {
    const selectedIndexOfMove = this.pickIndexOfRandomMove();
    const nextState = this.game.play({
      indexOfMove: selectedIndexOfMove,
      state: this.state,
    });

    const child = new TreeNode({
      explorationConstant: this.explorationConstant,
      indexOfPlayedMove: selectedIndexOfMove,
      parent: this,
      state: nextState,
    });

    this.children.set(selectedIndexOfMove, child);
    return child;
  }

  public getIndexOfPlayedMove(): typeof this.indexOfPlayedMove {
    return this.indexOfPlayedMove;
  }

  public getState(): typeof this.state {
    return this.state.clone();
  }

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return this.getQuantityOfExpandedMoves() === this.children.size;
  }

  /// Select the best node among children, i.e. the one with the highest UCB.
  public selectBestChild(): null | TreeNode<G, M, P, Sc, Sl, St> {
    if (this.children.size === LENGTH_OF_EMPTY_LIST) {
      throw new Error("No children to select from");
    }

    const expandedChildren = Array.from(this.children.values()).filter(
      (child) => child !== null,
    );

    let bestChild: null | TreeNode<G, M, P, Sc, Sl, St> = null;
    let bestUcb = Number.NEGATIVE_INFINITY;

    for (const child of expandedChildren) {
      const ucb = this.getFitnessOfChild(child);
      if (ucb > bestUcb) {
        bestChild = child;
        bestUcb = ucb;
      }
    }

    return bestChild;
  }

  /// Simulate a game from the current state, returning the outcome value.
  public simulateMatch(): Score<Sc> {
    // Copy the state and play random actions, with alternate players, until the game is over.
    let stateThatIsCurrentlyBeingSimulated = this.state.clone();
    for (;;) {
      const score = stateThatIsCurrentlyBeingSimulated.getScore();
      const isFinal = this.game.isFinal({
        state: stateThatIsCurrentlyBeingSimulated,
      });
      if (isFinal) {
        return score;
      }

      const selectedIndexOfMove = this.pickIndexOfRandomMove();
      stateThatIsCurrentlyBeingSimulated = this.game.play({
        indexOfMove: selectedIndexOfMove,
        state: stateThatIsCurrentlyBeingSimulated,
      });
    }
  }

  /// Backpropagate the outcome value to the root node.
  public updateQualityOfMatchAndQuantityOfVisitsOnBranch(
    score: Score<Sc>,
  ): void {
    const indexOfPlayer = this.state.getIndexOfPlayer();
    const pointsOfPlayer = score.getPointsOfPlayer({ indexOfPlayer });

    this.qualityOfMatch = pointsOfPlayer;
    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parent) {
      this.parent.updateQualityOfMatchAndQuantityOfVisitsOnBranch(score);
    }
  }

  private getFitnessOfChild(child: TreeNode<G, M, P, Sc, Sl, St>): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning

    const exploitation =
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      1 - (child.qualityOfMatch / child.quantityOfVisits + 1) / 2;

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
      .values()
      .reduce(
        (quantityOfExpandedMoves, child) =>
          quantityOfExpandedMoves +
          (child === null ? NOT_INCREMENT : INCREMENT_ONE),
        LENGTH_OF_EMPTY_LIST,
      );
  }

  private pickIndexOfRandomMove(): IndexOfMove {
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

  // public toGraphvizNode(id: Integer): NodeFromGraphviz {
  //   const state = this.getState();
  //   const indexOfPlayer = state.getPlayerKey();
  //   const player = state.getPlayer();

  //   const label = `${id}: S.${this.quantityOfVisits} Q.${
  //     this.qualityOfMatch
  //   }\nP.${indexOfPlayer} ${player.getSymbol()} ${player.getName()}\n${state.toString()}`;

  //   return new NodeFromGraphviz(id.toString(), {
  //     [attributeFromGraphviz.label]: label,
  //     fontname: "Monospace",
  //   });
  // }
}

export type { ParamsOfTreeNode };
export { TreeNode as default };
