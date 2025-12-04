import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import {
  INCREMENT_ONE,
  LENGTH_OF_EMPTY_LIST,
  NOT_INCREMENT,
} from "@repo/engine_core/constants.js";

import type { ExplorationCoefficient } from "./search/search.js";

import { calculateFitness } from "./search/fitness.js";

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
  readonly informationAboutPlayedMove: null | {
    readonly indexOfPlayedMove: IndexOfMove;
    readonly indexOfPlayerWhoPlayedMove: IndexOfPlayer;
  };
  readonly state: GenericState;
}

interface ParamsOfTreeNodeForPrivateConstructor<
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
> extends ParamsOfTreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> {
  parentNode: null | TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
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
  private readonly childrenNodes: Map<
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
  private readonly game: GenericGame;
  private readonly informationAboutPlayedMove: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["informationAboutPlayedMove"];
  private readonly parentNode: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["parentNode"];
  private qualityOfMatch: number = MINIMUM_QUALITY_OF_MATCH;
  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private readonly state: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["state"];

  private constructor({
    informationAboutPlayedMove,
    parentNode,
    state,
  }: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    this.state = state;
    this.game = state.getGame();
    this.informationAboutPlayedMove = informationAboutPlayedMove;
    this.parentNode = parentNode;
    this.childrenNodes = new Map(
      state
        .getGame()
        .getIndexesOfValidMoves({ state })
        .values()
        .map((indexOfMove) => [indexOfMove, null]),
    );
  }

  public static create<
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
  >({
    informationAboutPlayedMove,
    state,
  }: ParamsOfTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    return new TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      informationAboutPlayedMove,
      parentNode: null,
      state,
    });
  }

  public calculateFitnessOfChildNode({
    childNode,
    explorationCoefficient,
  }: {
    childNode: TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
    explorationCoefficient: ExplorationCoefficient;
  }): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning
    return calculateFitness({
      explorationCoefficient,
      qualityOfMatchOfChildNode: childNode.qualityOfMatch,
      quantityOfVisitsToChildNode: childNode.quantityOfVisits,
      quantityOfVisitsToParentNode: this.quantityOfVisits,
    });
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
      informationAboutPlayedMove: {
        indexOfPlayedMove: indexOfMove,
        indexOfPlayerWhoPlayedMove: this.state.getIndexOfPlayer(),
      },
      parentNode: this,
      state: nextState,
    });

    this.childrenNodes.set(indexOfMove, child);
    return child;
  }

  public getChildNode({
    indexOfChildNode,
  }: {
    indexOfChildNode: IndexOfMove;
  }): null | TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    return this.childrenNodes.get(indexOfChildNode) ?? null;
  }

  public getChildrenNodes(): typeof this.childrenNodes {
    return this.childrenNodes;
  }

  public getIndexesOfNotExpandedChildrenNodes(): Set<IndexOfMove> {
    return new Set(
      Array.from(this.childrenNodes.keys()).filter(
        (indexOfChild) => this.childrenNodes.get(indexOfChild) === null,
      ),
    );
  }

  public getIndexOfPlayedMove() {
    return this.informationAboutPlayedMove?.indexOfPlayedMove ?? null;
  }

  public getQuality(): number {
    return this.quantityOfVisits;
  }

  public getQualityOfMatch(): typeof this.qualityOfMatch {
    return this.qualityOfMatch;
  }

  public getQuantityOfExpandedMoves(): Integer {
    return this.childrenNodes
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
    return this.state;
  }

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return this.getQuantityOfExpandedMoves() === this.childrenNodes.size;
  }

  /// Select the best node among children, i.e. the one with the highest UCB.
  public selectBestChildNode({
    explorationCoefficient,
  }: Pick<
    Parameters<typeof this.calculateFitnessOfChildNode>[0],
    "explorationCoefficient"
  >): null | TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  > {
    const expandedChildren = this.getExpandedChildren();

    let bestChildNode: null | TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    > = null;
    let bestUcb = Number.NEGATIVE_INFINITY;

    for (const childNode of expandedChildren) {
      const ucb = this.calculateFitnessOfChildNode({
        childNode,
        explorationCoefficient,
      });
      if (ucb > bestUcb) {
        bestChildNode = childNode;
        bestUcb = ucb;
      }
    }

    return bestChildNode;
  }

  /// Backpropagate the outcome value to the root node.
  public updateQualityOfMatchAndQuantityOfVisitsOnBranch({
    score,
  }: {
    score: Score<GenericScore>;
  }): void {
    let pointsOfPlayerWhoPlayedMoveThatCreatedThisTreeNode = 0;
    let pointsOfOpponents = 0;

    score
      .getPointsOfEachPlayer()
      .entries()
      .forEach(([indexOfPlayer, pointsOfPlayer]) => {
        if (
          indexOfPlayer ===
          this.informationAboutPlayedMove?.indexOfPlayerWhoPlayedMove
        ) {
          pointsOfPlayerWhoPlayedMoveThatCreatedThisTreeNode += pointsOfPlayer;
        } else {
          pointsOfOpponents += pointsOfPlayer;
        }
      });

    // TODO: When the game is multiplayer, maybe we could compare only to the best other player
    this.qualityOfMatch +=
      pointsOfPlayerWhoPlayedMoveThatCreatedThisTreeNode - pointsOfOpponents;
    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parentNode) {
      this.parentNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({
        score,
      });
    }
  }

  private getExpandedChildren() {
    return Array.from(this.childrenNodes.values()).filter(
      (child) => child !== null,
    );
  }
}

export type { ParamsOfTreeNode };
export { TreeNode };
