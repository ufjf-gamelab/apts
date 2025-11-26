import type { Integer } from "@repo/engine_core/types.js";

type IndexOfMove = Integer;

interface ParamsOfMove {
  readonly description: string;
  readonly title: string;
}

abstract class Move<GenericMove extends Move<GenericMove>> {
  private readonly description: ParamsOfMove["description"];
  private readonly title: ParamsOfMove["title"];

  public constructor({ description, title }: ParamsOfMove) {
    this.title = title;
    this.description = description;
  }

  public abstract clone(): GenericMove;

  public getDescription(): typeof this.description {
    return this.description;
  }

  public getTitle(): typeof this.title {
    return this.title;
  }
}

export type { IndexOfMove, ParamsOfMove };
export { Move };
