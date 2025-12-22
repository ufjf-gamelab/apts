import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/core/assert.js";

import type { QualityOfMove } from "../qualityOfMove.js";

import {
  DEFAULT_QUANTITY_OF_VISITS,
  type ParamsOfTreeNode,
  type ParamsOfTreeNodeForPrivateConstructor,
  TreeNode,
} from "../MonteCarloTree/TreeNode.js";

const DEFAULT_EXPLOITATION = 0;
const DEFAULT_EXPLORATION = 0;
const GUARANTEE_THE_DENOMINATOR_IS_AT_LEAST_ONE = 1;

type ParamsOfAgentGuidedTreeNode<
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
> = ParamsOfTreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState
>;

type ParamsOfAgentGuidedTreeNodeForPrivateConstructor<
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
> = ParamsOfTreeNodeForPrivateConstructor<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState,
  AgentGuidedTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
> & {
  readonly qualityOfMoveAttributedByModel: null | QualityOfMove;
};

class AgentGuidedTreeNode<
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
> extends TreeNode<
  GenericGame,
  GenericMove,
  GenericPlayer,
  GenericScore,
  GenericSlot,
  GenericState,
  AgentGuidedTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
> {
  private readonly game: GenericGame;
  private readonly qualityOfMoveAttributedByModel: ParamsOfAgentGuidedTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["qualityOfMoveAttributedByModel"];

  private constructor({
    indexOfPlayedMove,
    parentNode,
    qualityOfMoveAttributedByModel,
    state,
  }: ParamsOfAgentGuidedTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    super({
      indexOfPlayedMove,
      parentNode,
      state,
    });
    this.game = state.getGame();
    this.qualityOfMoveAttributedByModel = qualityOfMoveAttributedByModel;
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
    state,
  }: ParamsOfAgentGuidedTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    return new AgentGuidedTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      indexOfPlayedMove: null,
      parentNode: null,
      qualityOfMoveAttributedByModel: null,
      state,
    });
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public override calculateExploitationComponentOfFitness({
    childNode,
  }: {
    childNode: AgentGuidedTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
  }): number {
    const qualityOfMatchOfChildNode = childNode.getQualityOfMatch();
    const quantityOfVisitsToChildNode = childNode.getQuantityOfVisits();

    if (quantityOfVisitsToChildNode === DEFAULT_QUANTITY_OF_VISITS) {
      return DEFAULT_EXPLOITATION;
    }

    const exploitation = assertNumberIsFinite(
      qualityOfMatchOfChildNode / quantityOfVisitsToChildNode,
      DEFAULT_EXPLOITATION,
    );

    return exploitation;
  }

  public override calculateExplorationComponentOfFitness({
    childNode,
    explorationCoefficient,
  }: {
    childNode: AgentGuidedTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
    explorationCoefficient: number;
  }): number {
    const quantityOfVisitsToCurrentNode = this.getQuantityOfVisits();
    const quantityOfVisitsToChildNode = childNode.getQuantityOfVisits();

    const qualityOfMoveAttributedByModel =
      childNode.getQualityOfMoveAttributedByModel();
    if (qualityOfMoveAttributedByModel === null) {
      throw new Error(
        "The quality of move attributed by model should be set when selecting child node.",
      );
    }

    const numerator = Math.sqrt(quantityOfVisitsToCurrentNode);
    const denominator =
      GUARANTEE_THE_DENOMINATOR_IS_AT_LEAST_ONE + quantityOfVisitsToChildNode;
    const componentOfNodeAttributes = numerator / denominator;
    const exploration = assertNumberIsFinite(
      explorationCoefficient *
        qualityOfMoveAttributedByModel *
        componentOfNodeAttributes,
      DEFAULT_EXPLORATION,
    );

    return exploration;
  }

  public expand({
    qualitiesOfMoveAttributedByModel,
  }: {
    qualitiesOfMoveAttributedByModel: QualityOfMove[];
  }): ReadonlyMap<
    IndexOfMove,
    AgentGuidedTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >
  > {
    this.childrenNodes.forEach((_, indexOfMove) => {
      const qualityOfMoveAttributedByModel =
        qualitiesOfMoveAttributedByModel[indexOfMove];
      if (typeof qualityOfMoveAttributedByModel === "undefined") {
        throw new Error(
          `Could not retrieve quality of move with the index ${indexOfMove}.`,
        );
      }

      const nextState = this.game.play({
        indexOfMove,
        state: this.state,
      });

      const child = new AgentGuidedTreeNode({
        indexOfPlayedMove: indexOfMove,
        parentNode: this,
        qualityOfMoveAttributedByModel,
        state: nextState,
      });

      this.childrenNodes.set(indexOfMove, child);
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    return this.childrenNodes as ReadonlyMap<
      IndexOfMove,
      AgentGuidedTreeNode<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    >;
  }

  public getQualityOfMoveAttributedByModel() {
    return this.qualityOfMoveAttributedByModel;
  }
}

export type { ParamsOfAgentGuidedTreeNode };
export { AgentGuidedTreeNode };
