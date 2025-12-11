import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";
import {
  INCREMENT_ONE,
  LENGTH_OF_EMPTY_LIST,
  NOT_INCREMENT,
} from "@repo/engine_core/constants.js";

import type { ExplorationCoefficient } from "./Search.js";

type QualityOfMatch = number;

const MINIMUM_POINTS_OF_PLAYER = Number.NEGATIVE_INFINITY;
const MINIMUM_QUALITY_OF_MATCH = Number.NEGATIVE_INFINITY;
const DEFAULT_QUALITY_OF_MATCH = 0;
const DEFAULT_QUANTITY_OF_VISITS = 0;

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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
> extends ParamsOfTreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
> {
  indexOfPlayedMove: IndexOfMove | null;
  parentNode: GenericTreeNode | null;
}

abstract class TreeNode<
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
> {
  protected readonly childrenNodes: Map<IndexOfMove, GenericTreeNode | null>;
  protected readonly state: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >["state"];
  private readonly indexOfPlayedMove: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >["indexOfPlayedMove"];
  private readonly indexOfPlayerWhoPlayedMove: IndexOfPlayer | null;
  private readonly parentNode: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >["parentNode"];
  private qualityOfMatch: QualityOfMatch = DEFAULT_QUALITY_OF_MATCH;
  private quantityOfVisits: Integer = DEFAULT_QUANTITY_OF_VISITS;

  protected constructor({
    indexOfPlayedMove,
    parentNode,
    state,
  }: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >) {
    this.state = state;
    this.parentNode = parentNode;
    if (parentNode === null) {
      this.indexOfPlayedMove = null;
      this.indexOfPlayerWhoPlayedMove = null;
    } else {
      this.indexOfPlayedMove = indexOfPlayedMove;
      this.indexOfPlayerWhoPlayedMove =
        this.parentNode?.getState().getIndexOfPlayer() ?? null;
    }
    this.childrenNodes = new Map(
      state
        .getGame()
        .getIndexesOfValidMoves({ state })
        .values()
        .map((indexOfMove) => [indexOfMove, null]),
    );
  }

  public abstract calculateExploitationComponentOfFitness({
    childNode,
  }: {
    childNode: GenericTreeNode;
  }): number;

  public abstract calculateExplorationComponentOfFitness({
    childNode,
    explorationCoefficient,
  }: {
    childNode: GenericTreeNode;
    explorationCoefficient: number;
  }): number;

  public calculateFitnessOfChildNode({
    childNode,
    explorationCoefficient,
  }: {
    childNode: GenericTreeNode;
    explorationCoefficient: ExplorationCoefficient;
  }): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning.
    return (
      this.calculateExploitationComponentOfFitness({
        childNode,
      }) +
      this.calculateExplorationComponentOfFitness({
        childNode,
        explorationCoefficient,
      })
    );
  }

  public getChildNode({
    indexOfChildNode,
  }: {
    indexOfChildNode: IndexOfMove;
  }): GenericTreeNode | null {
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
    return this.indexOfPlayedMove;
  }

  public getQuality(): number {
    // TODO: Try to align exploitation (quantity of visits) with lack of iterations when state is near a final one (when MCTS rarely visits any grandchildren).
    return assertNumberIsFinite(this.quantityOfVisits);
  }

  public getQualityOfMatch() {
    return this.qualityOfMatch;
  }

  public getQualityOfMatchFromScore({
    score,
  }: {
    score: Score<GenericScore>;
  }): QualityOfMatch {
    if (this.parentNode === null) {
      // The root should not have its quality calculated
      return MINIMUM_QUALITY_OF_MATCH;
    }

    let pointsOfOpponentPlayerWithMostPoints = MINIMUM_POINTS_OF_PLAYER;
    let pointsOfPlayerWhoPlayedMove = MINIMUM_POINTS_OF_PLAYER;

    score
      .getPointsOfEachPlayer()
      .entries()
      .forEach(([indexOfPlayer, pointsOfPlayer]) => {
        if (indexOfPlayer === this.indexOfPlayerWhoPlayedMove) {
          pointsOfPlayerWhoPlayedMove = pointsOfPlayer;
        } else if (pointsOfPlayer > pointsOfOpponentPlayerWithMostPoints) {
          pointsOfOpponentPlayerWithMostPoints = pointsOfPlayer;
        }
      });
    if (!(pointsOfOpponentPlayerWithMostPoints > MINIMUM_POINTS_OF_PLAYER)) {
      throw Error(
        "Could not retrieve the points of opponent player with most points.",
      );
    }

    return pointsOfPlayerWhoPlayedMove - pointsOfOpponentPlayerWithMostPoints;
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

  public getQuantityOfVisits() {
    return this.quantityOfVisits;
  }

  public getState() {
    return this.state;
  }

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return this.getQuantityOfExpandedMoves() === this.childrenNodes.size;
  }

  public selectBestChildNode({
    explorationCoefficient,
  }: Pick<
    Parameters<typeof this.calculateFitnessOfChildNode>[0],
    "explorationCoefficient"
  >): GenericTreeNode | null {
    const expandedChildren = this.getExpandedChildren();

    let bestChildNode: GenericTreeNode | null = null;
    let bestFitness = Number.NEGATIVE_INFINITY;

    for (const childNode of expandedChildren) {
      const fitness = this.calculateFitnessOfChildNode({
        childNode,
        explorationCoefficient,
      });
      if (fitness > bestFitness) {
        bestChildNode = childNode;
        bestFitness = fitness;
      }
    }

    return bestChildNode;
  }

  /// Backpropagate the outcome value to the root node.
  public updateQualityOfMatchAndQuantityOfVisitsOnBranch({
    qualityOfMatch,
  }: {
    qualityOfMatch: QualityOfMatch;
  }): void {
    this.internalUpdateQualityOfMatchAndQuantityOfVisitsOnBranch({
      indexOfPlayerWhoPlayedMoveThatCreatedTheOriginalTreeNode:
        this.indexOfPlayerWhoPlayedMove,
      qualityOfMatch,
    });
  }

  private getExpandedChildren() {
    return Array.from(this.childrenNodes.values()).filter(
      (child) => child !== null,
    );
  }

  private internalUpdateQualityOfMatchAndQuantityOfVisitsOnBranch({
    indexOfPlayerWhoPlayedMoveThatCreatedTheOriginalTreeNode,
    qualityOfMatch,
  }: {
    indexOfPlayerWhoPlayedMoveThatCreatedTheOriginalTreeNode: IndexOfPlayer | null;
    qualityOfMatch: QualityOfMatch;
  }): void {
    this.quantityOfVisits += INCREMENT_ONE;
    if (this.parentNode === null) {
      // The root should not have its quality calculated
      return;
    }

    if (
      indexOfPlayerWhoPlayedMoveThatCreatedTheOriginalTreeNode ===
      this.indexOfPlayerWhoPlayedMove
    ) {
      this.qualityOfMatch += qualityOfMatch;
    } else {
      this.qualityOfMatch += -qualityOfMatch;
    }

    this.parentNode.internalUpdateQualityOfMatchAndQuantityOfVisitsOnBranch({
      indexOfPlayerWhoPlayedMoveThatCreatedTheOriginalTreeNode,
      qualityOfMatch,
    });
  }
}

export type {
  ParamsOfTreeNode,
  ParamsOfTreeNodeForPrivateConstructor,
  QualityOfMatch,
};
export { DEFAULT_QUANTITY_OF_VISITS, TreeNode };
