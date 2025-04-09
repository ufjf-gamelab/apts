import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Player from "./Player.js";
import type Slot from "./Slot.js";
import type State from "./State.js";

type IndexOfMove = Integer;

interface MoveParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  readonly description: string;
  readonly title: string;
}

abstract class Move<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  private readonly description: MoveParams<G, S, M, Sl, P>["description"];
  private readonly title: MoveParams<G, S, M, Sl, P>["title"];

  constructor({ description, title }: MoveParams<G, S, M, Sl, P>) {
    this.title = title;
    this.description = description;
  }

  public abstract clone(): M;

  public getDescription(): typeof this.description {
    return this.description;
  }

  public getTitle(): typeof this.title {
    return this.title;
  }
}

export type { IndexOfMove, MoveParams };
export { Move as default };
