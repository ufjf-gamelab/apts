import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type { default as Player, PlayerKey } from "./Player.js";
import type State from "./State.js";

type ContentKey = Integer;

interface ContentParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly playerKey: PlayerKey;
}

abstract class Content<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly playerKey: ContentParams<P, M, S, G>["playerKey"];

  constructor({ playerKey }: ContentParams<P, M, S, G>) {
    this.playerKey = playerKey;
  }

  public clone(): Content<P, M, S, G> {
    return new (this.constructor as new (
      params: ContentParams<P, M, S, G>,
    ) => Content<P, M, S, G>)({
      playerKey: this.playerKey,
    });
  }

  getPlayerKey(): typeof this.playerKey {
    return this.playerKey;
  }
}

export type { ContentKey };
export default Content;
