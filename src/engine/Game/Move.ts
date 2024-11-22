import { Integer } from "src/types";
import Game from "./Game";
import Player from "./Player";
import State from "./State";

export interface MoveParams {
  readonly title: string;
  readonly description: string;
}

export default abstract class Move<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly title: MoveParams["title"];
  private readonly description: MoveParams["description"];

  constructor({ title, description }: MoveParams) {
    this.title = title;
    this.description = description;
  }

  public getTitle(): MoveParams["title"] {
    return this.title;
  }

  public getDescription(): MoveParams["description"] {
    return this.description;
  }

  public abstract play(state: S): S;
}

export type MoveKey = Integer;
