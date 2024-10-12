import type { BaseType } from "./base";

export type GameType = {
  title: string;
  authors: string[];
  information: string;
} & BaseType;

export class Game {
  private id: GameType["id"] | null;
  private title: GameType["title"];
  private authors: GameType["authors"];
  private information: GameType["information"];

  constructor({
    id,
    title,
    authors,
    information,
  }: {
    id: GameType["id"] | null;
    title: GameType["title"];
    authors: GameType["authors"];
    information: GameType["information"];
  }) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.information = information;
  }

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
      authors: this.getAuthors(),
      id: this.getId(),
      information: this.getInformation(),
      title: this.getTitle(),
    };
  }
}
