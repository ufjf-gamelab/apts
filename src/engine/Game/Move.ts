import { Integer } from "src/types";

export interface MoveParams {
  title: string;
  description: string;
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

export interface IndexedMove<M extends Move> {
  index: Integer;
  move: M;
}
