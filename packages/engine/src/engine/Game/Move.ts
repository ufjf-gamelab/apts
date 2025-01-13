import { Integer } from "../../types.js";
import Game from "./Game.js";
import Player from "./Player.js";
import State from "./State.js";

export interface MoveParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly title: string;
  readonly description: string;
}

export default abstract class Move<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly title: MoveParams<P, M, S, G>["title"];
  private readonly description: MoveParams<P, M, S, G>["description"];

  constructor({ title, description }: MoveParams<P, M, S, G>) {
    this.title = title;
    this.description = description;
  }

  public getTitle(): MoveParams<P, M, S, G>["title"] {
    return this.title;
  }

  public getDescription(): MoveParams<P, M, S, G>["description"] {
    return this.description;
  }

  public abstract play(state: S): S;
}

export type MoveKey = Integer;

export interface MovePair<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  key: MoveKey;
  move: M;
}
