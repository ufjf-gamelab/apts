import { Integer } from "../../types";
import Game from "./Game";
import Move from "./Move";
import Player, { PlayerKey } from "./Player";

// Content of a slot in the state.
export type Slot = Integer;
// Index of a slot in the state.
export type SlotIndex = Integer;

export type Points = number;
export type Scoreboard = Map<PlayerKey, Points>;

export interface StateParams<
  P extends Player,
  M extends Move,
  S extends State<P, M>,
  G extends Game<P, M, S>,
> {
  readonly game: G;
  readonly slots: Slot[];
  readonly nextPlayerKey: PlayerKey;
}

type StateParamsAlias<P extends Player, M extends Move> = StateParams<
  P,
  M,
  State<P, M>,
  Game<P, M, State<P, M>>
>;

export default abstract class State<P extends Player, M extends Move> {
  private readonly game: StateParamsAlias<P, M>["game"];
  private readonly slots: StateParamsAlias<P, M>["slots"];
  private readonly nextPlayerKey: StateParamsAlias<P, M>["nextPlayerKey"];

  constructor({ game, slots, nextPlayerKey }: StateParamsAlias<P, M>) {
    this.game = game;
    this.slots = slots;
    this.nextPlayerKey = nextPlayerKey;
  }

  /* Getters */

  public getGame(): StateParamsAlias<P, M>["game"] {
    return this.game;
  }

  public getNextPlayer(): P {
    return this.game.getPlayer(this.nextPlayerKey);
  }

  public getSlots(): StateParamsAlias<P, M>["slots"] {
    return [...this.slots];
  }

  /* Methods */

  public abstract toString(): string;
}
