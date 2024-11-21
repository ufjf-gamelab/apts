import { Integer } from "src/types";

export interface MoveParams {
  readonly title: string;
  readonly description: string;
}

export default abstract class Move {
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
}

export type MoveKey = Integer;

export interface KeyedMove<M extends Move> {
  key: MoveKey;
  move: M;
}
