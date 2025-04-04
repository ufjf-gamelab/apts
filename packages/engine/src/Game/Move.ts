import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Player from "./Player.js";
import type State from "./State.js";

export type MoveKey = Integer;

export interface MovePair<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  key: MoveKey;
  move: M;
}

export interface MoveParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly description: string;
  readonly title: string;
}

export default abstract class Move<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly description: MoveParams<P, M, S, G>["description"];
  private readonly title: MoveParams<P, M, S, G>["title"];

  constructor({ description, title }: MoveParams<P, M, S, G>) {
    this.title = title;
    this.description = description;
  }

  public abstract clone(): M;

  public getDescription(): MoveParams<P, M, S, G>["description"] {
    return this.description;
  }

  public getTitle(): MoveParams<P, M, S, G>["title"] {
    return this.title;
  }

  public abstract play(state: S): S;
}
