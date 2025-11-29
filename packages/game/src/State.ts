import type { Integer } from "@repo/engine_core/types.js";

import type { Game } from "./Game.js";
import type { Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { Score } from "./Score.js";

import { type IndexOfSlot, Slot } from "./Slot.js";

type IndexOfState = Integer;

interface ParamsOfState<
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
  readonly game: GenericGame;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: GenericScore;
  readonly slots: readonly GenericSlot[];
}

abstract class State<
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
  private readonly game: ParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["game"];
  private readonly indexOfPlayer: ParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["indexOfPlayer"];
  private readonly score: ParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["score"];
  private readonly slots: ParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >["slots"];

  public constructor({
    game,
    indexOfPlayer,
    score,
    slots,
  }: ParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >) {
    if (slots.length !== game.getQuantityOfSlots()) {
      throw new Error(
        `The number of slots (${
          slots.length
        }) does not match the quantity of slots determined by the game (${game.getQuantityOfSlots()}).`,
      );
    }

    this.game = game;
    this.indexOfPlayer = indexOfPlayer;
    this.score = score;
    this.slots = slots;
  }

  public abstract clone(): GenericState;

  public getGame() {
    return this.game;
  }

  public getIndexOfPlayer() {
    return this.indexOfPlayer;
  }

  public getPointsOfPlayer({
    indexOfPlayer,
  }: {
    indexOfPlayer: IndexOfPlayer;
  }) {
    return this.score.getPointsOfPlayer({ indexOfPlayer });
  }

  public getQuantityOfSlots() {
    return this.game.getQuantityOfSlots();
  }

  public getScore() {
    return this.score;
  }

  public getSlot({ indexOfSlot }: { indexOfSlot: IndexOfSlot }) {
    return (
      Slot.getSlot({
        indexOfSlot,
        slots: this.slots,
      }) ?? null
    );
  }

  public getSlots() {
    return this.slots;
  }
}

export type { IndexOfState, ParamsOfState };
export { State };
