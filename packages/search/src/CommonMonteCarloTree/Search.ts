import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { TreeNode } from "./TreeNode.js";

const MINIMUM_QUALITY_OF_MOVE = 0;

interface ParamsOfSearch<
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
  explorationConstant: number;
  game: GenericGame;
  quantityOfSearches: Integer;
}

type QualityOfMove = number;

export default class Search<
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
  private readonly explorationConstant: ParamsOfSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["explorationConstant"];
  private readonly game: ParamsOfSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["game"];
  private readonly quantityOfSearches: ParamsOfSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["quantityOfSearches"];

  public constructor({
    explorationConstant,
    game,
    quantityOfSearches,
  }: ParamsOfSearch<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    this.game = game;
    this.explorationConstant = explorationConstant;
    this.quantityOfSearches = quantityOfSearches;
  }

  public expandTree(
    rootNodeOfTree: TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >,
  ): void {
    for (
      let currentSearchIndex = 0;
      currentSearchIndex < this.quantityOfSearches;
      currentSearchIndex += INCREMENT_ONE
    ) {
      let currentNode = rootNodeOfTree;

      // Goes all the way down to a node that is not fully expanded at the bottom of the tree.
      while (currentNode.isFullyExpanded()) {
        const bestChild = currentNode.selectBestChild({
          explorationConstant: this.explorationConstant,
        });

        if (bestChild === null) {
          // All the possible moves have been explored in this branch.
          break;
        }
        currentNode = bestChild;
      }

      const state = currentNode.getState();
      let score = state.getScore();
      const isFinal = this.game.isFinal({ state });

      if (!isFinal) {
        const indexOfMove = currentNode.pickIndexOfRandomMove();
        currentNode = currentNode.expand({ indexOfMove });
        score = currentNode.simulateMatch();
      }

      currentNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
    }
  }

  public getQualityOfMoves({
    rootNodeOfTree,
  }: {
    rootNodeOfTree: TreeNode<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >;
  }): QualityOfMove[] {
    let qualityOfMoves = new Array<QualityOfMove>(
      this.game.getQuantityOfMoves(),
    ).fill(MINIMUM_QUALITY_OF_MOVE);

    rootNodeOfTree
      .getChildren()
      .entries()
      .forEach(([indexOfMove, child]) => {
        if (child !== null) {
          qualityOfMoves[indexOfMove] = child.getQuantityOfVisits();
        }
      });

    const sumOfQualityOfMoves = qualityOfMoves.reduce<QualityOfMove>(
      (accumulator, qualityOfMove) => qualityOfMove + accumulator,
      MINIMUM_QUALITY_OF_MOVE,
    );

    qualityOfMoves = qualityOfMoves.map((value) => value / sumOfQualityOfMoves);

    return qualityOfMoves;
  }
}

export type { ParamsOfSearch };
export { Search };
