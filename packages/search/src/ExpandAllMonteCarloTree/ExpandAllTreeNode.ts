import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { assertNumberIsFinite } from "@repo/engine_core/assert.js";

import {
  type ParamsOfTreeNode,
  type ParamsOfTreeNodeForPrivateConstructor,
  TreeNode,
} from "../MonteCarloTree/TreeNode.js";

const BASE_EXPLOITATION = 0;
const BASE_EXPLORATION = 0;

type ParamsOfExpandAllTreeNode<
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

type ParamsOfExpandAllTreeNodeForPrivateConstructor<
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
  ExpandAllTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >
>;

class ExpandAllTreeNode<
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
  ExpandAllTreeNode<
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
    informationAboutPlayedMove,
    parentNode,
    state,
  }: ParamsOfExpandAllTreeNodeForPrivateConstructor<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    super({
      informationAboutPlayedMove,
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
    informationAboutPlayedMove,
    state,
  }: ParamsOfExpandAllTreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    return new ExpandAllTreeNode<
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

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public override calculateExploitationComponentOfFitness({
    childNode,
  }: {
    childNode: ExpandAllTreeNode<
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
    childNode: ExpandAllTreeNode<
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

  /// Perform a move and return the outcome state as a child node.
  public expand({
    indexOfMove,
  }: {
    indexOfMove: IndexOfMove;
  }): ExpandAllTreeNode<
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

    const child = new ExpandAllTreeNode({
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
}

export type { ParamsOfExpandAllTreeNode };
export { ExpandAllTreeNode };
