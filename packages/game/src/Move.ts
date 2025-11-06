import type { Integer } from "@repo/engine_core/types.js";

type IndexOfMove = Integer;

interface MoveParams {
  readonly description: string;
  readonly title: string;
}

abstract class Move<M extends Move<M>> {
  private readonly description: MoveParams["description"];
  private readonly title: MoveParams["title"];

  public constructor({ description, title }: MoveParams) {
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
export { Move };
