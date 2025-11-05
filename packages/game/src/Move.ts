import type { Integer } from "@repo/engine_core/types.js";

type IndexOfMove = Integer;

interface MoveParams {
  readonly description: string;
  readonly title: string;
}

abstract class Move {
  private readonly description: MoveParams["description"];
  private readonly title: MoveParams["title"];

  constructor({ description, title }: MoveParams) {
    this.title = title;
    this.description = description;
  }

  public abstract clone(): this;

  public getDescription(): typeof this.description {
    return this.description;
  }

  public getTitle(): typeof this.title {
    return this.title;
  }
}

export type { IndexOfMove, MoveParams };
export { Move };
