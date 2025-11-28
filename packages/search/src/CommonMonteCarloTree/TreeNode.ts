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
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
> {
  readonly explorationConstant: number;
  readonly indexOfPlayedMove: IndexOfMove | null;
  readonly parent: null | TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  readonly state: GenericState;
}

class TreeNode<
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
> {
  private readonly children: Map<
    IndexOfMove,
    null | TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  >;
  private readonly explorationConstant: ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["explorationConstant"];
  private readonly game: GenericGame;
  private readonly indexOfPlayedMove: ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["indexOfPlayedMove"];
  private readonly parent: ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["parent"];
  private qualityOfMatch: number = MINIMUM_QUALITY_OF_MATCH;
  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private readonly state: ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["state"];

  public constructor({
    explorationConstant,
    indexOfPlayedMove,
    parent,
    state,
  }: ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
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

  /// Perform a move and return the outcome state as a child node.
  public expand({
    indexOfMove,
  }: {
    indexOfMove: IndexOfMove;
  }): TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    const nextState = this.game.play({
      indexOfMove,
      state: this.state,
    });

    const child = new TreeNode({
      explorationConstant: this.explorationConstant,
      indexOfPlayedMove: indexOfMove,
      parent: this,
      state: nextState,
    });

    this.children.set(indexOfMove, child);
    return child;
  }

  public getChild({
    indexOfChild,
  }: {
    indexOfChild: IndexOfMove;
  }): null | TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    return this.children.get(indexOfChild) ?? null;
  }

  public getIndexesOfNotExpandedMoves(): Set<IndexOfMove> {
    const notExpandedMoves = new Set<IndexOfMove>();
    for (const [indexOfMove, child] of this.children.entries()) {
      if (child === null) {
        notExpandedMoves.add(indexOfMove);
      }
    }
    return notExpandedMoves;
  }

  public getQualityOfMatch(): typeof this.qualityOfMatch {
    return this.qualityOfMatch;
  }

  public getQuantityOfExpandedMoves(): Integer {
    return this.children
      .values()
      .reduce(
        (quantityOfExpandedMoves, child) =>
          quantityOfExpandedMoves +
          (child === null ? NOT_INCREMENT : INCREMENT_ONE),
        LENGTH_OF_EMPTY_LIST,
      );
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

  public pickIndexOfRandomMove(): IndexOfMove {
    const indexesOfNotExpandedMoves = Array.from(
      this.getIndexesOfNotExpandedMoves(),
    );

    const randomIndex = Math.floor(
      Math.random() * indexesOfNotExpandedMoves.length,
    );
    const indexOfMove = indexesOfNotExpandedMoves[randomIndex];
    if (typeof indexOfMove === "undefined") {
      throw new Error("No indexes of not expanded moves to pick from.");
    }

    return indexOfMove;
  }

  /// Select the best node among children, i.e. the one with the highest UCB.
  public selectBestChild(): null | TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    if (this.children.size === LENGTH_OF_EMPTY_LIST) {
      throw new Error("No children to select from.");
    }

    const expandedChildren = Array.from(this.children.values()).filter(
      (child) => child !== null,
    );

    let bestChild: null | TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    > = null;
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
  public simulateMatch(): Score<GenericScore> {
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

  private getFitnessOfChild(
    child: TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >,
  ): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning

    const exploitation =
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      1 - (child.qualityOfMatch / child.quantityOfVisits + 1) / 2;

    const exploration =
      this.explorationConstant *
      Math.sqrt(Math.log(this.quantityOfVisits) / child.quantityOfVisits);

    return exploitation + exploration;
  }

  // public clone(): TreeNode<
  //   GenericGame,
  //   GenericMove,
  //   GenericPlayer,
  //   GenericScore,
  //   GenericSlot,
  //   GenericState
  // > {
  //   return new TreeNode({
  //     explorationConstant: this.explorationConstant,
  //     indexOfPlayedMove: this.indexOfPlayedMove,
  //     parent: this.parent?.clone() ?? null,
  //     state: this.state.clone(),
  //   });
  // }

  /// Backpropagate the outcome value to the root node.
  private updateQualityOfMatchAndQuantityOfVisitsOnBranch({
    score,
  }: {
    score: Score<GenericScore>;
  }): void {
    const indexOfPlayer = this.state.getIndexOfPlayer();
    const pointsOfPlayer = score.getPointsOfPlayer({ indexOfPlayer });

    // TODO: Accumulating the quality of match is only appropriate if this method is acalled only at the end of some match
    // TODO: A common method is to decrement the points of the opponent
    this.qualityOfMatch += pointsOfPlayer;
    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parent) {
      this.parent.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    }
  }

  // public getIndexOfPlayedMove(): typeof this.indexOfPlayedMove {
  //   return this.indexOfPlayedMove;
  // }
}

export type { ParamsOfTreeNode };
export { TreeNode };
