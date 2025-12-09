import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import type { Random } from "../Random/Random.js";
import type { TreeNode } from "./TreeNode.js";

type ExplorationCoefficient = number;

interface ParamsOfSearch {
  readonly explorationCoefficient: ExplorationCoefficient;
  readonly quantityOfExpansions: Integer;
  readonly random: Random;
}

abstract class Search<
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
  protected readonly explorationCoefficient: ParamsOfSearch["explorationCoefficient"];
  protected readonly quantityOfExpansions: ParamsOfSearch["quantityOfExpansions"];
  protected readonly random: ParamsOfSearch["random"];

  public constructor({
    explorationCoefficient,
    quantityOfExpansions,
    random,
  }: ParamsOfSearch) {
    this.explorationCoefficient = explorationCoefficient;
    this.quantityOfExpansions = quantityOfExpansions;
    this.random = random;
  }

  public abstract expandTree({
    state,
  }: {
    state: GenericState;
  }): GenericTreeNode;

  public abstract selectNextNode({
    rootNode,
  }: {
    rootNode: GenericTreeNode;
  }): GenericTreeNode | null;

  public abstract simulateMatch({
    state,
  }: {
    state: GenericState;
  }): GenericScore;
}

export type { ExplorationCoefficient, ParamsOfSearch };
export { Search };
