import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/core/assert.js";

import {
  type ParamsOfTreeNode,
  type ParamsOfTreeNodeForPrivateConstructor,
  TreeNode,
} from "../MonteCarloTree/TreeNode.js";

const BASE_EXPLOITATION = 0;
const BASE_EXPLORATION = 0;

type ParamsOfCommonTreeNode<
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

type ParamsOfCommonTreeNodeForPrivateConstructor<
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
  CommonTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
>;

class CommonTreeNode<
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
  CommonTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
> {
  private readonly game: GenericGame;
  private constructor({
    indexOfPlayedMove,
    parentNode,
    state,
  }: ParamsOfCommonTreeNodeForPrivateConstructor<
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
  }: ParamsOfCommonTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    return new CommonTreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >({
      indexOfPlayedMove: null,
      parentNode: null,
      state,
    });
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public override calculateExploitationComponentOfFitness({
    childNode,
  }: {
    childNode: CommonTreeNode<
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
    childNode: CommonTreeNode<
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
    indexOfMove,
  }: {
    indexOfMove: IndexOfMove;
  }): CommonTreeNode<
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

    const child = new CommonTreeNode({
      indexOfPlayedMove: indexOfMove,
      parentNode: this,
      state: nextState,
    });

    this.childrenNodes.set(indexOfMove, child);
    return child;
  }
}

export type { ParamsOfCommonTreeNode };
export { CommonTreeNode };
