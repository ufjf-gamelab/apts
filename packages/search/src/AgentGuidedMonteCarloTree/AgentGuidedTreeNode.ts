import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";

import type { QualityOfMove } from "../quality.js";

import {
  type ParamsOfTreeNode,
  type ParamsOfTreeNodeForPrivateConstructor,
  TreeNode,
} from "../MonteCarloTree/TreeNode.js";

const BASE_EXPLOITATION = 0;
const BASE_EXPLORATION = 0;

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
  private readonly qualityOfMoveAttributedByModel: null | QualityOfMove;

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

    const exploitation = assertNumberIsFinite(
      qualityOfMatchOfChildNode / quantityOfVisitsToChildNode,
      BASE_EXPLOITATION,
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
    const quantityOfVisitsToParentNode = this.getQuantityOfVisits();
    const quantityOfVisitsToChildNode = childNode.getQuantityOfVisits();

    const exploration =
      explorationCoefficient *
      Math.sqrt(
        assertNumberIsFinite(
          Math.log(quantityOfVisitsToParentNode) / quantityOfVisitsToChildNode,
          BASE_EXPLORATION,
        ),
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
