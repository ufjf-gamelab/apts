import { Integer } from "src/types";

export interface MoveParams {
  title: string;
  description: string;
}

export default abstract class Move {
  private readonly index: Integer;
  private readonly title: MoveParams["title"];
  private readonly description: MoveParams["description"];

  constructor({ index, title, description }: MoveParams & { index: Integer }) {
    this.index = index;
    this.title = title;
    this.description = description;
  }

  public getIndex(): Integer {
    return this.index;
  }

  public getTitle(): MoveParams["title"] {
    return this.title;
  }

  public getDescription(): MoveParams["description"] {
    return this.description;
  }
}
