import { Integer } from "../../types";
import Game from "./Game";
import Move from "./Move";
import Player, { PlayerKey } from "./Player";

// Content of a slot in the state.
export type Slot = Integer;
// Index of a slot in the state.
export type Position = Integer;

export type Points = number;
export type Scoreboard = Map<PlayerKey, Points>;

export interface StateParams<
  P extends Player,
  M extends Move,
  S extends State<P, M>,
  G extends Game<P, M, S>,
> {
  readonly game: G;
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
  private readonly nextPlayerKey: StateParamsAlias<P, M>["nextPlayerKey"];

  constructor({ game, nextPlayerKey }: StateParamsAlias<P, M>) {
    this.game = game;
    this.nextPlayerKey = nextPlayerKey;
  }

  /* Getters */

  public getGame(): StateParamsAlias<P, M>["game"] {
    return this.game;
  }

  public getNextPlayer(): P {
    return this.game.getPlayer(this.nextPlayerKey);
  }

  /* Methods */

  public abstract toString(): string;
}
