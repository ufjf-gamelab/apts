import type { Integer } from "@repo/engine_core/types.js";
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
import {
  constructErrorForNotAnyIndexToPick,
  type Game,
} from "@repo/game/Game.js";

import type { ExplorationCoefficient } from "./Search.js";

const MINIMUM_QUALITY_OF_MATCH = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

const BASE_EXPLOITATION = 0;
const BASE_EXPLORATION = 0;

const calculateExploitationComponentOfFitness = ({
  qualityOfMatchOfChildNode,
  quantityOfVisitsToChildNode,
}: {
  qualityOfMatchOfChildNode: number;
  quantityOfVisitsToChildNode: Integer;
}): number => {
  let exploitation = qualityOfMatchOfChildNode / quantityOfVisitsToChildNode;
  if (!Number.isFinite(exploitation)) {
    exploitation = BASE_EXPLOITATION;
  }
  return exploitation;
};

const calculateExplorationComponentOfFitness = ({
  explorationCoefficient,
  quantityOfVisitsToChildNode,
  quantityOfVisitsToParentNode,
}: {
  explorationCoefficient: ExplorationCoefficient;
  quantityOfVisitsToChildNode: Integer;
  quantityOfVisitsToParentNode: Integer;
}): number => {
  let exploration =
    explorationCoefficient *
    Math.sqrt(
      Math.log(quantityOfVisitsToParentNode) / quantityOfVisitsToChildNode,
    );
  if (!Number.isFinite(exploration)) {
    exploration = BASE_EXPLORATION;
  }
  return exploration;
};

const calculateFitness = ({
  explorationCoefficient,
  qualityOfMatchOfChildNode,
  quantityOfVisitsToChildNode,
  quantityOfVisitsToParentNode,
}: {
  explorationCoefficient: ExplorationCoefficient;
  qualityOfMatchOfChildNode: number;
  quantityOfVisitsToChildNode: Integer;
  quantityOfVisitsToParentNode: Integer;
}): number =>
  calculateExploitationComponentOfFitness({
    qualityOfMatchOfChildNode,
    quantityOfVisitsToChildNode,
  }) +
  calculateExplorationComponentOfFitness({
    explorationCoefficient,
    quantityOfVisitsToChildNode,
    quantityOfVisitsToParentNode,
  });

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
  readonly indexOfPlayedMove: IndexOfMove | null;
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
  private readonly indexOfPlayedMove: ParamsOfTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["indexOfPlayedMove"];
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
    indexOfPlayedMove,
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
    this.indexOfPlayedMove = indexOfPlayedMove;
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
    indexOfPlayedMove,
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
      indexOfPlayedMove,
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
    // TODO: this formula has problems, as the quantity of visits can be zero, what leads to a division by zero

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
      indexOfPlayedMove: indexOfMove,
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

  public getIndexOfPlayedMove(): typeof this.indexOfPlayedMove {
    return this.indexOfPlayedMove;
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

  public pickIndexOfRandomNotExpandedChildNode(): IndexOfMove {
    const indexesOfNotExpandedMoves = Array.from(
      this.getIndexesOfNotExpandedChildrenNodes(),
    );

    const randomIndex = Math.floor(
      Math.random() * indexesOfNotExpandedMoves.length,
    );
    const indexOfMove = indexesOfNotExpandedMoves[randomIndex];
    if (typeof indexOfMove === "undefined") {
      throw constructErrorForNotAnyIndexToPick();
    }

    return indexOfMove;
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

  /// Simulate a game from the current state, returning the outcome value.
  public simulateMatch(): GenericScore {
    // Copy the state and play random actions, with alternate players, until the game is over.
    let stateThatIsCurrentlyBeingSimulated = this.state;
    for (;;) {
      const score = stateThatIsCurrentlyBeingSimulated.getScore();
      const isFinal = this.game.isFinal({
        state: stateThatIsCurrentlyBeingSimulated,
      });
      if (isFinal) {
        return score;
      }

      const selectedIndexOfMove = this.game.pickIndexOfRandomValidMove({
        state: stateThatIsCurrentlyBeingSimulated,
      });
      stateThatIsCurrentlyBeingSimulated = this.game.play({
        indexOfMove: selectedIndexOfMove,
        state: stateThatIsCurrentlyBeingSimulated,
      });
    }
  }

  /// Backpropagate the outcome value to the root node.
  public updateQualityOfMatchAndQuantityOfVisitsOnBranch({
    score,
  }: {
    score: Score<GenericScore>;
  }): void {
    const indexOfThisPlayer = this.state.getIndexOfPlayer();
    let pointsOfThisPlayer = 0;
    let pointsOfOpponents = 0;
    score
      .getPointsOfEachPlayer()
      .entries()
      .forEach(([indexOfPlayer, pointsOfPlayer]) => {
        if (indexOfPlayer === indexOfThisPlayer) {
          pointsOfThisPlayer += pointsOfPlayer;
        } else {
          pointsOfOpponents += pointsOfPlayer;
        }
      });

    /* TODO: Accumulating the quality of match is only appropriate if this method is called only at the end of some match
     * A common method is to decrement the points of the opponent
     * Other idea is to normalize the final score, like subtracting from both players the points made by the defeated, so the winner has an advantage and the loser has zero points
     * Other idea is to divide the points of the winner for the points of the loser, making a ratio, that can be backpropagated as the winner points
     */

    // The quality must be inverted, as it indicates the resulting score of the last player, which performed their winner action
    this.qualityOfMatch += pointsOfOpponents - pointsOfThisPlayer;
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
export {
  calculateExploitationComponentOfFitness,
  calculateExplorationComponentOfFitness,
  calculateFitness,
  TreeNode,
};
