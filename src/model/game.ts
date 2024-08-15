import type { BaseType } from "./base";

export type GameType = {
  title: string;
  authors: string[];
  information: string;
} & BaseType;

export class Game {
  constructor(
    private id: GameType["id"] | null,
    private title: GameType["title"],
    private authors: GameType["authors"],
    private information: GameType["information"],
  ) {}

  /* Getters */

  getId(): GameType["id"] {
    if (this.id === null) throw new Error("Id is null");
    return this.id;
  }

  getTitle(): GameType["title"] {
    return this.title;
  }

  getAuthors(): GameType["authors"] {
    return this.authors;
  }

  getInformation(): GameType["information"] {
    return this.information;
  }

  /* Setters */

  setId(id: GameType["id"]): void {
    this.id = id;
  }

  setTitle(title: GameType["title"]): void {
    this.title = title;
  }

  setAuthors(authors: GameType["authors"]): void {
    this.authors = authors;
  }

  setInformation(information: GameType["information"]): void {
    this.information = information;
  }

  /* Methods */
  serialize(): GameType {
    return {
      id: this.getId(),
      title: this.getTitle(),
      authors: this.getAuthors(),
      information: this.getInformation(),
    };
  }
}
